import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden" style={{ backgroundColor: '#f8f7f5' }}>
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
          {/* Fallback background */}
          <div 
            className="absolute inset-0"
            style={{ 
              background: 'linear-gradient(135deg, #2d2d2d, #1a1a1a)',
              zIndex: 1 
            }}
          />
          
          {/* Video background with optimized loading */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="metadata"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%232d2d2d'/%3E%3Cstop offset='100%25' stop-color='%231a1a1a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E"
            width="1920"
            height="1080"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ 
              zIndex: 2,
              display: 'block'
            }}
            onLoadStart={() => {
              console.log('Video load started');
              if ((window as any).removeSkeletonOnVideoLoad) {
                (window as any).removeSkeletonOnVideoLoad();
              }
            }}
            onCanPlay={() => {
              console.log('Video can play - starting playback');
              if ((window as any).removeSkeletonOnVideoLoad) {
                (window as any).removeSkeletonOnVideoLoad();
              }
            }}
            onPlay={() => {
              console.log('Video started playing');
              if ((window as any).removeSkeletonOnVideoLoad) {
                (window as any).removeSkeletonOnVideoLoad();
              }
            }}
            onError={(e) => {
              console.error('Video error:', e);
              console.log('Video fallback: using background gradient');
            }}
            onLoadedData={() => {
              console.log('Video data loaded');
            }}
          >
            <source src="/intro-video.mp4" type="video/mp4" />
          </video>

          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" style={{ zIndex: 3 }}></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 20 }}>
        <div className="fade-in-up text-left">
          {/* Mobile version */}
          <div className="md:hidden">
            <h1 className="text-4xl text-white font-bold mb-6 leading-relaxed">
              Earn on intro
            </h1>
            
            <p className="text-xl text-foreground mb-12 max-w-2xl leading-relaxed px-6 py-3 rounded-lg inline-block" style={{
            backgroundColor: '#f9fd8f'
          }}>
              The brands you use. <span className="font-bold">One place</span>
            </p>
            
            <div className="flex flex-col gap-6 items-start">
              <Button onClick={scrollToWaitlist} size="lg" className="intro-button-primary px-12 py-4 text-lg font-semibold inline-flex items-center gap-6">
                Join the Waitlist
                <ArrowRight className="h-5 w-5 text-white" />
              </Button>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">earn through referrals</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">save on loyalty discounts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop and iPad version */}
          <div className="hidden md:block">
            <h1 className="text-4xl md:text-6xl text-white mb-6 md:mb-16 leading-relaxed">
              You know brands and people.<br />
              <span className="text-white font-bold">We know opportunities</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground mb-12 max-w-2xl leading-relaxed px-6 py-3 rounded-lg inline-block" style={{
            backgroundColor: '#f9fd8f'
          }}>
              Build extra income. <br className="md:hidden" />Earn, save and win on <span className="font-bold">intro</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Button onClick={scrollToWaitlist} size="lg" className="intro-button-primary px-12 py-4 text-lg font-semibold inline-flex items-center gap-6">
                Join the Waitlist
                <ArrowRight className="h-5 w-5 text-white" />
              </Button>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">2,588 people already joined</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">+200 brands posting opportunities</span>
                </div>
              </div>
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
