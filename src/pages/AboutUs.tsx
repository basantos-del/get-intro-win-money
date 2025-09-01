import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const AboutUs = () => {
  const navigate = useNavigate();

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