
import * as React from "react";
import { Brain, Clock, Network, Puzzle, Shield, Shuffle } from "lucide-react";
import { DataStream } from "../ui/data-stream";

interface HexagonFeatureProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export function HexagonFeature({ title, description, icon, color }: HexagonFeatureProps) {
  const getIcon = () => {
    switch (icon) {
      case 'brain': return <Brain className="w-6 h-6" />;
      case 'clock': return <Clock className="w-6 h-6" />;
      case 'network': return <Network className="w-6 h-6" />;
      case 'puzzle': return <Puzzle className="w-6 h-6" />;
      case 'shield': return <Shield className="w-6 h-6" />;
      case 'shuffle': return <Shuffle className="w-6 h-6" />;
      default: return <Brain className="w-6 h-6" />;
    }
  };
  
  const getColorClass = () => {
    switch (color) {
      case 'blue': return 'text-neon-blue';
      case 'purple': return 'text-neon-purple';
      case 'pink': return 'text-neon-pink';
      case 'cyan': return 'text-neon-cyan';
      case 'green': return 'text-neon-green';
      case 'orange': return 'text-neon-orange';
      default: return 'text-neon-blue';
    }
  };
  
  const getBgColorClass = () => {
    switch (color) {
      case 'blue': return 'bg-neon-blue/10';
      case 'purple': return 'bg-neon-purple/10';
      case 'pink': return 'bg-neon-pink/10';
      case 'cyan': return 'bg-neon-cyan/10';
      case 'green': return 'bg-neon-green/10';
      case 'orange': return 'bg-neon-orange/10';
      default: return 'bg-neon-blue/10';
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-4">
        {/* Icon with bg */}
        <div className={`w-16 h-16 rounded-lg ${getBgColorClass()} flex items-center justify-center relative overflow-hidden`}>
          <span className={getColorClass()}>
            {getIcon()}
          </span>
          
          {/* Animated data stream side effects */}
          <div className="absolute -left-2 top-0 bottom-0">
            <DataStream 
              direction="vertical" 
              color={color as any} 
              speed="medium"
              className="h-full" 
            />
          </div>
        </div>
        
        {/* Corner accent */}
        <div className={`absolute -right-1 -top-1 w-3 h-3 ${getColorClass()}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 19L19 5M19 5H8M19 5V16" />
          </svg>
        </div>
      </div>
      
      <h3 className={`text-lg font-bold mb-2 ${getColorClass()}`}>
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm text-center">
        {description}
      </p>
    </div>
  );
}
