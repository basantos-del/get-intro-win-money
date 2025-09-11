import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Expand } from 'lucide-react';
import React from 'react';

const LoyaltyPrograms = () => {
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  
  // SEO meta tags for Loyalty Programs page
  React.useEffect(() => {
    document.title = "Loyalty Programs - Intro | For Business";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Create loyalty programs that work with intro. Reach customers directly, get insights from campaigns, and boost engagement with AI-powered targeting.');
    }
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://useintro.co/for-business/loyalty-programs';
    
    // Add structured data for Loyalty Programs page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Loyalty Programs - Intro for Business",
      "description": "Create loyalty programs that work with intro. Reach customers directly and boost engagement.",
      "url": "https://useintro.co/for-business/loyalty-programs",
      "mainEntity": {
        "@type": "Organization",
        "name": "Intro",
        "description": "A platform that helps businesses create effective loyalty programs and reach customers directly."
      }
    };
    
    let script = document.querySelector('script[data-page="loyalty-programs"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script') as HTMLScriptElement;
      script.type = 'application/ld+json';
      script.setAttribute('data-page', 'loyalty-programs');
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
            loyalty programs that work
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
              "Oh man, I need a new sweater..."
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Ben has bought from your before. Two summers ago. That awesome collection.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              But Ben has been targeted by all kind of new awesome brands.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 w-full animate-fade-in overflow-hidden">
          <video
            src="/Loyalty_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-auto object-cover scale-95 -mb-8"
            style={{ maxHeight: '600px' }}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Second Content Section */}
        <div 
          ref={secondElementRef}
          className={`max-w-2xl mx-auto text-left pt-16 pb-8 transition-all duration-1000 ${
            secondIsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Influencer marketing and ads budget has gone through the roof. Loyalty efforts are your best bet, but your email marketing spend is stuck on Ben's promotions Gmail tab. And because of that, chances of Ben buying from you again are low.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              That's where intro comes in. When buying first time from you, Ben gets on intro because he knows he's going to find earning and saving opportunities. A wallet for all things shopping.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              And it's because of intro that Ben gets to hear about your loyalty program.
            </p>
          </div>
        </div>

        {/* Ben Photo Section */}
        <div 
          className="mt-16 w-full animate-fade-in overflow-hidden cursor-pointer md:cursor-default relative"
          onClick={() => setIsFullscreen(true)}
        >
          <img
            src="/lovable-uploads/5d7a4302-3d76-45dd-a754-7eda5d67c224.png"
            alt="Customer loyalty program interface showing Ben's profile and engagement with loyalty campaigns"
            className="w-full h-auto object-contain scale-95 md:scale-100 md:object-cover -mb-8"
            style={{ maxHeight: '800px' }}
          />
          {/* Fullscreen icon for mobile */}
          <div className="absolute top-4 right-4 md:hidden bg-black/50 rounded-full p-2">
            <Expand className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Fullscreen Modal */}
        {isFullscreen && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:hidden"
            onClick={() => setIsFullscreen(false)}
          >
            <div className="relative max-w-full max-h-full">
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-10"
                aria-label="Close fullscreen"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src="/lovable-uploads/5d7a4302-3d76-45dd-a754-7eda5d67c224.png"
                alt="Customer loyalty program interface showing Ben's profile and engagement with loyalty campaigns"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        {/* Third Content Section */}
        <div className="max-w-2xl mx-auto text-left pt-16 pb-8">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Ben will ask intro whether he has subscribed to any good clothing loyalty program. And indeed he has!
            </p>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-bold">
              Bang, Ben is buying from you again.
            </p>
          </div>
        </div>

        {/* Loyalty Programs Benefits Section */}
        <section className="intro-section bg-muted/20 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Loyalty programs are sales boosters
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Reach consumers directly */}
              <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-accent">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Reach consumers directly
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Members on intro are looking for this kind of opportunities. Email marketing is dead
                </p>
              </div>

              {/* Get insights from other campaigns */}
              <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-accent">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Get insights from other campaigns
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Check past campaigns from non-competitive brands to inspire you for performing campaigns
                </p>
              </div>

              {/* Boost your campaigns with AI */}
              <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-accent">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Boost your campaigns with AI
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Write targeted campaigns for each customer based on their engagement history with other campaigns
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="intro-section bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                How it works
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Create a campaign</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Define your program's budget and expiry date, as well as the Payout amount and rules / logic
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Market your campaign on intro</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your campaign gets promoted to our community of engaged members
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Follow-up</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Study your campaign insights and adapt it as you go
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Waitlist CTA */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          <Button 
            onClick={handleJoinWaitlist}
            className="intro-button-cta text-lg px-8 py-4 flex-shrink-0"
          >
            Join the Waitlist
          </Button>
          <div className="text-left max-w-md">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Set up an opportunity in minutes. Tap into our network of Members to market it. Find new leads in hours.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll overlay bar at bottom for all devices */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent pointer-events-none z-10"></div>
      
      <Footer />
    </div>
  );
};

export default LoyaltyPrograms;
