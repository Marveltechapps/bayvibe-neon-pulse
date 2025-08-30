import { MapPin, Building2, Wifi, Zap, Shield, Thermometer, Network, Server, Settings } from 'lucide-react';
import dataCenterBuilding from '/lovable-uploads/6022ae80-6d8e-452e-832a-2db32d3f2194.png';
const DataCenter = () => {
  const features = [{
    icon: MapPin,
    title: 'Location Advantage',
    description: 'Strategic location in IT corridor'
  }, {
    icon: Building2,
    title: 'Smart Structural Design',
    description: 'Earthquake-resistant architecture'
  }, {
    icon: Wifi,
    title: 'IT Infrastructure',
    description: 'High-speed fiber connectivity'
  }, {
    icon: Zap,
    title: 'Power & Cooling',
    description: '99.9% power availability'
  }, {
    icon: Shield,
    title: 'Security',
    description: 'Multi-layer security systems'
  }, {
    icon: Thermometer,
    title: 'Climate Control',
    description: 'Precision environmental control'
  }, {
    icon: Network,
    title: 'Network Redundancy',
    description: 'Multiple tier-1 carriers'
  }, {
    icon: Server,
    title: 'Server Management',
    description: 'Remote hands support 24/7'
  }, {
    icon: Settings,
    title: 'Monitoring',
    description: 'Real-time infrastructure monitoring'
  }];
  return <section id="datacenter" className="py-20 bg-dark-surface">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Next-Gen <span className="gradient-text">Data Center</span> at 
            <br className="hidden sm:block" />
            <span className="gradient-text">Siruseri IT Corridor</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Experience the future of data hosting with our cutting-edge facility featuring world-class infrastructure and unparalleled reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return <div key={feature.title} className="group p-6 bg-background/30 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{
              animationDelay: `${index * 50}ms`
            }}>
                  <IconComponent className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-sm mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-foreground/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>;
          })}
          </div>

          {/* 3D Building Image */}
          <div className="relative animate-fade-in-up [animation-delay:400ms]">
            <div className="relative overflow-hidden rounded-2xl">
              <img src={dataCenterBuilding} alt="Futuristic BayVibe DC data center building" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-4 pulse-glow">
              <div className="text-2xl font-bold gradient-text">Tier III</div>
              <div className="text-sm text-foreground/60">Certified Facility</div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-4 pulse-glow" style={{
            animationDelay: '1s'
          }}>
              
              <div className="text-sm text-foreground/60">Power Capacity</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        
      </div>
    </section>;
};
export default DataCenter;