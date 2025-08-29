import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';
const AboutSection = () => {
  const {
    elementRef,
    isVisible
  } = useIntersectionObserver({
    threshold: 0.3
  });

  const waitlistCount = useCountUp({ end: 2588, isVisible, delay: 200 });
  const companiesCount = useCountUp({ end: 232, isVisible, delay: 600 });
  const earningsCount = useCountUp({ end: 500, isVisible, delay: 1000 });
  return <section id="about" className="intro-section bg-background" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`animate-on-scroll animate-fade-left ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              You're an intro away from saving the money you needed
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">The place where referral programs meet people who know people</p>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="intro-card p-8 stagger-animation">
              <div className="text-4xl font-bold text-foreground mb-4">{waitlistCount.toLocaleString()}</div>
              <div className="text-lg font-medium text-foreground mb-2">Waitlist Members</div>
              <div className="text-muted-foreground">Building extra income through referrals</div>
            </div>
            
            <div className="intro-card p-8 stagger-animation">
              <div className="text-4xl font-bold text-foreground mb-4">{companiesCount}</div>
              <div className="text-lg font-medium text-foreground mb-2">Partner Companies</div>
              <div className="text-muted-foreground">Seeking quality referrals through intro</div>
            </div>
            
            <div className="intro-card p-8 stagger-animation">
              <div className="text-4xl font-bold text-foreground mb-4">${earningsCount}k+</div>
              <div className="text-lg font-medium text-foreground mb-2">Accummulated Earnings</div>
              <div className="text-muted-foreground">Available for community members</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;