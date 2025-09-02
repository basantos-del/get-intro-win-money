import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Calculate video scale and border radius based on scroll
  const maxScroll = 300; // Max scroll distance for full effect
  const scrollProgress = Math.min(scrollY / maxScroll, 1);
  const videoScale = 1 - (scrollProgress * 0.1); // Scale from 1 to 0.9
  const borderRadius = scrollProgress * 24; // Border radius from 0 to 24px
  const containerPadding = scrollProgress * 20; // Padding from 0 to 20px
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#f8f7f5' }}>
      {/* Video container with dynamic padding and background */}
      <div 
        className="absolute inset-0 transition-all duration-500 ease-out"
        style={{
          padding: `${containerPadding}px`,
        }}
      >
        <div 
          className="relative w-full h-full overflow-hidden transition-all duration-500 ease-out"
          style={{
            transform: `scale(${videoScale})`,
            borderRadius: `${borderRadius}px`,
          }}
        >
          {/* Video background */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="metadata" 
            aria-label="person waiting for metro"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Intro (1).mp4" type="video/mp4" />
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 md:mb-16 leading-tight">
            You know people,<br />
            <span className="text-white">we know opportunities</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground mb-12 max-w-2xl mx-auto leading-relaxed px-6 py-3 rounded-lg inline-block" style={{
          backgroundColor: '#f9fd8f'
        }}>
            Build extra income. <br className="md:hidden" />Give your friends an <span className="font-bold">intro</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button onClick={scrollToWaitlist} size="lg" className="intro-button-primary px-12 py-4 text-lg font-semibold">
              Join the Waitlist
            </Button>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">2,588 people already joined</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{
        borderColor: '#f9fd8f'
      }}>
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;