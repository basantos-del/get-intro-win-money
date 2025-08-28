import { Zap, Calendar, Wallet } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useState } from 'react';

const FeaturesSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      icon: Zap,
      title: 'Fast Referral',
      description: 'Submit referrals in seconds. No complicated forms or lengthy procedures',
      image: '/Fast_referral.png',
    },
    {
      icon: Calendar,
      title: 'Daily Opportunities',
      description: 'Fresh referral opportunities delivered daily. Never miss a chance to earn',
      image: '/Daily_opportunities.png',
    },
    {
      icon: Wallet,
      title: 'Easy Withdrawal',
      description: 'Instant payouts to your preferred method. Track your earnings real-time',
      image: '/Easy_withdrawal.png',
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-4 cursor-pointer transition-all duration-300 rounded-lg ${
                  activeFeature === index 
                    ? 'bg-accent text-accent-foreground' 
                    : 'hover:bg-accent/10'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-full transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-accent-foreground/20' 
                      : 'bg-accent'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      activeFeature === index 
                        ? 'text-accent-foreground' 
                        : 'text-accent-foreground'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold">
                    {feature.title}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed ml-14 ${
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
          <div className="relative min-h-[500px] flex items-center justify-center">
            <div className="relative">
              <img
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="max-w-[50%] h-auto transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
