import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const ManagedSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-primary/20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold gradient-text mb-6">Managed Solutions</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Complete IT infrastructure management with 24/7 monitoring, security updates, 
              and performance optimization by our expert technical team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Complete IT Management</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Our managed solutions take the complexity out of IT infrastructure management. 
                Our expert team handles server monitoring, security updates, backup management, 
                and performance optimization so you can focus on your core business operations.
              </p>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  24/7 proactive monitoring and alerting
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Automated security patching and updates
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Backup management and disaster recovery
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Performance optimization and tuning
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/lovable-uploads/managed-solutions.png" 
                alt="Managed Solutions - IT infrastructure management" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Management Services */}
      <section className="py-16 bg-muted/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">Management Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">System Monitoring</h3>
              <p className="text-foreground/70">Real-time monitoring of all systems with instant alerting and automated responses.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Security Management</h3>
              <p className="text-foreground/70">Comprehensive security with patch management, vulnerability scanning, and threat detection.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-semibold mb-3">Backup Solutions</h3>
              <p className="text-foreground/70">Automated backup strategies with reliable recovery options and compliance support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Focus on Your Business</h2>
          <p className="text-foreground/70 mb-8">
            Let our experts manage your IT infrastructure while you concentrate on growing your business.
          </p>
          <Link to="/contact">
            <Button size="lg" className="font-semibold">
              Get Managed Services →
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManagedSolutions;