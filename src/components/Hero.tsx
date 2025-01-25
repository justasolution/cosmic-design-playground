import { motion } from "framer-motion";
import Planet from "./Planet";
import { Button } from "./ui/button";
import { ArrowRight, Github } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Elements */}
      <Planet
        size="500px"
        position="top-[-100px] right-[-100px]"
        animation="animate-float"
        className="opacity-20 blur-sm"
      />
      <Planet
        size="300px"
        position="bottom-[-50px] left-[-50px]"
        animation="animate-float-slow"
        className="opacity-30 blur-sm"
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-dark via-space-purple/10 to-space-blue/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,27,105,0.3)_0%,transparent_100%)]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-space font-bold leading-tight">
              <span className="gradient-text block mb-2">Award Winning</span>
              <span className="text-white relative">
                Digital Agency
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-space-accent rounded-full animate-pulse-glow" />
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 font-light max-w-xl leading-relaxed"
            >
              We craft innovative digital experiences that 
              <span className="text-space-accent font-medium"> inspire and transform</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 pt-8"
            >
              <Button 
                size="lg"
                className="bg-space-accent hover:bg-space-accent/90 text-white rounded-full px-8 py-6 text-lg transition-all duration-300 group relative overflow-hidden"
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shine_1.5s_ease-in-out_infinite] -translate-x-full" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-2 border-space-purple hover:bg-space-purple/20 hover:border-space-accent text-white backdrop-blur-sm transition-all duration-300"
              >
                Our Work
              </Button>
            </motion.div>

            {/* Awards Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center gap-8 pt-12"
            >
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                Recognition
              </div>
              <div className="flex gap-6">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="w-16 h-16 rounded-full bg-space-purple/30 backdrop-blur-sm flex items-center justify-center"
                  >
                    <span className="text-space-accent text-xl font-bold">★</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <Planet
                size="400px"
                position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animation="animate-float"
                className="opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-space-purple/30 to-space-blue/30 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-space-dark to-transparent" />
    </div>
  );
};

export default Hero;