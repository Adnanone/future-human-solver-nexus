
import { useEffect } from "react";
import { ParadoxHero } from "@/components/paradox-solver/hero";
import { ParadoxNav } from "@/components/paradox-solver/nav-bar";
import { ParadoxFeatures } from "@/components/paradox-solver/features";
import { HowItWorks } from "@/components/paradox-solver/how-it-works";
import { ParadoxTestimonials } from "@/components/paradox-solver/testimonials";
import { ParadoxFooter } from "@/components/paradox-solver/footer";

// CSS for the global grid pattern and radial gradient
const globalStyles = `
  .bg-grid-pattern {
    background-image:
      linear-gradient(to right, rgba(30, 174, 219, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(30, 174, 219, 0.1) 1px, transparent 1px);
    background-size: 30px 30px;
  }
  
  .bg-radial-gradient {
    background: radial-gradient(circle at center, rgba(30, 174, 219, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(10, 15, 27, 0) 80%);
  }
`;

const Index = () => {
  // Add the global styles on component mount
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = globalStyles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-cyber-darker text-white">
      <ParadoxNav />
      
      <main>
        <ParadoxHero />
        <ParadoxFeatures />
        <HowItWorks />
        <ParadoxTestimonials />
      </main>
      
      <ParadoxFooter />
    </div>
  );
};

export default Index;
