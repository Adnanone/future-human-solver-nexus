
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";

interface NeuralButtonProps extends ButtonProps {
  activeLines?: number;
  color?: "blue" | "purple" | "cyan" | "green" | "pink";
}

export function NeuralButton({ 
  className,
  children,
  activeLines = 3,
  color = "blue",
  ...props 
}: NeuralButtonProps) {
  const colorMap = {
    blue: "neon-blue",
    purple: "neon-purple",
    cyan: "neon-cyan",
    green: "neon-green",
    pink: "neon-pink"
  };
  
  const neonColor = colorMap[color] || "neon-blue";
  
  return (
    <motion.div 
      className="relative"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Neural connection lines */}
      {Array.from({ length: activeLines }).map((_, i) => (
        <div 
          key={i} 
          className={`absolute h-[1px] bg-${neonColor} opacity-70 animate-pulse-neon`}
          style={{
            width: `${Math.random() * 40 + 60}px`,
            top: `${Math.random() * 100}%`,
            left: `-${Math.random() * 30 + 40}px`,
            transform: `rotate(${Math.random() * 40 - 20}deg)`,
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
      
      <Button 
        className={cn(
          "border border-transparent relative overflow-hidden bg-gradient-to-r",
          color === "blue" && "from-neon-blue/20 to-neon-blue/10 hover:from-neon-blue/30 hover:to-neon-blue/20",
          color === "purple" && "from-neon-purple/20 to-neon-purple/10 hover:from-neon-purple/30 hover:to-neon-purple/20",
          color === "cyan" && "from-neon-cyan/20 to-neon-cyan/10 hover:from-neon-cyan/30 hover:to-neon-cyan/20",
          color === "green" && "from-neon-green/20 to-neon-green/10 hover:from-neon-green/30 hover:to-neon-green/20",
          color === "pink" && "from-neon-pink/20 to-neon-pink/10 hover:from-neon-pink/30 hover:to-neon-pink/20",
          "text-white font-medium tracking-wider",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className={cn(
          "absolute inset-0 overflow-hidden opacity-0 hover:opacity-100 transition-opacity",
          `bg-${neonColor}/10`
        )} />
      </Button>
    </motion.div>
  );
}
