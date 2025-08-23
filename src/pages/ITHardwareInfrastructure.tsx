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
  Settings,
  Zap,
  Globe
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
      icon: Database,
      title: 'Server Rack',
      description: 'Powers all core data processing and secure storage operations.',
      color: 'from-cyan-500 to-blue-500',
      iconBg: 'bg-cyan-500/10',
      iconColor: 'text-cyan-500'
    },
    {
      icon: Network,
      title: 'Network Router / Switch',
      description: 'Manages seamless connectivity and fast data transmission.',
      color: 'from-purple-500 to-indigo-500',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-500'
    },
    {
      icon: Monitor,
      title: 'High-end Computers',
      description: 'Drives system performance with essential computing components.',
      color: 'from-orange-500 to-yellow-500',
      iconBg: 'bg-orange-500/10',
      iconColor: 'text-orange-500'
    }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'network':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Network Architecture & Connectivity</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Network architecture and connectivity are vital for seamless data center 
              operations. Redundant fiber optic connections ensure high-speed, low-
              latency data transmission. Multi-carrier redundancy and failover 
              mechanisms safeguard against outages, enhancing reliability. Edge 
              computing integration optimizes performance for AI, IoT, and cloud 
              applications.
            </p>
          </div>
        );
      case 'server':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Server & Storage Solutions</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
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
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Cloud Integration & Hybrid Systems</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
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
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Cybersecurity Measures</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Multi-layered security protocols protect against evolving cyber threats. 
              Advanced firewalls, intrusion detection systems, and continuous monitoring 
              ensure data integrity and compliance with industry security standards.
            </p>
          </div>
        );
      case 'availability':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">High-Availability & Disaster Recovery</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Comprehensive disaster recovery solutions ensure business continuity 
              with minimal downtime. Automated backup systems, geographic redundancy, 
              and rapid recovery protocols protect critical business operations.
            </p>
          </div>
        );
      case 'maintenance':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Equipment & Maintenance Protocols</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
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
        <section className="relative min-h-screen bg-gray-100 overflow-hidden">
          {/* Navigation Tabs */}
          <div className="absolute top-8 left-8 z-20">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 whitespace-nowrap font-medium ${
                    activeTab === tab.id
                      ? 'bg-emerald-500 text-white border-b-2 border-emerald-400'
                      : 'bg-transparent text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-screen">
            {/* Left Side - 3D Visualization */}
            <div className="w-1/2 bg-gray-900 flex items-center justify-center p-0">
              <div className="relative w-full h-full">
                <img 
                  src="/lovable-uploads/cf6299df-9c85-4b37-a947-0225f4339bcf.png" 
                  alt="Network Architecture 3D Visualization with servers and connectivity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-1/2 bg-white flex items-center justify-center p-12">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-emerald-600">
                  Network Architecture & Connectivity
                </h1>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Network architecture and connectivity are vital for seamless data center 
                    operations. Redundant fiber optic connections ensure high-speed, low-
                    latency data transmission.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Multi-carrier redundancy and failover mechanisms safeguard against outages, 
                    enhancing reliability. Edge computing integration optimizes performance for 
                    AI, IoT, and cloud applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={feature.title}
                    className="group bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-emerald-500 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up shadow-lg hover:shadow-xl"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-20 h-20 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-10 h-10 ${feature.iconColor}`} />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* 3D Visualization - Left Side */}
              <div className="animate-fade-in-up">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
                  <div className="space-y-6">
                    {/* 3D Network Architecture Visualization */}
                    <div className="relative h-80 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-6 overflow-hidden">
                      {/* 3D Grid Effect */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                          {Array.from({ length: 48 }).map((_, i) => (
                            <div key={i} className="border border-cyan-500/20"></div>
                          ))}
                        </div>
                      </div>
                      
                      {/* 3D Servers */}
                      <div className="absolute top-8 left-8 w-12 h-16 bg-gradient-to-b from-cyan-400 to-blue-600 rounded transform rotate-12 shadow-lg">
                        <div className="w-full h-2 bg-cyan-300 rounded-t mb-1"></div>
                        <div className="w-full h-1 bg-blue-400 mb-1"></div>
                        <div className="w-full h-1 bg-blue-400 mb-1"></div>
                      </div>
                      
                      <div className="absolute top-12 right-12 w-12 h-16 bg-gradient-to-b from-purple-400 to-indigo-600 rounded transform -rotate-12 shadow-lg">
                        <div className="w-full h-2 bg-purple-300 rounded-t mb-1"></div>
                        <div className="w-full h-1 bg-indigo-400 mb-1"></div>
                        <div className="w-full h-1 bg-indigo-400 mb-1"></div>
                      </div>
                      
                      <div className="absolute bottom-8 left-12 w-12 h-16 bg-gradient-to-b from-emerald-400 to-green-600 rounded transform rotate-6 shadow-lg">
                        <div className="w-full h-2 bg-emerald-300 rounded-t mb-1"></div>
                        <div className="w-full h-1 bg-green-400 mb-1"></div>
                        <div className="w-full h-1 bg-green-400 mb-1"></div>
                      </div>
                      
                      {/* Connection Lines with Animation */}
                      <svg className="absolute inset-0 w-full h-full">
                        <path d="M60,80 Q150,40 280,100" stroke="#06b6d4" strokeWidth="3" fill="none" opacity="0.8" strokeDasharray="8,4">
                          <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite" />
                        </path>
                        <path d="M80,200 Q200,150 300,180" stroke="#8b5cf6" strokeWidth="3" fill="none" opacity="0.8" strokeDasharray="8,4">
                          <animate attributeName="stroke-dashoffset" values="0;12" dur="2.5s" repeatCount="indefinite" />
                        </path>
                        <path d="M100,120 Q180,220 280,160" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.8" strokeDasharray="8,4">
                          <animate attributeName="stroke-dashoffset" values="0;12" dur="3s" repeatCount="indefinite" />
                        </path>
                      </svg>
                      
                      {/* Central Hub */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                        <Globe className="w-8 h-8 text-white animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content - Right Side */}
              <div className="animate-fade-in-up [animation-delay:200ms]">
                {getTabContent()}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"></div>
          </div>

          <div className="section-container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Get in Touch with Us
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions or need expert support? Our team is ready to help you with all 
              your data center needs—reach out today!
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
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