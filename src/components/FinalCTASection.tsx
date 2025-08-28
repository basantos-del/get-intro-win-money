import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const FinalCTASection = () => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [referralData, setReferralData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState({ waitlist: false, referral: false });
  const { toast } = useToast();

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;

    setIsLoading({ ...isLoading, waitlist: true });
    
    setTimeout(() => {
      toast({
        title: "Welcome aboard!",
        description: "You're now on our waitlist. Get ready to start earning!",
      });
      setWaitlistEmail('');
      setIsLoading({ ...isLoading, waitlist: false });
    }, 1000);
  };

  const handleReferralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!referralData.name || !referralData.email) return;

    setIsLoading({ ...isLoading, referral: true });
    
    setTimeout(() => {
      toast({
        title: "Thank you for the referral!",
        description: "We'll reach out to them soon and you'll earn a bonus when they join!",
      });
      setReferralData({ name: '', email: '' });
      setIsLoading({ ...isLoading, referral: false });
    }, 1000);
  };

  return (
    <section id="final-cta" className="intro-section bg-accent/10 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let's get social again
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community and start earning through meaningful connections
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Waitlist Form */}
          <div className="intro-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
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
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
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
                Earn $50 bonus when your friend joins our platform
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span>Join 2,588+ people building passive income through referrals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;