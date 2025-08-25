import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Server, Shield, Zap, Database, Network, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataCenter = () => {
  const dataCenterServices = [
    {
      title: "High-Performance Computing",
      description: "State-of-the-art servers and computing infrastructure designed for maximum performance and reliability, supporting enterprise-level workloads with guaranteed uptime.",
      icon: Server,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Advanced Security Systems",
      description: "Multi-layered security protocols including biometric access, 24/7 monitoring, and advanced threat detection systems.",
      icon: Shield,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Redundant Power Systems",
      description: "Uninterruptible power supply with multiple backup generators ensuring 99.99% uptime availability.",
      icon: Zap,
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "Data Storage Solutions",
      description: "Scalable storage systems with high-speed SSD and traditional storage options for all business needs.",
      icon: Database,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Network Connectivity",
      description: "High-speed fiber connections with multiple ISP redundancy for optimal network performance and reliability.",
      icon: Network,
      color: "from-red-500/20 to-pink-500/20"
    }
  ];

  const dataCenterFeatures = [
    {
      title: "99.99% Uptime Guarantee",
      description: "Industry-leading reliability with redundant systems and proactive monitoring to ensure your operations never stop.",
      icon: Server,
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Advanced Cooling Systems",
      description: "Precision climate control with energy-efficient cooling solutions maintaining optimal server temperatures.",
      icon: Thermometer,
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Multi-factor authentication, biometric access controls, and 24/7 security personnel protecting your assets.",
      icon: Shield,
      color: "from-purple-500/10 to-violet-500/10"
    },
    {
      title: "Scalable Infrastructure",
      description: "Flexible capacity planning allowing seamless scaling as your business grows without downtime.",
      icon: Database,
      color: "from-orange-500/10 to-yellow-500/10"
    },
    {
      title: "Redundant Connectivity",
      description: "Multiple carrier connections and diverse network paths ensuring uninterrupted data transmission.",
      icon: Network,
      color: "from-green-500/10 to-teal-500/10"
    },
    {
      title: "Sustainable Operations",
      description: "Green energy initiatives and efficient cooling systems reducing environmental impact while maintaining performance.",
      icon: Zap,
      color: "from-red-500/10 to-pink-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <img 
            src="/lovable-uploads/10413a3f-a466-4a94-8fc4-6b10e9625660.png" 
            alt="Data Center Infrastructure" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
          />
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Data Center Solutions
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Our state-of-the-art data center provides enterprise-grade infrastructure with unmatched reliability, security, and performance. From colocation services to managed hosting, we deliver comprehensive solutions that keep your business running 24/7 with industry-leading uptime guarantees and advanced security protocols.
              </p>
            </div>
          </div>
        </section>

        {/* Data Center Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Center Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive infrastructure solutions designed for maximum performance and reliability
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataCenterServices.map((service, index) => (
                <div key={index} className={`p-8 rounded-xl bg-gradient-to-br ${service.color} border border-border/50 hover:shadow-lg transition-all duration-300 group`}>
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Highlight */}
        <section className="py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 mr-4">
                    <Server className="w-8 h-8 text-blue-500" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Enterprise Infrastructure</h2>
                </div>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Our data center features cutting-edge infrastructure with redundant power systems, 
                  advanced cooling technology, and enterprise-grade security. We provide scalable 
                  solutions that grow with your business while maintaining the highest standards 
                  of performance and reliability.
                </p>
                <Link 
                  to="/it-hardware-infrastructure"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Explore Our Infrastructure
                </Link>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/0b8f1acd-8f87-46c7-919e-9bd3e9f5c057.png" 
                    alt="Data Center Server Infrastructure" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Center Features */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced capabilities that ensure your data and applications are always secure, available, and performing at their best
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataCenterFeatures.map((feature, index) => (
                <div key={index} className={`p-8 rounded-xl bg-gradient-to-br ${feature.color} border border-border/50 hover:shadow-lg transition-all duration-300 group`}>
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contact our experts to discuss your data center needs and discover how our 
                infrastructure can support your business growth and success.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
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

export default DataCenter;