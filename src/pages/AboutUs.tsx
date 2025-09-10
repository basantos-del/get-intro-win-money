import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
const AboutUs = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState('loyalty');

  // SEO meta tags for About Us page
  React.useEffect(() => {
    document.title = "About Us - Intro | The Referral Marketplace";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Intro, the referral marketplace connecting opportunities with people who know people. Discover how we help you earn money through successful referrals.');
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://useintro.co/about-us';

    // Add structured data for About page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Intro - The Referral Marketplace",
      "description": "Learn about Intro, the referral marketplace connecting opportunities with people who know people.",
      "url": "https://useintro.co/about-us",
      "mainEntity": {
        "@type": "Organization",
        "name": "Intro",
        "description": "A referral marketplace that connects opportunities with people who know people."
      }
    };
    let script = document.querySelector('script[data-page="about"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script') as HTMLScriptElement;
      script.type = 'application/ld+json';
      script.setAttribute('data-page', 'about');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
    return () => {
      // Cleanup
      document.title = "Intro - Referral Marketplace | Earn Money Referring Friends for Jobs";
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Join the #1 referral marketplace. Earn up to $5,000 referring friends for jobs, products, and opportunities. Turn your network into passive income with daily referral opportunities.');
      }
    };
  }, []);
  const {
    elementRef,
    isVisible
  } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  const {
    elementRef: secondElementRef,
    isVisible: secondIsVisible
  } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  const handleJoinWaitlist = () => {
    navigate('/', {
      replace: true
    });
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById('waitlist');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, 100);
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {selectedCategory === 'loyalty' ? 'the loyalty marketplace' : 'the referral marketplace'}
          </h1>
        </div>

        {/* Mobile Tabs */}
        <div className="block lg:hidden mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            <button onClick={() => setSelectedCategory('loyalty')} className={`flex-1 px-4 py-3 rounded-md transition-colors text-center ${selectedCategory === 'loyalty' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
              Loyalty marketplace
            </button>
            
            <button onClick={() => setSelectedCategory('referral')} className={`flex-1 px-4 py-3 rounded-md transition-colors text-center ${selectedCategory === 'referral' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
              Referral marketplace
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Content */}
        <div className="block lg:hidden mb-16">
          {selectedCategory === 'loyalty' ? <>
              {/* Referral Marketplace Content */}
              {/* Loyalty Marketplace Content */}
              <div className="animate-fade-in">
                <div className="space-y-6 mb-16">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Intro is a referral and loyalty marketplace that connects opportunities with people who know brands and people.
                  </p>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Brands you love and are regular on intro. They post their loyalty programs here to engage with you: that "if you spend 50€ you earn 15€ on your next discount" kind of thing. If you're a consumer, you will be able to tap into these programs.
                  </p>
                </div>

                {/* First Photo Gallery Section */}
                <div className="mb-16 w-full animate-fade-in">
                  <div className="relative lg:flex lg:gap-4 lg:justify-center">
                    {/* Mobile Gallery with Overlap */}
                    <div className="lg:hidden relative">
                      <div className="flex overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <div className="flex-shrink-0 w-72 snap-center">
                          <img src="/lovable-uploads/6a079f7b-6ef5-48c6-9676-8b29e29174e5.png" alt="Paloma Wool loyalty program offer" className="w-full h-auto object-cover rounded-lg" />
                        </div>
                        <div className="flex-shrink-0 w-72 -ml-16 snap-center">
                          <img src="/lovable-uploads/6704e094-96be-448d-b165-0afc942301e6.png" alt="Lovable credits reward program" className="w-full h-auto object-cover rounded-lg" />
                        </div>
                        <div className="flex-shrink-0 w-72 -ml-16 snap-center">
                          <img src="/lovable-uploads/108f417b-49f6-499c-b01c-fac38726f490.png" alt="Repsol discount program" className="w-full h-auto object-cover rounded-lg" />
                        </div>
                      </div>
                      
                      {/* Scroll Indicators */}
                      <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                        <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
                          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Desktop Gallery */}
                    <div className="hidden lg:flex gap-4">
                      <div className="w-64">
                        <img src="/lovable-uploads/6a079f7b-6ef5-48c6-9676-8b29e29174e5.png" alt="Paloma Wool loyalty program offer" className="w-full h-auto object-cover rounded-lg" />
                      </div>
                      <div className="w-64">
                        <img src="/lovable-uploads/6704e094-96be-448d-b165-0afc942301e6.png" alt="Lovable credits reward program" className="w-full h-auto object-cover rounded-lg" />
                      </div>
                      <div className="w-64">
                        <img src="/lovable-uploads/108f417b-49f6-499c-b01c-fac38726f490.png" alt="Repsol discount program" className="w-full h-auto object-cover rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-16">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    But there's more than savings opportunities. If you're a real brand ambassador, brands can engage with you for big-time rewards. Shooting a commercial, early access to new collections, special events, backstage access and other exclusive collabs.
                  </p>
                </div>

                    {/* Second Photo Gallery Section */}
                    <div className="mb-16 w-full animate-fade-in">
                      <div className="relative lg:flex lg:gap-4 lg:justify-center">
                        {/* Mobile Gallery with Overlap */}
                        <div className="lg:hidden relative">
                          <div className="flex overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <div className="flex-shrink-0 w-72 snap-center">
                              <img src="/lovable-uploads/85ef97b4-c2ee-4212-a5fc-f0fd48620de6.png" alt="Brand collaboration inbox messages" className="w-full h-auto object-cover rounded-lg" />
                            </div>
                            <div className="flex-shrink-0 w-72 -ml-16 snap-center">
                              <img src="/lovable-uploads/5b5850f3-738c-4e4c-b4dd-92ad940e4c38.png" alt="Tesla Model Y exclusive test drive opportunity" className="w-full h-auto object-cover rounded-lg" />
                            </div>
                            <div className="flex-shrink-0 w-72 -ml-16 snap-center">
                              <img src="/lovable-uploads/e1ac336b-1b89-4aa2-af9a-887692e14777.png" alt="EA Sports backstage tour opportunity" className="w-full h-auto object-cover rounded-lg" />
                            </div>
                          </div>
                          
                          {/* Scroll Indicators */}
                          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                            <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
                              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </div>
                          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                            <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
                              <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </div>
                        </div>

                        {/* Desktop Gallery */}
                        <div className="hidden lg:flex gap-4">
                          <div className="w-64">
                            <img src="/lovable-uploads/85ef97b4-c2ee-4212-a5fc-f0fd48620de6.png" alt="Brand collaboration inbox messages" className="w-full h-auto object-cover rounded-lg" />
                          </div>
                          <div className="w-64">
                            <img src="/lovable-uploads/5b5850f3-738c-4e4c-b4dd-92ad940e4c38.png" alt="Tesla Model Y exclusive test drive opportunity" className="w-full h-auto object-cover rounded-lg" />
                          </div>
                          <div className="w-64">
                            <img src="/lovable-uploads/e1ac336b-1b89-4aa2-af9a-887692e14777.png" alt="EA Sports backstage tour opportunity" className="w-full h-auto object-cover rounded-lg" />
                          </div>
                        </div>
                      </div>
                    </div>

                <div className="text-center">
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed font-bold">
                    Exciting isn't it?
                  </p>
                </div>
              </div>
            </> : <>
              {/* Referral Marketplace Content */}
              <div className="animate-fade-in">
                <div className="space-y-6 mb-16">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Intro is a referral and loyalty marketplace that connects opportunities with people who know brands and people.
                  </p>
                  
                  <div className="space-y-4">
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      Companies post <strong> referral opportunities</strong>. Members can refer a friend by checking matchmaking conditions. If the referral is a success, we call it a <strong>match</strong>. Matches pay you good money.
                    </p>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      Intro was born to provide everyone with a chance to <strong>earn extra money</strong>. No AI-talk nonsense, just real earning opportunities.
                    </p>
                  </div>
                </div>

                {/* Image Gallery Section */}
                <div className="mb-16 w-full animate-fade-in">
                  <div className="relative lg:flex lg:gap-4 lg:justify-center">
                    {/* Mobile Gallery with Overlap */}
                    <div className="lg:hidden relative">
                      <div className="flex overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <div className="flex-shrink-0 w-72 snap-center">
                          <img src="/lovable-uploads/3e973eee-3b02-42ec-b6ba-4e5b620a9a38.png" alt="Inmail conversation interface for referral opportunities" className="w-full h-auto object-cover rounded-lg" />
                        </div>
                        <div className="flex-shrink-0 w-72 -ml-16 snap-center">
                          <img src="/lovable-uploads/6e41af99-4285-4e14-ab68-b9bbfb7a1cc5.png" alt="Lovable referral program 200 credits bonus" className="w-full h-auto object-cover rounded-lg" />
                        </div>
                        <div className="flex-shrink-0 w-72 -ml-16 snap-center">
                          <img src="/lovable-uploads/0246df91-a737-4fd0-894c-0322b24a009a.png" alt="Tesla refer and earn 3500 credits program" className="w-full h-auto object-cover rounded-lg" />
                        </div>
                      </div>
                      
                      {/* Scroll Indicators */}
                      <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                        <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
                          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Desktop Gallery */}
                    <div className="hidden lg:flex gap-4">
                      <div className="w-80">
                        <img src="/lovable-uploads/3e973eee-3b02-42ec-b6ba-4e5b620a9a38.png" alt="Inmail conversation interface for referral opportunities" className="w-full h-auto object-cover rounded-lg" />
                      </div>
                      <div className="w-80">
                        <img src="/lovable-uploads/6e41af99-4285-4e14-ab68-b9bbfb7a1cc5.png" alt="Lovable referral program 200 credits bonus" className="w-full h-auto object-cover rounded-lg" />
                      </div>
                      <div className="w-80">
                        <img src="/lovable-uploads/0246df91-a737-4fd0-894c-0322b24a009a.png" alt="Tesla refer and earn 3500 credits program" className="w-full h-auto object-cover rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Text Section */}
                <div className="animate-fade-in">
                  <div className="space-y-6 mb-16">
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      You've done dozen of intros before. You've always been that kind of <strong>matchmaker friend</strong>. Seeing through the connections. Building bridges and opening doors. Intro has been built so that personality of yours starts to <strong>pay off</strong>.
                    </p>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      But we're not any kind of marketplace. <strong>We're not just easy money</strong>. A referral is not of any worth if it does not make a match. And loyalty programs or promotional collaborations only happen if you're a loyal brand fan. Once that happens, you're paid.
                    </p>
                  </div>

                  {/* New Image Section */}
                  <div className="mb-16 w-full animate-fade-in overflow-hidden">
                    <img src="/lovable-uploads/6127873d-beb8-4d00-9b7d-0f357d136165.png" alt="Your network is your net worth" className="w-full h-auto object-cover scale-95" />
                  </div>
                </div>
              </div>
            </>}
        </div>

        {/* Desktop Layout with Sidebar */}
        <div className="hidden lg:flex gap-8 mb-16">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-card rounded-lg p-4 border sticky top-24">
              <h3 className="font-semibold text-foreground mb-4">Explore the</h3>
              <div className="space-y-3">
                <button onClick={() => setSelectedCategory('loyalty')} className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${selectedCategory === 'loyalty' ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}>
                  Loyalty marketplace
                </button>
                
                <button onClick={() => setSelectedCategory('referral')} className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${selectedCategory === 'referral' ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}>
                  Referral marketplace
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {selectedCategory === 'loyalty' ? <>
                {/* Loyalty Marketplace Content */}
                <div ref={elementRef} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="space-y-6 mb-16">
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      Intro is a referral and loyalty marketplace that connects opportunities with people who know brands and people.
                    </p>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      Brands you love and are <strong>regular on intro.</strong> They post their loyalty programs here to engage with you: that "if you <strong>spend 50€ you earn 15€</strong> on your next purchase" kind of thing. If you're a consumer, you will be able to tap into these programs.
                    </p>
                  </div>

                  {/* First Photo Gallery Section */}
                  <div className="mb-16 w-full animate-fade-in">
                    <div className="flex gap-4 justify-center">
                      <div className="w-80">
                        <img src="/lovable-uploads/6a079f7b-6ef5-48c6-9676-8b29e29174e5.png" alt="Paloma Wool loyalty program offer" className="w-full h-auto object-cover rounded-lg" />
                      </div>
                      <div className="w-80">
                        <img src="/lovable-uploads/6704e094-96be-448d-b165-0afc942301e6.png" alt="Lovable credits reward program" className="w-full h-auto object-cover rounded-lg" />
                      </div>
                      <div className="w-80">
                        <img src="/lovable-uploads/108f417b-49f6-499c-b01c-fac38726f490.png" alt="Repsol discount program" className="w-full h-auto object-cover rounded-lg" />
                      </div>
                    </div>
                  </div>

                  <div ref={secondElementRef} className={`transition-all duration-1000 ${secondIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="space-y-6 mb-16">
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        But there's <strong>more than savings</strong> opportunities. If you're a real brand ambassador, brands can engage with you for <strong>big-time unique experiences.</strong> Shooting a commercial, early access to new collections, special events, backstage access and other exclusive collabs.
                      </p>
                    </div>

                    {/* Second Photo Gallery Section */}
                    <div className="mb-16 w-full animate-fade-in">
                      <div className="flex gap-4 justify-center">
                        <div className="w-80">
                          <img src="/lovable-uploads/85ef97b4-c2ee-4212-a5fc-f0fd48620de6.png" alt="Brand collaboration inbox messages" className="w-full h-auto object-cover rounded-lg" />
                        </div>
                        <div className="w-80">
                          <img src="/lovable-uploads/5b5850f3-738c-4e4c-b4dd-92ad940e4c38.png" alt="Tesla Model Y exclusive test drive opportunity" className="w-full h-auto object-cover rounded-lg" />
                        </div>
                        <div className="w-80">
                          <img src="/lovable-uploads/e1ac336b-1b89-4aa2-af9a-887692e14777.png" alt="EA Sports backstage tour opportunity" className="w-full h-auto object-cover rounded-lg" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-xl md:text-2xl text-foreground leading-relaxed font-bold text-left">
                        Exciting isn't it?
                      </p>
                    </div>
                  </div>
                </div>
              </> : <>
                {/* Referral Marketplace Content */}
                <div ref={elementRef} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="space-y-6 mb-16">
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      Intro is a referral and loyalty marketplace that connects opportunities with people who know brands and people.
                    </p>
                    
                    <div className="space-y-4">
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        Companies post <strong> referral opportunities</strong>. Members can refer a friend by checking matchmaking conditions. If the referral is a success, we call it a <strong>match</strong>. Matches pay you good money.
                      </p>
                      
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        Intro was born to provide everyone with a chance to <strong>earn extra money</strong>. No AI-talk nonsense, just real earning opportunities.
                      </p>
                    </div>
                  </div>

                  {/* Image Gallery Section */}
                  <div className="mb-16 w-full animate-fade-in">
                    <div className="flex gap-4 justify-center">
                      <div className="w-80">
                        <img src="/lovable-uploads/3e973eee-3b02-42ec-b6ba-4e5b620a9a38.png" alt="Inmail conversation interface for referral opportunities" className="w-full h-auto object-cover rounded-lg" />
                      </div>
                      <div className="w-80">
                        <img src="/lovable-uploads/6e41af99-4285-4e14-ab68-b9bbfb7a1cc5.png" alt="Lovable referral program 200 credits bonus" className="w-full h-auto object-cover rounded-lg" />
                      </div>
                      <div className="w-80">
                        <img src="/lovable-uploads/0246df91-a737-4fd0-894c-0322b24a009a.png" alt="Tesla refer and earn 3500 credits program" className="w-full h-auto object-cover rounded-lg" />
                      </div>
                    </div>
                  </div>

                  {/* Second Text Section */}
                  <div ref={secondElementRef} className={`transition-all duration-1000 ${secondIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="space-y-6 mb-16">
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        You've done dozen of intros before. You've always been that kind of <strong>matchmaker friend</strong>. Seeing through the connections. Building bridges and opening doors. Intro has been built so that personality of yours starts to <strong>pay off</strong>.
                      </p>
                      
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        But we're not any kind of marketplace. <strong>We're not just easy money</strong>. A referral is not of any worth if it does not make a match. And loyalty programs or promotional collaborations only happen if you're a loyal brand fan. Once that happens, you're paid.
                      </p>
                    </div>

                    {/* New Image Gallery Section */}
                    <div className="mb-16 w-full animate-fade-in">
                      <div className="relative lg:flex lg:gap-4 lg:justify-center">
                        {/* Mobile Gallery with Overlap */}
                        <div className="lg:hidden relative">
                          <div className="flex overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <div className="flex-shrink-0 w-72 snap-center">
                              <img src="/lovable-uploads/c33dff09-ab95-483d-9872-c03c6a2dd2d7.png" alt="Job opportunities overview with Sword Health and Microsoft positions" className="w-full h-auto object-cover rounded-lg" />
                            </div>
                            <div className="flex-shrink-0 w-72 -ml-16 snap-center">
                              <img src="/lovable-uploads/c9c06929-0e89-464e-b835-f45c70e0399b.png" alt="Job opening details with top matches and referral options" className="w-full h-auto object-cover rounded-lg" />
                            </div>
                            <div className="flex-shrink-0 w-72 -ml-16 snap-center">
                              <img src="/lovable-uploads/c3d1d28c-72d4-4441-9b1e-7ac2dcddeaf4.png" alt="John M profile - Software Engineer for referral matching" className="w-full h-auto object-cover rounded-lg" />
                            </div>
                          </div>
                          
                          {/* Scroll Indicators */}
                          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                            <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
                              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </div>
                          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                            <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
                              <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </div>
                        </div>

                        {/* Desktop Gallery */}
                        <div className="hidden lg:flex gap-4">
                          <div className="w-80">
                            <img src="/lovable-uploads/c33dff09-ab95-483d-9872-c03c6a2dd2d7.png" alt="Job opportunities overview with Sword Health and Microsoft positions" className="w-full h-auto object-cover rounded-lg" />
                          </div>
                          <div className="w-80">
                            <img src="/lovable-uploads/c9c06929-0e89-464e-b835-f45c70e0399b.png" alt="Job opening details with top matches and referral options" className="w-full h-auto object-cover rounded-lg" />
                          </div>
                          <div className="w-80">
                            <img src="/lovable-uploads/c3d1d28c-72d4-4441-9b1e-7ac2dcddeaf4.png" alt="John M profile - Software Engineer for referral matching" className="w-full h-auto object-cover rounded-lg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>}
          </div>
        </div>

        {/* Additional Content Sections */}
        <div className="max-w-2xl mx-auto text-left py-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                We're on a mission to <strong>reimagine how referrals and loyalty programs work</strong>, both for members and businesses. Our goal is to create the top referral and loyalty marketplace, offering tons of opportunities for members to earn and new ways for businesses to leverage referral and loyalty programs.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                How it works
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Businesses post opportunities on intro. We carefully review and categorize each one, then connect them with members who are the right fit. Our core power lies in reimagining these connections, helping you unlock new <strong>daily opportunities</strong>.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Why join Us?
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                intro is designed to help you build <strong>the future you want</strong>. We know chasing your goals isn't easy, so we've built a platform that not only helps you earn cash through referrals but also opens doors to new collaborations. You join intro because you're social; you stay because you have <strong>bigger plans for yourself</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              We know we're just getting to know each other
            </p>
            <Button onClick={() => navigate('/faqs')} className="intro-button-primary">
              Check our FAQs
            </Button>
          </div>
        </div>

        {/* Full Width Image Section */}
        <div className="mt-16 w-full animate-fade-in overflow-hidden">
          <img src="/lovable-uploads/e10e4128-0adb-4523-a77d-116d7c8103d4.png" alt="Where matchmaking earns you money" className="w-full h-auto object-cover scale-95 -mb-8" />
        </div>
        
        {/* Join Waitlist CTA */}
        <div className="mt-8 text-center animate-bounce">
          <Button onClick={handleJoinWaitlist} className="intro-button-cta text-lg px-8 py-4">
            Join the Waitlist
          </Button>
        </div>
      </div>
      
      {/* Scroll overlay bar at bottom for all devices */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent pointer-events-none z-10"></div>
      
      <Footer />
    </div>;
};
export default AboutUs;
