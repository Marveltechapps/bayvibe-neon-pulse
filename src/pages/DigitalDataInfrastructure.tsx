import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Cloud, 
  Database, 
  Globe, 
  Shield, 
  Cpu, 
  Zap,
  Server,
  HardDrive,
  Network,
  Lock,
  BarChart3,
  RefreshCw
} from 'lucide-react';

const DigitalDataInfrastructure = () => {
  const coreServices = [
    { 
      title: 'Data Storage & Management', 
      description: 'Comprehensive solutions for enterprise workloads and AI-driven applications.'
    },
    { 
      title: 'Database Optimization & Performance', 
      description: 'High-performance database solutions with automated scaling and optimization.'
    },
    { 
      title: 'Encryption & Compliance Solutions', 
      description: 'End-to-end encryption with industry compliance standards.'
    },
    { 
      title: 'API & Interoperability Support', 
      description: 'Seamless integration with existing systems and third-party applications.'
    },
    { 
      title: 'Data Connectivity & Interconnectivity', 
      description: 'High-speed, secure connectivity for seamless data flow.'
    }
  ];

  const advancedServices = [
    { 
      title: 'Data Processing & Computation', 
      description: 'High-performance computing for complex data analytics and AI workloads.'
    },
    { 
      title: 'AI & Machine Learning Integration', 
      description: 'Specialized infrastructure for machine learning and AI model training.'
    },
    { 
      title: 'Scalable & Distributed Computing', 
      description: 'Elastic computing resources that scale with your business needs.'
    },
    { 
      title: 'High-Availability & Disaster Recovery', 
      description: 'Robust backup and recovery solutions with 99.99% uptime guarantee.'
    }
  ];

  const infrastructureCards = [
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable and on-demand digital services for storage, apps and operations.',
      color: 'bg-blue-500'
    },
    {
      icon: Database,
      title: 'Database Systems',
      description: 'Secure, structured storage for managing and retrieving vital data efficiently.',
      color: 'bg-purple-500'
    },
    {
      icon: Globe,
      title: 'Network & Data Transfer',
      description: 'High-speed, secure connectivity for seamless information and data flow.',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <div className="h-96 bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-800 relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Digital Data Infrastructure
                  </h1>
                  <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                    Powering the future of data with digital precision and sustainability. Our infrastructure is scalable, secure, and built smarter by design. From cloud to core, we keep your world seamlessly connected. Welcome to the new generation of digital data conquest.
                  </p>
                </div>
              </div>
              {/* Animated lines overlay */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Data Infrastructure Solutions */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Core Data Infrastructure Solutions</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              {coreServices.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium mb-2">
                    {service.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center">
                  <Database className="w-24 h-24 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Data Storage & Management Solutions</h3>
                </div>
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-cyan-400/20 backdrop-blur rounded-lg p-3">
                  <HardDrive className="w-6 h-6 text-cyan-300" />
                </div>
                <div className="absolute bottom-4 left-4 bg-purple-400/20 backdrop-blur rounded-lg p-3">
                  <Server className="w-6 h-6 text-purple-300" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Data Storage & Management Solutions</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our data center provides high-performance, scalable storage optimized for enterprise workloads and AI-driven applications. With distributed architecture, object-based storage, and automated redundancy, we ensure secure data accessibility and rapid processing. Compliance with industry standards like GDPR and ISO 27001 guarantees data integrity, encryption, and long-term scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Computing & Resilience */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Advanced Computing & Resilience</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {advancedServices.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium mb-2">
                    {service.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Data Processing & Computation</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our data center leverages high-performance computing and AI-driven processing to handle large-scale data workloads efficiently. With parallel processing, distributed computing, and real-time analytics, we ensure rapid data transformation and workforce execution. Optimized resource allocation and automated workload balancing maximize scalability and reliability.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center">
                  <Cpu className="w-24 h-24 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">High-Performance Computing</h3>
                </div>
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-green-400/20 backdrop-blur rounded-lg p-3">
                  <BarChart3 className="w-6 h-6 text-green-300" />
                </div>
                <div className="absolute bottom-4 left-4 bg-blue-400/20 backdrop-blur rounded-lg p-3">
                  <RefreshCw className="w-6 h-6 text-blue-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Cards */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {infrastructureCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div key={index} className="bg-gray-900 rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`${card.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{card.description}</p>
                </div>
              );
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
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300">
            CONTACT US →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalDataInfrastructure;