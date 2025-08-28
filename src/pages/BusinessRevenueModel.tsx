import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Server, Shield, Gauge, TrendingUp, DollarSign, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessRevenueModel = () => {
  const revenueStreams = [
    "Colocation Services",
    "Cloud Hosting & Virtualization", 
    "Managed IT & Security Services",
    "Subscription-Based Business Continuity",
    "Disaster Recovery & Business Continuity"
  ];

  const valuePropositions = [
    {
      title: "High Availability & Reliability",
      description: "Provides uptime and operational with redundant systems to ensure business failures.",
      icon: CheckCircle
    },
    {
      title: "Scalable Infrastructure", 
      description: "Flexible resources scaling by to support on-demand growth and fluctuating needs.",
      icon: TrendingUp
    },
    {
      title: "Advanced Security & Compliance",
      description: "Robust data with compliance, AI-range detection, and security compliance.",
      icon: Shield
    },
    {
      title: "Optimized Performance",
      description: "Advanced workflows and high-end systems that are designed for fast processing.",
      icon: Gauge
    },
    {
      title: "Cost Efficiency",
      description: "Lower operational costs with pay-as-you-go and efficient infrastructure.",
      icon: DollarSign
    },
    {
      title: "Business Continuity & Disaster Recovery",
      description: "Multi-region backup and digital recovery to reduce business error.",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section with Financial Buildings */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/2e358459-9c71-469b-9523-881d299cf09c.png" 
              alt="Business Revenue Model - Data Center Buildings with Dollar Signs" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto">
              <p className="text-white/90 text-sm leading-relaxed">
                Our data center operates on a multi-stream revenue model, including colocation services, cloud hosting, and enterprise solutions. We generate income 
                through server rentals, data storage, and managed IT services, ensuring scalability and security for businesses. Additionally, subscription-based cloud 
                solutions and disaster recovery services provide long-term financial sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* Business Revenue Model Title Section */}
        <section className="py-16 bg-slate-900">
          <div className="section-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Business Revenue Model
              </h1>
            </div>
          </div>
        </section>

        {/* Revenue Streams Tabs */}
        <section className="py-12 bg-slate-900 border-b border-slate-700">
          <div className="section-container">
            <div className="flex flex-wrap justify-center gap-4">
              {revenueStreams.map((stream, index) => (
                <button key={index} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-white transition-colors">
                  {stream}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Sections */}
        <section className="py-20 bg-slate-900">
          <div className="section-container">
            <div className="space-y-16">
              
              {/* Colocation Services */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <Link to="/server-storage-solutions">
                    <div className="relative rounded-2xl overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
                      <img 
                        src="/lovable-uploads/96646f8d-3e54-45a3-97c2-ca6c3ea6002a.png" 
                        alt="Colocation Services" 
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to="/server-storage-solutions" className="block hover:opacity-80 transition-opacity">
                    <h2 className="text-2xl font-bold text-green-400 mb-4 cursor-pointer">Colocation Services</h2>
                  </Link>
                  <p className="text-gray-300 leading-relaxed">
                    Our data center offers secure server space rentals, allowing businesses to host their infrastructure with high uptime and redundancy. Clients benefit from scalable power, cooling, and network connectivity ensuring optimal performance and compliance. Flexible pricing models support customized resource allocation.
                  </p>
                </div>
              </div>

              {/* Cloud Hosting & Virtualization */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2 relative">
                  <Link to="/cloud-integration-hybrid-systems">
                    <div className="relative rounded-2xl overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
                      <img 
                        src="/lovable-uploads/96646f8d-3e54-45a3-97c2-ca6c3ea6002a.png" 
                        alt="Cloud Hosting & Virtualization" 
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                  </Link>
                </div>
                <div className="lg:order-1">
                  <Link to="/cloud-integration-hybrid-systems" className="block hover:opacity-80 transition-opacity">
                    <h2 className="text-2xl font-bold text-green-400 mb-4 cursor-pointer">Cloud Hosting & Virtualization</h2>
                  </Link>
                  <p className="text-gray-300 leading-relaxed">
                    We provide public, private, and hybrid cloud solutions, enabling businesses to deploy applications seamlessly. Virtualization enhances server efficiency, reducing costs while ensuring high availability and security. AI-driven resources allocation optimizes performance and scalability.
                  </p>
                </div>
              </div>

              {/* Managed IT & Security Services */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <Link to="/cybersecurity-measures">
                    <div className="relative rounded-2xl overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
                      <img 
                        src="/lovable-uploads/96646f8d-3e54-45a3-97c2-ca6c3ea6002a.png" 
                        alt="Managed IT & Security Services" 
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to="/cybersecurity-measures" className="block hover:opacity-80 transition-opacity">
                    <h2 className="text-2xl font-bold text-green-400 mb-4 cursor-pointer">Managed IT & Security Services</h2>
                  </Link>
                  <p className="text-gray-300 leading-relaxed">
                    Our end-to-end IT management includes cybersecurity, data backup, and disaster recovery solutions. Businesses benefit from real-time monitoring, AI-driven threat detection, and compliance support. This ensures secure operations and minimal downtime.
                  </p>
                </div>
              </div>

              {/* Subscription-Based Storage & Computing */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2 relative">
                  <Link to="/data-storage-management">
                    <div className="relative rounded-2xl overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
                      <img 
                        src="/lovable-uploads/96646f8d-3e54-45a3-97c2-ca6c3ea6002a.png" 
                        alt="Subscription-Based Storage & Computing" 
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                  </Link>
                </div>
                <div className="lg:order-1">
                  <Link to="/data-storage-management" className="block hover:opacity-80 transition-opacity">
                    <h2 className="text-2xl font-bold text-green-400 mb-4 cursor-pointer">Subscription-Based Storage & Computing</h2>
                  </Link>
                  <p className="text-gray-300 leading-relaxed">
                    Clients subscribe to on-demand storage and computing power, paying for usage-based resources. This model supports big data analytics, AI workloads, and scalable enterprise applications. Automated data replication and optimization enhance efficiency.
                  </p>
                </div>
              </div>

              {/* Disaster Recovery & Business Continuity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <Link to="/multi-availability-disaster-recovery">
                    <div className="relative rounded-2xl overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
                      <img 
                        src="/lovable-uploads/96646f8d-3e54-45a3-97c2-ca6c3ea6002a.png" 
                        alt="Disaster Recovery & Business Continuity" 
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to="/multi-availability-disaster-recovery" className="block hover:opacity-80 transition-opacity">
                    <h2 className="text-2xl font-bold text-green-400 mb-4 cursor-pointer">Disaster Recovery & Business Continuity</h2>
                  </Link>
                  <p className="text-gray-300 leading-relaxed">
                    We provide backup solutions, failover systems, and multi-region data replication to ensure business continuity. AI-driven predictive maintenance prevents failures, while cloud-based recovery ensures rapid restoration in case of disruptions.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Value Propositions Grid */}
        <section className="py-20 bg-slate-800">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valuePropositions.map((value, index) => (
                <div key={index} className="p-8 rounded-xl bg-slate-700 border border-slate-600 hover:bg-slate-600 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-green-500/20 mr-4 group-hover:bg-green-500/30 transition-colors">
                      <value.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-900">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch with Us</h2>
              <p className="text-xl text-gray-300 mb-8">
                Have questions or need expert support? Our team is ready to help you with all 
                your data center needs — reach out today!
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold text-lg"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessRevenueModel;