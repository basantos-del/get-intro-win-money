import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Badge } from '@/components/ui/badge';
const EarnSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const [activeCategory, setActiveCategory] = useState('refer');
  const [mobileImageIndex, setMobileImageIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const {
    elementRef: titleRef,
    isVisible: titleVisible
  } = useIntersectionObserver({
    threshold: 0.3
  });
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger the animation of cards
          setTimeout(() => setVisibleCards(prev => [true, prev[1], prev[2]]), 0);
          setTimeout(() => setVisibleCards(prev => [true, true, prev[2]]), 200);
          setTimeout(() => setVisibleCards(prev => [true, true, true]), 400);
        }
      });
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const earnCards = [{
    image: '/lovable-uploads/0b2da4f4-6a3a-49da-b829-08f0a205e2a0.png',
    title: 'Refer a friend for a job',
    description: 'Connect talented friends with cool opportunities',
    earning: 'Earn up to €1,000'
  }, {
    image: '/lovable-uploads/048b51f4-b332-4dfc-9157-eae58bafcc49.png',
    title: 'Refer a friend for a product',
    description: 'Share products you love with your network',
    earning: 'Earn up to €200'
  }, {
    image: '/lovable-uploads/019abdf9-55a1-4ec0-92c6-279b733cedf0.png',
    title: 'Refer home movers',
    description: 'Connect homeowners with trusted real estate professionals',
    earning: 'Earn up to €250'
  }];
  return <section id="earn" className="intro-section bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 animate-on-scroll animate-fade-right ${titleVisible ? 'visible' : ''}`} ref={titleRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-left">
            Connect with brands you love
          </h2>
          <p className="text-xl text-muted-foreground max-w-5xl mb-8 text-left">
            Earn by referring, promoting or saving. Earning is your next choice 
          </p>
          
          {/* Badge Filters */}
          <div className="flex flex-wrap gap-2 justify-start mb-8">
            <Badge variant={activeCategory === 'refer' ? "default" : "outline"} className={`cursor-pointer transition-all hover:shadow-md px-4 py-2 ${activeCategory === 'refer' ? 'bg-primary text-primary-foreground shadow-lg' : 'hover:bg-accent'}`} onClick={() => setActiveCategory('refer')}>
              Refer
            </Badge>
            <Badge variant={activeCategory === 'promote' ? "default" : "outline"} className={`cursor-pointer transition-all hover:shadow-md px-4 py-2 ${activeCategory === 'promote' ? 'bg-primary text-primary-foreground shadow-lg' : 'hover:bg-accent'}`} onClick={() => setActiveCategory('promote')}>
              Promote <span className="ml-1 text-xs opacity-70">soon</span>
            </Badge>
            <Badge variant={activeCategory === 'save' ? "default" : "outline"} className={`cursor-pointer transition-all hover:shadow-md px-4 py-2 ${activeCategory === 'save' ? 'bg-primary text-primary-foreground shadow-lg' : 'hover:bg-accent'}`} onClick={() => setActiveCategory('save')}>
              Save <span className="ml-1 text-xs opacity-70">soon</span>
            </Badge>
          </div>
        </div>

        {/* Content based on active category */}
        {activeCategory === 'refer' && <div className="flex overflow-x-auto gap-3 pb-4 px-4 -mx-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:px-0 md:mx-0 md:snap-none">
            {earnCards.map((card, index) => <div key={index} className={`intro-card-gray overflow-hidden transition-all duration-700 flex-shrink-0 w-64 snap-center md:w-auto md:flex-shrink md:snap-align-none ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="aspect-[3/4] sm:aspect-[4/3] relative overflow-hidden">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 right-4 text-foreground">
                    <div className="text-lg font-bold mb-1 text-white">{card.earning}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">
                    {card.title}
                  </h3>
                  <p className="text-black leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>)}
          </div>}

        {(activeCategory === 'promote' || activeCategory === 'save') && <div className="flex justify-center">
            <div className="intro-card-gray p-12 max-w-md mx-auto text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                Coming soon to intro
              </h3>
              <p className="text-black">
                This feature is currently in development and will be available soon.
              </p>
            </div>
          </div>}

        <div className="mt-16 w-full md:mt-16">
          {/* Visual Hint for Desktop */}
          

          <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center md:p-4 group cursor-pointer">
            {/* Mobile Navigation Arrows */}
            <button className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white" onClick={() => setMobileImageIndex(mobileImageIndex === 0 ? 1 : 0)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            
            <button className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white" onClick={() => setMobileImageIndex(mobileImageIndex === 0 ? 1 : 0)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Mobile Image Indicators */}
            <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex gap-2">
              <div className={`w-2 h-2 rounded-full transition-all ${mobileImageIndex === 0 ? 'bg-white' : 'bg-white/40'}`}></div>
              <div className={`w-2 h-2 rounded-full transition-all ${mobileImageIndex === 1 ? 'bg-white' : 'bg-white/40'}`}></div>
            </div>

            {/* First Image - FC 26 Rewards */}
            <div className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out z-20 ${mobileImageIndex === 1 ? 'md:block opacity-0 md:opacity-100' : 'opacity-100'}`}>
              <img src="/lovable-uploads/9debbedf-4688-4718-acf2-e57d93796bb7.png" alt="FC 26 Rewards - EA Sports loyalty campaign" className="w-full h-full object-contain md:rounded-lg" />
            </div>
            
            {/* Second Image - You champion walking with hover reveal */}
            <div className={`absolute inset-0 w-full h-full z-30 transition-all duration-1000 ease-out ${mobileImageIndex === 0 ? 'md:block opacity-0 md:group-hover:opacity-100' : 'opacity-100'}`}>
              <img src="/lovable-uploads/263d5b74-e072-4219-8e01-ef2294a89f11.png" alt="You champion walking - Pompeii Brand loyalty campaign" className="w-full h-full object-contain md:rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default EarnSection;