
import { ParadoxNav } from "@/components/paradox-solver/nav-bar";
import { ParadoxFooter } from "@/components/paradox-solver/footer";

export default function Solutions() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-darker text-white">
      <ParadoxNav />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-neon-cyan">Solution Showcase</h1>
        <p className="text-gray-300 mb-6">
          Explore examples of paradoxes solved by the neural quantum framework.
        </p>
        <ul className="space-y-6">
          <li>
            <b className="text-neon-blue">The Bootstrap Paradox:</b> <br />
            Analyzing temporal loops, the solver suggested quantum information anchoring to establish causality.
          </li>
          <li>
            <b className="text-neon-purple">The Liar Paradox:</b> <br />
            Generated alternating-state logical architecture, breaking binary evaluation patterns.
          </li>
        </ul>
      </main>
      <ParadoxFooter />
    </div>
  );
}
