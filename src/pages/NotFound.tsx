import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header'
import NoiseBg from '@/components/NoiseBg'
import { Button } from '@/components/ui/button'

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-500/5 via-background to-cyan-500/5 pointer-events-none" />
      <NoiseBg />
      <Header />
      
      {/* 404 Content */}
      <section className="relative mx-auto max-w-6xl px-4 pt-32 pb-16 min-h-[80vh] flex items-center justify-center">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-70"></div>
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-sm text-emerald-600 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Page Not Found
          </div>
          
          <h1 className="text-8xl md:text-9xl font-bold tracking-tight text-foreground mb-6 opacity-80">
            404
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Oops! Page Not Found
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track to exploring our AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg">
              <a href="/">Return to Home</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-cyan-400/40 text-cyan-600 hover:bg-cyan-500/10">
              <a href="/about">Learn About Us</a>
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground">
            Error details: Attempted to access <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 mt-20 md:mt-28 mb-16 text-muted-foreground text-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span>© {new Date().getFullYear()} SANJEEVANI AI • Custom AI Agents & LLM Fine-tuning</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-emerald-600 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Publications</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default NotFound;