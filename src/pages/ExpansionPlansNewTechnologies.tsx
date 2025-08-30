import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ExpansionPlansNewTechnologies = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Expansion Plans & New Technologies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scaling our data center footprint with next-generation infrastructure, 
              including liquid cooling, modular designs, and renewable energy integration.
            </p>
          </div>
        </div>
      </section>

      {/* Expansion Overview */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Strategic Growth Vision</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our expansion strategy focuses on deploying cutting-edge data centers across key markets, 
                incorporating the latest in cooling technology, energy efficiency, and modular construction 
                to meet growing demand for high-performance computing infrastructure.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Multi-region data center deployment
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Advanced liquid cooling systems
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Modular and scalable infrastructure
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  100% renewable energy integration
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/lovable-uploads/40b163c4-12d9-46da-91e2-ec7065adbdc8.png" 
                alt="Digital dashboard analytics showing expansion metrics" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Next-Generation Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-green-400 mb-4">Liquid Cooling Solutions</h3>
              <p className="text-gray-300">
                Implementing advanced liquid cooling technologies to improve energy efficiency 
                and reduce operational costs while supporting high-density computing requirements.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Modular Design</h3>
              <p className="text-gray-300">
                Utilizing prefabricated modular construction for faster deployment, 
                reduced construction costs, and enhanced scalability across all new facilities.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Smart Infrastructure</h3>
              <p className="text-gray-300">
                Deploying AI-driven infrastructure management systems for predictive maintenance, 
                automated optimization, and enhanced operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Expansion Timeline</h2>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-green-400 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">2025 Q1-Q2</h3>
                <p className="text-gray-300">Phase 1 expansion with 3 new regional facilities</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-blue-400 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">2025 Q3-Q4</h3>
                <p className="text-gray-300">Implementation of advanced cooling and AI systems</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-purple-400 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">2026+</h3>
                <p className="text-gray-300">Global expansion and emerging technology integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpansionPlansNewTechnologies;