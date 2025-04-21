
import { motion } from "framer-motion";
import React from "react";

const ParadoxOrbSvg = () => {
  return (
    <div className="relative w-full h-full">
      {/* Outer ring with animation */}
      <motion.div 
        className="absolute inset-0 rounded-full border-2 border-neon-blue/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-neon-blue rounded-full" />
      </motion.div>
      
      {/* Middle rotating ring */}
      <motion.div 
        className="absolute inset-[15%] rounded-full border border-neon-purple/40"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/2 left-0 w-2 h-2 -ml-1 -mt-1 bg-neon-purple rounded-full" />
        <div className="absolute bottom-0 left-1/2 w-2 h-2 -ml-1 -mb-1 bg-neon-purple/70 rounded-full" />
      </motion.div>
      
      {/* Inner rotating ring */}
      <motion.div 
        className="absolute inset-[30%] rounded-full border border-neon-cyan/50"
        animate={{ rotate: 180 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
      >
        <div className="absolute top-0 right-1/4 w-1.5 h-1.5 -mr-0.75 -mt-0.75 bg-neon-cyan rounded-full" />
      </motion.div>
      
      {/* Core orb with pulsing effect */}
      <motion.div 
        className="absolute inset-[40%] rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan"
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(30, 174, 219, 0.6), 0 0 40px rgba(30, 174, 219, 0.3)",
            "0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.3)",
            "0 0 20px rgba(30, 174, 219, 0.6), 0 0 40px rgba(30, 174, 219, 0.3)",
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Orbiting particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white rounded-full"
          animate={{ 
            x: Math.cos(i * Math.PI * 0.6) * 150,
            y: Math.sin(i * Math.PI * 0.6) * 150,
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 5 + i, 
            repeat: Infinity, 
            ease: "linear",
            delay: i * 0.7
          }}
        />
      ))}
      
      {/* Data streams */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const x = Math.cos(angle) * 130;
        const y = Math.sin(angle) * 130;
        
        return (
          <motion.div
            key={`stream-${i}`}
            className="absolute top-1/2 left-1/2 w-px h-16 bg-gradient-to-b from-neon-blue/10 via-neon-blue to-neon-blue/10 origin-bottom"
            style={{ 
              transform: `translate(-50%, -100%) translate(${x}px, ${y}px) rotate(${angle + Math.PI/2}rad)`,
            }}
            animate={{ 
              height: ["4rem", "5rem", "4rem"],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        );
      })}
      
      {/* Hexagon grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
        <defs>
          <pattern id="hexGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M5,0 L10,5 L5,10 L0,5 Z" fill="none" stroke="#1EAEDB" strokeWidth="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexGrid)" />
      </svg>
    </div>
  );
};

export default ParadoxOrbSvg;
