import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const CloudOperations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-primary/20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold gradient-text mb-6">Cloud Operations</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Comprehensive cloud computing services with scalable infrastructure, 
              automated management, and enterprise-grade security for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Scalable Cloud Infrastructure</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Our cloud operations platform provides comprehensive computing services including 
                virtual machines, storage solutions, and networking resources. Built on enterprise-grade 
                infrastructure with automated scaling and management capabilities.
              </p>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Auto-scaling virtual machines and containers
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Multi-region availability and failover
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Pay-as-you-use pricing model
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Advanced monitoring and analytics
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/lovable-uploads/cloud-operations.png" 
                alt="Cloud Operations - Cloud computing infrastructure" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">Cloud Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-3">Virtual Machines</h3>
              <p className="text-foreground/70">High-performance virtual servers with flexible configurations and instant deployment.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-semibold mb-3">Cloud Storage</h3>
              <p className="text-foreground/70">Scalable object and block storage with automated backup and data protection.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-3">Network Services</h3>
              <p className="text-foreground/70">Software-defined networking with load balancing and security features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Migrate to the Cloud Today</h2>
          <p className="text-foreground/70 mb-8">
            Start your cloud journey with our expert team and scalable infrastructure solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="font-semibold">
              Start Free Trial →
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudOperations;