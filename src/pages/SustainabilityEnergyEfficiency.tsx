import Header from '../components/Header';
import Footer from '../components/Footer';
import { Leaf, Sun, Recycle, TrendingDown } from 'lucide-react';

const SustainabilityEnergyEfficiency = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/87501224-a88d-4d7e-b3e2-0fe5e3962b32.png" 
              alt="Sustainability & Energy Efficiency"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>

          {/* Transparent Overlay Image */}
          <div className="absolute inset-0 z-5">
            <img src="/lovable-uploads/88e7b17f-da0c-4226-b763-188f273a4e85.png" alt="Eco-friendly data center with green cloud, solar panels, wind turbines and sustainable technology" className="w-full h-full object-cover opacity-40" />
          </div>

          <div className="relative z-10 section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Sustainability & <span className="text-green-400">Energy Efficiency</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the way in eco-friendly data center operations
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-800">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-6">Green Data Center Operations</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Sustainability and energy efficiency are vital for modern data center 
                  infrastructure. Renewable energy sources like solar and wind reduce 
                  environmental impact, while energy-efficient cooling systems optimize 
                  power consumption. Smart server management and real-time monitoring 
                  help minimize waste. Advanced heat recovery solutions improve energy 
                  workload distribution further enhance sustainability. Compliance with 
                  green building standards ensures eco-friendly operations and long-term 
                  cost savings.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Sun className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Renewable Energy</h3>
                    <p className="text-gray-300">Solar and wind power integration for clean energy</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Leaf className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Carbon Neutral</h3>
                    <p className="text-gray-300">Commitment to net-zero carbon emissions</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Recycle className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Waste Recycling</h3>
                    <p className="text-gray-300">Comprehensive recycling and waste management programs</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <TrendingDown className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Energy Optimization</h3>
                    <p className="text-gray-300">AI-driven energy management for maximum efficiency</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-700/30 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">Green Initiatives</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>100% renewable energy sourcing commitment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Advanced heat recovery and reuse systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Water conservation and recycling programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>LEED and ENERGY STAR certifications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Green building materials and construction practices</span>
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

export default SustainabilityEnergyEfficiency;