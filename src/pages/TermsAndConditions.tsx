import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
            <p className="text-lg leading-relaxed">
              Welcome to BayVibe DC. These terms and conditions outline the rules and regulations 
              for the use of BayVibe DC's website and services.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on BayVibe DC's 
                website for personal, non-commercial transitory viewing only. This is the grant of a 
                license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on BayVibe DC's website;</li>
                <li>remove any copyright or other proprietary notations from the materials.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
              <p>
                The materials on BayVibe DC's website are provided on an 'as is' basis. BayVibe DC 
                makes no warranties, expressed or implied, and hereby disclaims and negates all other 
                warranties including without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property or other 
                violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
              <p>
                In no event shall BayVibe DC or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on BayVibe DC's website, even 
                if BayVibe DC or a BayVibe DC authorized representative has been notified orally or in 
                writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Center Services</h2>
              <p>
                BayVibe DC provides data center colocation, cloud hosting, and managed IT services. 
                Specific terms for these services are outlined in separate service level agreements (SLAs) 
                provided to customers upon service engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Privacy and Data Protection</h2>
              <p>
                We are committed to protecting your privacy and ensuring the security of your data. 
                Our data handling practices comply with industry standards and applicable data protection 
                regulations. For detailed information, please refer to our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Revisions and Errata</h2>
              <p>
                The materials appearing on BayVibe DC's website could include technical, typographical, 
                or photographic errors. BayVibe DC does not warrant that any of the materials on its 
                website are accurate, complete, or current. BayVibe DC may make changes to the materials 
                contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Links</h2>
              <p>
                BayVibe DC has not reviewed all of the sites linked to our website and is not responsible 
                for the contents of any such linked site. The inclusion of any link does not imply 
                endorsement by BayVibe DC of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Modifications</h2>
              <p>
                BayVibe DC may revise these terms of service for its website at any time without notice. 
                By using this website, you are agreeing to be bound by the then current version of these 
                terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <p><strong>Email:</strong> shekar@marvel100logosticspark.com</p>
                <p><strong>Phone:</strong> +91 9444126240</p>
              </div>
            </section>

            <div className="text-sm text-gray-400 mt-12 pt-8 border-t border-white/10">
              <p>Last updated: December 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;