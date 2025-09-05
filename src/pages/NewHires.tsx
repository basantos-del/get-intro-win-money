import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import React from 'react';

const NewHires = () => {
  const navigate = useNavigate();
  
  // SEO meta tags for New Hires page
  React.useEffect(() => {
    document.title = "New Hires - Intro | For Business";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover how intro helps businesses find quality new hires through referral recruitment. Connect with engaged members who can refer talented candidates.');
    }
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://useintro.co/for-business/newhires';
    
    // Add structured data for New Hires page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "New Hires - Intro for Business",
      "description": "Discover how intro helps businesses find quality new hires through referral recruitment.",
      "url": "https://useintro.co/for-business/newhires",
      "mainEntity": {
        "@type": "Organization",
        "name": "Intro",
        "description": "A referral marketplace that connects businesses with quality candidate referrals."
      }
    };
    
    let script = document.querySelector('script[data-page="newhires"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script') as HTMLScriptElement;
      script.type = 'application/ld+json';
      script.setAttribute('data-page', 'newhires');
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
            referral programs done right
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
              "We need to backfill this position fast. Find me solutions", says your HR Manager.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              "God, we have run out of LinkedIn's bill", says Lisa.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              "I mean, we have it in our referral's page forever", says Taylor.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              "Yeah, good luck with that… YOU have zero referrals, Taylor".
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 w-full animate-fade-in overflow-hidden">
          <video
            src="/Intro-website%20(1).mp4"
            autoPlay
            loop
            muted
            controls
            preload="metadata"
            className="w-full h-auto object-cover scale-95 -mb-8"
            style={{ maxHeight: '600px' }}
            onError={(e) => {
              console.error('Video failed to load:', e);
            }}
            onLoadStart={() => {
              console.log('Video load started');
            }}
            onCanPlay={() => {
              console.log('Video can play');
            }}
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
              You know Lisa and Taylor will have no good answers for their Manager. The referral page is on Confluence's basement. A Slack channel was a good idea, but just in paper.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              That's where Maria can step in as your ghost recruiter. Maria is an intro Member. She knows people. A lot of people.
            </p>
          </div>
        </div>

        {/* Maria Photo Section */}
        <div className="mt-16 w-full animate-fade-in overflow-hidden">
          <img
            src="/lovable-uploads/de0437b6-8cfe-409f-804b-44ee5e67dae6.png"
            alt="Maria - Intro Member who knows people"
            className="w-full h-auto object-cover scale-95 -mb-8"
            style={{ maxHeight: '600px' }}
          />
        </div>

        {/* Third Content Section */}
        <div className="max-w-2xl mx-auto text-left pt-16 pb-8">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              When Maria arrives home that afternoon, she'll be reminded of some refer-a-friend job opportunities. One of them is your job offer. Intro will also tell her who from her network might make a match. Since the opportunity expires soon and Maria can earn a nice reward, Maria sends her referral link to Mark.
            </p>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-bold">
              Bang, Mark is the backfill you've been looking to find. Treat him well.
            </p>
          </div>
        </div>

        {/* Referral Value Section */}
        <section className="intro-section bg-muted/20 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Referrals are powerful hires
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Better cultural fit */}
              <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-accent">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Better cultural fit
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Employee referrals are 5x more likely to be a good cultural fit for your company
                </p>
              </div>

              {/* Stay longer */}
              <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-accent">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Stay longer
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Referred employees have 46% higher retention rates after one year
                </p>
              </div>

              {/* Faster hiring */}
              <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-accent">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Faster hiring
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Referral hires take 55% less time to fill compared to other recruiting methods
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
                    <h3 className="text-xl font-bold text-foreground mb-2">Open an opportunity</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Define specific tags and integrate with your LinkedIn or ATS account
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Market your opportunity</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Intro taps intro Members who know people that match the criteria. It highlights which friends can have higher chance of matchmaking
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Reach hidden leads</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Members share the opportunity link with that friend
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Do your thing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Start receiving applications coming from intro directly on your ATS platform
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Hire faster and save money</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      If the person is hired, the Member gets paid and you have earned a reputation with your Manager
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

export default NewHires;