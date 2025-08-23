import { Mail, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
            
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      
    </footer>;
};
export default Footer;