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
            autoPlay
            loop
            muted
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
              What you know is that the chances of Mark really buying the shoes today are low. He has stuff to do. And you also know that even though he saw Maria's, what he needs are new shoes. And there are a lot of other shoemakers out there.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              That's where Maria can step in for your brand. Maria is an intro Member. She knows people. A lot of people.
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
              When she arrives home that day, she'll be reminded of some refer-a-friend opportunities. One of them is her favorite shoe brand, your brand. Since the opportunity expires soon, Maria sends her referral link to Mark.
            </p>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-bold">
              Bang, Mark is your new customer. Treat him well.
            </p>
          </div>
        </div>

        {/* Referral Value Section */}
        <section className="intro-section bg-muted/20 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Referrals are powerful customers
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* More likely to buy */}
              <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-accent">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    More likely to buy
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Referral leads are 4x more likely to buy when referred by a friend (source: Nielsen)
                </p>
              </div>

              {/* Spend more */}
              <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-accent">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Spend more
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Referral leads spend 16-25% more during their lifetime (source: Wharton)
                </p>
              </div>

              {/* Stay longer */}
              <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-accent">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Stay longer
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Referred customers have a 37% higher retention rate (source: Deloitte)
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
                      Define your program's budget and expiry date, as well as the Payout amount and conditions
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Market your opportunity on intro</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your opportunity gets promoted to our community of engaged members
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Reach targeted Members</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The opportunity will arrive to Members that have registered as your customers through a unique ID
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Members share with friends</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Members share your product with their friends through personal recommendations
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Members get rewarded</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      If friends meet your T&Cs, the Member gets paid and you gain a new customer
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

export default NewCustomers;
