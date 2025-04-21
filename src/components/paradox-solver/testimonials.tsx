
import { motion } from "framer-motion";
import { HologramCard } from "../ui/hologram-card";
import { DataStream } from "../ui/data-stream";

export function ParadoxTestimonials() {
  const testimonials = [
    {
      quote: "The Paradox Solver helped me uncover a solution our entire R&D team had overlooked for months.",
      author: "Dr. Eliza Chen",
      title: "Chief Innovation Officer, NeuroTech Solutions",
      avatar: "/lovable-uploads/5b5b517d-a3ae-468a-a49b-3d2bb5566127.png"
    },
    {
      quote: "After being stuck in decision paralysis for weeks, the neural recalibration identified my blind spots in 10 minutes.",
      author: "Marcus Reynolds",
      title: "VP of Product Strategy, Quantum Dynamics",
      avatar: "/lovable-uploads/5b5b517d-a3ae-468a-a49b-3d2bb5566127.png"
    },
    {
      quote: "I've never experienced such a radical shift in perspective. It was like suddenly seeing an invisible dimension.",
      author: "Sophia Park",
      title: "Strategic Futurist, Global Innovation Labs",
      avatar: "/lovable-uploads/5b5b517d-a3ae-468a-a49b-3d2bb5566127.png"
    }
  ];

  return (
    <section className="relative py-20 bg-cyber-darker overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aDEyeiIgZmlsbD0iIzFmMjkzNyIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-5" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-neon-purple/5 to-neon-cyan/5 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
            Transcending Human Limitations
          </h2>
          <p className="text-gray-400">
            See how our neural recalibration technology is breaking through conventional 
            thinking barriers for innovators worldwide.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <HologramCard
                className="h-full relative"
                glitchEffect={index === 1}
                intensity={index === 0 ? "high" : "medium"}
              >
                <div className="relative">
                  {/* Connection lines */}
                  <div className="absolute -top-10 left-8">
                    <DataStream
                      direction="vertical"
                      speed="slow"
                      color={index === 0 ? "blue" : index === 1 ? "purple" : "cyan"}
                      className="h-10"
                    />
                  </div>
                  
                  {/* Quote */}
                  <div className="mb-6 pl-4 border-l-2 border-neon-blue/30 italic text-gray-300">
                    "{testimonial.quote}"
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden border border-neon-blue/20">
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-neon-blue">
                        {/* Placeholder avatar - in real app would use the testimonial.avatar */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className={`font-medium ${index === 0 ? 'text-neon-blue' : index === 1 ? 'text-neon-purple' : 'text-neon-cyan'}`}>
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-gray-400">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </HologramCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
