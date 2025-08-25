import { Battery, Wind, Recycle, Target, TrendingDown, Cpu, ChevronRight, Leaf, Sun, Award, Zap, Droplets, Shield, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
const Sustainability = () => {
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
        <section className="py-16">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Sustainability</span> Initiatives
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Comprehensive environmental programs delivering measurable impact across all aspects of our operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sustainabilitySections.map((section, index) => {
              const IconComponent = section.icon;
              return <Link key={section.title} to={section.path} className="group">
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border-border/50 hover:border-primary/50">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-12 h-12 ${section.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className={`w-6 h-6 ${section.color}`} />
                          </div>
                          <div className="flex-grow">
                            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                              {section.title}
                            </CardTitle>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {section.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>;
            })}
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
        <section className="py-20 bg-gray-900 text-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Net Zero Image - Left Side */}
              <div className="animate-fade-in-up">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="bg-gradient-to-br from-green-900 to-emerald-900 p-8 rounded-2xl">
                    {/* Net Zero Badge/Graphic */}
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full border-4 border-emerald-400 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-400">NET</div>
                          <div className="text-2xl font-bold text-emerald-400">ZERO</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Sustainability Icons Grid */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <Recycle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <div className="text-xs text-white/80">Recycle</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <Wind className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <div className="text-xs text-white/80">Wind</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <Sun className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <div className="text-xs text-white/80">Solar</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <Battery className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <div className="text-xs text-white/80">Storage</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <Leaf className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <div className="text-xs text-white/80">Green</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <Target className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <div className="text-xs text-white/80">Target</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content - Right Side */}
              <div className="animate-fade-in-up [animation-delay:200ms]">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Net Zero Commitment</h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    Our data center is designed to achieve net-zero emissions through 
                    renewable energy integration and AI-driven efficiency optimizations. By 
                    implementing power usage effectiveness (PUE) targets and advanced 
                    thermal management, we significantly reduce carbon footprint. 
                    Sustainability-focused initiatives ensure long-term environmental 
                    responsibility.
                  </p>
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
        
      </main>
      <Footer />
    </div>;
};
export default Sustainability;