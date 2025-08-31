import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-intro-card' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 
              className="text-2xl font-bold transition-colors duration-300" 
              style={{ color: isScrolled ? '#000000' : '#f9fd8f' }}
            >
              intro
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors duration-300 font-medium ${
                  isScrolled 
                    ? 'text-foreground hover:text-accent-foreground' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className={`transition-colors duration-300 font-medium ${
                  isScrolled 
                    ? 'text-foreground hover:text-accent-foreground' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('earn')}
                className={`transition-colors duration-300 font-medium ${
                  isScrolled 
                    ? 'text-foreground hover:text-accent-foreground' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                Earn
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection('waitlist')}
              className={`px-6 py-2 transition-colors duration-300 ${
                isScrolled 
                  ? 'bg-[#f9fd8f] text-black hover:bg-[#f9fd8f]/90' 
                  : 'intro-button-primary'
              }`}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;