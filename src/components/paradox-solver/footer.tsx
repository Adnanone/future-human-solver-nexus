import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DataStream } from "../ui/data-stream";
import { NeuralButton } from "../ui/neural-button";
import { useNavigate } from "react-router-dom";

export function ParadoxFooter() {
  const navigate = useNavigate();
  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "Paradox Solver", href: "/solver" },
        { name: "Methodology", href: "/methodology" },
        { name: "Solutions", href: "/solutions" },
        { name: "Quantum Neural Network", href: "/technology" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Research", href: "/research" },
        { name: "Blog", href: "/blog" },
      ]
    }
  ];

  return (
    <footer className="bg-cyber-darker relative overflow-hidden pt-16 pb-8">
      {/* Background hexagon grid */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20,0 L40,10 L40,30 L20,40 L0,30 L0,10 Z" fill="none" stroke="#1EAEDB" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexGrid)" />
        </svg>
      </div>
      
      {/* Data stream lines */}
      <div className="absolute left-1/4 top-0 bottom-0">
        <DataStream direction="vertical" color="blue" className="h-full" />
      </div>
      
      <div className="absolute left-2/4 top-0 bottom-0">
        <DataStream direction="vertical" color="purple" className="h-full" />
      </div>
      
      <div className="absolute left-3/4 top-0 bottom-0">
        <DataStream direction="vertical" color="cyan" className="h-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-6">
              <div className="relative w-8 h-8">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  animate={{ 
                    boxShadow: [
                      "0 0 10px rgba(30, 174, 219, 0.6)",
                      "0 0 20px rgba(139, 92, 246, 0.6)",
                      "0 0 10px rgba(30, 174, 219, 0.6)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-1 rounded-full bg-cyber-dark" />
                <div className="absolute inset-[30%] rounded-full bg-neon-blue animate-pulse-neon" />
              </div>
              <span className="font-bold text-xl tracking-wider text-white">
                PARADOX
              </span>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-xs">
              Breaking through human cognitive limits with quantum neural technology.
              Discover solutions beyond conventional thinking patterns.
            </p>
            
            <div className="flex gap-4">
              <NeuralButton size="sm" variant="ghost" onClick={() => navigate("/auth")}>
                Sign In
              </NeuralButton>
              <NeuralButton size="sm" onClick={() => navigate("/auth")}>
                Start Free Trial
              </NeuralButton>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-3 gap-8">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-neon-blue font-bold text-sm uppercase tracking-wider mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                      >
                        <span>{link.name}</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-blue group-hover:w-full transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-neon-blue/10 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2050 Paradox Solver. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
