import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Network, 
  Server, 
  Shield, 
  Zap, 
  Database, 
  Cpu,
  HardDrive,
  Wifi,
  Router,
  Monitor
} from 'lucide-react';

const ITHardwareInfrastructure = () => {
  const tabs = [
    { id: 'network', label: 'Network Architecture & Connectivity' },
    { id: 'server', label: 'Server & Storage Solutions' },
    { id: 'cloud', label: 'Cloud Integration & Hybrid Systems' },
    { id: 'cybersecurity', label: 'Cybersecurity Measures' },
    { id: 'disaster', label: 'Multi-Availability & Disaster Recovery' },
    { id: 'equipment', label: 'Equipment & Maintenance Protocols' }
  ];

  const features = [
    {
      icon: Server,
      title: 'Server Rack',
      description: 'Powers all core data processing and secure storage operations.',
      color: 'bg-blue-500'
    },
    {
      icon: Router,
      title: 'Network Router / Switch',
      description: 'Manages seamless connectivity and fast data transmission.',
      color: 'bg-purple-500'
    },
    {
      icon: Monitor,
      title: 'High-end Computers',
      description: 'Drives system performance with essential computing components.',
      color: 'bg-yellow-500'
    }
  ];


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <div className="h-96 bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-800 relative">
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    IT & Hardware Infrastructure
                  </h1>
                </div>
              </div>
              {/* Blue lighting effects */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute top-10 left-1/4 w-2 h-32 bg-blue-400 blur-sm"></div>
                <div className="absolute top-20 right-1/3 w-1 h-24 bg-cyan-300 blur-sm"></div>
                <div className="absolute bottom-10 left-1/3 w-3 h-20 bg-blue-500 blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            {tabs.map((tab, index) => (
              <div key={tab.id} className="text-center">
                <div className="bg-green-500 text-white px-3 py-2 rounded-lg text-xs font-medium">
                  {tab.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Architecture Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center">
                  <Network className="w-24 h-24 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Network Architecture</h3>
                  <p className="text-gray-300">3D Visualization</p>
                </div>
                {/* Floating network elements */}
                <div className="absolute top-4 right-4 bg-blue-400/20 backdrop-blur rounded-lg p-3">
                  <Wifi className="w-6 h-6 text-blue-300" />
                </div>
                <div className="absolute bottom-4 left-4 bg-cyan-400/20 backdrop-blur rounded-lg p-3">
                  <Database className="w-6 h-6 text-cyan-300" />
                </div>
                <div className="absolute top-1/2 left-4 bg-purple-400/20 backdrop-blur rounded-lg p-3">
                  <Shield className="w-6 h-6 text-purple-300" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Network Architecture & Connectivity</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Network architecture and connectivity are vital for seamless data center operations. Redundant fiber-optic connections ensure high-speed, low-latency data transmission. Multi-carrier redundancy and failover mechanisms safeguard against outages, enhancing reliability. Edge computing integration optimizes performance for AI, IoT, and cloud applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Components */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-800 rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch with Us</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Have questions or need expert support? Our team is ready to help you with all your data center needs—reach out today!
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300">
            CONTACT US →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITHardwareInfrastructure;