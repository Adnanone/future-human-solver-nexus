import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ParadoxNav } from "@/components/paradox-solver/nav-bar";
import { ParadoxFooter } from "@/components/paradox-solver/footer";
import { HologramCard } from "@/components/ui/hologram-card";
import { NeuralButton } from "@/components/ui/neural-button";
import { DataStream } from "@/components/ui/data-stream";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const ParadoxSolver = () => {
  const [problemInput, setProblemInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState(0); // 0: input, 1: analyzing, 2: results
  const [solutionResult, setSolutionResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check auth on mount
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate("/auth");
    });
    const { subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/auth");
    });
    return () => { subscription.unsubscribe(); }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problemInput.trim()) return;

    setLoading(true);
    setStage(1);
    setError(null);
    setSolutionResult(null);

    try {
      const response = await fetch(
        "https://syothuxkimavlcdhzklo.functions.supabase.co/generate-paradox-solution",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: problemInput }),
        }
      );
      const data = await response.json();
      if (!response.ok || data.error) throw new Error(data.error || "Error");
      setSolutionResult(data.output || "No solution generated.");
      setStage(2);
    } catch (err: any) {
      setError(err.message || "Unexpected error. Please try again or check your API key.");
      setStage(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cyber-darker text-white">
      <ParadoxNav />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple">
              Neural Paradox Solver
            </h1>
            <p className="text-gray-300">
              Describe your challenge or decision dilemma, and our quantum neural system will 
              identify unconventional solutions beyond human cognitive frameworks.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <HologramCard className="mb-8 p-8" intensity="high">
              {stage === 0 && (
                <motion.form 
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-6">
                    <label className="block text-neon-blue mb-2 text-sm font-medium">Describe your paradox or challenge</label>
                    <div className="relative">
                      <textarea
                        value={problemInput}
                        onChange={(e) => setProblemInput(e.target.value)}
                        className="w-full h-40 p-4 bg-cyber-light border border-neon-blue/30 rounded-lg focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue/50 placeholder-gray-500 text-white resize-none"
                        placeholder="Describe the problem you're facing in detail. What makes it challenging? What solutions have you already tried?"
                      />
                      
                      {/* Animated corner effects */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-neon-blue animate-pulse-neon" />
                      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neon-blue animate-pulse-neon" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-neon-blue animate-pulse-neon" style={{ animationDelay: '1s' }} />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-neon-blue animate-pulse-neon" style={{ animationDelay: '1.5s' }} />
                    </div>
                  </div>
                  {error && (
                    <div className="text-red-400 mb-2 text-center">{error}</div>
                  )}
                  <div className="flex gap-4 justify-end">
                    <NeuralButton type="submit" disabled={!problemInput.trim() || loading}>
                      {loading ? "Analyzing..." : "Begin Neural Analysis"}
                    </NeuralButton>
                  </div>
                </motion.form>
              )}

              {stage === 1 && (
                <motion.div 
                  className="py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-8">
                    <div className="text-neon-blue text-lg mb-2">Neural Analysis in Progress</div>
                    <p className="text-gray-400">Scanning cognitive frameworks and generating quantum solution pathways...</p>
                  </div>
                  
                  <div className="relative h-40 max-w-md mx-auto">
                    {/* Neural processing visualization */}
                    <div className="absolute inset-0">
                      <svg width="100%" height="100%" viewBox="0 0 100 100">
                        {/* Pulsing central node */}
                        <motion.circle 
                          cx="50" 
                          cy="50" 
                          r="5"
                          fill="#1EAEDB"
                          animate={{
                            r: [5, 8, 5],
                            opacity: [0.8, 1, 0.8],
                            fill: ['#1EAEDB', '#8B5CF6', '#1EAEDB']
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Radiating circles */}
                        {[...Array(3)].map((_, i) => (
                          <motion.circle
                            key={i}
                            cx="50"
                            cy="50"
                            r="5"
                            fill="none"
                            stroke="#1EAEDB"
                            strokeWidth="0.5"
                            initial={{ r: 5, opacity: 1 }}
                            animate={{
                              r: [5, 40, 5],
                              opacity: [0.8, 0, 0.8],
                              strokeWidth: [0.5, 0.1, 0.5]
                            }}
                            transition={{
                              duration: 4,
                              delay: i * 1,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                        
                        {/* Connection lines */}
                        {[...Array(8)].map((_, i) => {
                          const angle = (i * 45) * (Math.PI / 180);
                          const x2 = 50 + Math.cos(angle) * 40;
                          const y2 = 50 + Math.sin(angle) * 40;
                          
                          return (
                            <motion.line
                              key={i}
                              x1="50"
                              y1="50"
                              x2={x2}
                              y2={y2}
                              stroke="#1EAEDB"
                              strokeWidth="0.5"
                              animate={{
                                opacity: [0.3, 0.8, 0.3],
                                strokeWidth: [0.5, 1, 0.5]
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          );
                        })}
                        
                        {/* Outer nodes */}
                        {[...Array(8)].map((_, i) => {
                          const angle = (i * 45) * (Math.PI / 180);
                          const x = 50 + Math.cos(angle) * 40;
                          const y = 50 + Math.sin(angle) * 40;
                          
                          return (
                            <motion.circle
                              key={i}
                              cx={x}
                              cy={y}
                              r="2"
                              fill={i % 3 === 0 ? "#1EAEDB" : i % 3 === 1 ? "#8B5CF6" : "#33C3F0"}
                              animate={{
                                r: [2, 3, 2],
                                opacity: [0.6, 1, 0.6]
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          );
                        })}
                      </svg>
                    </div>
                    
                    {/* Processing stats */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-neon-blue">
                      <div>Neural Paths: 7,342</div>
                      <div>Quantum States: 142,653</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {stage === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-6 text-center">
                    <div className="inline-block mb-4 px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue text-sm">Analysis Complete</div>
                    <h2 className="text-xl font-bold mb-1 text-white">Solution Paradigms Discovered</h2>
                  </div>
                  <div className="mb-6 bg-cyber-dark/70 rounded p-4 text-gray-200 whitespace-pre-line text-sm">
                    {solutionResult || "No solution generated."}
                  </div>
                  <div className="flex gap-4 justify-center">
                    <NeuralButton onClick={() => { setStage(0); setProblemInput(""); setSolutionResult(null); setError(null); }} variant="outline" color="cyan">
                      Start New Analysis
                    </NeuralButton>
                  </div>
                </motion.div>
              )}
            </HologramCard>

            {/* Additional info */}
            <div className="grid md:grid-cols-3 gap-6">
              <HologramCard className="p-4" cardType="glass">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-white">Neural Recalibration</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Our system maps your neural patterns and identifies blind spots in your thinking.
                </p>
              </HologramCard>
              
              <HologramCard className="p-4" cardType="glass">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-white">Quantum Processing</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Leverage quantum computing to explore millions of solution pathways simultaneously.
                </p>
              </HologramCard>
              
              <HologramCard className="p-4" cardType="glass">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-white">Pattern Recognition</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Advanced algorithms identify solution patterns invisible to human cognition.
                </p>
              </HologramCard>
            </div>
          </div>
        </div>
      </div>
      
      <ParadoxFooter />
    </div>
  );
};

export default ParadoxSolver;
