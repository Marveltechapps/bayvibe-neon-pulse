import { Battery, Wind, Recycle, Target, TrendingDown, Cpu } from 'lucide-react';
import sustainabilityTree from '@/assets/sustainability-tree.jpg';
const Sustainability = () => {
  const initiatives = [{
    icon: Wind,
    title: 'Renewable Energy Sources',
    description: 'Powered by 100% renewable energy through solar panels and wind farms to reduce carbon footprint.'
  }, {
    icon: Cpu,
    title: 'AI-Driven Efficiency',
    description: 'Advanced cooling and power optimization systems that reduce energy consumption by up to 40%.'
  }, {
    icon: Recycle,
    title: 'Circular Economy',
    description: 'Use of sustainable, recyclable materials in facility construction with zero-waste initiatives.'
  }, {
    icon: Target,
    title: 'Carbon Neutrality',
    description: 'Commitment to carbon-neutral operations by 2025 with continuous environmental monitoring.'
  }, {
    icon: Battery,
    title: 'Smart Energy Storage',
    description: 'Efficient battery systems and energy management to minimize waste and optimize power usage.'
  }, {
    icon: TrendingDown,
    title: 'Emission Reduction',
    description: 'Continuous innovation through green tech and efficient operations to achieve net-zero emissions.'
  }];
  return <section id="sustainability" className="py-20 bg-gradient-to-b from-darker-surface to-background relative overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full opacity-30 z-0"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #064e3b 50%, #166534 75%, #365314 100%)',
          backgroundSize: 'cover'
        }}
      ></div>
      <img 
        src="/lovable-uploads/99575429-f019-461a-8825-da80aace2f98.png" 
        alt="Sustainability Leadership Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />
      <div 
        className="absolute inset-0 w-full h-full opacity-20 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #10b981 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, #059669 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, #047857 0%, transparent 50%)`,
        }}
      ></div>
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sustainability Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative overflow-hidden rounded-2xl">
              <img src={sustainabilityTree} alt="Hand holding digital tree representing sustainable technology" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating Achievement Badge */}
            <div className="absolute top-6 right-6 bg-primary/90 text-primary-foreground rounded-full p-4 animate-pulse-glow">
              
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-up [animation-delay:200ms]">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text">Sustainability</span> Leadership
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-4xl">
                Pioneering the future of sustainable data centers through innovative technology, 
                renewable energy, and environmental stewardship that sets new industry standards.
              </p>
            </div>

            {/* Initiatives Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {initiatives.map((initiative, index) => {
              const IconComponent = initiative.icon;
              return <div key={initiative.title} className="group p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{
                animationDelay: `${300 + index * 100}ms`
              }}>
                    <IconComponent className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-semibold text-base mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {initiative.title}
                    </h4>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>;
            })}
            </div>

            {/* Sustainability Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">40%</div>
                <div className="text-sm text-foreground/60 mt-1">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">Zero</div>
                <div className="text-sm text-foreground/60 mt-1">Waste to Landfill</div>
              </div>
              <div className="text-center col-span-2 sm:col-span-1">
                <div className="text-2xl md:text-3xl font-bold gradient-text">2025</div>
                <div className="text-sm text-foreground/60 mt-1">Carbon Neutral</div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>;
};
export default Sustainability;