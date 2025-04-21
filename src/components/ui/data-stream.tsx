
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface DataStreamProps {
  className?: string;
  direction?: "horizontal" | "vertical";
  speed?: "slow" | "medium" | "fast";
  density?: "low" | "medium" | "high";
  color?: "blue" | "purple" | "cyan" | "multi";
}

export function DataStream({
  className,
  direction = "vertical",
  speed = "medium",
  density = "medium",
  color = "blue",
  ...props
}: DataStreamProps) {
  const isVertical = direction === "vertical";
  const streamCount = density === "low" ? 5 : density === "medium" ? 10 : 15;
  
  const getAnimationDuration = (): number => {
    switch(speed) {
      case "slow": return 15;
      case "medium": return 10;
      case "fast": return 5;
    }
  };
  
  const getColor = (index: number): string => {
    if (color === "multi") {
      const colors = ["neon-blue", "neon-purple", "neon-cyan"];
      return colors[index % colors.length];
    }
    return `neon-${color}`;
  };
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden",
        isVertical ? "w-0.5 min-h-[100px]" : "h-0.5 min-w-[100px]",
        className
      )}
      {...props}
    >
      {Array.from({ length: streamCount }).map((_, i) => {
        const colorClass = `bg-${getColor(i)}`;
        const size = Math.random() * 20 + 10;
        const delay = i * 0.2;
        const duration = getAnimationDuration();
        const position = Math.random() * 100;
        
        const variants = {
          initial: { 
            [isVertical ? 'top' : 'left']: `-${size}px`, 
            opacity: 0.7 
          },
          animate: { 
            [isVertical ? 'top' : 'left']: '100%',
            opacity: 0
          }
        };
        
        return (
          <motion.div
            key={i}
            className={cn(
              "absolute rounded-full opacity-70",
              isVertical ? "w-full" : "h-full",
              colorClass
            )}
            style={{
              [isVertical ? 'height' : 'width']: `${size}px`,
              [isVertical ? 'left' : 'top']: `${position}%`,
            }}
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ 
              repeat: Infinity, 
              duration, 
              delay, 
              ease: "linear" 
            }}
          />
        );
      })}
    </div>
  );
}
