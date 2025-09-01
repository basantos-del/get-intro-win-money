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
import Footer from '@/components/Footer';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('about-intro');
  const [cityInput, setCityInput] = useState('');
  const [opportunityInput, setOpportunityInput] = useState('');
  const [citySubmitting, setCitySubmitting] = useState(false);
  const [opportunitySubmitting, setOpportunitySubmitting] = useState(false);
  const { toast } = useToast();

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
        </div>

        {/* Top Badge Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`cursor-pointer transition-all hover:shadow-md px-4 py-2 ${
                activeCategory === category.id 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'hover:bg-accent'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Badge>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Categories */}
          <div className="lg:w-1/4">
            <div className="intro-card p-6 sticky top-8 hidden lg:block">
              <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all text-left ${
                      activeCategory === category.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'hover:bg-accent text-foreground'
                    }`}
                  >
                    <span className="font-medium">{category.label}</span>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${
                        activeCategory === category.id
                          ? 'bg-primary-foreground text-primary'
                          : 'bg-destructive text-destructive-foreground'
                      }`}
                    >
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - FAQ Accordion */}
          <div className="lg:w-3/4">
            <div className="intro-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {categories.find(cat => cat.id === activeCategory)?.label}
                </h2>
                <Badge variant="secondary" className="bg-destructive text-destructive-foreground">
                  {categories.find(cat => cat.id === activeCategory)?.count}
                </Badge>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs[activeCategory as keyof typeof faqs]?.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline hover:bg-accent/50 px-4 py-4 rounded-lg transition-colors">
                      <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    {renderFAQContent(faq, index)}
                  </AccordionItem>
                ))}
              </Accordion>
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
            src="/lovable-uploads/c87dab29-5f64-49aa-bd17-0040b75b0c38.png"
            alt="Where matchmaking earns you money"
            className="w-full h-auto object-cover scale-95 -mb-8"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;