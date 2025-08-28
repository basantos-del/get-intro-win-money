import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WaitlistSection from '@/components/WaitlistSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import EarnSection from '@/components/EarnSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WaitlistSection />
      <AboutSection />
      <FeaturesSection />
      <EarnSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;