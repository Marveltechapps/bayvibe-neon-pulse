import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Server, Shield, Gauge, TrendingUp, DollarSign, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessRevenueModel = () => {
  const revenueStreams = [
    {
      title: "Colocation Services",
      description: "Dedicated server space rentals, providing businesses to host their infrastructure with high uptime and redundancy. Clients benefit from scalable power, cooling, and network ensuring optimal performance and compliance.",
      icon: Server,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Cloud Hosting & Virtualization",
      description: "Flexible cloud solutions with on-demand scalability and resource allocation.",
      icon: Globe,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Managed IT & Security Services",
      description: "Comprehensive IT management and advanced security solutions for enterprises.",
      icon: Shield,
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "Subscription-Based Business Continuity",
      description: "Recurring revenue from backup, disaster recovery, and business continuity services.",
      icon: TrendingUp,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Disaster Recovery & Business Continuity",
      description: "Critical backup solutions ensuring business operations continue during outages.",
      icon: Shield,
      color: "from-red-500/20 to-pink-500/20"
    }
  ];

  const valuePropositions = [
    {
      title: "High Availability & Reliability",
      description: "Provides uptime and operational with redundant systems to ensure business failures.",
      icon: Server,
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Scalable Infrastructure",
      description: "Flexible resources scaling by to support on-demand growth and fluctuating needs.",
      icon: TrendingUp,
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Advanced Security & Compliance",
      description: "Robust data protection, AI-range detection, and security compliance.",
      icon: Shield,
      color: "from-purple-500/10 to-violet-500/10"
    },
    {
      title: "Optimized Performance",
      description: "Advanced workflows and high-end systems that are designed for fast processing.",
      icon: Gauge,
      color: "from-orange-500/10 to-yellow-500/10"
    },
    {
      title: "Cost Efficiency",
      description: "Lower operational costs with pay-as-you-go and efficient infrastructure.",
      icon: DollarSign,
      color: "from-green-500/10 to-teal-500/10"
    },
    {
      title: "Business Continuity & Disaster Recovery",
      description: "Multi-region backup and digital recovery to reduce business error.",
      icon: Shield,
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
            alt="Business Revenue Model - Financial Growth Buildings" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
          />
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Business Revenue Model
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Our data center operates on a multi-stream revenue model, including colocation services, cloud hosting, and enterprise solutions. We generate income through server rentals, data storage, and managed IT services, ensuring scalability and security for businesses. Additionally, subscription-based cloud solutions and disaster recovery services provide long-term financial sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* Revenue Streams Section */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Revenue Streams</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Diversified income sources ensuring sustainable growth and market resilience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {revenueStreams.map((stream, index) => (
                <div key={index} className={`p-8 rounded-xl bg-gradient-to-br ${stream.color} border border-border/50 hover:shadow-lg transition-all duration-300 group`}>
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors">
                      <stream.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{stream.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{stream.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Colocation Services Feature */}
        <section className="py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 mr-4">
                    <Server className="w-8 h-8 text-blue-500" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Colocation Services</h2>
                </div>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Our data center offers secure server space rentals, providing businesses 
                  to host their infrastructure with high uptime and redundancy. Clients 
                  benefit from scalable power, cooling, and network ensuring optimal 
                  performance and compliance. Flexible pricing models enable customized 
                  resource allocation.
                </p>
                <Link 
                  to="/server-storage-solutions"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Learn More About Our Solutions
                </Link>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/0b8f1acd-8f87-46c7-919e-9bd3e9f5c057.png" 
                    alt="Colocation Services Infrastructure" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Value Propositions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive solutions designed to drive business success and operational excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valuePropositions.map((value, index) => (
                <div key={index} className={`p-8 rounded-xl bg-gradient-to-br ${value.color} border border-border/50 hover:shadow-lg transition-all duration-300 group`}>
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch with Us</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Have questions or need expert support? Our team is ready to help you with all 
                your data center needs - reach out today!
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

export default BusinessRevenueModel;