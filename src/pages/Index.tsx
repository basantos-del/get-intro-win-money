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
      
      {/* Carousel and CTA Section */}
      <section className="intro-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="relative mb-8">
              <div className="overflow-hidden rounded-card">
                <div 
                  className="flex gap-4 animate-scroll-left hover:pause-animation"
                  style={{
                    animation: 'scroll-left 60s linear infinite',
                    width: 'calc(300px * 20)', // Adjust based on number of images
                  }}
                >
                  {/* Repeat images for seamless loop */}
                  {[1, 2].map((set) => (
                    <div key={set} className="flex gap-4">
                      <div className="flex-shrink-0 w-72 transition-transform duration-300 hover:scale-105">
                        <img 
                          src="/lovable-uploads/2af6d822-1285-4fab-b10e-878e04eaf5af.png" 
                          alt="EA FC London Studios tour opportunity"
                          className="w-full h-auto rounded-lg shadow-md"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-shrink-0 w-72 transition-transform duration-300 hover:scale-105">
                        <img 
                          src="/lovable-uploads/f50eb74c-b5bb-42cb-a420-ffd966ce2fd5.png" 
                          alt="Paloma Wool loyalty reward - 15€ discount"
                          className="w-full h-auto rounded-lg shadow-md"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-shrink-0 w-72 transition-transform duration-300 hover:scale-105">
                        <img 
                          src="/lovable-uploads/8342e09d-0631-482b-ada6-6dc9ed02fd51.png" 
                          alt="Lovable credits bonus - 200 credits reward"
                          className="w-full h-auto rounded-lg shadow-md"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-shrink-0 w-72 transition-transform duration-300 hover:scale-105">
                        <img 
                          src="/lovable-uploads/929c57b6-9db2-474c-88d4-47cebe65ef80.png" 
                          alt="John M - Software Engineer profile"
                          className="w-full h-auto rounded-lg shadow-md"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-shrink-0 w-72 transition-transform duration-300 hover:scale-105">
                        <img 
                          src="/lovable-uploads/020f5297-c1d9-4f4e-ae0b-d3417da2d05b.png" 
                          alt="Job openings with Sword Health Software Engineer position"
                          className="w-full h-auto rounded-lg shadow-md"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-shrink-0 w-72 transition-transform duration-300 hover:scale-105">
                        <img 
                          src="/lovable-uploads/5a87d000-5698-4b6a-9bad-52f3ae63c916.png" 
                          alt="Overview with Sword Health and Microsoft opportunities"
                          className="w-full h-auto rounded-lg shadow-md"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-shrink-0 w-72 transition-transform duration-300 hover:scale-105">
                        <img 
                          src="/lovable-uploads/4a603bc7-2612-485b-97be-5b4f63b2071b.png" 
                          alt="Repsol discount - 8,99€ off next charge"
                          className="w-full h-auto rounded-lg shadow-md"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-shrink-0 w-72 transition-transform duration-300 hover:scale-105">
                        <img 
                          src="/lovable-uploads/b202c432-1f32-4cde-b605-067625804c48.png" 
                          alt="EA Sports backstage tour London studios"
                          className="w-full h-auto rounded-lg shadow-md"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-shrink-0 w-72 transition-transform duration-300 hover:scale-105">
                        <img 
                          src="/lovable-uploads/f5840f56-7ae4-4008-b9db-4d417d012aa7.png" 
                          alt="Tesla Model Y launch - Free test drive opportunity"
                          className="w-full h-auto rounded-lg shadow-md"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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