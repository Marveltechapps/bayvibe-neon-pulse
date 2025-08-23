import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="py-20 bg-gradient-to-b from-background to-darker-surface relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      
    </section>;
};
export default Contact;