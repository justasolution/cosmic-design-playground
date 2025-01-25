import { motion } from "framer-motion";
import Planet from "./Planet";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <Planet
        size="100px"
        position="top-20 right-[20%]"
        animation="animate-float"
      />
      <Planet
        size="150px"
        position="bottom-40 left-[10%]"
        animation="animate-float-slow"
      />
      <Planet
        size="80px"
        position="top-[30%] left-[15%]"
        animation="animate-float"
      />
      
      <div className="relative z-10 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-space font-bold gradient-text mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Just A Solution Away
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transforming ideas into digital reality with innovative solutions
        </motion.p>
        <motion.button 
          className="mt-8 px-8 py-3 bg-space-purple hover:bg-space-blue rounded-full font-medium transition-all duration-300 glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;