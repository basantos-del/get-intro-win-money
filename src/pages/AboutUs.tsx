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
          className={`max-w-2xl mx-auto text-left py-16 transition-all duration-1000 ${
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
            src="/lovable-uploads/b00d4694-146b-4e23-a8b6-8902f1068464.png"
            alt="A referral marketplace for people who know people"
            className="w-full h-auto object-cover scale-95 -mb-8"
          />
        </div>

        {/* Second Text Section with Blur Reveal */}
        <div 
          ref={secondElementRef}
          className={`max-w-2xl mx-auto text-left py-16 transition-all duration-1000 ${
            secondIsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6">
            <p className={`text-xl md:text-2xl text-muted-foreground leading-relaxed transition-all duration-1000 ${
              secondIsVisible 
                ? 'blur-none' 
                : 'blur-sm'
            }`}>
              You've done dozen of intros before. You've always been that kind of matchmaker friend. Seeing through the connections. Building bridges and opening doors. Intro has been built so that personality of yours starts to pay off.
            </p>
            
            <p className={`text-xl md:text-2xl text-muted-foreground leading-relaxed transition-all duration-1500 delay-300 ${
              secondIsVisible 
                ? 'blur-none opacity-100' 
                : 'blur-md opacity-50'
            }`}>
              But we're not any kind of referral marketplace. We're not just easy money. A reference is not of any worth if it does not make a match. That's why your Referrals must make a match. Once that happens, you're paid.
            </p>
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