import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  console.log('SplashScreen component rendered, isVisible:', isVisible);

  useEffect(() => {
    console.log('SplashScreen useEffect running - setting 3s timer');
    // Auto-hide after 3 seconds
    const timer = setTimeout(() => {
      console.log('Auto-hide timer triggered');
      handleComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    // Mark as seen in localStorage
    localStorage.setItem('splash-screen-seen', 'true');
    // Small delay for smooth transition
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-fade-in">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/your_logo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Skip Button */}
      <Button
        onClick={handleComplete}
        variant="outline"
        size="sm"
        className="absolute top-6 right-6 bg-black/50 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
      >
        Skip
      </Button>

      {/* Loading indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full animate-[slide-in-right_3s_ease-out]" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;