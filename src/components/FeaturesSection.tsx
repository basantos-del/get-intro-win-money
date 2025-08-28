import { Zap, Calendar, Wallet } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const FeaturesSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const features = [
    {
      icon: Zap,
      title: 'Fast Referral',
      description: 'Submit referrals in seconds. No complicated forms or lengthy procedures.',
    },
    {
      icon: Calendar,
      title: 'Daily Opportunities',
      description: 'Fresh referral opportunities delivered daily. Never miss a chance to earn.',
    },
    {
      icon: Wallet,
      title: 'Easy Withdrawal',
      description: 'Instant payouts to your preferred payment method. Track your earnings in real-time.',
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

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="intro-card p-8 text-center stagger-animation group cursor-pointer"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-accent rounded-full group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-accent-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
