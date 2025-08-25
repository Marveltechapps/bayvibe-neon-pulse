import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

const CybersecurityMeasures = () => {
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
                <img src="/lovable-uploads/c51057de-c6b3-47bb-846d-8415dea91426.png" alt="Cybersecurity professional working with digital security interface showing shield protection and biometric authentication" className="w-full h-full object-cover opacity-40" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Cybersecurity Measures
                  </h1>
                  <p className="text-xl text-gray-200">
                    Advanced protection against digital threats
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
            <h2 className="text-3xl font-bold text-white mb-8">Enterprise Security Framework</h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Cybersecurity measures in a data center ensure protection against threats and data breaches. Multi-layered security architecture firewall, intrusion detection systems, and endpoint encryption. These security measures ensure regulatory compliance. Advanced threat monitoring and incident response ensure control and containment for unauthorized access.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-xl p-6">
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Multi-Layered Defense</h3>
                <p className="text-gray-300">Comprehensive security architecture with firewalls, IDS/IPS, and endpoint protection.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Lock className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Data Encryption</h3>
                <p className="text-gray-300">End-to-end encryption for data at rest and in transit with advanced key management.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Eye className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Threat Monitoring</h3>
                <p className="text-gray-300">24/7 security operations center with real-time threat detection and response.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <AlertTriangle className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Incident Response</h3>
                <p className="text-gray-300">Rapid incident containment and recovery procedures with forensic capabilities.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Security Protocols</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li>• Advanced persistent threat (APT) protection</li>
                  <li>• Zero-trust network architecture</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Regular security audits</li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li>• Compliance management (SOC 2, HIPAA)</li>
                  <li>• Vulnerability assessment</li>
                  <li>• Security awareness training</li>
                  <li>• Disaster recovery planning</li>
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

export default CybersecurityMeasures;