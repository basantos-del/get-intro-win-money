import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/853889-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            You know people,<br />
            <span className="text-accent-foreground">we know opportunities.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Your 5 minutes day app to build a nice passive income. Give your friends an intro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={scrollToWaitlist}
              size="lg"
              className="intro-button-primary px-12 py-4 text-lg font-semibold"
            >
              Join the Waitlist
            </Button>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">2,588 people already joined</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;