import { motion } from "framer-motion";
import { Code, Lightbulb, Rocket } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovative Solutions",
    description: "Cutting-edge solutions tailored to your unique needs"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Modern Technology",
    description: "Built with the latest and most efficient technologies"
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold gradient-text mb-4">
            What We Offer
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our range of services designed to help your business grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-space-purple/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-space-purple/20 transition-all duration-300"
            >
              <div className="bg-space-purple/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-space-accent">
                {feature.icon}
              </div>
              <h3 className="text-xl font-space font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;