import { useState } from 'react';
import { 
  Server, 
  Network, 
  Shield, 
  HardDrive, 
  Cpu, 
  Router,
  ChevronRight,
  Monitor,
  Database,
  Settings
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ITHardwareInfrastructure = () => {
  const [activeTab, setActiveTab] = useState('network');

  const tabs = [
    { id: 'network', label: 'Network Architecture & Connectivity' },
    { id: 'server', label: 'Server & Storage Solutions' },
    { id: 'cloud', label: 'Cloud Integration & Hybrid Systems' },
    { id: 'cybersecurity', label: 'Cybersecurity Measures' },
    { id: 'availability', label: 'High-Availability & Disaster Recovery' },
    { id: 'maintenance', label: 'Equipment & Maintenance Protocols' }
  ];

  const features = [
    {
      icon: Server,
      title: 'Server Rack',
      description: 'Powers all core data processing and secure storage operations.'
    },
    {
      icon: Router,
      title: 'Network Router / Switch',
      description: 'Manages seamless connectivity and fast data transmission.'
    },
    {
      icon: Monitor,
      title: 'High-end Computers',
      description: 'Drives system performance with essential computing components.'
    }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'network':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Network Architecture & Connectivity</h3>
            <p className="text-foreground/70 leading-relaxed">
              Network architecture and connectivity are vital for seamless data center 
              operations. Redundant fiber optic connections ensure high-speed, low-
              latency data transmission. Multi-carrier redundancy and failover 
              mechanisms safeguard against outages, enhancing reliability. Edge 
              computing integration optimizes performance for AI, IoT, and cloud 
              applications.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Key Features:</h4>
                <ul className="text-sm text-foreground/60 space-y-1">
                  <li>• Redundant fiber optic connections</li>
                  <li>• Multi-carrier network support</li>
                  <li>• Low-latency data transmission</li>
                  <li>• Advanced failover mechanisms</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Benefits:</h4>
                <ul className="text-sm text-foreground/60 space-y-1">
                  <li>• Enhanced system reliability</li>
                  <li>• Optimized edge computing performance</li>
                  <li>• Seamless cloud integration</li>
                  <li>• AI and IoT application support</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'server':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Server & Storage Solutions</h3>
            <p className="text-foreground/70 leading-relaxed">
              High-performance server racks and enterprise-grade storage systems ensure 
              reliable data processing and secure information management. Our scalable 
              infrastructure supports growing business needs with redundant storage 
              configurations and advanced server technologies.
            </p>
          </div>
        );
      case 'cloud':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Cloud Integration & Hybrid Systems</h3>
            <p className="text-foreground/70 leading-relaxed">
              Seamless integration between on-premises infrastructure and cloud services 
              creates flexible hybrid environments. Our solutions enable smooth data 
              migration, workload distribution, and cost-effective resource allocation 
              across multiple platforms.
            </p>
          </div>
        );
      case 'cybersecurity':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Cybersecurity Measures</h3>
            <p className="text-foreground/70 leading-relaxed">
              Multi-layered security protocols protect against evolving cyber threats. 
              Advanced firewalls, intrusion detection systems, and continuous monitoring 
              ensure data integrity and compliance with industry security standards.
            </p>
          </div>
        );
      case 'availability':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">High-Availability & Disaster Recovery</h3>
            <p className="text-foreground/70 leading-relaxed">
              Comprehensive disaster recovery solutions ensure business continuity 
              with minimal downtime. Automated backup systems, geographic redundancy, 
              and rapid recovery protocols protect critical business operations.
            </p>
          </div>
        );
      case 'maintenance':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Equipment & Maintenance Protocols</h3>
            <p className="text-foreground/70 leading-relaxed">
              Proactive maintenance schedules and real-time monitoring systems ensure 
              optimal equipment performance. Our certified technicians provide 24/7 
              support with predictive analytics to prevent potential system failures.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/1418bbc6-4101-4366-8c04-b87d8390d0ca.png" 
              alt="Data center server corridor with blue LED lighting and modern infrastructure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              IT & Hardware <span className="gradient-text">Infrastructure</span>
            </h1>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 max-w-6xl mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm md:text-base rounded-lg transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground font-medium'
                      : 'bg-card/30 backdrop-blur-sm text-foreground/70 hover:text-primary hover:bg-card/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-dark-surface">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Text Content */}
              <div className="animate-fade-in-up">
                {getTabContent()}
              </div>

              {/* Network Architecture Visualization */}
              <div className="animate-fade-in-up [animation-delay:200ms]">
                <div className="relative overflow-hidden rounded-2xl bg-card/20 backdrop-blur-sm border border-border/30 p-8">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold gradient-text">Network Architecture Visualization</h4>
                    
                    {/* Network Diagram Representation */}
                    <div className="relative h-64 bg-gradient-to-br from-primary/10 to-tech-blue/10 rounded-xl p-6 overflow-hidden">
                      {/* Server Icons */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-primary/20 rounded border border-primary/40 flex items-center justify-center">
                        <Database className="w-4 h-4 text-primary" />
                      </div>
                      <div className="absolute top-4 right-4 w-8 h-8 bg-tech-blue/20 rounded border border-tech-blue/40 flex items-center justify-center">
                        <Server className="w-4 h-4 text-tech-blue" />
                      </div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 bg-green-500/20 rounded border border-green-500/40 flex items-center justify-center">
                        <Network className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="absolute bottom-4 right-4 w-8 h-8 bg-yellow-500/20 rounded border border-yellow-500/40 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-yellow-500" />
                      </div>
                      
                      {/* Connection Lines */}
                      <svg className="absolute inset-0 w-full h-full">
                        <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                        </line>
                        <line x1="20%" y1="80%" x2="80%" y2="80%" stroke="hsl(var(--tech-blue))" strokeWidth="2" opacity="0.6" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                        </line>
                        <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="rgb(34, 197, 94)" strokeWidth="2" opacity="0.6" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                        </line>
                        <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="rgb(234, 179, 8)" strokeWidth="2" opacity="0.6" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                        </line>
                      </svg>
                      
                      {/* Center Hub */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-primary to-tech-blue rounded-full flex items-center justify-center border-2 border-white/20">
                        <Settings className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '4s' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={feature.title}
                    className="group bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-8 text-center hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-foreground/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-dark-surface relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-tech-blue/10 rounded-full blur-2xl"></div>
          </div>

          <div className="section-container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in Touch with <span className="gradient-text">Us</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Have questions or need expert support? Our team is ready to help you with all 
              your data center needs—reach out today!
            </p>
            <button className="btn-neon inline-flex items-center gap-2">
              CONTACT US
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ITHardwareInfrastructure;