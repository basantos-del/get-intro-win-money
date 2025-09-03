import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import React from 'react';

const AboutUs = () => {
  const navigate = useNavigate();
  
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
            the referral marketplace
          </h1>
        </div>

        {/* About Content with Scroll Reveal */}
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
              Intro is a referral marketplace that connects opportunities with people who know people.
            </p>
            
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Companies post <strong>opportunities</strong>. Members can follow up and refer a friend. If the referral is a success, we call it a <strong>match</strong>. Matches are what pay you good money.
              </p>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Intro was born to provide everyone with a chance to <strong>earn extra money</strong>. Level up your networking game. No AI-talk nonsense, just real earning opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-16 w-full animate-fade-in overflow-hidden">
          <img
            src="/lovable-uploads/d1ed0041-d93a-45b9-b66b-5cce96f195f3.png"
            alt="A referral marketplace for people who know people"
            className="w-full h-auto object-cover scale-95 -mb-8"
          />
        </div>

        {/* Second Text Section with Scroll Reveal */}
        <div 
          ref={secondElementRef}
          className={`max-w-2xl mx-auto text-left py-16 transition-all duration-1000 ${
            secondIsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              You've done dozen of intros before. You've always been that kind of <strong>matchmaker friend</strong>. Seeing through the connections. Building bridges and opening doors. Intro has been built so that personality of yours starts to <strong>pay off</strong>.
            </p>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              But we're not any kind of referral marketplace. <strong>We're not just easy money</strong>. A reference is not of any worth if it does not make a match. That's why your Referrals must make a match. Once that happens, you're paid.
            </p>
          </div>
        </div>

        {/* New Image Section */}
        <div className="mt-16 w-full animate-fade-in overflow-hidden">
          <img
            src="/lovable-uploads/6127873d-beb8-4d00-9b7d-0f357d136165.png"
            alt="Your network is your net worth"
            className="w-full h-auto object-cover scale-95 -mb-8"
          />
        </div>

        {/* Additional Content Sections */}
        <div className="max-w-2xl mx-auto text-left py-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                We're on a mission to <strong>reimagine how referrals work</strong> for both members and businesses. Our goal is to create the top referral marketplace, offering tons of opportunities for members to earn and new ways for businesses to leverage referral programs.
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
                intro is designed to help you build <strong>the future you want</strong>. We know chasing your goals isn't easy, so we've built a platform that not only helps you earn cash through referrals but also opens doors to new possibilities. You join intro because you're social; you stay because you have <strong>bigger plans for yourself</strong>.
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
