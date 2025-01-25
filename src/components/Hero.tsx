import { motion } from "framer-motion";
import Planet from "./Planet";
import { Button } from "./ui/button";
import { ArrowRight, Github } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Planets with enhanced animations */}
      <Planet
        size="300px"
        position="top-20 right-[20%]"
        animation="animate-float"
        className="opacity-30 blur-sm"
      />
      <Planet
        size="400px"
        position="bottom-40 left-[10%]"
        animation="animate-float-slow"
        className="opacity-20 blur-sm"
      />
      <Planet
        size="200px"
        position="top-[30%] left-[15%]"
        animation="animate-float"
        className="opacity-25 blur-sm"
      />
      
      {/* Glowing overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-purple/10 via-transparent to-space-blue/10" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Enhanced heading with gradient and glow effect */}
          <h1 className="text-6xl md:text-8xl font-space font-bold mb-8 leading-tight">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="block gradient-text [text-shadow:0_0_30px_rgba(124,58,237,0.2)]"
            >
              Just A Solution
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-white relative inline-block"
            >
              Away
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-space-accent rounded-full animate-pulse-glow" />
            </motion.span>
          </h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Transforming ideas into digital reality with 
            <span className="text-space-accent font-medium"> innovative solutions</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          >
            <Button 
              size="lg"
              className="bg-space-accent hover:bg-space-accent/90 text-white rounded-full px-8 py-6 text-lg transition-all duration-300 group backdrop-blur-sm relative overflow-hidden shadow-[0_0_20px_rgba(255,94,99,0.3)]"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shine_1.5s_ease-in-out_infinite] -translate-x-full" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-2 border-space-purple text-white hover:bg-space-purple/20 hover:border-space-accent backdrop-blur-sm transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Social proof or additional call-to-action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 text-gray-400 text-sm flex items-center justify-center gap-2"
          >
            <Github className="h-4 w-4" />
            <span>Join thousands of developers building the future</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-space-dark to-transparent" />
    </div>
  );
};

export default Hero;