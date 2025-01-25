import { motion } from "framer-motion";
import { Code, Lightbulb, Rocket, Palette, Globe, Cpu } from "lucide-react";

const features = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Creative Design",
    description: "Stunning visuals that capture your brand's essence"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Development",
    description: "Cutting-edge technology for powerful solutions"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive real results"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI Integration",
    description: "Smart solutions powered by artificial intelligence"
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality"
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovation",
    description: "Forward-thinking solutions for modern challenges"
  }
];

const Features = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-space font-bold gradient-text mb-6">
            What We Do Best
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Transforming businesses through innovative digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-space-purple/10 to-space-blue/10 backdrop-blur-sm rounded-2xl p-8 hover:from-space-purple/20 hover:to-space-blue/20 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-space-purple/20 to-space-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-space-purple to-space-blue w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-space font-bold mb-4 text-white group-hover:text-space-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;