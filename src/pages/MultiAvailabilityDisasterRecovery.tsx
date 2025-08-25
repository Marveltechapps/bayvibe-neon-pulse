import Header from '../components/Header';
import Footer from '../components/Footer';
import { RefreshCw, Database, Globe, Shield } from 'lucide-react';

const MultiAvailabilityDisasterRecovery = () => {
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
                <img src="/lovable-uploads/102ea428-2e1e-484d-8b08-c0f04349dcc3.png" alt="Digital cloud infrastructure visualization showing distributed data centers and network connectivity for disaster recovery" className="w-full h-full object-cover opacity-40" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Multi-Availability & Disaster Recovery
                  </h1>
                  <p className="text-xl text-gray-200">
                    Ensuring continuous operations and data protection
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
            <h2 className="text-3xl font-bold text-white mb-8">Business Continuity Solutions</h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              High-availability and disaster recovery ensure continuous data center operations and minimal downtime. Scalable backup systems, failover mechanisms, and real-time data synchronization provide robust infrastructure. Backup solutions, offsite storage, and disaster recovery ensure business continuity with automated systems that support rapid recovery, ensuring uninterrupted access to core infrastructure.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-xl p-6">
                <RefreshCw className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Automated Failover</h3>
                <p className="text-gray-300">Intelligent failover systems ensuring seamless transition during outages with minimal disruption.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Database className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Real-Time Replication</h3>
                <p className="text-gray-300">Continuous data synchronization across geographically distributed backup sites.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Globe className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Geographic Redundancy</h3>
                <p className="text-gray-300">Multiple data center locations ensuring protection against regional disasters.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Business Continuity</h3>
                <p className="text-gray-300">Comprehensive disaster recovery planning with tested recovery procedures.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Recovery Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li>• 99.99% uptime guarantee</li>
                  <li>• RPO/RTO optimization</li>
                  <li>• Automated backup validation</li>
                  <li>• Cross-site data mirroring</li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li>• Hot/warm/cold backup strategies</li>
                  <li>• Regular disaster recovery testing</li>
                  <li>• Cloud-based backup integration</li>
                  <li>• 24/7 monitoring and alerting</li>
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

export default MultiAvailabilityDisasterRecovery;