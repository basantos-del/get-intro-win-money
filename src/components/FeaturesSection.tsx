import { Zap, Calendar, Wallet } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useState } from 'react';

const FeaturesSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      icon: Wallet,
      title: 'Easy Withdrawal',
      description: 'Instant payouts to your preferred method. Track your earnings real-time and be paid in your desired currency',
      image: '/Easy_withdrawal.png',
    },
    {
      icon: Calendar,
      title: 'Daily Opportunities',
      description: 'Fresh referral opportunities delivered daily. Never miss a chance to earn',
      image: '/lovable-uploads/9421df9c-0b08-43b8-939e-2e26ad4ea2d2.png',
    },
    {
      icon: Zap,
      title: 'Fast Referral',
      description: 'Submit referrals in seconds. No complicated forms or lengthy procedures',
      image: '/lovable-uploads/ba0e1f00-b25e-476e-b81c-f4fc77b4a4a4.png',
    },
  ];

  return (
    <section id="features" className="intro-section bg-muted/20" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 animate-on-scroll animate-scale ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Making an intro has never been so easy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Intro is designed to make referrals effortless and rewarding
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Features List */}
          <div className="space-y-4 lg:space-y-6 flex flex-col justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-3 lg:p-4 cursor-pointer transition-all duration-300 rounded-lg ${
                  activeFeature === index 
                    ? 'bg-accent text-accent-foreground' 
                    : 'hover:bg-accent/10'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-center gap-3 lg:gap-4 mb-2 lg:mb-3">
                  <div className={`p-2 lg:p-3 rounded-full transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-accent-foreground/20' 
                      : 'bg-accent'
                  }`}>
                    <feature.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${
                      activeFeature === index 
                        ? 'text-accent-foreground' 
                        : 'text-accent-foreground'
                    }`} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold">
                    {feature.title}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed ml-11 lg:ml-14 ${
                  activeFeature === index 
                    ? 'text-accent-foreground/80' 
                    : 'text-muted-foreground'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mockup Display */}
          <div className="relative min-h-[400px] lg:min-h-[500px] flex flex-col items-center justify-center">
            <div className="relative flex justify-center">
              <img
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="max-w-[80%] lg:max-w-[50%] h-auto transition-all duration-500 ease-in-out"
              />
            </div>
            
            {/* Mobile Navigation Arrows */}
            <div className="flex items-center justify-center gap-8 mt-6 md:hidden">
              <button
                onClick={() => setActiveFeature(activeFeature > 0 ? activeFeature - 1 : features.length - 1)}
                className="p-2 rounded-full hover:bg-muted/20 transition-colors"
                aria-label="Previous feature"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button
                onClick={() => setActiveFeature(activeFeature < features.length - 1 ? activeFeature + 1 : 0)}
                className="p-2 rounded-full hover:bg-muted/20 transition-colors"
                aria-label="Next feature"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
