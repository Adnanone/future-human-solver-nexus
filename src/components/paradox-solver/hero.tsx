
import { motion } from "framer-motion";
import { NeuralButton } from "../ui/neural-button";
import { HologramCard } from "../ui/hologram-card";
import { useNavigate } from "react-router-dom";
import ParadoxOrbSvg from "./paradox-orb";

export function ParadoxHero() {
  const navigate = useNavigate();
  
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-darker z-[-2]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>
      
      {/* Animated radial gradient */}
      <motion.div 
        className="absolute inset-0 bg-radial-gradient z-[-1] opacity-30"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Floating hexagonal particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-neon-blue/10 z-[-1]"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">
              PARADOX SOLVER
            </h1>
            <p className="text-2xl font-light text-glow text-neon-blue mb-6">
              Quantum solutions for impossible problems
            </p>
          </motion.div>
          
          <motion.p 
            className="text-gray-300 text-lg max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            When conventional thinking fails, our neural recalibration technology 
            breaks through mental barriers by reconstructing decision pathways 
            that humans systematically overlook.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <NeuralButton color="blue" onClick={() => navigate("/solver")}>
              START SOLVING
            </NeuralButton>
            <NeuralButton 
              color="purple" 
              variant="outline" 
              onClick={() => navigate("/methodology")}
            >
              OUR METHODOLOGY
            </NeuralButton>
          </motion.div>
          
          <motion.div
            className="pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <p className="text-neon-cyan/70 flex items-center justify-center lg:justify-start gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-neon-cyan animate-pulse-neon" />
              Neural pattern analysis active
            </p>
          </motion.div>
        </div>
        
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center">
              <ParadoxOrbSvg />
            </div>
            
            {/* Floating info cards */}
            <motion.div
              className="absolute -left-10 top-20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <HologramCard className="w-60 py-3" cardType="glass" intensity="low">
                <div className="text-sm">
                  <p className="text-neon-blue font-medium">Neural Recalibration</p>
                  <p className="text-xs opacity-70">Solving rate: 87% success</p>
                </div>
              </HologramCard>
            </motion.div>
            
            <motion.div
              className="absolute -right-10 bottom-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <HologramCard className="w-60 py-3" cardType="glass" intensity="low">
                <div className="text-sm">
                  <p className="text-neon-purple font-medium">Quantum Perspective Shift</p>
                  <p className="text-xs opacity-70">Active protocols: 12</p>
                </div>
              </HologramCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom scan line effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-blue/20 overflow-hidden">
        <div className="h-full w-1/3 bg-neon-blue animate-data-scan bg-scan" />
      </div>
    </section>
  );
}
