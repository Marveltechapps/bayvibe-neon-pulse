import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Header />

      {/* Hero Section with Image */}
      <div className="relative h-96 bg-gradient-to-br from-blue-900 to-gray-900 overflow-hidden">
        <img 
          src="/lovable-uploads/52321dd8-a4bc-432d-8ec8-5d6ff9a4bdf7.png" 
          alt="Cybersecurity shield with digital network connections"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-sm max-w-2xl">
            Bayvibe DC is committed to protecting your privacy. Your personal information is handled securely and used only 
            in accordance with our privacy policy.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gray-900/90 backdrop-blur-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-12 text-white">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                This Privacy Policy outlines how we collect, use, and protect user data in compliance with Indian IT laws, GDPR, and ISO 27001 
                standards. By using our services, users agree to the terms of data processing and security measures.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Data Collection & Usage</h2>
              <p className="leading-relaxed">
                We collect personal and non-personal data, including user credentials, IP addresses, and service preferences, to enhance security and 
                operational efficiency. Data is used for authentication, analytics, and service improvements while ensuring strict confidentiality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Data Security & Encryption</h2>
              <p className="leading-relaxed">
                Our data center employs end-to-end encryption, multi-layer security, and AI-driven threat detection to safeguard user information. 
                Compliance with global cybersecurity standards ensures secure data handling and protection against breaches.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Third-Party Sharing & Compliance</h2>
              <p className="leading-relaxed">
                We do not share user data with unauthorized third parties. However, data may be processed by trusted service providers for security 
                audits, compliance checks, and operational enhancements while adhering to strict confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Cookies & Tracking Technologies</h2>
              <p className="leading-relaxed">
                We use cookies, analytics tools, and tracking technologies to improve user experience and website functionality. Users can manage 
                cookie preferences through browser settings, ensuring control over data collection.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. User Rights & Data Access</h2>
              <p className="leading-relaxed">
                Users have the right to access, modify, or delete their personal data in accordance with Indian data protection laws. Requests for data 
                corrections or removal can be submitted through our support portal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Governing Law & Dispute Resolution</h2>
              <p className="leading-relaxed">
                This Privacy Policy is governed by Indian law, ensuring compliance with data protection regulations. Disputes related to data privacy 
                will be resolved through arbitration or legal proceedings in India.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. Policy Updates & Notifications</h2>
              <p className="leading-relaxed">
                We reserve the right to update this Privacy Policy periodically. Users will be notified of changes, and continued use of services implies 
                acceptance of updated policies.
              </p>
            </section>

            <div className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-700">
              <p>All Rights Reserved. © Copyright 2025 bayvibedc.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;