import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const InformationServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-primary/20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold gradient-text mb-6">Information Services</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Advanced data analytics, interconnectivity solutions, and digital transformation 
              services for enhanced operational efficiency and business insights.
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
                src="/lovable-uploads/information-services.png" 
                alt="Information Services - Data analytics and interconnectivity" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Data-Driven Solutions</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Our information services provide comprehensive data analytics, business intelligence, 
                and digital transformation solutions. We help organizations harness the power of 
                their data for better decision-making and operational excellence.
              </p>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Real-time data processing and analytics
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Business intelligence dashboards
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  System integration and API management
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  Digital transformation consulting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-muted/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
              <p className="text-foreground/70">Advanced analytics and machine learning solutions for actionable business insights.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-3">System Integration</h3>
              <p className="text-foreground/70">Seamless integration between different systems and platforms for unified operations.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
              <p className="text-foreground/70">Strategic consulting to modernize your business processes and technology stack.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Data Strategy</h2>
          <p className="text-foreground/70 mb-8">
            Unlock the potential of your data with our comprehensive information services and analytics solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="font-semibold">
              Start Data Journey →
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InformationServices;