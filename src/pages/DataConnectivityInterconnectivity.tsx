import Header from '../components/Header';
import Footer from '../components/Footer';
import { Network, Globe, Shuffle, Router } from 'lucide-react';

const DataConnectivityInterconnectivity = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <div className="h-96 bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-800 relative">
              <div className="absolute inset-0 bg-black/30"></div>
              <img 
                src="/lovable-uploads/a5e51d7d-8ca8-4ba8-bd3a-c100c56d0def.png" 
                alt="Global Data Connectivity Network" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Data Connectivity & Interconnectivity
                  </h1>
                  <p className="text-xl text-gray-200">
                    Global network infrastructure and seamless data flow
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
            <h2 className="text-3xl font-bold text-white mb-8">Global Network Infrastructure</h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Our data center ensures seamless data exchange through high-speed networking, standardized APIs, and cross-platform compatibility. AI-driven data routing and automated synchronization optimize real-time connectivity and system integration. By leveraging secure protocols and interoperability frameworks, we enable efficient communication across diverse digital ecosystems.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-xl p-6">
                <Network className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">High-Speed Networking</h3>
                <p className="text-gray-300">Ultra-fast network infrastructure with redundant connections and low-latency routing.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Globe className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Global Connectivity</h3>
                <p className="text-gray-300">Worldwide network presence with strategic peering agreements and CDN integration.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Shuffle className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Automated Synchronization</h3>
                <p className="text-gray-300">Real-time data synchronization across multiple locations and platforms.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Router className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">AI-Driven Routing</h3>
                <p className="text-gray-300">Intelligent traffic management and dynamic routing optimization for maximum efficiency.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connectivity Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li>• Multi-carrier network redundancy</li>
                  <li>• Edge computing integration</li>
                  <li>• Content delivery networks</li>
                  <li>• Private network connections</li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li>• Cross-platform data bridges</li>
                  <li>• Real-time data streaming</li>
                  <li>• Network performance monitoring</li>
                  <li>• 24/7 connectivity assurance</li>
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

export default DataConnectivityInterconnectivity;