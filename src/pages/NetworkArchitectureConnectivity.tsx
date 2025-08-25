import Header from '../components/Header';
import Footer from '../components/Footer';
import { Network, Wifi, Router, Globe } from 'lucide-react';

const NetworkArchitectureConnectivity = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <div className="h-96 bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-800 relative">
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Transparent Overlay Image */}
              <div className="absolute inset-0 z-5">
                <img src="/lovable-uploads/e4be0fdb-a944-405c-bc96-7c5190518578.png" alt="Isometric network architecture visualization with server towers and connectivity lines" className="w-full h-full object-cover opacity-40" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Network Architecture & Connectivity
                  </h1>
                  <p className="text-xl text-gray-200">
                    Seamless data transmission and robust network infrastructure
                  </p>
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
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Advanced Network Infrastructure</h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Network architecture and connectivity are vital for seamless data center operations. Redundant fiber-optic connections ensure high-speed, low-latency data transmission. Multi-carrier redundancy and failover mechanisms safeguard against outages, enhancing reliability. Edge computing integration optimizes performance for AI, IoT, and cloud applications.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-xl p-6">
                <Network className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Redundant Fiber Connections</h3>
                <p className="text-gray-300">High-speed, low-latency fiber-optic connections with multiple carrier redundancy for maximum uptime.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Router className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Multi-Carrier Redundancy</h3>
                <p className="text-gray-300">Multiple internet service providers ensure continuous connectivity and failover protection.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Wifi className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Edge Computing Integration</h3>
                <p className="text-gray-300">Optimized network architecture for AI, IoT, and cloud computing applications.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Globe className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Global Connectivity</h3>
                <p className="text-gray-300">Worldwide network reach with optimized routing and content delivery networks.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Key Network Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li>• BGP4 routing protocols</li>
                  <li>• 10/40/100 Gbps connectivity</li>
                  <li>• DDoS protection and mitigation</li>
                  <li>• Network monitoring and analytics</li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li>• Software-defined networking (SDN)</li>
                  <li>• Load balancing and traffic optimization</li>
                  <li>• IPv4/IPv6 dual-stack support</li>
                  <li>• 24/7 network operations center</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NetworkArchitectureConnectivity;