import Header from '../components/Header';
import Footer from '../components/Footer';
import { Server, HardDrive, Database, Cpu } from 'lucide-react';

const ServerStorageSolutions = () => {
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
                <img src="/lovable-uploads/ece1a7eb-468e-444d-bb98-20155cdfb3d4.png" alt="Data center server storage drives with blue and green LED indicators" className="w-full h-full object-cover opacity-40" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Server & Storage Solutions
                  </h1>
                  <p className="text-xl text-gray-200">
                    High-performance computing and secure data storage
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
            <h2 className="text-3xl font-bold text-white mb-8">Enterprise-Grade Infrastructure</h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Server and storage solutions in a data center ensure high-performance computing. High-quality servers support virtualization and their workloads, optimizing resource utilization. Flash-based storage architectures provide RAID and SAN solutions, ensuring data protection and accessibility. Advanced intelligent power management systems ensure efficiency and reliability.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-xl p-6">
                <Server className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">High-Performance Servers</h3>
                <p className="text-gray-300">Enterprise-grade servers optimized for virtualization and high-density computing workloads.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <HardDrive className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Flash-Based Storage</h3>
                <p className="text-gray-300">High-speed SSD and NVMe storage solutions with RAID configurations for data protection.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Database className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">SAN Solutions</h3>
                <p className="text-gray-300">Storage Area Network architectures providing centralized, scalable data management.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Cpu className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Resource Optimization</h3>
                <p className="text-gray-300">Intelligent resource allocation and power management for maximum efficiency.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Storage & Server Specifications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li>• High-density blade servers</li>
                  <li>• Redundant power supplies</li>
                  <li>• Hot-swappable components</li>
                  <li>• Advanced cooling systems</li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li>• Multi-tier storage architecture</li>
                  <li>• Automated backup solutions</li>
                  <li>• Data deduplication technology</li>
                  <li>• 24/7 monitoring and maintenance</li>
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

export default ServerStorageSolutions;