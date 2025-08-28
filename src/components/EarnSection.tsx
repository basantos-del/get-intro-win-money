import { useEffect, useRef, useState } from 'react';
import jobReferralImage from '@/assets/job-referral.jpg';
import productReferralImage from '@/assets/product-referral.jpg';
import houseReferralImage from '@/assets/house-referral.jpg';

const EarnSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      image: jobReferralImage,
      title: 'Refer a friend for a job',
      description: 'Connect talented friends with cool opportunities',
      earning: 'Earn up to $1,000',
    },
    {
      image: productReferralImage,
      title: 'Refer a friend for a product',
      description: 'Share products you love with your network',
      earning: 'Earn up to $200',
    },
    {
      image: houseReferralImage,
      title: 'Refer home movers',
      description: 'Connect homeowners with trusted real estate professionals',
      earning: 'Earn up to $250',
    },
  ];

  return (
    <section id="earn" className="intro-section bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Earn for every winning referral
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn your network into income with diverse referral opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {earnCards.map((card, index) => (
            <div
              key={index}
              className={`intro-card overflow-hidden group cursor-pointer transition-all duration-700 ${
                visibleCards[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
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
                <div className="text-sm text-muted-foreground">$300-800</div>
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
                <div className="text-lg font-bold text-foreground">Investments</div>
                <div className="text-sm text-muted-foreground">$500-2000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnSection;
