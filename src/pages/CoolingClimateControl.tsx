import Header from '../components/Header';
import Footer from '../components/Footer';
import { Wind, Thermometer, Droplets, Gauge } from 'lucide-react';

const CoolingClimateControl = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/87501224-a88d-4d7e-b3e2-0fe5e3962b32.png" 
              alt="Cooling & Climate Control"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>

          {/* Transparent Overlay Image */}
          <div className="absolute inset-0 z-5">
            <img src="/lovable-uploads/6089eeb6-cde4-42fa-88c1-ee8506345f04.png" alt="Data center cooling fans with blue lighting and precision temperature control systems" className="w-full h-full object-cover opacity-40" />
          </div>

          <div className="relative z-10 section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Cooling & <span className="text-green-400">Climate Control</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced cooling systems for optimal data center performance
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-800">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-6">Precision Climate Management</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Cooling and climate control are essential for maintaining optimal data 
                  center performance. Precision cooling systems regulate temperature and 
                  humidity, preventing overheating. Efficient airflow management and 
                  hot/cold aisle containment reduce energy usage. Liquid cooling solutions provide enhanced thermal 
                  management for high-density racks. Smart climate monitoring optimizes 
                  cooling performance while reducing energy consumption, ensuring a 
                  stable and efficient environment.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Wind className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Airflow Management</h3>
                    <p className="text-gray-300">Optimized airflow patterns with hot/cold aisle containment</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Thermometer className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Temperature Control</h3>
                    <p className="text-gray-300">Precision temperature regulation within tight tolerances</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Droplets className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Humidity Control</h3>
                    <p className="text-gray-300">Optimal humidity levels to prevent static and corrosion</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Gauge className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Monitoring Systems</h3>
                    <p className="text-gray-300">Real-time environmental monitoring and control</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-700/30 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">Cooling Features</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Precision air conditioning with redundant units</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Liquid cooling solutions for high-density equipment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Free cooling integration for energy efficiency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Containment systems for optimized cooling distribution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Intelligent control systems with predictive algorithms</span>
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

export default CoolingClimateControl;