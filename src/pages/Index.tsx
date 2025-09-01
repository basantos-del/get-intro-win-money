import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WaitlistSection from '@/components/WaitlistSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import EarnSection from '@/components/EarnSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WaitlistSection />
      <AboutSection />
      
      {/* Image and CTA Section */}
      <section className="intro-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative overflow-hidden rounded-card mb-8">
              <img 
                src="/lovable-uploads/7ce0f7b7-af3c-4602-81a1-69871694bc24.png" 
                alt="Where matchmaking earns you money - Person silhouette at sunset with ocean waves"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            
            <Link to="/about-us">
              <Button className="intro-button-primary inline-flex items-center gap-2">
                Know more
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <FeaturesSection />
      <EarnSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;