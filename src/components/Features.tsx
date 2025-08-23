import { Server, Cpu, Globe, Leaf, DollarSign, Wrench } from 'lucide-react';
const Features = () => {
  const features = [{
    icon: Server,
    title: 'Building Infrastructure',
    description: 'Robust, scalable infrastructure designed for maximum performance and reliability with enterprise-grade hardware.'
  }, {
    icon: Cpu,
    title: 'Advanced IT & Hardware',
    description: 'Latest server and network hardware with cutting-edge processors and high-speed connectivity solutions.'
  }, {
    icon: Globe,
    title: 'Digital Infrastructure',
    description: 'Cloud-native architecture with global reach, ensuring optimal performance and seamless user experience.'
  }, {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Carbon-neutral operations powered by renewable energy sources with AI-driven optimization systems.'
  }, {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Clear, competitive pricing with no hidden costs. Flexible plans that scale with your business needs.'
  }, {
    icon: Wrench,
    title: 'Maintenance & Innovation',
    description: 'Proactive maintenance and continuous innovation to ensure your infrastructure stays ahead of technology curves.'
  }];
  return <section id="services" className="py-20 bg-gradient-to-b from-background to-darker-surface">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Powering India's <span className="gradient-text">Digital Future</span> with 
            Secure & Sustainable <span className="gradient-text">Data Centers</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Our state-of-the-art facilities deliver enterprise-grade solutions with unmatched reliability and environmental responsibility.
          </p>
        </div>

        {/* Features Grid */}
        <div className="tech-grid">
          {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return <div key={feature.title} className="card-tech group animate-fade-in-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="mb-6">
                  <IconComponent className="feature-icon" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none"></div>
              </div>;
        })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          
        </div>
      </div>
    </section>;
};
export default Features;