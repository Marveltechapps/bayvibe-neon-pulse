import { Battery, Wind, Recycle, Target, TrendingDown, Cpu, ChevronRight, Leaf, Sun, Award, Zap, Droplets, Shield, Thermometer } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
const Sustainability = () => {
  const navigate = useNavigate();
  const sustainabilitySections = [{
    icon: Target,
    title: 'Net Zero Commitment',
    description: 'Our comprehensive roadmap to achieving net-zero emissions through science-based targets and innovative solutions.',
    path: '/net-zero-commitment',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  }, {
    icon: TrendingDown,
    title: 'Carbon Footprint Reduction',
    description: 'Advanced strategies and technologies delivering measurable carbon emission reductions across all operations.',
    path: '/carbon-footprint-reduction',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  }, {
    icon: Sun,
    title: 'Solar Energy Utilization',
    description: 'Comprehensive solar infrastructure powering our facilities with clean, renewable energy systems.',
    path: '/solar-energy-utilization',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10'
  }, {
    icon: Droplets,
    title: 'Advanced Cooling & Water Recycling',
    description: 'Revolutionary cooling technology with closed-loop water recycling systems for maximum efficiency.',
    path: '/advanced-cooling-water-recycling',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10'
  }, {
    icon: Shield,
    title: 'Sustainable Infrastructure & Compliance',
    description: 'LEED-certified sustainable building practices meeting the highest environmental standards.',
    path: '/sustainable-infrastructure-compliance',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  }];
  const features = [{
    icon: Sun,
    title: 'Solar-Powered Infrastructure',
    description: 'Harnessing solar energy to power data centers with zero emissions.',
    color: 'from-yellow-500 to-orange-500',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-500'
  }, {
    icon: Cpu,
    title: 'Smart Cooling Systems',
    description: 'Eco-efficient cooling systems reduce energy and environmental impact greatly.',
    color: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-500'
  }, {
    icon: Award,
    title: 'Certified Green Standards',
    description: 'Certified by global eco-standards for sustainability and operational excellence.',
    color: 'from-green-500 to-emerald-500',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-500'
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Sustainability</span> Leadership
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                Pioneering the future of sustainable data centers through innovative technology, 
                renewable energy, and environmental stewardship that sets new industry standards.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainability Sections */}
        <section className="py-16 bg-background">
          <div className="section-container">
            <div className="space-y-16">
              
              {/* Net Zero Commitment */}
              <Link to="/net-zero-commitment" className="group block">
                <div className="grid lg:grid-cols-2 gap-8 items-center hover:shadow-lg transition-all duration-300 rounded-2xl p-6 hover:bg-card/30">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/0b794b39-5730-40cf-8bee-fbb8b0a06002.png" 
                      alt="Net Zero Commitment - Sustainable technology with hexagonal icons showing CO2 reduction, recycling, and environmental initiatives" 
                      className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                      Net Zero Commitment
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Our data center is designed to achieve net-zero emissions through 
                      innovative energy management and sustainable technology implementation. 
                      We prioritize renewable power sources, energy-efficient infrastructure, waste 
                      reduction, and environmental stewardship to ensure long-term environmental 
                      responsibility.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Carbon Footprint Reduction */}
              <Link to="/carbon-footprint-reduction" className="group block">
                <div className="grid lg:grid-cols-2 gap-8 items-center hover:shadow-lg transition-all duration-300 rounded-2xl p-6 hover:bg-card/30">
                  <div className="order-2 lg:order-1 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                      Carbon Footprint Reduction
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Through advanced infrastructure and optimized workflow management, 
                      we substantially reduce carbon emissions. Our use of power-
                      saving technologies, including optimized PUE, renewable energy solutions, allow for carbon-
                      neutral operations. Compliance with global environmental standards 
                      ensures measurable, responsible, and sustainable.
                    </p>
                  </div>
                  <div className="relative order-1 lg:order-2">
                    <img 
                      src="/lovable-uploads/308884e4-1dfc-45d0-a38e-683c4988de14.png" 
                      alt="Hand holding green sphere with CO2 footprint symbol representing carbon footprint reduction" 
                      className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Link>

              {/* Solar Energy Utilization */}
              <Link to="/solar-energy-utilization" className="group block">
                <div className="grid lg:grid-cols-2 gap-8 items-center hover:shadow-lg transition-all duration-300 rounded-2xl p-6 hover:bg-card/30">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/da794d21-8baf-440e-85ed-8c8f97eabc66.png" 
                      alt="Data center server equipment with wind turbines and solar panels representing solar energy utilization" 
                      className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                      Solar Energy Utilization
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Our facility is powered by high-efficiency solar photovoltaic panels, 
                      reducing dependency on grid-based electricity. Energy storage systems 
                      ensure a sustainable and reliable power supply, optimizing renewable energy use even 
                      during peak demands. This strategy significantly lowers operational costs 
                      and environmental impact.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Advanced Cooling & Water Recycling */}
              <Link to="/advanced-cooling-water-recycling" className="group block">
                <div className="grid lg:grid-cols-2 gap-8 items-center hover:shadow-lg transition-all duration-300 rounded-2xl p-6 hover:bg-card/30">
                  <div className="order-2 lg:order-1 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                      Advanced Cooling & Water Recycling
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      We implement top-of-the-line efficient cooling/optimization and AI-driven 
                      thermal regulation for energy-efficient operations. Our closed-loop water 
                      recycling systems ensure waste consumption, ensuring zero-waste and 
                      sustainable supply infrastructure. Advanced thermal management provides 
                      optimal operational temperature efficiently and environmental impact.
                    </p>
                  </div>
                  <div className="relative order-1 lg:order-2">
                    <img 
                      src="/lovable-uploads/c5089621-e76f-4473-91de-fa6d94e5d1d6.png" 
                      alt="Water treatment facility with circular settling tanks and recycling infrastructure for advanced cooling systems" 
                      className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Link>

              {/* Sustainable Infrastructure & Compliance */}
              <Link to="/sustainable-infrastructure-compliance" className="group block">
                <div className="grid lg:grid-cols-2 gap-8 items-center hover:shadow-lg transition-all duration-300 rounded-2xl p-6 hover:bg-card/30">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/057145e6-55e0-4553-9402-a5e0d5cb2b1e.png" 
                      alt="Sustainable infrastructure concept with wooden blocks showing green buildings, renewable energy, and environmental partnership symbols" 
                      className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                      Sustainable Infrastructure & Compliance
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      By taking steps forward to using high materials, AI-optimized energy distribution 
                      and eco-friendly structure, we ensure efficient operations. Our compliance 
                      with LEED BREEAM and other global sustainability standards maintained 
                      commitment to responsible operations. These measures make our 
                      data center fully sustainable and environmentally friendly.
                    </p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-green-400">Sustainability</span> Initiatives
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                We're committed to creating a sustainable future through innovative technologies, 
                renewable energy adoption, and responsible environmental practices across all our operations.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return <div key={feature.title} className="group bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center hover:border-green-500 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up shadow-lg hover:shadow-2xl backdrop-blur-sm" style={{
                animationDelay: `${index * 100}ms`
              }}>
                    <div className={`w-20 h-20 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-10 h-10 ${feature.iconColor}`} />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* Environmental Impact Section */}
        

        {/* Green Technology Section */}
        

        {/* Net Zero Commitment Section */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Image from Figma design */}
              <div className="relative animate-fade-in-up">
                <img 
                  src="/lovable-uploads/0b794b39-5730-40cf-8bee-fbb8b0a06002.png" 
                  alt="Net Zero Commitment - Sustainable technology with hexagonal icons showing CO2 reduction, recycling, and environmental initiatives" 
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Right side - Content */}
              <div className="space-y-8 animate-fade-in-up [animation-delay:200ms]">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                    Net Zero Commitment
                  </h2>
                  <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                    We are committed to achieving net-zero carbon emissions by 2025 through innovative 
                    sustainable technologies, renewable energy integration, and comprehensive environmental 
                    stewardship. Our data center operations are designed with the future of our planet 
                    in mind, implementing cutting-edge green solutions that reduce our environmental impact 
                    while maintaining the highest standards of performance and reliability.
                  </p>
                </div>

                {/* Commitment stats */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30">
                    <div className="text-2xl font-bold gradient-text mb-2">100%</div>
                    <div className="text-sm text-foreground/60">Renewable Energy</div>
                  </div>
                  <div className="p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30">
                    <div className="text-2xl font-bold gradient-text mb-2">2025</div>
                    <div className="text-sm text-foreground/60">Net Zero Target</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section with Tabs */}
        <section className="py-20 bg-gray-800 text-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* 3D Sustainability Visualization - Left Side */}
              <div className="animate-fade-in-up">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 p-8">
                  <div className="space-y-6">
                    {/* 3D Sustainability Visualization */}
                    <div className="relative h-80 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl p-6 overflow-hidden">
                      {/* 3D Grid Effect */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                          {Array.from({
                          length: 48
                        }).map((_, i) => <div key={i} className="border border-emerald-500/20"></div>)}
                        </div>
                      </div>
                      
                      {/* 3D Environmental Elements */}
                      <div className="absolute top-8 left-8 w-12 h-16 bg-gradient-to-b from-green-400 to-emerald-600 rounded transform rotate-12 shadow-lg">
                        <Leaf className="w-6 h-6 text-white mx-auto mt-2" />
                      </div>
                      
                      <div className="absolute top-12 right-12 w-12 h-16 bg-gradient-to-b from-yellow-400 to-orange-600 rounded transform -rotate-12 shadow-lg">
                        <Sun className="w-6 h-6 text-white mx-auto mt-2" />
                      </div>
                      
                      <div className="absolute bottom-8 left-12 w-12 h-16 bg-gradient-to-b from-blue-400 to-cyan-600 rounded transform rotate-6 shadow-lg">
                        <Wind className="w-6 h-6 text-white mx-auto mt-2" />
                      </div>
                      
                      {/* Connection Lines with Animation */}
                      <svg className="absolute inset-0 w-full h-full">
                        <path d="M60,80 Q150,40 280,100" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.8" strokeDasharray="8,4">
                          <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite" />
                        </path>
                        <path d="M80,200 Q200,150 300,180" stroke="#eab308" strokeWidth="3" fill="none" opacity="0.8" strokeDasharray="8,4">
                          <animate attributeName="stroke-dashoffset" values="0;12" dur="2.5s" repeatCount="indefinite" />
                        </path>
                        <path d="M100,120 Q180,220 280,160" stroke="#06b6d4" strokeWidth="3" fill="none" opacity="0.8" strokeDasharray="8,4">
                          <animate attributeName="stroke-dashoffset" values="0;12" dur="3s" repeatCount="indefinite" />
                        </path>
                      </svg>
                      
                      {/* Central Sustainability Hub */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                        <Recycle className="w-8 h-8 text-white animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content - Right Side */}
              <div className="animate-fade-in-up [animation-delay:200ms]">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Comprehensive Sustainability Solutions</h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    Our integrated approach to sustainability combines renewable energy, advanced cooling systems, 
                    and intelligent resource management to create the most environmentally responsible data center 
                    infrastructure available today.
                  </p>
                </div>
              </div>
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
export default Sustainability;