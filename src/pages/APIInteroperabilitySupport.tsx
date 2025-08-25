import Header from '../components/Header';
import Footer from '../components/Footer';
import { Code, Layers, Globe, Zap } from 'lucide-react';

const APIInteroperabilitySupport = () => {
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
                src="/lovable-uploads/b6542128-0deb-49c4-b5c2-c5729c6bec37.png" 
                alt="API Integration and Connectivity" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    API & Interoperability Support
                  </h1>
                  <p className="text-xl text-gray-200">
                    Seamless integration and cross-platform compatibility
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
            <h2 className="text-3xl font-bold text-white mb-8">Universal Connectivity Solutions</h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Our data center enables seamless data exchange through standardized APIs, open protocols, and cross-platform compatibility. By integrating REST, GraphQL, and event-driven architectures, we ensure efficient interconnectivity across diverse systems. AI-driven data governance and automated validation enhance security, scalability, and real-time connectivity.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-xl p-6">
                <Code className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Standardized APIs</h3>
                <p className="text-gray-300">RESTful and GraphQL APIs ensuring seamless integration with existing systems.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Layers className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Cross-Platform Compatibility</h3>
                <p className="text-gray-300">Universal protocols supporting diverse platforms and legacy system integration.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Globe className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Event-Driven Architecture</h3>
                <p className="text-gray-300">Real-time event processing and microservices orchestration for scalability.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Zap className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">AI-Driven Governance</h3>
                <p className="text-gray-300">Intelligent data validation and automated policy enforcement for secure operations.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Integration Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li>• RESTful API gateways</li>
                  <li>• GraphQL query optimization</li>
                  <li>• Webhook automation</li>
                  <li>• Protocol translation</li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li>• Microservices architecture</li>
                  <li>• Real-time data streaming</li>
                  <li>• API versioning and lifecycle</li>
                  <li>• 24/7 integration support</li>
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

export default APIInteroperabilitySupport;