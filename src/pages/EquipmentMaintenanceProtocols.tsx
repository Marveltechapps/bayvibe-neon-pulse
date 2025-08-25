import Header from '../components/Header';
import Footer from '../components/Footer';
import { Wrench, Calendar, AlertCircle, Settings } from 'lucide-react';

const EquipmentMaintenanceProtocols = () => {
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
                <img src="/lovable-uploads/8dc366fd-5152-4654-aa6d-712d1ae0f4cc.png" alt="Technician performing server hardware maintenance with motherboard and networking cables in data center" className="w-full h-full object-cover opacity-40" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Equipment & Maintenance Protocols
                  </h1>
                  <p className="text-xl text-gray-200">
                    Proactive maintenance and equipment reliability
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
            <h2 className="text-3xl font-bold text-white mb-8">Comprehensive Maintenance Strategy</h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Equipment and maintenance protocols ensure the reliability and longevity of data center hardware. Regular preventive maintenance, periodic testing, and performance monitoring ensure optimal system performance. Redundant cooling and power systems with continuous operational visibility make optimal compliance with industry standards, enabling reliable, efficient, and sustainable infrastructure.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-xl p-6">
                <Wrench className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Preventive Maintenance</h3>
                <p className="text-gray-300">Scheduled maintenance programs ensuring optimal equipment performance and longevity.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Calendar className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Scheduled Testing</h3>
                <p className="text-gray-300">Regular system testing and validation to ensure all components function correctly.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <AlertCircle className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Performance Monitoring</h3>
                <p className="text-gray-300">Continuous monitoring of equipment health and performance metrics.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Settings className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Compliance Standards</h3>
                <p className="text-gray-300">Adherence to industry standards and regulatory compliance requirements.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Maintenance Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li>• Predictive maintenance analytics</li>
                  <li>• Hot-swappable components</li>
                  <li>• Remote diagnostic capabilities</li>
                  <li>• Spare parts inventory management</li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li>• Certified technician support</li>
                  <li>• Equipment lifecycle management</li>
                  <li>• Performance optimization</li>
                  <li>• 24/7 emergency response</li>
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

export default EquipmentMaintenanceProtocols;