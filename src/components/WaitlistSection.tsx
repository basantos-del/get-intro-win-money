import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import CountdownTimer from './CountdownTimer';
import { Users, Building2, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
const WaitlistSection = () => {
  const [memberEmail, setMemberEmail] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [isLoading, setIsLoading] = useState({
    member: false,
    company: false
  });
  // Static dummy counts
  const counts = {
    member_count: 2588,
    company_count: 232
  };
  const {
    toast
  } = useToast();
  const {
    elementRef,
    isVisible
  } = useIntersectionObserver({
    threshold: 0.2
  });
  const handleMemberSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberEmail) return;
    setIsLoading({
      ...isLoading,
      member: true
    });
    try {
      const {
        error
      } = await supabase.from('waitlist_members').insert([{
        email: memberEmail
      }]);
      if (error) {
        throw error;
      }
      toast({
        title: "Welcome to Intro!",
        description: "You've been added to our members waitlist. We'll notify you when we launch!"
      });
      setMemberEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to join waitlist. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading({
        ...isLoading,
        member: false
      });
    }
  };
  const handleCompanySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyEmail) return;
    setIsLoading({
      ...isLoading,
      company: true
    });
    try {
      const {
        error
      } = await supabase.from('waitlist_companies').insert([{
        contact_email: companyEmail,
        company_name: 'TBD' // Will be updated when we collect more info
      }]);
      if (error) {
        throw error;
      }
      toast({
        title: "Thank you for your interest!",
        description: "You've been added to our companies waitlist. We'll be in touch soon!"
      });
      setCompanyEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to join waitlist. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading({
        ...isLoading,
        company: false
      });
    }
  };
  return <section id="waitlist" className="intro-section bg-background" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 animate-on-scroll animate-fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join intro, it's free 
          </h2>
          
        </div>

        <div className="mb-16">
          <CountdownTimer />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Members Waitlist */}
          <div id="members-waitlist" className="intro-card-gray p-8 stagger-animation">
            <div className="flex items-center justify-start mb-6">
              <div className="p-3 bg-accent rounded-full">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-left text-black mb-4">
              For Members
            </h3>
            
            <p className="text-black text-left mb-6">
              Start earning extra income through referrals and loyalty programs
            </p>
            
            <div className="text-left mb-6">
              <div className="text-3xl font-bold text-black">{counts.member_count.toLocaleString()}</div>
              <div className="text-sm text-black">members joined</div>
            </div>
            
            <form onSubmit={handleMemberSubmit} className="space-y-4">
              <Input type="email" placeholder="Enter your email" value={memberEmail} onChange={e => setMemberEmail(e.target.value)} className="w-full" required />
              <Button type="submit" className="w-full font-semibold text-black inline-flex items-center justify-center gap-2" style={{backgroundColor: '#f9fd8f'}} disabled={isLoading.member}>
                {isLoading.member ? 'Joining...' : 'Get Early Access'}
                <ArrowRight className="h-4 w-4 text-black" />
              </Button>
            </form>
          </div>

          {/* Companies Waitlist */}
          <div className="intro-card-gray p-8 stagger-animation">
            <div className="flex items-center justify-start mb-6">
              <div className="p-3 bg-accent rounded-full">
                <Building2 className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-left text-black mb-4">
              For Companies
            </h3>
            
            <p className="text-black text-left mb-6">
              Connect with thousands of superpower users to boost your marketing returns
            </p>
            
            <div className="text-left mb-6">
              <div className="text-3xl font-bold text-black">{counts.company_count.toLocaleString()}</div>
              <div className="text-sm text-black">companies joined</div>
            </div>
            
            <form onSubmit={handleCompanySubmit} className="space-y-4">
              <Input type="email" placeholder="Company email" value={companyEmail} onChange={e => setCompanyEmail(e.target.value)} className="w-full" required />
              <Button type="submit" className="w-full font-semibold text-black inline-flex items-center justify-center gap-2" style={{backgroundColor: '#f9fd8f'}} disabled={isLoading.company}>
                {isLoading.company ? 'Joining...' : 'Get Early Access'}
                <ArrowRight className="h-4 w-4 text-black" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default WaitlistSection;
