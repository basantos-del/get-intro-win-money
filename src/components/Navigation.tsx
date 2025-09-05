import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const businessDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isFAQPage = location.pathname === '/faqs';
  const isAboutUsPage = location.pathname === '/about-us';
  const isNewCustomersPage = location.pathname === '/for-business/newcustomers';
  
  // Always show scrolled state on FAQ, About Us, and New Customers pages for better readability
  const shouldShowScrolledState = isFAQPage || isAboutUsPage || isNewCustomersPage || isScrolled;

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

  // Handle clicking outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
      if (businessDropdownRef.current && !businessDropdownRef.current.contains(event.target as Node)) {
        setIsBusinessDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're on FAQ, About Us, or New Customers page, navigate to main page first then scroll
    if (isFAQPage || isAboutUsPage || isNewCustomersPage) {
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
              {/* Company Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  className={`flex items-center gap-1 transition-colors duration-300 font-medium ${
                    shouldShowScrolledState 
                      ? 'text-foreground hover:text-accent-foreground' 
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  Company
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isAboutDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {/* Dropdown Menu */}
                {isAboutDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-intro-card z-50">
                    <div className="py-2">
                      <button
                        onClick={() => {
                          navigate('/about-us');
                          setIsAboutDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        About Us
                      </button>
                      <button
                        onClick={() => {
                          navigate('/faqs');
                          setIsAboutDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        FAQs
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
            {/* For Business Dropdown - positioned closer to CTA */}
            <div className="relative" ref={businessDropdownRef}>
              <button
                onClick={() => setIsBusinessDropdownOpen(!isBusinessDropdownOpen)}
                className={`flex items-center gap-1 transition-colors duration-300 font-medium ${
                  shouldShowScrolledState 
                    ? 'text-foreground hover:text-accent-foreground' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                For Business
                <ChevronDown 
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isBusinessDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Dropdown Menu */}
              {isBusinessDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-intro-card z-50">
                  <div className="py-2">
                    <button
                      onClick={() => {
                        navigate('/for-business/newcustomers');
                        setIsBusinessDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      New Customers
                    </button>
                  </div>
                </div>
              )}
            </div>
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