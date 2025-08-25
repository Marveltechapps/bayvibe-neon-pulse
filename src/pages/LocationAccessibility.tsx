import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Network, Shield, Zap } from 'lucide-react';

const LocationAccessibility = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/87501224-a88d-4d7e-b3e2-0fe5e3962b32.png" 
              alt="Location & Accessibility"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>

          {/* Transparent Overlay Image */}
          <div className="absolute inset-0 z-5">
            <img src="/lovable-uploads/b58dfe06-bed5-48d7-93c9-eb05ba00d038.png" alt="Network connectivity visualization with purple buildings and connection paths" className="w-full h-full object-cover opacity-40" />
          </div>

          <div className="relative z-10 section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Location & <span className="text-green-400">Accessibility</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic positioning for optimal connectivity and operational excellence
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-800">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-6">Strategic Location Benefits</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  A well-located data center ensures high-speed connectivity, security, and 
                  efficiency. Proximity to fiber optic hubs reduces latency, while low-risk 
                  areas prevent disruptions from natural disasters. Sustainable energy 
                  sources like solar and wind enhance eco-friendliness. Redundant fiber 
                  networks and multi-carrier support ensure seamless connectivity. Edge 
                  computing optimizes real-time processing for AI and IoT applications. 
                  Accessibility for hardware deliveries and integration with nearby tech 
                  ecosystems boost operational support. Compliance with local and 
                  international regulations safeguards data security.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <MapPin className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Strategic Positioning</h3>
                    <p className="text-gray-300">Optimal location near major network hubs and transport links</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Network className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Network Connectivity</h3>
                    <p className="text-gray-300">Direct access to multiple fiber providers and carriers</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Shield className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Risk Mitigation</h3>
                    <p className="text-gray-300">Located in low-risk zones away from natural disasters</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Zap className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Power Access</h3>
                    <p className="text-gray-300">Reliable grid connections with renewable energy sources</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-700/30 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">Key Features</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Proximity to major metropolitan areas for reduced latency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Direct fiber connections to internet exchange points</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>24/7 accessible for maintenance and support teams</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Compliance with local and international data regulations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Multi-carrier neutral facility design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LocationAccessibility;