import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { NeuralButton } from "../ui/neural-button";
import { HologramCard } from "../ui/hologram-card";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";

export function ParadoxNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const { subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });
    supabase.auth.getSession().then(({ data }) => setIsAuthenticated(!!data.session));
    return () => { subscription.unsubscribe(); }
  }, []);
  
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Paradox Solver", path: "/solver" },
    { label: "Methodology", path: "/methodology" },
    { label: "Solutions", path: "/solutions" },
    { label: "About", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav 
        className="glass-effect border-b border-neon-blue/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
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
            <span className="font-bold text-xl tracking-wider text-white group-hover:text-glow transition-all duration-300">
              PARADOX
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                to={item.path}
                className="text-sm text-gray-300 hover:text-neon-blue hover:text-glow transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-blue group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {!isAuthenticated && (
              <>
                <NeuralButton size="sm" variant="ghost" color="cyan" onClick={() => navigate("/auth")}>
                  Sign In
                </NeuralButton>
                <NeuralButton size="sm" color="blue" onClick={() => navigate("/auth")}>
                  Get Started
                </NeuralButton>
              </>
            )}
            {isAuthenticated && (
              <NeuralButton size="sm" color="cyan" onClick={async () => { await supabase.auth.signOut(); setIsAuthenticated(false); }}>
                Log Out
              </NeuralButton>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col gap-1.5 group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={cn(
              "w-6 h-0.5 bg-gray-400 transition-all duration-300 group-hover:bg-neon-blue",
              isOpen && "translate-y-2 rotate-45"
            )} />
            <span className={cn(
              "w-6 h-0.5 bg-gray-400 transition-all duration-300 group-hover:bg-neon-blue",
              isOpen && "opacity-0"
            )} />
            <span className={cn(
              "w-6 h-0.5 bg-gray-400 transition-all duration-300 group-hover:bg-neon-blue",
              isOpen && "-translate-y-2 -rotate-45"
            )} />
          </button>
        </div>
      </motion.nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HologramCard className="rounded-none border-t-0">
              <div className="flex flex-col gap-4 py-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.label}
                    to={item.path}
                    className="px-4 py-2 hover:bg-neon-blue/10 rounded transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t border-neon-blue/10 mt-2 pt-4 px-4 flex gap-2">
                  <NeuralButton size="sm" variant="ghost" color="cyan" className="flex-1" onClick={() => { setIsOpen(false); navigate("/auth"); }}>
                    Sign In
                  </NeuralButton>
                  <NeuralButton size="sm" color="blue" className="flex-1" onClick={() => { setIsOpen(false); navigate("/auth"); }}>
                    Get Started
                  </NeuralButton>
                </div>
              </div>
            </HologramCard>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
