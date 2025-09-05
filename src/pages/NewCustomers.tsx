import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import React from 'react';

const NewCustomers = () => {
  const navigate = useNavigate();
  
  // SEO meta tags for New Customers page
  React.useEffect(() => {
    document.title = "New Customers - Intro | For Business";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover how intro helps businesses acquire new customers through referral marketing. Connect with engaged members who can refer quality customers.');
    }
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://useintro.co/for-business/newcustomers';
    
    // Add structured data for New Customers page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "New Customers - Intro for Business",
      "description": "Discover how intro helps businesses acquire new customers through referral marketing.",
      "url": "https://useintro.co/for-business/newcustomers",
      "mainEntity": {
        "@type": "Organization",
        "name": "Intro",
        "description": "A referral marketplace that connects businesses with quality customer referrals."
      }
    };
    
    let script = document.querySelector('script[data-page="newcustomers"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script') as HTMLScriptElement;
      script.type = 'application/ld+json';
      script.setAttribute('data-page', 'newcustomers');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
    
    return () => {
      // Cleanup
      document.title = "Intro - Referral Marketplace | Earn Money Referring Friends for Jobs";
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Join the #1 referral marketplace. Earn up to $5,000 referring friends for jobs, products, and opportunities. Turn your network into passive income with daily referral opportunities.');
      }
    };
  }, []);
  
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  const { elementRef: secondElementRef, isVisible: secondIsVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const handleJoinWaitlist = () => {
    navigate('/', { replace: true });
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById('waitlist');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            New Customers for Business
          </h1>
        </div>

        {/* Content with Scroll Reveal */}
        <div 
          ref={elementRef}
          className={`max-w-2xl mx-auto text-left pt-16 pb-8 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              "Oh, I love your shoes, they look so cool", says Mark.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              "They're this new brand, and fit really nice", says Maria S.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Mark is looking for a new par of shoes. But your brand does not know that yet.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 w-full animate-fade-in overflow-hidden">
          <video
            src="/Intro-website.mp4"
            controls
            className="w-full h-auto object-cover scale-95 -mb-8"
            style={{ maxHeight: '600px' }}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Join Waitlist CTA */}
        <div className="mt-8 text-center animate-bounce">
          <Button 
            onClick={handleJoinWaitlist}
            className="intro-button-cta text-lg px-8 py-4"
          >
            Join the Waitlist
          </Button>
        </div>
      </div>
      
      {/* Scroll overlay bar at bottom for all devices */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent pointer-events-none z-10"></div>
      
      <Footer />
    </div>
  );
};

export default NewCustomers;