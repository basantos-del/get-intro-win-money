import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const AboutUs = () => {
  const navigate = useNavigate();
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
                Companies post opportunities. Members can follow up and refer a friend. If the referral is a success, we call it a match. Matches are what pay you good money.
              </p>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Intro was born to provide everyone with a chance to earn extra money. Level up your networking game. No AI-talk nonsense, just real earning opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-16 w-full animate-fade-in overflow-hidden">
          <img
            src="/lovable-uploads/d1ed0041-d93a-45b9-b66b-5cce96f195f3.png"
            alt="A referral marketplace for people who know people"
            className="w-full h-auto object-cover scale-85 -mb-8"
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
              You've done dozen of intros before. You've always been that kind of matchmaker friend. Seeing through the connections. Building bridges and opening doors. Intro has been built so that personality of yours starts to pay off.
            </p>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              But we're not any kind of referral marketplace. We're not just easy money. A reference is not of any worth if it does not make a match. That's why your Referrals must make a match. Once that happens, you're paid.
            </p>
          </div>
        </div>

        {/* New Image Section */}
        <div className="mt-16 w-full animate-fade-in overflow-hidden">
          <img
            src="/lovable-uploads/637b3177-f2f8-4248-8697-700d92b84f45.png"
            alt="Your network, you're net worth"
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
                We're on a mission to reimagine how referrals work for both members and businesses. Our goal is to create the top referral marketplace, offering tons of opportunities for members to earn and new ways for businesses to leverage referral programs.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                How it works
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Businesses post opportunities on intro. We carefully review and categorize each one, then connect them with members who are the right fit. Our core power lies in reimagining these connections, helping you unlock new daily opportunities.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Why join Us?
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                intro is designed to help you build the future you want. We know chasing your goals isn't easy, so we've built a platform that not only helps you earn cash through referrals but also opens doors to new possibilities. You join intro because you're social; you stay because you have bigger plans for yourself.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="intro-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Reach out to our support team and we'll get back to you.
            </p>
            <button className="intro-button-cta">
              Contact Support
            </button>
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
      <Footer />
    </div>
  );
};

export default AboutUs;