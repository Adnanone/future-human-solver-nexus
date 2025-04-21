
import { cn } from "@/lib/utils";

interface HexagonProps {
  className?: string;
  children?: React.ReactNode;
  glowing?: boolean;
  animated?: boolean;
}

export function Hexagon({ className, children, glowing = false, animated = false }: HexagonProps) {
  return (
    <div className={cn(
      "relative hex-container",
      animated && "animate-float",
      className
    )}>
      <div className={cn(
        "hexagon flex items-center justify-center",
        "before:content-[''] before:absolute before:w-full before:h-full before:bg-inherit before:rotate-[60deg]",
        "after:content-[''] after:absolute after:w-full after:h-full after:bg-inherit after:rotate-[120deg]",
        "bg-cyber-dark border border-neon-blue/30",
        glowing && "animate-glow",
      )}>
        <div className="z-10 text-center p-4">
          {children}
        </div>
      </div>
      <style>{`
        .hex-container {
          width: 100%;
          height: 0;
          padding-bottom: 86.6%;
        }
        .hexagon {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          transform: rotate(30deg);
        }
      `}</style>
    </div>
  );
}
