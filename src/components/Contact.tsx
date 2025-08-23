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

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span> with Us
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Have questions or need support? Our expert team is ready to help you with all your data center needs. Reach out today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <div className="card-tech">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      First Name
                    </label>
                    <input type="text" className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300 text-foreground" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Last Name
                    </label>
                    <input type="text" className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300 text-foreground" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Email Address
                  </label>
                  <input type="email" className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300 text-foreground" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Phone Number
                  </label>
                  <input type="tel" className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300 text-foreground" placeholder="+91 9876543210" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Message
                  </label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300 text-foreground resize-none" placeholder="Tell us about your requirements..."></textarea>
                </div>

                <button type="submit" className="btn-neon w-full group">
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up [animation-delay:400ms]">
            {/* Main CTA */}
            <div className="card-tech text-center pulse-glow">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ready to Get Started?</h3>
              <p className="text-foreground/70 mb-6">
                Our team is standing by to answer your questions and provide custom solutions.
              </p>
              <button className="btn-neon">
                Schedule Consultation
              </button>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/40 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-foreground/70 text-sm mb-2">Get in touch via email</p>
                  <a href="mailto:info@bayvibedc.com" className="text-primary hover:text-primary/80 transition-colors">shekar@marvel100logisticspark.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/40 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="text-foreground/70 text-sm mb-2">Speak with our experts</p>
                  <a href="tel:+919876543210" className="text-primary hover:text-primary/80 transition-colors">+91 9444126240</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/40 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                  <p className="text-foreground/70 text-sm mb-2">Siruseri IT Corridor</p>
                  <p className="text-primary">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3">Support Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground/70">Technical Support:</span>
                  <span className="text-primary">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Sales Inquiries:</span>
                  <span className="text-foreground">Mon-Fri 9AM-6PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Emergency Support:</span>
                  <span className="text-primary">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;