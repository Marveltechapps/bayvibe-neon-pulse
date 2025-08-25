import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building2, Layers, Shield, Wrench } from 'lucide-react';

const StructuralDesign = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/87501224-a88d-4d7e-b3e2-0fe5e3962b32.png" 
              alt="Structural Design & Layout"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>

          {/* Transparent Overlay Image */}
          <div className="absolute inset-0 z-5">
            <img src="/lovable-uploads/cec5cde1-5bd6-42df-b7af-d2456332544b.png" alt="3D architectural cutaway view of data center building with solar panels and internal infrastructure" className="w-full h-full object-cover opacity-40" />
          </div>

          <div className="relative z-10 section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Structural Design & <span className="text-green-400">Layout</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Engineering excellence for maximum durability and optimal performance
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-800">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Structural Engineering</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  A data center's structural design ensures durability, scalability, and 
                  security. Reinforced materials and seismic-resistant construction protect 
                  against environmental risks, while modular layouts optimize space and 
                  expansion. Advanced cooling systems maintain optimal temperatures 
                  and fire-resistant materials enhance safety. Secure access points, 
                  streamlined maintenance without compromising security. Energy-efficient 
                  infrastructure support high-capacity and high-performance operations, 
                  creating a resilient and high-performance facility.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Building2 className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Seismic Resistance</h3>
                    <p className="text-gray-300">Earthquake-resistant design with reinforced foundations</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Layers className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Modular Layout</h3>
                    <p className="text-gray-300">Flexible design allowing easy expansion and reconfiguration</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Shield className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Fire Protection</h3>
                    <p className="text-gray-300">Fire-resistant materials and advanced suppression systems</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Wrench className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Maintenance Access</h3>
                    <p className="text-gray-300">Optimized layout for efficient maintenance operations</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-700/30 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">Design Features</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Reinforced concrete construction with steel framework</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Raised floor systems for optimal cable management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Multiple security zones with controlled access points</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Climate-controlled environments with redundant systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Scalable infrastructure supporting future growth</span>
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

export default StructuralDesign;