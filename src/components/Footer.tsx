import { Mail, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import bayVibeLogo from '@/assets/bayvibe-dc-logo.png';
const Footer = () => {
  return <footer className="bg-background">
      {/* Get in Touch Section */}
      <div className="bg-card/30 backdrop-blur-sm">
        <div className="section-container py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Get in Touch with Us
            </h2>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              Have questions or need expert support? Our team is ready to help you with all your data center needs—reach out today!
            </p>
            
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-darker-surface">
        <div className="section-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo Section */}
            <div>
              <img 
                src={bayVibeLogo} 
                alt="BayVibe DC Logo" 
                className="h-12 mb-8 object-contain"
              />
            </div>

            {/* Building Infrastructure */}
            <div>
              <h4 className="font-semibold text-foreground mb-6 text-lg">Building Infrastructure</h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/it-hardware-infrastructure" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                    IT & Hardware Infrastructure
                  </Link>
                </li>
                <li>
                  <Link to="/digital-data-infrastructure" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                    Digital Data Infrastructure
                  </Link>
                </li>
                <li>
                  <Link to="/sustainability" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>

            {/* About us */}
            <div>
              <h4 className="font-semibold text-foreground mb-6 text-lg">About us</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                    Business Revenue Model
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                    Maintenance & Future Innovations
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact us */}
            <div>
              <h4 className="font-semibold text-foreground mb-6 text-lg">Contact us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-foreground/70 flex-shrink-0" />
                  <a href="mailto:shekar@marvel100logisticspark.com" className="text-foreground/70 hover:text-primary transition-colors">
                    shekar@marvel100logisticspark.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-foreground/70 flex-shrink-0" />
                  <a href="tel:+919444126240" className="text-foreground/70 hover:text-primary transition-colors">
                    +91 9444126240
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30">
          <div className="section-container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors underline">
                  Terms and condition
                </a>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors underline">
                  Privacy policy
                </a>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-foreground/60">
                <span>All Rights Reserved.</span>
                <div className="flex items-center space-x-2">
                  <span>©</span>
                  <span>Copyright 2025 Builtglory.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;