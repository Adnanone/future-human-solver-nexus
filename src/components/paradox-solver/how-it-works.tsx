
import { motion } from "framer-motion";
import { DataStream } from "../ui/data-stream";
import { NeuralButton } from "../ui/neural-button";
import { HologramCard } from "../ui/hologram-card";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Problem Submission",
      description: "Describe your paradox, challenge or decision dilemma in detail.",
    },
    {
      number: "02",
      title: "Neural Mapping",
      description: "Our system creates a quantum map of all potential decision pathways.",
    },
    {
      number: "03",
      title: "Pattern Analysis",
      description: "Advanced algorithms identify cognitive patterns blocking resolution.",
    },
    {
      number: "04",
      title: "Perspective Shift",
      description: "Access unconventional solution paradigms beyond human thinking.",
    },
  ];

  return (
    <section className="relative py-24 bg-cyber-dark overflow-hidden">
      {/* Animated background element */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-neon-blue/10 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      {/* Second animated background element */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-neon-purple/10 opacity-15"
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
            How The Paradox Solver Works
          </h2>
          <p className="text-gray-400">
            Our neural-quantum hybrid system breaks through conventional thinking barriers 
            to discover solutions invisible to human cognition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Process Flow */}
            <div className="relative">
              {steps.map((step, index) => (
                <div key={step.number} className="relative mb-8 ml-6">
                  <div className="flex items-start">
                    {/* Step number with animated background */}
                    <div className="relative -ml-6 mr-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center relative z-10 ${index === 0 ? 'bg-neon-blue/20' : index === 1 ? 'bg-neon-purple/20' : index === 2 ? 'bg-neon-cyan/20' : 'bg-neon-pink/20'}`}>
                        <span className={`font-bold ${index === 0 ? 'text-neon-blue' : index === 1 ? 'text-neon-purple' : index === 2 ? 'text-neon-cyan' : 'text-neon-pink'}`}>
                          {step.number}
                        </span>
                      </div>
                      
                      {/* Background pulse */}
                      <motion.div
                        className="absolute inset-0 rounded-full opacity-30"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.1, 0.3],
                        }}
                        transition={{ 
                          duration: 3,
                          delay: index * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          backgroundColor: index === 0 ? '#1EAEDB' : index === 1 ? '#8B5CF6' : index === 2 ? '#33C3F0' : '#D946EF'
                        }}
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 bottom-0 left-0 ml-0">
                      <DataStream 
                        direction="vertical"
                        color={index === 0 ? "blue" : index === 1 ? "purple" : "cyan"}
                        className="h-full" 
                      />
                    </div>
                  )}
                </div>
              ))}
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <NeuralButton>Start Your Neural Journey</NeuralButton>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="order-1 md:order-2 flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HologramCard className="max-w-md w-full p-6 glitchEffect">
              <div className="relative aspect-video bg-cyber-darker rounded overflow-hidden flex items-center justify-center mb-4">
                {/* Animated visualization placeholder */}
                <div className="w-full h-full bg-cyber-darker relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10 z-10"
                    animate={{ 
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Neural network visualization */}
                  <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0">
                    <defs>
                      <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="rgba(30, 174, 219, 0.8)" />
                        <stop offset="100%" stopColor="rgba(30, 174, 219, 0)" />
                      </radialGradient>
                    </defs>
                    
                    {/* Neural nodes */}
                    {[...Array(20)].map((_, i) => {
                      const x = Math.random() * 100;
                      const y = Math.random() * 100;
                      const size = Math.random() * 2 + 1;
                      
                      return (
                        <motion.circle 
                          key={i}
                          cx={x}
                          cy={y}
                          r={size}
                          fill={i % 3 === 0 ? "#1EAEDB" : i % 3 === 1 ? "#8B5CF6" : "#33C3F0"}
                          animate={{
                            opacity: [0.3, 0.8, 0.3],
                            r: [size, size * 1.5, size],
                          }}
                          transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                          }}
                        />
                      );
                    })}
                    
                    {/* Neural connections */}
                    {[...Array(30)].map((_, i) => {
                      const x1 = Math.random() * 100;
                      const y1 = Math.random() * 100;
                      const x2 = Math.random() * 100;
                      const y2 = Math.random() * 100;
                      
                      return (
                        <motion.line 
                          key={`line-${i}`}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke={i % 3 === 0 ? "#1EAEDB" : i % 3 === 1 ? "#8B5CF6" : "#33C3F0"}
                          strokeWidth="0.3"
                          strokeOpacity="0.4"
                          animate={{
                            strokeOpacity: [0.2, 0.6, 0.2],
                          }}
                          transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                          }}
                        />
                      );
                    })}
                  </svg>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-neon-blue text-xs uppercase tracking-wider mb-2">Neural Visualization</div>
                      <div className="text-gray-400 text-xs">Processing cognitive patterns...</div>
                    </div>
                  </div>
                </div>
                
                {/* Interface elements */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                  <div className="text-xs text-neon-blue">System: Active</div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse-neon"></div>
                    <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse-neon" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse-neon" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {/* Stats and metrics */}
                <div className="flex justify-between text-xs">
                  <div>
                    <div className="text-gray-400">Neural Capacity</div>
                    <div className="text-neon-blue">87.4%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Pattern Recognition</div>
                    <div className="text-neon-purple">15.3 Tb/s</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Quantum Nodes</div>
                    <div className="text-neon-cyan">1,394,402</div>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-1 bg-cyber-darker rounded overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan"
                    initial={{ width: "0%" }}
                    animate={{ width: "73%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </div>
                
                <div className="text-center text-xs text-gray-400">
                  Quantum neural processing active. Analyzing 8,212 decision pathways.
                </div>
              </div>
            </HologramCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
