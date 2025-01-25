import { motion } from "framer-motion";
import Planet from "./Planet";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Planets */}
      <Planet
        size="200px"
        position="top-20 right-[20%]"
        animation="animate-float"
        className="opacity-40"
      />
      <Planet
        size="300px"
        position="bottom-40 left-[10%]"
        animation="animate-float-slow"
        className="opacity-30"
      />
      <Planet
        size="150px"
        position="top-[30%] left-[15%]"
        animation="animate-float"
        className="opacity-40"
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-space font-bold mb-6">
            <span className="gradient-text">Just A Solution</span>
            <br />
            <span className="text-white">Away</span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transforming ideas into digital reality with innovative solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Button 
              size="lg"
              className="bg-space-purple hover:bg-space-blue text-white rounded-full px-8 transition-all duration-300 group backdrop-blur-sm"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-space-purple text-space-purple hover:bg-space-purple hover:text-white backdrop-blur-sm"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;