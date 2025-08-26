import { MapPin, Building2, Zap, Wind, Leaf, Shield, ChevronRight, Cpu, Target, Layers } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import buildingHero from '/lovable-uploads/8ce75b7a-cec9-451f-8bac-48e378819448.png';
import techInfra from '@/assets/tech-infrastructure.jpg';
const BuildingInfrastructure = () => {
  const navigate = useNavigate();
  const sections = [{
    id: 'location',
    label: 'Location & Accessibility',
    path: '/location-accessibility'
  }, {
    id: 'structural',
    label: 'Structural Design & Layout',
    path: '/structural-design'
  }, {
    id: 'power',
    label: 'Power Redundancy & Backup',
    path: '/power-redundancy'
  }, {
    id: 'cooling',
    label: 'Cooling & Climate Control',
    path: '/cooling-climate-control'
  }, {
    id: 'sustainability',
    label: 'Sustainability & Energy Efficiency',
    path: '/sustainability-energy-efficiency'
  }, {
    id: 'compliance',
    label: 'Compliance & Certification Standards',
    path: '/compliance-certification'
  }];
  const features = [{
    icon: Target,
    title: 'Precision Planning',
    description: 'Detailed architectural and engineering plans optimize space, cooling, and power distribution to maintain operational excellence.'
  }, {
    icon: Building2,
    title: 'Skyscraper',
    description: 'Our state-of-the-art buildings are engineered to withstand environmental challenges, ensuring maximum uptime and protection.'
  }, {
    icon: Layers,
    title: 'Scalable Construction',
    description: 'Built with future growth in mind, our infrastructure supports seamless expansion without disruption.'
  }];
  return <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img src={buildingHero} alt="Modern data center infrastructure with glass walls and blue lighting" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>

          {/* Transparent Overlay Image */}
          <div className="absolute inset-0 z-5">
            <img src="/lovable-uploads/b474f183-a820-4ee0-8cf4-8827d1114708.png" alt="Glass-walled data center with servers and blue lighting" className="w-full h-full object-cover opacity-40" />
          </div>

          {/* Content */}
          <div className="relative z-10 section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Building <span className="text-green-400">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              Comprehensive infrastructure solutions designed for reliability, efficiency, and scalability
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-gray-800">
          <div className="section-container">
            <div className="grid gap-12">
              {sections.map((section, index) => <Link key={section.id} to={section.path} className="group block bg-gray-700/30 rounded-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                      {section.label}
                    </h2>
                    <ChevronRight className="w-8 h-8 text-green-400 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  <p className="text-gray-300 mt-4 text-lg">
                    Click to explore detailed information about {section.label.toLowerCase()}
                  </p>
                </Link>)}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-900">
          <div className="section-container">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return <div key={feature.title} className="group bg-gray-700/30 rounded-2xl p-8 text-center hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-green-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-400/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get in Touch with Us</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Have questions or need expert support? Our team is ready to help you with all your data center needs—reach out today!
            </p>
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white"
            >
              CONTACT US →
            </Button>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>;
};
export default BuildingInfrastructure;