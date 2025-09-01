import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const EarnSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { elementRef: titleRef, isVisible: titleVisible } = useIntersectionObserver({ threshold: 0.3 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of cards
            setTimeout(() => setVisibleCards(prev => [true, prev[1], prev[2]]), 0);
            setTimeout(() => setVisibleCards(prev => [true, true, prev[2]]), 200);
            setTimeout(() => setVisibleCards(prev => [true, true, true]), 400);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const earnCards = [
    {
      image: '/intro_insta (16).png?v=1',
      title: 'Refer a friend for a job',
      description: 'Connect talented friends with cool opportunities',
      earning: 'Earn up to $1,000',
    },
    {
      image: '/pexels-fabriziovelez-14061042.jpg',
      title: 'Refer a friend for a product',
      description: 'Share products you love with your network',
      earning: 'Earn up to $200',
    },
    {
      image: '/pexels-arthur-arata-924593727-20468184.jpg',
      title: 'Refer home movers',
      description: 'Connect homeowners with trusted real estate professionals',
      earning: 'Earn up to $250',
    },
  ];

  return (
    <section id="earn" className="intro-section bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 animate-on-scroll animate-fade-right ${titleVisible ? 'visible' : ''}`} ref={titleRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Earn for every match
          </h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
            Turn your match-making skills into income with diverse referral opportunities
          </p>
        </div>

        <div className="flex overflow-x-auto gap-3 pb-4 px-4 -mx-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:px-0 md:mx-0 md:snap-none">
          {earnCards.map((card, index) => (
            <div
              key={index}
              className={`intro-card overflow-hidden transition-all duration-700 flex-shrink-0 w-64 snap-center md:w-auto md:flex-shrink md:snap-align-none ${
                visibleCards[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#f9fd8f]/10" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-lg font-bold mb-1">{card.earning}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="intro-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Other daily opportunities
            </h3>
            <p className="text-muted-foreground mb-6">
              From tech startups to established businesses, discover new ways to earn every day through our growing marketplace of referral opportunities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-foreground">Tech Jobs</div>
                <div className="text-sm text-muted-foreground">$300-1500</div>
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">SaaS Products</div>
                <div className="text-sm text-muted-foreground">$50-300</div>
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">Services</div>
                <div className="text-sm text-muted-foreground">$100-500</div>
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">User Testing</div>
                <div className="text-sm text-muted-foreground">$20-200</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnSection;
