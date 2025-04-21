
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { NeuralButton } from "@/components/ui/neural-button";
import { ParadoxNav } from "@/components/paradox-solver/nav-bar";
import { ParadoxFooter } from "@/components/paradox-solver/footer";

export default function AuthPage() {
  const [view, setView] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<any>(null);
  const navigate = useNavigate();

  // Listen for auth state changes
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        navigate("/");
      }
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session) {
        navigate("/");
      }
    });
    return () => { listener.subscription.unsubscribe(); }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (view === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw new Error(error.message);
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw new Error(error.message);
      }
    } catch (err: any) {
      setError(err.message || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cyber-darker flex flex-col">
      <ParadoxNav />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-cyber-dark border border-neon-blue/20 p-8 rounded-xl shadow-md">
          <h1 className="text-2xl mb-4 font-bold text-center text-neon-blue">
            {view === "login" ? "Sign In to Paradox Solver" : "Create Your Account"}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full p-3 rounded bg-cyber-light border border-neon-blue/20"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              autoComplete="email"
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="w-full p-3 rounded bg-cyber-light border border-neon-blue/20"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              autoComplete="current-password"
            />
            {error && <div className="text-center text-red-400 text-sm">{error}</div>}
            <NeuralButton type="submit" disabled={loading} className="w-full mt-2">
              {loading ? "Processing..." : (view === "login" ? "Sign In" : "Sign Up")}
            </NeuralButton>
          </form>
          <div className="text-center mt-4">
            {view === "login" ? (
              <>
                <span className="text-gray-400">Don't have an account? </span>
                <button className="text-neon-blue hover:underline" onClick={() => { setView("signup"); setError(null); }}>Sign Up</button>
              </>
            ) : (
              <>
                <span className="text-gray-400">Already have an account? </span>
                <button className="text-neon-blue hover:underline" onClick={() => { setView("login"); setError(null); }}>Log In</button>
              </>
            )}
          </div>
        </div>
      </main>
      <ParadoxFooter />
    </div>
  );
}
