import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-accent py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-accent-foreground mb-4">intro</h3>
            <p className="text-accent-foreground/80 text-lg leading-relaxed max-w-md">
              The marketplace where referral programs meet people who know people. 
              Turn your matchmaking skills into extra income.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-accent-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('waitlist')} className="block text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-200">
                Join Waitlist
              </button>
              <button onClick={() => scrollToSection('earn')} className="block text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-200">
                Earn
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-200">
                About
              </button>
              <button onClick={() => scrollToSection('features')} className="block text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-200">
                Features
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-accent-foreground mb-4">Company</h4>
            <div className="space-y-2">
              <Link to="/faqs" className="block text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-200">
                FAQs
              </Link>
            </div>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-lg font-semibold text-accent-foreground mb-4">Get Started</h4>
            <div className="space-y-3">
              <p className="text-accent-foreground/80">Ready to earn?</p>
              <button onClick={() => scrollToSection('waitlist')} className="text-accent-foreground font-medium hover:underline">
                Join our waitlist →
              </button>
              <a 
                href="https://www.instagram.com/useintro.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-200"
              >
                <Instagram size={20} />
                <span>Follow us on Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-accent-foreground/60 text-sm">© 2025 intro. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-accent-foreground/60 text-sm">Privacy Policy</span>
              <span className="text-accent-foreground/60 text-sm">Terms of Service</span>
              <span className="text-accent-foreground/60 text-sm">Contact</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;