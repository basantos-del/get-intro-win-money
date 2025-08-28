const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-accent py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-accent-foreground mb-4">intro</h3>
            <p className="text-accent-foreground/80 text-lg leading-relaxed max-w-md">
              The marketplace where referral programs meet people who know people. 
              Turn your network into passive income.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-accent-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('waitlist')}
                className="block text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-200"
              >
                Join Waitlist
              </button>
              <button
                onClick={() => scrollToSection('earn')}
                className="block text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-200"
              >
                Earn
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-200"
              >
                Features
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-accent-foreground mb-4">Get Started</h4>
            <div className="space-y-2">
              <p className="text-accent-foreground/80">Ready to earn?</p>
              <button
                onClick={() => scrollToSection('waitlist')}
                className="text-accent-foreground font-medium hover:underline"
              >
                Join our waitlist →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-accent-foreground/60 text-sm">
              © 2024 Intro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-accent-foreground/60 text-sm">Privacy Policy</span>
              <span className="text-accent-foreground/60 text-sm">Terms of Service</span>
              <span className="text-accent-foreground/60 text-sm">Contact</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;