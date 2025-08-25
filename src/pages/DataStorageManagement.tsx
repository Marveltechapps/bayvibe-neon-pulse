import Header from '../components/Header';
import Footer from '../components/Footer';
import { Database, HardDrive, Cloud, Shield } from 'lucide-react';

const DataStorageManagement = () => {
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
                src="/lovable-uploads/ff7307a4-f4a6-4bf2-8b76-fb0f9716591f.png" 
                alt="Data Storage Infrastructure" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Data Storage & Management Solutions
                  </h1>
                  <p className="text-xl text-gray-200">
                    Scalable, secure, and high-performance data storage
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
            <h2 className="text-3xl font-bold text-white mb-8">Enterprise Data Solutions</h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Our data center provides high-performance, scalable storage optimized for enterprise workloads and AI-driven applications. With distributed architecture, object-based storage, and automated redundancy, we ensure secure data accessibility and rapid processing. Compliance with industry standards like GDPR and ISO 27001 guarantees data integrity, encryption, and long-term reliability.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-xl p-6">
                <Database className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Scalable Storage Architecture</h3>
                <p className="text-gray-300">Distributed storage systems that grow with your business needs and data requirements.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <HardDrive className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Object-Based Storage</h3>
                <p className="text-gray-300">Advanced object storage solutions for unstructured data with metadata management.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Cloud className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Automated Redundancy</h3>
                <p className="text-gray-300">Intelligent data replication and backup systems ensuring data availability and integrity.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Compliance & Security</h3>
                <p className="text-gray-300">GDPR and ISO 27001 compliant storage with enterprise-grade encryption.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Storage Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li>• Multi-tier storage optimization</li>
                  <li>• Real-time data deduplication</li>
                  <li>• Automated lifecycle management</li>
                  <li>• High-availability clustering</li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li>• Cross-region replication</li>
                  <li>• API-driven storage management</li>
                  <li>• Performance analytics</li>
                  <li>• 24/7 monitoring and support</li>
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

export default DataStorageManagement;