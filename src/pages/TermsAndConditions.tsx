import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Header />

      {/* Hero Section with Image */}
      <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <img 
          src="/lovable-uploads/bce4f30b-6ea0-48fc-985b-db1da5c1e682.png" 
          alt="Hand writing terms and conditions with a pen"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-sm max-w-2xl">
            By accessing or using this website, you agree to comply with BayVibe DC's terms and conditions. 
            All content and visuals are the property of BayVibe DC and protected by applicable laws.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gray-900/90 backdrop-blur-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-12 text-white">
            Terms and Conditions
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                This section defines the scope of services provided by BAYVIBE DC, including data hosting, colocation, cloud solutions, and security 
                protocols. Users acknowledge and agree to comply with all applicable Indian IT laws, including the Information Technology Act, 
                2000, and the Digital Personal Data Act, 2023. Both the company and users have defined rights and responsibilities to 
                ensure secure, lawful, and efficient use of services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. User Agreement</h2>
              <p className="leading-relaxed">
                By using our services, users agree to abide by ethical usage policies. Users must not engage in illegal activities, unauthorized 
                access, or misuse of resources. Hosting of content that violates Indian cybersecurity laws, including but not limited to malware, 
                pirated software, or offensive material, is strictly prohibited. Violations may lead to immediate suspension without notice and 
                potential termination of services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Data Security & Privacy</h2>
              <p className="leading-relaxed">
                We employ industry-leading security measures such as end-to-end encryption, multi-layer security architectures, and AI-driven 
                threat detection systems to protect user data. Our practices comply with GDPR, ISO 27001 standards. Users are responsible for 
                maintaining strong password security, safeguarding access credentials, and following best practices to prevent unauthorized 
                access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Service Availability & Uptime</h2>
              <p className="leading-relaxed">
                We guarantee a minimum of 99.99% uptime through redundant infrastructure and automated failover mechanisms. Scheduled 
                maintenance will be communicated in advance, and emergency downtime will be minimized to ensure business continuity. We are 
                not liable for downtime caused by force majeure or third-party failures.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Payment & Subscription Terms</h2>
              <p className="leading-relaxed">
                Billing cycles, pricing structures, and refund policies for colocation, cloud hosting, and managed services are detailed on our pricing 
                page and subscription portal. All invoices must be paid prior to payment deadlines. Non-payment may result in service suspension or 
                termination without prior notice. Refunds, if any, will be processed as per the agreed terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Intellectual Property Rights</h2>
              <p className="leading-relaxed">
                All content on the website, including text, graphics, logos, software, and proprietary technology, is owned by BAYVIBE DC. Users 
                may not copy, distribute, modify, or create derivative works without explicit written consent from the company.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Liability & Indemnification</h2>
              <p className="leading-relaxed">
                BAYVIBE DC is not liable for any service disruptions, cyber threats, data loss, or damages caused by third parties. Users agree to 
                indemnify and hold harmless the company against any claims, damages, or legal actions arising from misuse or violation of these 
                terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. Governing Law & Dispute Resolution</h2>
              <p className="leading-relaxed">
                Any disputes arising from service use or data hosting shall be resolved through arbitration or courts located. Users agree to comply 
                with all local regulations related to data hosting and cybersecurity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">9. Acceptable Use Policy</h2>
              <p className="leading-relaxed">
                Users must not engage in hacking, spamming, phishing, hosting illegal content, or any activity that disrupts or compromises the 
                integrity of our services. Violations will result in immediate account termination and may lead to legal action.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">10. Modification of Terms</h2>
              <p className="leading-relaxed">
                BAYVIBE DC reserves the right to update or modify these terms and conditions at any time. Users will be notified of significant 
                changes via email or website announcements. Continued use of services after such updates implies acceptance of the revised 
                terms.
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

export default TermsAndConditions;