import Header from '../components/Header';
import Footer from '../components/Footer';
import { Zap, Battery, Power, AlertTriangle } from 'lucide-react';

const PowerRedundancy = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/87501224-a88d-4d7e-b3e2-0fe5e3962b32.png" 
              alt="Power Redundancy & Backup"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>

          {/* Transparent Overlay Image */}
          <div className="absolute inset-0 z-5">
            <img src="/lovable-uploads/40002f09-af34-4493-b9de-029751d4171e.png" alt="Data center server racks with power infrastructure and green LED lighting" className="w-full h-full object-cover opacity-40" />
          </div>

          <div className="relative z-10 section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Power Redundancy & <span className="text-green-400">Backup</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ensuring uninterrupted power supply with advanced backup systems
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-800">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-6">Uninterrupted Power Systems</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Power redundancy in a data center ensures reliability and uninterrupted 
                  operations. Dual utility feeds and UPS systems provide immediate 
                  backup during outages, while on-site generators with automatic failover 
                  guarantee continuous power supply. Battery storage enhances short-
                  term resilience, preventing disruptions. Redundant configurations like 
                  N+1 and 2N protect critical infrastructure from failures. Smart power 
                  management and real-time monitoring optimize efficiency while ensuring operational stability.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Zap className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Dual Utility Feeds</h3>
                    <p className="text-gray-300">Multiple power sources from different grid connections</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Battery className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">UPS Systems</h3>
                    <p className="text-gray-300">Uninterruptible power supply for seamless transitions</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Power className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Backup Generators</h3>
                    <p className="text-gray-300">Diesel generators with automatic failover capabilities</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <AlertTriangle className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Monitoring Systems</h3>
                    <p className="text-gray-300">Real-time power monitoring and management</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-700/30 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">Power Features</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>N+1 redundancy configuration for critical systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Automatic transfer switches for seamless failover</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Battery backup systems with extended runtime</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Load balancing across multiple power paths</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Power quality monitoring and conditioning</span>
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

export default PowerRedundancy;