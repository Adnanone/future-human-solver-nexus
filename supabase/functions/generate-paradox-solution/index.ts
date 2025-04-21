
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const GOOGLE_AI_API_KEY = Deno.env.get("GOOGLE_AI_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt } = await req.json();
    // Call Gemini Pro (Google AI Studio) - update URL if needed; using current public endpoint
    const resp = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + GOOGLE_AI_API_KEY, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `You are a creative problem solver specializing in paradoxes and complex dilemmas. The user is seeking non-conventional, neural/quantum-inspired solutions. Respond with 2-3 original solution ideas in a bullet list each with a confidence score.\n\nParadox: ${prompt}` }] }]
      })
    });

    if (!resp.ok) {
      const error = await resp.text();
      return new Response(JSON.stringify({ error: "Failed to call Google AI: " + error }), { status: 500, headers: corsHeaders });
    }

    const data = await resp.json();
    // Google AI returns content as {candidates:[{content:{parts:[{text:"..." }]}}]}
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No solution generated.";
    return new Response(JSON.stringify({ output: text }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Edge error:", err);
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: corsHeaders });
  }
});
