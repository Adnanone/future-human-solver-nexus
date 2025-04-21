
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HologramCardProps {
  className?: string;
  children: React.ReactNode;
  glitchEffect?: boolean;
  cardType?: "solid" | "glass" | "wireframe";
  intensity?: "low" | "medium" | "high";
}

export function HologramCard({
  className,
  children,
  glitchEffect = false,
  cardType = "glass",
  intensity = "medium",
  ...props
}: HologramCardProps) {
  const cardStyles = {
    solid: "bg-cyber-dark border-neon-blue/30",
    glass: "glass-effect border-neon-blue/20",
    wireframe: "bg-transparent border-neon-blue border-dashed"
  };

  const intensityStyles = {
    low: "before:opacity-10 after:opacity-10",
    medium: "before:opacity-20 after:opacity-20",
    high: "before:opacity-30 after:opacity-30"
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-lg p-5 overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-neon-blue/5 before:via-neon-purple/5 before:to-transparent",
        "after:absolute after:inset-0 after:bg-gradient-to-b after:from-neon-blue/5 after:via-transparent after:to-neon-purple/5",
        cardStyles[cardType],
        intensityStyles[intensity],
        glitchEffect && "animate-hologram-glitch",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/70 to-transparent" />
      
      {/* Left border glow */}
      <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-neon-blue/50 to-transparent" />
      
      {children}
    </motion.div>
  );
}
