import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const ColocationServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-primary/20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold gradient-text mb-6">Colocation Services</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Secure, scalable colocation solutions with enterprise-grade infrastructure, 
              24/7 support, and flexible space options for your growing business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/lovable-uploads/colocation-services.png" 
                alt="Colocation Services - Modern data center facility" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Premium Rack Space & Infrastructure</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Our colocation services provide you with secure, dedicated rack or floor space in our 
                state-of-the-art data center facility. Benefit from enterprise-grade infrastructure 
                without the capital investment of building your own data center.
              </p>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Flexible space options from quarter rack to full suite
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Redundant power with 99.99% uptime SLA
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Advanced security and access controls
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  24/7 on-site support and monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">Service Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Remote Hands Service</h3>
              <p className="text-foreground/70">Professional technicians available for hardware maintenance and support tasks.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Network Connectivity</h3>
              <p className="text-foreground/70">High-speed internet with multiple carrier options and redundant connections.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Real-time Monitoring</h3>
              <p className="text-foreground/70">Advanced monitoring systems with instant alerts and performance tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-foreground/70 mb-8">
            Contact our team to discuss your colocation requirements and get a custom quote.
          </p>
          <Link to="/contact">
            <Button size="lg" className="font-semibold">
              Get Quote Today →
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ColocationServices;