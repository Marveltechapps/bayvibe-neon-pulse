import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
const Footer = () => {
  const footerLinks = {
    services: ['Cloud Infrastructure', 'Colocation Services', 'Managed Hosting', 'Network Solutions', 'Disaster Recovery'],
    company: ['About Us', 'Leadership Team', 'Careers', 'News & Events', 'Partner Program'],
    resources: ['Documentation', 'Support Center', 'Security Compliance', 'SLA Guarantees', 'Resource Library'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR Compliance', 'Data Processing']
  };
  return <footer className="bg-darker-surface border-t border-border/30">
      {/* Main Footer Content */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              
              
            </div>
            
            <p className="text-foreground/70 leading-relaxed max-w-md">
              Empowering businesses with secure, sustainable, and scalable data center solutions. Leading the future of digital infrastructure in India.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:shekar@marvel100logisticspark.com" className="text-foreground/70 hover:text-primary transition-colors">
                  shekar@marvel100logisticspark.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+919444126240" className="text-foreground/70 hover:text-primary transition-colors">
                  +91 9444126240
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground/70">
                  Siruseri IT Corridor, Chennai, India
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-card/50 rounded-lg flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card/50 rounded-lg flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card/50 rounded-lg flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link}>
                  <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link}>
                  <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map(link => <li key={link}>
                  <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => <li key={link}>
                  <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border/30">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-foreground/60">
              <span>© 2024 BayVibe DC. All rights reserved.</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <span className="text-primary animate-pulse">💚</span>
                <span>for a sustainable future</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-foreground/40">Powered by 100% Green Energy</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;