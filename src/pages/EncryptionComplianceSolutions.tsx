import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, FileCheck, AlertTriangle } from 'lucide-react';

const EncryptionComplianceSolutions = () => {
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
                src="/lovable-uploads/926a033c-3d6d-4fd3-b670-5f9d6102b16c.png" 
                alt="Encryption and Security" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Encryption & Compliance Solutions
                  </h1>
                  <p className="text-xl text-gray-200">
                    Comprehensive data protection and regulatory compliance
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
            <h2 className="text-3xl font-bold text-white mb-8">Enterprise Security & Compliance</h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Our data center ensures end-to-end encryption for data security and regulatory compliance, protecting sensitive information from unauthorized access. We adhere to GDPR, HIPAA, and ISO 27001 standards, ensuring secure data handling and privacy protection. AI-driven threat detection and automated compliance monitoring enhance data integrity and risk mitigation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-xl p-6">
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">End-to-End Encryption</h3>
                <p className="text-gray-300">Advanced encryption protocols protecting data at rest, in transit, and in processing.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <FileCheck className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Regulatory Compliance</h3>
                <p className="text-gray-300">Full adherence to GDPR, HIPAA, ISO 27001, and other international compliance standards.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Lock className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Data Privacy Protection</h3>
                <p className="text-gray-300">Comprehensive privacy controls and secure data handling processes.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <AlertTriangle className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">AI-Driven Threat Detection</h3>
                <p className="text-gray-300">Automated monitoring and threat detection with real-time risk assessment.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Security & Compliance Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li>• AES-256 encryption standards</li>
                  <li>• Key management systems</li>
                  <li>• Access control policies</li>
                  <li>• Audit trail logging</li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li>• Compliance reporting tools</li>
                  <li>• Data loss prevention (DLP)</li>
                  <li>• Identity and access management</li>
                  <li>• 24/7 security monitoring</li>
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

export default EncryptionComplianceSolutions;