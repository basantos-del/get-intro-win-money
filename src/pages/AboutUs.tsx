import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Badge } from '@/components/ui/badge';
import React from 'react';

const AboutUs = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState('referral');
  
  // SEO meta tags for About Us page
  React.useEffect(() => {
    document.title = "About Us - Intro | The Referral Marketplace";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Intro, the referral marketplace connecting opportunities with people who know people. Discover how we help you earn money through successful referrals.');
    }
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://useintro.co/about-us';
    
    // Add structured data for About page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Intro - The Referral Marketplace",
      "description": "Learn about Intro, the referral marketplace connecting opportunities with people who know people.",
      "url": "https://useintro.co/about-us",
      "mainEntity": {
        "@type": "Organization",
        "name": "Intro",
        "description": "A referral marketplace that connects opportunities with people who know people."
      }
    };
    
    let script = document.querySelector('script[data-page="about"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script') as HTMLScriptElement;
      script.type = 'application/ld+json';
      script.setAttribute('data-page', 'about');
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
            {selectedCategory === 'referral' ? 'the referral marketplace' : 'the loyalty marketplace'}
          </h1>
        </div>

        {/* Mobile Tabs */}
        <div className="block lg:hidden mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setSelectedCategory('referral')}
              className={`flex-1 px-4 py-3 rounded-md transition-colors text-center ${
                selectedCategory === 'referral'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Referral marketplace
            </button>
            
            <button
              onClick={() => setSelectedCategory('loyalty')}
              className={`flex-1 px-4 py-3 rounded-md transition-colors text-center ${
                selectedCategory === 'loyalty'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Loyalty marketplace
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Content */}
        <div className="block lg:hidden mb-16">
          {selectedCategory === 'referral' ? (
            <>
              {/* Referral Marketplace Content */}
              <div className="animate-fade-in">
                <div className="space-y-6 mb-16">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Intro is a referral and loyalty marketplace that connects opportunities with people who know brands and people.
                  </p>
                  
                  <div className="space-y-4">
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      Companies post <strong> referral opportunities</strong>. Members can refer a friend by checking matchmaking conditions. If the referral is a success, we call it a <strong>match</strong>. Matches pay you good money.
                    </p>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      Intro was born to provide everyone with a chance to <strong>earn extra money</strong>. No AI-talk nonsense, just real earning opportunities.
                    </p>
                  </div>
                </div>

                {/* Image Section */}
                <div className="mb-16 w-full animate-fade-in overflow-hidden">
                  <img
                    src="/lovable-uploads/d1ed0041-d93a-45b9-b66b-5cce96f195f3.png"
                    alt="A referral marketplace for people who know people"
                    className="w-full h-auto object-cover scale-95"
                  />
                </div>

                {/* Second Text Section */}
                <div className="animate-fade-in">
                  <div className="space-y-6 mb-16">
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      You've done dozen of intros before. You've always been that kind of <strong>matchmaker friend</strong>. Seeing through the connections. Building bridges and opening doors. Intro has been built so that personality of yours starts to <strong>pay off</strong>.
                    </p>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      But we're not any kind of marketplace. <strong>We're not just easy money</strong>. A referral is not of any worth if it does not make a match. And loyalty programs or promotional collaborations only happen if you're a loyal brand fan. Once that happens, you're paid.
                    </p>
                  </div>

                  {/* New Image Section */}
                  <div className="mb-16 w-full animate-fade-in overflow-hidden">
                    <img
                      src="/lovable-uploads/6127873d-beb8-4d00-9b7d-0f357d136165.png"
                      alt="Your network is your net worth"
                      className="w-full h-auto object-cover scale-95"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Loyalty Marketplace Content */}
              <div className="text-center py-16 animate-fade-in">
                <div className="max-w-2xl mx-auto">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Our loyalty marketplace is currently under development. Stay tuned for exciting opportunities to earn through brand loyalty programs and promotional collaborations.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Desktop Layout with Sidebar */}
        <div className="hidden lg:flex gap-8 mb-16">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-card rounded-lg p-4 border sticky top-24">
              <h3 className="font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedCategory('referral')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedCategory === 'referral'
                      ? 'bg-foreground text-background'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  Referral marketplace
                </button>
                
                <button
                  onClick={() => setSelectedCategory('loyalty')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedCategory === 'loyalty'
                      ? 'bg-foreground text-background'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  Loyalty marketplace
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {selectedCategory === 'referral' ? (
              <>
                {/* Referral Marketplace Content */}
                <div 
                  ref={elementRef}
                  className={`transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="space-y-6 mb-16">
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      Intro is a referral and loyalty marketplace that connects opportunities with people who know brands and people.
                    </p>
                    
                    <div className="space-y-4">
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        Companies post <strong> referral opportunities</strong>. Members can refer a friend by checking matchmaking conditions. If the referral is a success, we call it a <strong>match</strong>. Matches pay you good money.
                      </p>
                      
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        Intro was born to provide everyone with a chance to <strong>earn extra money</strong>. No AI-talk nonsense, just real earning opportunities.
                      </p>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="mb-16 w-full animate-fade-in overflow-hidden">
                    <img
                      src="/lovable-uploads/d1ed0041-d93a-45b9-b66b-5cce96f195f3.png"
                      alt="A referral marketplace for people who know people"
                      className="w-full h-auto object-cover scale-95"
                    />
                  </div>

                  {/* Second Text Section */}
                  <div 
                    ref={secondElementRef}
                    className={`transition-all duration-1000 ${
                      secondIsVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className="space-y-6 mb-16">
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        You've done dozen of intros before. You've always been that kind of <strong>matchmaker friend</strong>. Seeing through the connections. Building bridges and opening doors. Intro has been built so that personality of yours starts to <strong>pay off</strong>.
                      </p>
                      
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        But we're not any kind of marketplace. <strong>We're not just easy money</strong>. A referral is not of any worth if it does not make a match. And loyalty programs or promotional collaborations only happen if you're a loyal brand fan. Once that happens, you're paid.
                      </p>
                    </div>

                    {/* New Image Section */}
                    <div className="mb-16 w-full animate-fade-in overflow-hidden">
                      <img
                        src="/lovable-uploads/6127873d-beb8-4d00-9b7d-0f357d136165.png"
                        alt="Your network is your net worth"
                        className="w-full h-auto object-cover scale-95"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Loyalty Marketplace Content */}
                <div className="text-center py-16">
                  <div className="max-w-2xl mx-auto">
                    <div className="mb-8">
                      <Badge variant="destructive" className="text-lg px-4 py-2 mb-4">
                        In Development
                      </Badge>
                    </div>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      Our loyalty marketplace is currently under development. Stay tuned for exciting opportunities to earn through brand loyalty programs and promotional collaborations.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Additional Content Sections */}
        <div className="max-w-2xl mx-auto text-left py-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                We're on a mission to <strong>reimagine how referrals and loyalty programs work</strong>, both for members and businesses. Our goal is to create the top referral and loyalty marketplace, offering tons of opportunities for members to earn and new ways for businesses to leverage referral and loyalty programs.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                How it works
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Businesses post opportunities on intro. We carefully review and categorize each one, then connect them with members who are the right fit. Our core power lies in reimagining these connections, helping you unlock new <strong>daily opportunities</strong>.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Why join Us?
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                intro is designed to help you build <strong>the future you want</strong>. We know chasing your goals isn't easy, so we've built a platform that not only helps you earn cash through referrals but also opens doors to new collaborations. You join intro because you're social; you stay because you have <strong>bigger plans for yourself</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              We know we're just getting to know each other
            </p>
            <Button 
              onClick={() => navigate('/faqs')}
              className="intro-button-primary"
            >
              Check our FAQs
            </Button>
          </div>
        </div>

        {/* Full Width Image Section */}
        <div className="mt-16 w-full animate-fade-in overflow-hidden">
          <img
            src="/lovable-uploads/e10e4128-0adb-4523-a77d-116d7c8103d4.png"
            alt="Where matchmaking earns you money"
            className="w-full h-auto object-cover scale-95 -mb-8"
          />
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

export default AboutUs;
