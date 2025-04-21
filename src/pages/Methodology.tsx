
import { ParadoxNav } from "@/components/paradox-solver/nav-bar";
import { ParadoxFooter } from "@/components/paradox-solver/footer";

export default function Methodology() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-darker text-white">
      <ParadoxNav />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-neon-blue">Methodology</h1>
        <p className="text-gray-300 mb-4">
          Learn how our paradox solver leverages neural recalibration and quantum processing to break through conventional barriers in human cognition.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Neural pattern mapping to detect cognitive blind spots.</li>
          <li>Quantum algorithmic exploration of alternative solution paths.</li>
          <li>Iterative feedback and recalibration for maximum solution diversity.</li>
        </ul>
      </main>
      <ParadoxFooter />
    </div>
  );
}
