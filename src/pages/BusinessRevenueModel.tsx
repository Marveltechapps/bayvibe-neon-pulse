import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Mail, Phone } from 'lucide-react';
const BusinessRevenueModel = () => {
  const [activeTab, setActiveTab] = useState('colocation');
  const tabs = [{
    id: 'colocation',
    label: 'Colocation Services'
  }, {
    id: 'cloud',
    label: 'Cloud Operations'
  }, {
    id: 'hosting',
    label: 'Hosting Services'
  }, {
    id: 'managed',
    label: 'Managed Solutions'
  }, {
    id: 'information',
    label: 'Information Services'
  }];
  const features = [{
    icon: '🔄',
    title: 'High Availability & Reliability',
    description: 'Provides uninterrupted operations with redundant systems and seamless failover.'
  }, {
    icon: '📊',
    title: 'Scalable Infrastructure',
    description: 'Easily accommodate scaling for businesses to build and grow their IT infrastructure.'
  }, {
    icon: '🛡️',
    title: 'Advanced Security & Compliance',
    description: 'Protects data with encryption, AI threat detection, and industry compliance.'
  }, {
    icon: '⚡',
    title: 'Optimized Performance',
    description: 'Accelerated workloads by caching analytics, faster networking and cost processing.'
  }, {
    icon: '💰',
    title: 'Cost Efficiency',
    description: 'Lower operational costs with pay-as-you-go and efficient infrastructure.'
  }, {
    icon: '🔒',
    title: 'Business Continuity & Disaster Recovery',
    description: 'Multi-region backup and digital services to reduce business continuity risk.'
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-green-900/20"></div>
        
        {/* Transparent Revenue Model Image Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/lovable-uploads/1fda760c-4d3d-4178-a311-2398db42091b.png" alt="Business Revenue Model - Buildings with dollar signs" className="w-full max-w-2xl opacity-30 object-contain" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-2xl p-8 mb-12 mx-[12px] px-px">
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Our data center operates on a multi-stream revenue model, including colocation services, cloud hosting, and enterprise solutions. We generate income 
              through server rentals, data storage, and managed IT services, ensuring scalability and security for businesses. Additionally, subscription-based cloud 
              solutions and disaster recovery services provide long-term financial sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Business Revenue Model Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">Business Revenue Model</h1>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-3 rounded-lg transition-all ${activeTab === tab.id ? 'bg-primary text-black font-semibold' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                <Link to={`/${tab.id === 'colocation' ? 'colocation-services' : tab.id === 'cloud' ? 'cloud-operations' : tab.id === 'hosting' ? 'hosting-services' : tab.id === 'managed' ? 'managed-solutions' : 'information-services'}`} className="block w-full h-full">
                  {tab.label}
                </Link>
              </button>)}
          </div>

          {/* Active Tab Content */}
          {activeTab === 'colocation' && <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-lg">
                <img src="/lovable-uploads/colocation-services.png" alt="Colocation Services - Modern data center facility" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Colocation Services</h3>
                <p className="text-gray-300 leading-relaxed">
                  Rent dedicated rack or floor space in our secure facility for your servers 
                  and IT equipment. Charges are based on the amount of space, power 
                  consumption, and network connectivity. This allows businesses to leverage 
                  advanced infrastructure without the cost of building their own data 
                  center.
                </p>
              </div>
            </div>}

          {activeTab === 'cloud' && <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-lg">
                <img src="/lovable-uploads/cloud-operations.png" alt="Cloud Operations - Cloud computing infrastructure" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Cloud Operations</h3>
                <p className="text-gray-300 leading-relaxed">
                  Comprehensive cloud computing services including virtual machines, storage, 
                  and networking resources. Our cloud platform offers scalable solutions 
                  with pay-as-you-use pricing, automated backup, and multi-region 
                  availability for enterprise-grade performance and reliability.
                </p>
              </div>
            </div>}

          {activeTab === 'hosting' && <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-lg">
                <img src="/lovable-uploads/hosting-services.png" alt="Hosting Services - Web and application hosting" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Hosting Services</h3>
                <p className="text-gray-300 leading-relaxed">
                  Professional web and application hosting solutions with high-performance 
                  servers, content delivery networks, and managed databases. We provide 
                  shared, VPS, and dedicated hosting options with 99.9% uptime guarantee 
                  and 24/7 technical support for optimal performance.
                </p>
              </div>
            </div>}

          {activeTab === 'managed' && <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-lg">
                <img src="/lovable-uploads/managed-solutions.png" alt="Managed Solutions - IT infrastructure management" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Managed Solutions</h3>
                <p className="text-gray-300 leading-relaxed">
                  Complete IT infrastructure management including server monitoring, 
                  security updates, backup management, and performance optimization. 
                  Our expert team handles all technical aspects, allowing you to focus 
                  on your core business while ensuring maximum system reliability.
                </p>
              </div>
            </div>}

          {activeTab === 'information' && <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-lg">
                <img src="/lovable-uploads/information-services.png" alt="Information Services - Data analytics and interconnectivity" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Information Services</h3>
                <p className="text-gray-300 leading-relaxed">
                  Advanced data analytics, interconnectivity solutions, and digital 
                  transformation services. We provide real-time data processing, 
                  business intelligence tools, and seamless integration between 
                  different systems for enhanced operational efficiency and insights.
                </p>
              </div>
            </div>}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => <div key={index} className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg hover:border-primary/50 transition-colors">
                <div className="text-3xl mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 bg-gradient-to-r from-green-900/20 to-green-700/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch with Us</h2>
          <p className="text-gray-300 mb-8">
            Have questions or need expert support? Our team is ready to help you with all 
            your data center needs - reach out today!
          </p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-3">
              CONTACT US →
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>;
};
export default BusinessRevenueModel;