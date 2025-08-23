import { useState } from 'react';
import { 
  MapPin, 
  Building2, 
  Zap, 
  Wind, 
  Leaf, 
  Shield,
  ChevronRight,
  Cpu,
  Target,
  Layers
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import buildingHero from '/lovable-uploads/8ce75b7a-cec9-451f-8bac-48e378819448.png';
import techInfra from '@/assets/tech-infrastructure.jpg';

const BuildingInfrastructure = () => {
  const [activeTab, setActiveTab] = useState('location');

  const tabs = [
    { id: 'location', label: 'Location & Accessibility' },
    { id: 'structural', label: 'Structural Design & Layout' },
    { id: 'power', label: 'Power Redundancy & Backup' },
    { id: 'cooling', label: 'Cooling & Climate Control' },
    { id: 'sustainability', label: 'Sustainability & Energy Efficiency' },
    { id: 'compliance', label: 'Compliance & Certification Standards' }
  ];

  const features = [
    {
      icon: Target,
      title: 'Precision Planning',
      description: 'Detailed architectural and engineering plans optimize space, cooling, and power distribution to maintain operational excellence.'
    },
    {
      icon: Building2,
      title: 'Skyscraper',
      description: 'Our state-of-the-art buildings are engineered to withstand environmental challenges, ensuring maximum uptime and protection.'
    },
    {
      icon: Layers,
      title: 'Scalable Construction',
      description: 'Built with future growth in mind, our infrastructure supports seamless expansion without disruption.'
    }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'location':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Location & Accessibility</h3>
            <p className="text-foreground/70 leading-relaxed">
              A well-located data center ensures high-speed connectivity, security, and 
              efficiency. Proximity to fiber optic hubs reduces latency, while low-risk 
              areas prevent disruptions from natural disasters. Sustainable energy 
              sources like solar and wind enhance eco-friendliness. Redundant fiber 
              networks and multi-carrier support ensure seamless connectivity. Edge 
              computing optimizes real-time processing for AI and IoT applications.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Strategic Benefits:</h4>
                <ul className="text-sm text-foreground/60 space-y-1">
                  <li>• Accessibility for hardware deliveries and integration with nearby tech ecosystems</li>
                  <li>• Boost operational support</li>
                  <li>• Compliance with local and international regulations</li>
                  <li>• Safeguards data security</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Connectivity Features:</h4>
                <ul className="text-sm text-foreground/60 space-y-1">
                  <li>• Edge computing optimizes real-time processing</li>
                  <li>• Multi-carrier fiber support</li>
                  <li>• Low-latency connections</li>
                  <li>• Redundant network pathways</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'structural':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Structural Design & Layout</h3>
            <p className="text-foreground/70 leading-relaxed">
              Our structural design incorporates earthquake-resistant architecture with reinforced 
              foundations and flexible building materials. The layout optimizes airflow patterns 
              for cooling efficiency while ensuring easy maintenance access and future expansion capabilities.
            </p>
          </div>
        );
      case 'power':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Power Redundancy & Backup</h3>
            <p className="text-foreground/70 leading-relaxed">
              Multiple power feeds from different grids ensure 99.9% uptime. Our backup systems 
              include diesel generators, UPS systems, and battery storage to maintain operations 
              during any power outage scenario.
            </p>
          </div>
        );
      case 'cooling':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Cooling & Climate Control</h3>
            <p className="text-foreground/70 leading-relaxed">
              Advanced cooling systems maintain optimal temperatures with precision environmental 
              control. Energy-efficient cooling technologies reduce operational costs while 
              ensuring equipment longevity.
            </p>
          </div>
        );
      case 'sustainability':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Sustainability & Energy Efficiency</h3>
            <p className="text-foreground/70 leading-relaxed">
              Solar panels and wind energy integration reduce carbon footprint. Smart energy 
              management systems optimize power consumption while maintaining peak performance 
              standards.
            </p>
          </div>
        );
      case 'compliance':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Compliance & Certification Standards</h3>
            <p className="text-foreground/70 leading-relaxed">
              Full compliance with international standards including ISO 27001, SOC 2, and 
              Tier III certification. Regular audits ensure continuous compliance and security 
              protocol adherence.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={buildingHero} 
              alt="Modern data center infrastructure with glass walls and blue lighting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Building <span className="gradient-text">Infrastructure</span>
            </h1>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 max-w-6xl mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm md:text-base rounded-lg transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground font-medium'
                      : 'bg-card/30 backdrop-blur-sm text-foreground/70 hover:text-primary hover:bg-card/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-dark-surface">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Text Content */}
              <div className="animate-fade-in-up">
                {getTabContent()}
              </div>

              {/* Tech Image */}
              <div className="animate-fade-in-up [animation-delay:200ms]">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={techInfra} 
                    alt="Technical infrastructure visualization with circuit board design"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={feature.title}
                    className="group bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-8 text-center hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-foreground/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-dark-surface relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-tech-blue/10 rounded-full blur-2xl"></div>
          </div>

          <div className="section-container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in Touch with <span className="gradient-text">Us</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Have questions or need expert support? Our team is ready to help you with all 
              your data center needs—reach out today!
            </p>
            <button className="btn-neon inline-flex items-center gap-2">
              CONTACT US
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BuildingInfrastructure;