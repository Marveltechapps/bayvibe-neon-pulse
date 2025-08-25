import Header from '../components/Header';
import Footer from '../components/Footer';
import { Cloud, Layers, Shuffle, Zap } from 'lucide-react';

const CloudIntegrationHybridSystems = () => {
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
                <img src="/lovable-uploads/f0fb2ea8-8da0-4b3f-8d0a-6c5ef840b4d9.png" alt="Futuristic cloud computing visualization with neon lighting and data streams" className="w-full h-full object-cover opacity-40" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Cloud Integration & Hybrid Systems
                  </h1>
                  <p className="text-xl text-gray-200">
                    Seamless cloud connectivity and hybrid infrastructure
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
            <h2 className="text-3xl font-bold text-white mb-8">Modern Cloud Architecture</h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Cloud integration and hybrid systems deliver data center flexibility and scalability. Seamless integration of private and public cloud environments ensures efficient workload management. Hybrid solutions support diverse performance requirements for cost-effectiveness. Advanced network architectures and distribution enable optimized data flow and resource allocation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-xl p-6">
                <Cloud className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Multi-Cloud Integration</h3>
                <p className="text-gray-300">Seamless integration with major cloud providers for optimal flexibility and redundancy.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Layers className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Hybrid Architecture</h3>
                <p className="text-gray-300">Private and public cloud integration with intelligent workload distribution.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Shuffle className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Workload Management</h3>
                <p className="text-gray-300">Dynamic resource allocation and automated scaling based on demand patterns.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Zap className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Performance Optimization</h3>
                <p className="text-gray-300">Advanced caching and content delivery for optimal application performance.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Cloud & Hybrid Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li>• Multi-cloud orchestration</li>
                  <li>• Container and microservices support</li>
                  <li>• API-driven automation</li>
                  <li>• Cloud-native security</li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li>• Hybrid storage solutions</li>
                  <li>• Data migration services</li>
                  <li>• Cost optimization tools</li>
                  <li>• 24/7 cloud operations support</li>
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

export default CloudIntegrationHybridSystems;