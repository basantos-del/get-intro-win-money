import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useIntersectionObserver();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useIntersectionObserver();
  const { elementRef: missionRef, isVisible: missionVisible } = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroRef}
            className={`text-center mb-16 transition-all duration-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              About <span className="text-accent">intro</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Intro is a referral marketplace that connects opportunities with people who know people.
            </p>
          </div>

          {/* Hero Images Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className={`relative rounded-card overflow-hidden transition-all duration-700 delay-100 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img 
                src="/lovable-uploads/4116d911-adc2-4c87-a303-9ed87e56591d.png"
                alt="Where matchmaking earns you money"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <div className={`relative rounded-card overflow-hidden transition-all duration-700 delay-200 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img 
                src="/lovable-uploads/74c39469-53db-4741-ae30-cf90d07203d7.png"
                alt="A referral marketplace for people who know people"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <div className={`relative rounded-card overflow-hidden transition-all duration-700 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img 
                src="/lovable-uploads/ec2113f6-aae5-4c76-9d17-ffb593029c0f.png"
                alt="Let's get social again"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Cards */}
      <section className="intro-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={cardsRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { step: "01", title: "Companies Post", description: "Companies that are on intro post opportunities." },
              { step: "02", title: "Members Refer", description: "Members can see them and refer a friend." },
              { step: "03", title: "Success Match", description: "If the referral is a success, we call it a match." },
              { step: "04", title: "Get Paid", description: "Matches are what pay you good money." }
            ].map((item, index) => (
              <div 
                key={item.step}
                className={`intro-card p-8 text-center transition-all duration-700 ${
                  cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-accent text-6xl font-bold mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="intro-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                Intro was born to provide everyone with a chance to <strong>earn extra money</strong>. Level up your networking game. No AI-talk, but real earning opportunities.
              </p>
            </div>

            <div className="bg-card rounded-card p-8 md:p-12 border border-card-border">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                You've done dozen of intros before. You've always been <strong className="text-accent-foreground">that kind of matchmaker</strong> friend. Seeing through the connections. Building bridges and opening doors. Intro has been built so that personality of yours starts to pay off.
              </p>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                But <strong className="text-accent-foreground">we're not any kind</strong> of referral marketplace. We're not just easy money. A reference is not of any worth if it does not make a match. That's why your Referrals must make a match. Once that happens, you're paid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="intro-section bg-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={missionRef}
            className={`transition-all duration-700 ${
              missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  To reimagine the way referrals work. For our Members and Businesses. We're on a mission to create the number one referral marketplace. With tons of opportunities for Members to tap into. And more viable ways for businesses to leverage referral programs.
                </p>
              </div>
              
              <div className="intro-card p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">How do we make that happen?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Businesses post opportunities on intro. By carefully reviewing and categorizing them, intro is able to connect opportunities with members that might match them. This is where our core power resides: cross data so we make it easy for you to tap into new daily opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="intro-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Why be on intro?</h2>
          <div className="intro-card-accent p-8 md:p-12">
            <p className="text-lg md:text-xl text-accent-foreground leading-relaxed">
              Intro focuses on your future self. What you want to do, what you want to become. And we know chasing that is not easy. Intro has been designed to earn you some cash through referrals, but also to open new doors for your future too. You go on intro because you're social. You stay because you have got bigger plans for you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="intro-section bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to turn your network into income?</h2>
          <p className="text-xl mb-8 opacity-90">Join the intro community and start earning from your connections.</p>
          <Button 
            className="intro-button-primary text-lg px-8 py-4"
            onClick={() => {
              window.location.href = '/#waitlist';
            }}
          >
            Join the Waitlist
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;