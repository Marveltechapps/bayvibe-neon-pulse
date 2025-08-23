import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Ready to transform your data infrastructure? Contact us today to discuss your requirements.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Email Us</h4>
                <p className="text-foreground/70">info@bayvibe.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Call Us</h4>
                <p className="text-foreground/70">+91 123 456 7890</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Visit Us</h4>
                <p className="text-foreground/70">Siruseri IT Corridor, Chennai</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 bg-background/50 border border-border/30 rounded-lg focus:border-primary/50 focus:outline-none transition-colors"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 bg-background/50 border border-border/30 rounded-lg focus:border-primary/50 focus:outline-none transition-colors"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full px-4 py-3 bg-background/50 border border-border/30 rounded-lg focus:border-primary/50 focus:outline-none transition-colors resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;