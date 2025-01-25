import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const StarNetwork = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0x8888ff,
      size: 0.5,
      transparent: true,
      opacity: 0.8,
    });

    const starsVertices = [];
    const connections: THREE.Line[] = [];
    const maxConnections = 50;

    // Create random stars
    for (let i = 0; i < 200; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 50;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Create connections between nearby stars
    const positions = starsGeometry.attributes.position.array;
    for (let i = 0; i < maxConnections; i++) {
      const index1 = Math.floor(Math.random() * (positions.length / 3));
      const index2 = Math.floor(Math.random() * (positions.length / 3));

      const lineGeometry = new THREE.BufferGeometry();
      const lineVertices = new Float32Array([
        positions[index1 * 3], positions[index1 * 3 + 1], positions[index1 * 3 + 2],
        positions[index2 * 3], positions[index2 * 3 + 1], positions[index2 * 3 + 2],
      ]);
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(lineVertices, 3));

      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x4444ff,
        transparent: true,
        opacity: 0.3,
      });

      const line = new THREE.Line(lineGeometry, lineMaterial);
      connections.push(line);
      scene.add(line);
    }

    // Position camera
    camera.position.z = 50;

    // Animation
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      frame += 0.002;

      // Rotate stars
      stars.rotation.y = frame;
      stars.rotation.x = frame * 0.5;

      // Animate connections
      connections.forEach((line, i) => {
        line.rotation.y = frame + i * 0.02;
        line.rotation.x = frame * 0.5 + i * 0.01;
      });

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 bg-gradient-to-b from-space-dark to-space-purple/20"
    />
  );
};

export default StarNetwork;