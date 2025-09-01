import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const AboutUs = () => {
  const [activeCategory, setActiveCategory] = useState('about-intro');
  const [cityInput, setCityInput] = useState('');
  const [opportunityInput, setOpportunityInput] = useState('');
  const [citySubmitting, setCitySubmitting] = useState(false);
  const [opportunitySubmitting, setOpportunitySubmitting] = useState(false);
  const { toast } = useToast();
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

  const handleCitySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cityInput.trim()) return;

    setCitySubmitting(true);
    try {
      const { error } = await supabase
        .from('city_suggestions')
        .insert({ city_name: cityInput.trim() });

      if (error) throw error;

      toast({
        title: "City suggestion submitted!",
        description: "Thank you for your suggestion. We'll consider it for future expansion.",
      });
      setCityInput('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your suggestion. Please try again.",
        variant: "destructive",
      });
    } finally {
      setCitySubmitting(false);
    }
  };

  const handleOpportunitySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!opportunityInput.trim()) return;

    setOpportunitySubmitting(true);
    try {
      const { error } = await supabase
        .from('opportunity_type_suggestions')
        .insert({ opportunity_type: opportunityInput.trim() });

      if (error) throw error;

      toast({
        title: "Opportunity type submitted!",
        description: "Thank you for your suggestion. We'll consider adding this opportunity type.",
      });
      setOpportunityInput('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your suggestion. Please try again.",
        variant: "destructive",
      });
    } finally {
      setOpportunitySubmitting(false);
    }
  };

  const renderFAQContent = (faq: any, index: number) => {
    const isCityQuestion = faq.question === 'In which cities operates?';
    const isOpportunityQuestion = faq.question === 'What kind of opportunities can I discover in intro?';

    return (
      <AccordionContent className="px-4 pb-4 pt-2">
        <p className="text-muted-foreground leading-relaxed mb-4">{faq.answer}</p>
        
        {isCityQuestion && (
          <form onSubmit={handleCitySubmit} className="space-y-3">
            <Input
              type="text"
              placeholder="Enter your city name..."
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              className="w-full"
              disabled={citySubmitting}
            />
            <Button 
              type="submit" 
              className="intro-button-cta"
              disabled={citySubmitting || !cityInput.trim()}
            >
              {citySubmitting ? 'Submitting...' : 'Submit City'}
            </Button>
          </form>
        )}
        
        {isOpportunityQuestion && (
          <form onSubmit={handleOpportunitySubmit} className="space-y-3">
            <Input
              type="text"
              placeholder="Enter opportunity type (e.g., Job referrals, Product reviews...)..."
              value={opportunityInput}
              onChange={(e) => setOpportunityInput(e.target.value)}
              className="w-full"
              disabled={opportunitySubmitting}
            />
            <Button 
              type="submit" 
              className="intro-button-cta"
              disabled={opportunitySubmitting || !opportunityInput.trim()}
            >
              {opportunitySubmitting ? 'Submitting...' : 'Submit Opportunity Type'}
            </Button>
          </form>
        )}
      </AccordionContent>
    );
  };

  const categories = [
    { id: 'about-intro', label: 'About Intro', count: 4 },
    { id: 'opportunities', label: 'Opportunities', count: 4 },
    { id: 'your-network', label: 'Your Network', count: 2 },
    { id: 'earnings', label: 'Earnings', count: 2 },
  ];

  const faqs = {
    'about-intro': [
      {
        question: 'What is intro?',
        answer: 'Intro is a referral marketplace that connects opportunities with people who know people. Companies that are on intro post opportunities. Members who have signed up can see them and refer a friend from their network.'
      },
      {
        question: 'In which cities operates?',
        answer: 'intro is actively searching for its first few locations. Submit your location here.'
      },
      {
        question: 'Is intro free?',
        answer: 'intro is completely free for its Members.'
      },
      {
        question: 'How does intro make money?',
        answer: 'intro charges a referral fee to businesses for each match to keep its operation free for Members.'
      }
    ],
    opportunities: [
      {
        question: 'What is an opportunity?',
        answer: 'An opportunity is a business\' need, something a business is interested in closing. You can see it as a lead. Opportunities can be open jobs, new customers, product reviews, or anything else you can think of that a company builds referral programs for.'
      },
      {
        question: 'What kind of opportunities can I discover in intro?',
        answer: 'intro is actively discovering which are the most relevant opportunity types for its members. Submit the kind of opportunities you would like to see on intro here.'
      },
      {
        question: 'How will I discover opportunities to earn?',
        answer: 'Businesses post opportunities on intro on a daily basis. By leveraging your profile, your network and businesses\' opportunities, we can notify you whenever we believe a powerful match is in your sight. All information is kept private and secure.'
      },
      {
        question: 'How easy is to apply to opportunities?',
        answer: 'Once you tap into an opportunity, you can check its requirements. Then, you can submit your referral with a single push of a button. Different opportunities may require additional follow-ups.'
      }
    ],
    'your-network': [
      {
        question: 'What is my network?',
        answer: 'Your network is the people you know well and are on intro too. Just like LinkedIn, but way more data and future-oriented. If you increase it, your chances of matches will be higher.'
      },
      {
        question: 'What do you know about my network?',
        answer: 'We take privacy really seriously. While intro leverages your and your network profiles\' data upon your agreement, that same data is not shared with the businesses intro operates, nor is publicly available.'
      }
    ],
    earnings: [
      {
        question: 'What is a match?',
        answer: 'A match is a completed/converted referral. When you submit a referral, that referral will undergo a screening process and eventually be converted. Cheers, you\'ve got a match.'
      },
      {
        question: 'How much money will I earn?',
        answer: 'There are no limits to what you can earn on intro. However, do not expect this to be your first source of income.'
      }
    ]
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

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <img
              src="/lovable-uploads/9a914b7c-fb2c-459a-8bc9-4e48fe62d7d6.png"
              alt="Let's get social again"
              className="w-full h-auto rounded-lg shadow-intro-card object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Intro is a referral marketplace that connects opportunities with people who know people.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="space-y-6">
              {[
                "Companies post opportunities.",
                "Members can follow up and refer a friend.",
                "If the referral is a success, we call it a match.",
                "Matches are what pay you good money."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-intro-card">
                    <span className="text-primary-foreground font-semibold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-foreground font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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