import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Network, Server, Shield, Cloud, RefreshCw, Wrench } from 'lucide-react';
import { Button } from '../components/ui/button';
const ITHardwareInfrastructure = () => {
  const navigate = useNavigate();
  const sections = [{
    id: 'network',
    title: 'Network Architecture & Connectivity',
    description: 'Network architecture and connectivity are vital for seamless data center operations. Redundant fiber-optic connections ensure high-speed, low-latency data transmission.',
    icon: Network,
    route: '/network-architecture-connectivity',
    color: 'bg-blue-500'
  }, {
    id: 'server',
    title: 'Server & Storage Solutions',
    description: 'Server and storage solutions in a data center ensure high-performance computing. High-quality servers support virtualization and their workloads.',
    icon: Server,
    route: '/server-storage-solutions',
    color: 'bg-green-500'
  }, {
    id: 'cloud',
    title: 'Cloud Integration & Hybrid Systems',
    description: 'Cloud integration and hybrid systems deliver data center flexibility and scalability. Seamless integration of private and public cloud environments.',
    icon: Cloud,
    route: '/cloud-integration-hybrid-systems',
    color: 'bg-purple-500'
  }, {
    id: 'cybersecurity',
    title: 'Cybersecurity Measures',
    description: 'Cybersecurity measures in a data center ensure protection against threats and data breaches. Multi-layered security architecture and firewall protection.',
    icon: Shield,
    route: '/cybersecurity-measures',
    color: 'bg-red-500'
  }, {
    id: 'disaster',
    title: 'Multi-Availability & Disaster Recovery',
    description: 'High-availability and disaster recovery ensure continuous data center operations and minimal downtime. Scalable backup systems and failover mechanisms.',
    icon: RefreshCw,
    route: '/multi-availability-disaster-recovery',
    color: 'bg-cyan-500'
  }, {
    id: 'equipment',
    title: 'Equipment & Maintenance Protocols',
    description: 'Equipment and maintenance protocols ensure the reliability and longevity of data center hardware. Regular preventive maintenance and performance monitoring.',
    icon: Wrench,
    route: '/equipment-maintenance-protocols',
    color: 'bg-orange-500'
  }];
  return <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <div className="h-96 bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-800 relative">
              <div className="absolute inset-0 bg-black/30"></div>
              <img 
                src="/lovable-uploads/cde3f059-ac54-49e7-9874-27f2cf4e2a50.png" 
                alt="IT Hardware Infrastructure" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    IT & Hardware Infrastructure
                  </h1>
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

          {/* Content Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map(section => {
            const IconComponent = section.icon;
            return <div key={section.id} className="bg-gray-800 rounded-xl p-8 cursor-pointer hover:transform hover:scale-105 transition-all duration-300 hover:bg-gray-700" onClick={() => navigate(section.route)}>
                  <div className={`${section.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{section.description}</p>
                  <div className="mt-6">
                    <span className="text-green-400 font-medium hover:text-green-300">
                      Learn More →
                    </span>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch with Us</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Have questions or need expert support? Our team is ready to help you with all your data center needs—reach out today!
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            size="lg"
            className="px-8 py-3"
          >
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ITHardwareInfrastructure;