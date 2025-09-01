import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isFAQPage = location.pathname === '/faqs';
  
  // Always show scrolled state on FAQ page for better readability
  const shouldShowScrolledState = isFAQPage || isScrolled;

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
    // If we're on FAQ page, navigate to main page first then scroll
    if (isFAQPage) {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're on main page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowScrolledState 
          ? 'bg-background/95 backdrop-blur-sm shadow-intro-card' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={handleLogoClick}
              className="text-2xl font-bold transition-colors duration-300 hover:opacity-80"
              style={{ color: shouldShowScrolledState ? '#000000' : '#f9fd8f' }}
            >
              intro
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors duration-300 font-medium ${
                  shouldShowScrolledState 
                    ? 'text-foreground hover:text-accent-foreground' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className={`transition-colors duration-300 font-medium ${
                  shouldShowScrolledState 
                    ? 'text-foreground hover:text-accent-foreground' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('earn')}
                className={`transition-colors duration-300 font-medium ${
                  shouldShowScrolledState 
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
                shouldShowScrolledState 
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