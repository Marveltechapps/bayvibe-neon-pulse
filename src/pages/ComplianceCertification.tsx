import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Award, FileCheck, Lock } from 'lucide-react';

const ComplianceCertification = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/87501224-a88d-4d7e-b3e2-0fe5e3962b32.png" 
              alt="Compliance & Certification Standards"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>

          {/* Transparent Overlay Image */}
          <div className="absolute inset-0 z-5">
            <img src="/lovable-uploads/8aece7d1-1f82-4292-b6f3-0fdca443e2e7.png" alt="Professional presenting holographic data compliance visualization with blue geometric structures" className="w-full h-full object-cover opacity-40" />
          </div>

          <div className="relative z-10 section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Compliance & <span className="text-green-400">Certification Standards</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meeting the highest industry standards for security and compliance
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-800">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-6">Industry-Leading Standards</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Compliance and certification standards ensure data center meets security, 
                  efficiency, and legal requirements. Adherence to ISO 27001 and SOC 2 
                  ensures secure data protection and operational integrity. Certifications like 
                  LEED and ENERGY STAR promote sustainability and energy efficiency. 
                  Regular audits and compliance with local regulations safeguard reliability 
                  and industry trust.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Shield className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">ISO 27001</h3>
                    <p className="text-gray-300">Information security management system certification</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Award className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">SOC 2 Type II</h3>
                    <p className="text-gray-300">Security, availability, and confidentiality auditing</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <FileCheck className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">GDPR Compliance</h3>
                    <p className="text-gray-300">European data protection regulation compliance</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg">
                    <Lock className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">HIPAA Ready</h3>
                    <p className="text-gray-300">Healthcare information protection standards</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-700/30 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">Certifications</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Tier III Design and Constructed Facility certification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>PCI DSS Level 1 compliance for payment processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>FISMA and FedRAMP authorization for government clients</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>SSAE 18 SOC 1 Type II financial controls audit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Continuous security monitoring and annual audits</span>
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

export default ComplianceCertification;