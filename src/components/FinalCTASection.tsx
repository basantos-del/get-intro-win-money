import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const FinalCTASection = () => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [referralData, setReferralData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState({ waitlist: false, referral: false });
  const { toast } = useToast();
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;

    setIsLoading({ ...isLoading, waitlist: true });
    
    try {
      const { error } = await supabase
        .from('waitlist_members')
        .insert([{ email: waitlistEmail }]);

      if (error) {
        throw error;
      }

      toast({
        title: "Welcome aboard!",
        description: "You're now on our waitlist. Get ready to start earning!",
      });
      setWaitlistEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading({ ...isLoading, waitlist: false });
    }
  };

  const handleReferralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!referralData.name || !referralData.email) return;

    setIsLoading({ ...isLoading, referral: true });
    
    try {
      const { error } = await supabase
        .from('refer_friend')
        .insert([{ 
          name: referralData.name, 
          email: referralData.email 
        }]);

      if (error) {
        throw error;
      }

      toast({
        title: "Thank you for the referral!",
        description: "We'll reach out to them soon and you'll earn a bonus when they join!",
      });
      setReferralData({ name: '', email: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit referral. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading({ ...isLoading, referral: false });
    }
  };

  return (
    <section id="final-cta" className="intro-section bg-accent/10 relative overflow-hidden" ref={elementRef}>
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/5237049-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 animate-on-scroll animate-slide-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-6xl mb-6 font-bold" style={{ color: '#f9fd8f' }}>
            Let's get social again
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Join our community and start earning through completed machmakings
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Waitlist Form */}
          <div className="intro-card p-8">
            <h3 className="text-2xl text-foreground mb-6 text-center">
              Join Our Community
            </h3>
            
            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email to get started"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                className="w-full"
                required
              />
              <Button
                type="submit"
                className="intro-button-primary w-full"
                disabled={isLoading.waitlist}
              >
                {isLoading.waitlist ? 'Joining...' : 'Join the Waitlist'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Be the first to know when we launch and get exclusive early access
              </p>
            </div>
          </div>

          {/* Referral Form */}
          <div className="intro-card p-8">
            <h3 className="text-2xl text-foreground mb-6 text-center">
              Refer a Friend
            </h3>
            
            <form onSubmit={handleReferralSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Friend's name"
                value={referralData.name}
                onChange={(e) => setReferralData({ ...referralData, name: e.target.value })}
                className="w-full"
                required
              />
              <Input
                type="email"
                placeholder="Friend's email"
                value={referralData.email}
                onChange={(e) => setReferralData({ ...referralData, email: e.target.value })}
                className="w-full"
                required
              />
              <Button
                type="submit"
                className="intro-button-primary w-full"
                disabled={isLoading.referral}
              >
                {isLoading.referral ? 'Sending...' : 'Send Referral'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Gain access to exclusive referral opportunities when your friend joins our platform
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-white">Join 2,588+ people building passive income through referrals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
