import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const HostingServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-primary/20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold gradient-text mb-6">Hosting Services</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Professional web and application hosting with high-performance servers, 
              99.9% uptime guarantee, and 24/7 technical support for optimal performance.
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
                src="/lovable-uploads/hosting-services.png" 
                alt="Hosting Services - Web and application hosting" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">High-Performance Web Hosting</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Our hosting services provide reliable, fast, and secure web hosting solutions 
                with enterprise-grade infrastructure. From shared hosting to dedicated servers, 
                we have the perfect solution for your business needs.
              </p>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  99.9% uptime guarantee with SLA
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  SSD storage and CDN integration
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Free SSL certificates and security scanning
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  24/7 expert technical support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="py-16 bg-muted/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">Hosting Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Shared Hosting</h3>
              <p className="text-foreground/70">Cost-effective hosting solution perfect for small websites and blogs with easy setup.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">VPS Hosting</h3>
              <p className="text-foreground/70">Virtual private servers with dedicated resources and root access for growing businesses.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold mb-3">Dedicated Servers</h3>
              <p className="text-foreground/70">Fully dedicated bare-metal servers with maximum performance and customization options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Launch Your Website Today</h2>
          <p className="text-foreground/70 mb-8">
            Choose the perfect hosting plan for your needs and get your website online in minutes.
          </p>
          <Link to="/contact">
            <Button size="lg" className="font-semibold">
              View Hosting Plans →
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HostingServices;