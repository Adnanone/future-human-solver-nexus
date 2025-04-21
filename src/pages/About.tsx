
import { ParadoxNav } from "@/components/paradox-solver/nav-bar";
import { ParadoxFooter } from "@/components/paradox-solver/footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-darker text-white">
      <ParadoxNav />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-neon-purple">About</h1>
        <p className="text-gray-300 mb-4">
          Paradox Solver is a forward-thinking project fusing neural recalibration and quantum algorithms. Our goal: shifting the boundaries of problem-solving beyond human cognition.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Powered by Supabase, state-of-the-art web tech, and Google AI.</li>
          <li>Transparent, ethical AI systems.</li>
          <li>Open for collaboration and partnership.</li>
        </ul>
      </main>
      <ParadoxFooter />
    </div>
  );
}
