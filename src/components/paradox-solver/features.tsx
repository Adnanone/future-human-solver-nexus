
import { motion } from "framer-motion";
import { HologramCard } from "../ui/hologram-card";
import { HexagonFeature } from "./hexagon-feature";

export function ParadoxFeatures() {
  const features = [
    {
      title: "Neural Pattern Disruption",
      description: "Our quantum algorithms identify and break mental patterns that trap humans in recursive thinking loops.",
      icon: "brain",
      color: "blue"
    },
    {
      title: "Time Dimension Analysis",
      description: "Visualize decision outcomes across multiple timeline projections to identify blind spots.",
      icon: "clock",
      color: "purple"
    },
    {
      title: "Quantum Perspective Shift",
      description: "Access solutions from alternative cognitive frameworks impossible to reach through conventional thinking.",
      icon: "shuffle",
      color: "pink"
    },
    {
      title: "Paradox Mapping",
      description: "Visualize complex decision spaces and identify hidden connections between conflicting elements.",
      icon: "network",
      color: "cyan"
    },
    {
      title: "Bias Neutralization",
      description: "Advanced algorithms detect and neutralize cognitive biases affecting your decision process.",
      icon: "shield",
      color: "green"
    },
    {
      title: "Multi-dimensional Synthesis",
      description: "Generate novel solutions by combining elements from disparate knowledge domains.",
      icon: "puzzle",
      color: "orange"
    }
  ];

  return (
    <section className="relative py-20 bg-cyber-darker">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple">
            Paradigm-Shifting Technology
          </h2>
          <p className="text-gray-400">
            Our neural-quantum hybrid system accesses cognitive dimensions beyond conventional problem-solving methodologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HologramCard>
                <HexagonFeature
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  color={feature.color}
                />
              </HologramCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
