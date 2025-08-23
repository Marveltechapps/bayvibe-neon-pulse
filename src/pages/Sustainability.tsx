import { useState } from 'react';
import { 
  Battery, 
  Wind, 
  Recycle, 
  Target, 
  TrendingDown, 
  Cpu,
  ChevronRight,
  Leaf,
  Sun,
  Award,
  Zap
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Sustainability = () => {
  const [activeTab, setActiveTab] = useState('net-zero');

  const tabs = [
    { id: 'net-zero', label: 'Net Zero Commitment' },
    { id: 'carbon-footprint', label: 'Carbon Footprint Reduction' },
    { id: 'solar-energy', label: 'Solar Energy Integration' },
    { id: 'advanced-cooling', label: 'Advanced Cooling & Water Recycling' },
    { id: 'sustainable-infrastructure', label: 'Sustainable Infrastructure & Compliance' }
  ];

  const features = [
    {
      icon: Sun,
      title: 'Solar-Powered Infrastructure',
      description: 'Harnessing solar energy to power data centers with zero emissions.',
      color: 'from-yellow-500 to-orange-500',
      iconBg: 'bg-yellow-500/10',
      iconColor: 'text-yellow-500'
    },
    {
      icon: Cpu,
      title: 'Smart Cooling Systems',
      description: 'Eco-efficient cooling systems reduce energy and environmental impact greatly.',
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-500'
    },
    {
      icon: Award,
      title: 'Certified Green Standards',
      description: 'Certified by global eco-standards for sustainability and operational excellence.',
      color: 'from-green-500 to-emerald-500',
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-500'
    }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'net-zero':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Net Zero Commitment</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Our data center is designed to achieve net-zero emissions through 
              renewable energy integration and AI-driven efficiency optimizations. By 
              implementing power usage effectiveness (PUE) targets and advanced 
              thermal management, we significantly reduce carbon footprint. 
              Sustainability-focused initiatives ensure long-term environmental 
              responsibility.
            </p>
          </div>
        );
      case 'carbon-footprint':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Carbon Footprint Reduction</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Through innovative energy management systems and renewable energy sources, 
              we continuously reduce our carbon footprint. Our comprehensive monitoring 
              systems track emissions in real-time, enabling proactive adjustments to 
              maintain environmental goals.
            </p>
          </div>
        );
      case 'solar-energy':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Solar Energy Integration</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Our solar-powered infrastructure harnesses clean energy to power 
              critical operations. Advanced photovoltaic systems and energy storage 
              solutions ensure consistent, sustainable power delivery while reducing 
              dependency on traditional energy sources.
            </p>
          </div>
        );
      case 'advanced-cooling':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Advanced Cooling & Water Recycling</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Smart cooling systems optimize thermal management while minimizing 
              environmental impact. Water recycling technologies and efficient heat 
              dissipation methods reduce resource consumption and operational costs.
            </p>
          </div>
        );
      case 'sustainable-infrastructure':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Sustainable Infrastructure & Compliance</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Our infrastructure meets global sustainability standards with certified 
              green building materials and energy-efficient designs. Compliance with 
              environmental regulations ensures responsible operations and long-term 
              sustainability commitments.
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
        <section className="relative min-h-screen bg-gray-100 overflow-hidden">
          {/* Navigation Tabs */}
          <div className="absolute top-8 left-8 z-20">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 whitespace-nowrap font-medium ${
                    activeTab === tab.id
                      ? 'bg-emerald-500 text-white border-b-2 border-emerald-400'
                      : 'bg-transparent text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="h-screen">
            {/* Full Width - Net Zero Hero */}
            <div className="w-full bg-white flex items-center justify-center p-0 h-full">
              <div className="relative w-full h-full">
                <img 
                  src="/lovable-uploads/fc2a1e8d-e0de-4d3c-9395-540f13ed3023.png" 
                  alt="Net Zero Commitment with sustainable forest background and environmental icons"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={feature.title}
                    className="group bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-emerald-500 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up shadow-lg hover:shadow-xl"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-20 h-20 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-10 h-10 ${feature.iconColor}`} />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

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
                          {Array.from({ length: 48 }).map((_, i) => (
                            <div key={i} className="border border-emerald-500/20"></div>
                          ))}
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
                {getTabContent()}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-2xl"></div>
          </div>

          <div className="section-container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Get in Touch with Us
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions or need expert support? Our team is ready to help you with all 
              your data center needs—reach out today!
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
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

export default Sustainability;