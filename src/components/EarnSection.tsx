import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Badge } from '@/components/ui/badge';

const EarnSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const [activeCategory, setActiveCategory] = useState('refer');
  const [carouselProgress, setCarouselProgress] = useState(0); // 0 = first image, 1 = second image
  const [isCarouselActive, setIsCarouselActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
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

  // Carousel scroll control
  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;

      const rect = carouselRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if carousel is in view
      if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.7) {
        setIsCarouselActive(true);
        
        // Calculate scroll progress within the carousel section
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight * 0.3 - rect.top) / (windowHeight * 0.4)));
        setCarouselProgress(scrollProgress);
        
        // Prevent default scrolling when carousel is active
        if (scrollProgress < 1) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      } else {
        setIsCarouselActive(false);
        document.body.style.overflow = 'auto';
      }
    };

    // Custom wheel event handler for carousel control
    const handleWheel = (e: WheelEvent) => {
      if (!isCarouselActive || !carouselRef.current) return;

      e.preventDefault();
      
      const delta = e.deltaY > 0 ? 0.02 : -0.02;
      setCarouselProgress(prev => Math.max(0, Math.min(1, prev + delta)));
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = 'auto';
    };
  }, [isCarouselActive]);

  const earnCards = [
    {
      image: '/lovable-uploads/0b2da4f4-6a3a-49da-b829-08f0a205e2a0.png',
      title: 'Refer a friend for a job',
      description: 'Connect talented friends with cool opportunities',
      earning: 'Earn up to €1,000',
    },
    {
      image: '/lovable-uploads/048b51f4-b332-4dfc-9157-eae58bafcc49.png',
      title: 'Refer a friend for a product',
      description: 'Share products you love with your network',
      earning: 'Earn up to €200',
    },
    {
      image: '/lovable-uploads/019abdf9-55a1-4ec0-92c6-279b733cedf0.png',
      title: 'Refer home movers',
      description: 'Connect homeowners with trusted real estate professionals',
      earning: 'Earn up to €250',
    },
  ];

  return (
    <section id="earn" className="intro-section bg-background" ref={sectionRef}>
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
            <Badge
              variant={activeCategory === 'refer' ? "default" : "outline"}
              className={`cursor-pointer transition-all hover:shadow-md px-4 py-2 ${
                activeCategory === 'refer' 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'hover:bg-accent'
              }`}
              onClick={() => setActiveCategory('refer')}
            >
              Refer
            </Badge>
            <Badge
              variant={activeCategory === 'promote' ? "default" : "outline"}
              className={`cursor-pointer transition-all hover:shadow-md px-4 py-2 ${
                activeCategory === 'promote' 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'hover:bg-accent'
              }`}
              onClick={() => setActiveCategory('promote')}
            >
              Promote <span className="ml-1 text-xs opacity-70">soon</span>
            </Badge>
            <Badge
              variant={activeCategory === 'save' ? "default" : "outline"}
              className={`cursor-pointer transition-all hover:shadow-md px-4 py-2 ${
                activeCategory === 'save' 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'hover:bg-accent'
              }`}
              onClick={() => setActiveCategory('save')}
            >
              Save <span className="ml-1 text-xs opacity-70">soon</span>
            </Badge>
          </div>
        </div>

        {/* Content based on active category */}
        {activeCategory === 'refer' && (
          <div className="flex overflow-x-auto gap-3 pb-4 px-4 -mx-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:px-0 md:mx-0 md:snap-none">
            {earnCards.map((card, index) => (
              <div
                key={index}
                className={`intro-card-gray overflow-hidden transition-all duration-700 flex-shrink-0 w-64 snap-center md:w-auto md:flex-shrink md:snap-align-none ${
                  visibleCards[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="aspect-[3/4] sm:aspect-[4/3] relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
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
              </div>
            ))}
          </div>
        )}

        {(activeCategory === 'promote' || activeCategory === 'save') && (
          <div className="flex justify-center">
            <div className="intro-card-gray p-12 max-w-md mx-auto text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                Coming soon to intro
              </h3>
              <p className="text-black">
                This feature is currently in development and will be available soon.
              </p>
            </div>
          </div>
        )}

        <div className="mt-16 w-full" ref={carouselRef}>
          <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">
            {/* 3D Carousel Container */}
            <div className="relative w-full max-w-4xl h-full transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
              {/* First Image - Front */}
              <div 
                className="absolute inset-0 w-full h-full transition-all duration-700 ease-out"
                style={{
                  transform: `translateZ(${50 - carouselProgress * 100}px) rotateY(${carouselProgress * -15}deg)`,
                  opacity: 1 - carouselProgress * 0.3
                }}
              >
                <img
                  src="/lovable-uploads/9debbedf-4688-4718-acf2-e57d93796bb7.png"
                  alt="FC 26 Rewards - EA Sports loyalty campaign"
                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                />
              </div>
              
              {/* Second Image - Behind, coming forward */}
              <div 
                className="absolute inset-0 w-full h-full transition-all duration-700 ease-out"
                style={{
                  transform: `translateZ(${-50 + carouselProgress * 100}px) rotateY(${15 - carouselProgress * 15}deg)`,
                  opacity: 0.7 + carouselProgress * 0.3
                }}
              >
                <img
                  src="/lovable-uploads/717ede88-68ed-4b67-bf19-e5b3135b1f09.png"
                  alt="You champion walking - Pompeii Brand loyalty campaign"
                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
            
            {/* Progress indicator */}
            {isCarouselActive && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${carouselProgress < 0.5 ? 'bg-white' : 'bg-white/40'}`} />
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${carouselProgress >= 0.5 ? 'bg-white' : 'bg-white/40'}`} />
              </div>
            )}
            
            {/* Scroll hint */}
            {isCarouselActive && carouselProgress < 0.1 && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-sm animate-pulse">
                Scroll to explore
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnSection;
