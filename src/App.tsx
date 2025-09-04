import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import SplashScreen from "@/components/SplashScreen";
import Index from "./pages/Index";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Frameworks from "./pages/Frameworks";
import FrameworkDetail from "./pages/FrameworkDetail";
import Compliances from "./pages/Compliances";
import ComplianceDetail from "./pages/ComplianceDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";
import SanjeevaniChat from "./components/SanjeevaniChat";



const App = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if splash screen has been shown before
    const splashSeen = localStorage.getItem('splash-screen-seen');
    console.log('Splash seen from localStorage:', splashSeen);
    console.log('Will show splash:', !splashSeen);

    if (!splashSeen) {
      setShowSplash(true);
      console.log('Setting showSplash to true');
    }
    setIsLoading(false);
    console.log('isLoading set to false');
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Don't render anything while checking localStorage
  if (isLoading) return null;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="sanjeevaniai-theme">
      <TooltipProvider>
        {showSplash ? (
          <SplashScreen onComplete={handleSplashComplete} />
        ) : (
          <>
            <Toaster />
            <Sonner />
            <SanjeevaniChat />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
                <Route path="/frameworks" element={<Frameworks />} />
                <Route path="/frameworks/:id" element={<FrameworkDetail />} />
                <Route path="/compliances" element={<Compliances />} />
                <Route path="/compliances/:id" element={<ComplianceDetail />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
