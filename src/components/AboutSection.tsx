const AboutSection = () => {
  return (
    <section id="about" className="intro-section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              You're an intro away from saving the money you needed.
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Intro is a platform that connects companies with referral opportunities to people like you - who know people.
            </p>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="intro-card p-8 stagger-animation">
              <div className="text-4xl font-bold text-foreground mb-4">2,356</div>
              <div className="text-lg font-medium text-foreground mb-2">Active Members</div>
              <div className="text-muted-foreground">Building passive income through referrals</div>
            </div>
            
            <div className="intro-card p-8 stagger-animation">
              <div className="text-4xl font-bold text-foreground mb-4">232</div>
              <div className="text-lg font-medium text-foreground mb-2">Partner Companies</div>
              <div className="text-muted-foreground">Seeking quality referrals</div>
            </div>
            
            <div className="intro-card p-8 stagger-animation">
              <div className="text-4xl font-bold text-foreground mb-4">$500k+</div>
              <div className="text-lg font-medium text-foreground mb-2">Earnings Distributed</div>
              <div className="text-muted-foreground">To our community members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;