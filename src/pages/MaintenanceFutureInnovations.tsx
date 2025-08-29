import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const MaintenanceFutureInnovations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-blue-700/20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Data Center Excellence
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We are committed to driving innovation through AI automation, sustainable technologies, and enhanced security. Our roadmap focuses on expanding 
                edge computing and delivering smarter, scalable solutions to meet the evolving needs of businesses. Together, we build a future-ready infrastructure 
                that empowers growth and resilience.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/maintenance-future-innovations-hero.png" 
                alt="Modern data center with blue server racks and lighting" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Innovations & Roadmap Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Future Innovations & Roadmap</h2>
          
          <div className="space-y-16">
            {/* Expansion Plans & New Technologies */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative cursor-pointer" onClick={() => window.location.href = '/expansion-plans-new-technologies'}>
                <img 
                  src="/lovable-uploads/40b163c4-12d9-46da-91e2-ec7065adbdc8.png" 
                  alt="Expansion Plans & New Technologies - Digital dashboard analytics with transparent overlay" 
                  className="w-full rounded-lg shadow-xl hover:opacity-90 transition-opacity bg-white/10 backdrop-blur-sm"
                />
              </div>
              <div className="space-y-6">
                <Link to="/expansion-plans-new-technologies">
                  <h3 className="text-green-400 text-2xl font-bold hover:text-green-300 cursor-pointer transition-colors">
                    Expansion Plans & New Technologies
                  </h3>
                </Link>
                <p className="text-gray-300 leading-relaxed">
                  We are scaling our data center footprint with next-gen infrastructure, 
                  including liquid cooling, modular designs, and renewable energy 
                  integration. Our expansion focuses on high-density computing 
                  environments to support AI-driven workloads. Future upgrades will 
                  enhance efficiency, security, and sustainability.
                </p>
              </div>
            </div>

            {/* Emerging Trends in Data Center Infrastructure */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <Link to="/emerging-trends-data-center-infrastructure">
                  <h3 className="text-blue-400 text-2xl font-bold hover:text-blue-300 cursor-pointer transition-colors">
                    Emerging Trends in Data Center Infrastructure
                  </h3>
                </Link>
                <p className="text-gray-300 leading-relaxed">
                  The industry is shifting toward hyperscale data centers, energy-efficient 
                  cooling, and cloud repatriation strategies. Innovations like two-phase 
                  liquid cooling and AI-powered automation are redefining performance 
                  and sustainability. We are adopting cutting-edge solutions to stay ahead 
                  of evolving demands.
                </p>
              </div>
              <div className="order-1 md:order-2 relative cursor-pointer" onClick={() => window.location.href = '/emerging-trends-data-center-infrastructure'}>
                <img 
                  src="/lovable-uploads/b7c7eb17-c398-4f74-b5e4-296c5476de4e.png" 
                  alt="Emerging Trends - Modern data center infrastructure with blue server lighting and energy flows" 
                  className="w-full rounded-lg shadow-xl hover:opacity-90 transition-opacity bg-white/10 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* AI & Edge Computing Integration */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative cursor-pointer" onClick={() => window.location.href = '/ai-edge-computing-integration'}>
                <img 
                  src="/lovable-uploads/b62a70c3-2070-4796-87cc-bc4b11af0096.png" 
                  alt="AI & Edge Computing - Blue AI cube processor on circuit board with glowing connections" 
                  className="w-full rounded-lg shadow-xl hover:opacity-90 transition-opacity bg-white/10 backdrop-blur-sm"
                />
              </div>
              <div className="space-y-6">
                <Link to="/ai-edge-computing-integration">
                  <h3 className="text-purple-400 text-2xl font-bold hover:text-purple-300 cursor-pointer transition-colors">
                    AI & Edge Computing Integration
                  </h3>
                </Link>
                <p className="text-gray-300 leading-relaxed">
                  AI-driven data processing and edge computing are transforming real-time 
                  analytics and decentralized infrastructure. Our roadmap includes 
                  low-latency edge deployments to support AI inferencing and high-speed 
                  data transmission. These advancements ensure scalability, security, and 
                  optimized performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Center Maintenance Activities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">Data Center Maintenance Activities</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Regular Infrastructure Inspections:</h4>
                <p className="text-gray-300 text-sm">
                  Routine checks ensure all systems maintain optimal standards and performance.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Predictive Monitoring:</h4>
                <p className="text-gray-300 text-sm">
                  Monitoring systems help detect potential issues early to prevent downtime.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Scheduled Servicing:</h4>
                <p className="text-gray-300 text-sm">
                  Systematic maintenance keeps equipment running smoothly and efficiently.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Optimized Cooling Systems:</h4>
                <p className="text-gray-300 text-sm">
                  Climate and temperature control to maintain ideal temperature and prevent overheating.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Power Redundancy Management:</h4>
                <p className="text-gray-300 text-sm">
                  Backup systems ensure continuous power to prevent outages and uptime options.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Enhanced Cybersecurity:</h4>
                <p className="text-gray-300 text-sm">
                  24/7 threat monitoring to maintain digital assets and network vulnerabilities.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Standards Compliance:</h4>
                <p className="text-gray-300 text-sm">
                  Adherence to industry regulations ensures security efficiency and long-term viability.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-lg">
              <img 
                src="/lovable-uploads/maintenance-technician.png" 
                alt="Data center maintenance - technician working with servers" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 bg-gradient-to-r from-green-900/20 to-green-700/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch with Us</h2>
          <p className="text-gray-300 mb-8">
            Have questions or need expert support? Our team is ready to help you with all 
            your data center needs—reach out today!
          </p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-3">
              CONTACT US →
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaintenanceFutureInnovations;