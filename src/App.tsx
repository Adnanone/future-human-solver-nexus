
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Solver from "./pages/Solver";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Add link to Google Fonts for Orbitron and Rajdhani
const addGoogleFonts = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap';
  document.head.appendChild(link);
};

// Add custom meta tags
const updateMetaTags = () => {
  document.title = "Paradox Solver | Neural Solutions Beyond Human Thinking";
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Break through conventional thinking barriers with our neural-quantum hybrid system that identifies solutions invisible to human cognition.');
  }
  
  // Update Open Graph meta tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', 'Paradox Solver | Neural Solutions Beyond Human Thinking');
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', 'Break through conventional thinking barriers with our neural-quantum hybrid system that identifies solutions invisible to human cognition.');
  }
};

// Add fonts and update meta tags when the app loads
if (typeof window !== 'undefined') {
  addGoogleFonts();
  updateMetaTags();
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solver" element={<Solver />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
