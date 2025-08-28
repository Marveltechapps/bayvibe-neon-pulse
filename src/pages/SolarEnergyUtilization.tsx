import { Sun, Battery, Zap, TrendingUp, Award, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
const SolarEnergyUtilization = () => {
  const solarFeatures = [{
    icon: Sun,
    title: 'High-Efficiency Solar Panels',
    description: 'State-of-the-art photovoltaic systems with 22% efficiency rating and 25-year warranties.',
    capacity: '50MW',
    color: 'text-yellow-500'
  }, {
    icon: Battery,
    title: 'Energy Storage Systems',
    description: 'Advanced lithium-ion battery storage for 24/7 renewable energy availability.',
    capacity: '200MWh',
    color: 'text-blue-500'
  }, {
    icon: Zap,
    title: 'Smart Grid Integration',
    description: 'Intelligent power management systems optimize energy distribution and consumption.',
    capacity: '99.9%',
    color: 'text-green-500'
  }, {
    icon: TrendingUp,
    title: 'Performance Monitoring',
    description: 'Real-time monitoring and predictive maintenance for maximum solar output.',
    capacity: '24/7',
    color: 'text-purple-500'
  }];
  const benefits = [{
    metric: '100%',
    label: 'Renewable Energy',
    description: 'Complete solar-powered operations'
  }, {
    metric: '15MW',
    label: 'Solar Capacity',
    description: 'Total installed solar power'
  }, {
    metric: '85%',
    label: 'Energy Independence',
    description: 'Reduced grid dependency'
  }, {
    metric: '$2.3M',
    label: 'Annual Savings',
    description: 'Energy cost reduction'
  }];
  const phases = [{
    phase: 'Phase 1',
    title: 'Initial Installation',
    description: 'Deployed 5MW solar array with basic monitoring systems',
    year: '2021',
    status: 'completed',
    output: '5MW'
  }, {
    phase: 'Phase 2',
    title: 'Expansion & Storage',
    description: 'Added 10MW capacity with battery storage integration',
    year: '2022',
    status: 'completed',
    output: '15MW'
  }, {
    phase: 'Phase 3',
    title: 'Smart Grid Integration',
    description: 'Advanced AI-powered energy management and optimization',
    year: '2023',
    status: 'completed',
    output: '15MW+'
  }, {
    phase: 'Phase 4',
    title: 'Future Expansion',
    description: 'Planned 20MW additional capacity with next-gen solar tech',
    year: '2024',
    status: 'planned',
    output: '35MW'
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-yellow-500/10 to-orange-500/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <img src="/lovable-uploads/be354ace-ee11-46ba-9931-73db611eb706.png" alt="Solar Energy Data Center Infrastructure" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" />
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Solar Energy <span className="gradient-text">Utilization</span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                Harnessing the power of the sun to create a fully sustainable data center infrastructure 
                that delivers clean, reliable energy for all our operations.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span>15MW Solar Capacity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span>200MWh Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Overview */}
        <section className="py-16 bg-card/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solar <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Quantifiable benefits of our comprehensive solar energy implementation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => <Card key={benefit.label} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {benefit.metric}
                    </div>
                    <div className="font-semibold mb-2">{benefit.label}</div>
                    <div className="text-sm text-foreground/60">{benefit.description}</div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Solar Features */}
        <section className="py-16">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Advanced <span className="gradient-text">Solar Technology</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Cutting-edge solar infrastructure designed for maximum efficiency and reliability
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solarFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className={`w-6 h-6 ${feature.color}`} />
                        </div>
                        <div className="flex-grow">
                          <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                          <div className={`text-sm font-semibold ${feature.color} mb-2`}>
                            {feature.capacity}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* Implementation Phases */}
        <section className="py-16 bg-card/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Implementation <span className="gradient-text">Roadmap</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Strategic phases of our solar energy deployment and expansion
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {phases.map((phase, index) => <Card key={phase.phase} className={`relative overflow-hidden ${phase.status === 'completed' ? 'border-green-500/50' : 'border-yellow-500/50'}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-semibold text-primary">{phase.phase}</div>
                      <div className={`w-3 h-3 rounded-full ${phase.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    </div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                    <div className="text-sm text-foreground/60">{phase.year}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed mb-3">
                      {phase.description}
                    </CardDescription>
                    <div className="text-sm font-semibold text-yellow-600">
                      Output: {phase.output}
                    </div>
                  </CardContent>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${phase.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Technical <span className="gradient-text">Excellence</span>
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                  Our solar infrastructure incorporates the latest technology and engineering 
                  innovations to maximize energy capture and system reliability.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                    <span>Monocrystalline silicon panels with 22% efficiency</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                    <span>Dual-axis tracking systems for optimal sun exposure</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                    <span>Advanced power inverters with 98% efficiency</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                    <span>Real-time performance monitoring and analytics</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sun className="w-6 h-6 text-yellow-500" />
                      Live Solar Performance
                    </CardTitle>
                    <CardDescription>
                      Current system metrics and performance data
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Current Output</span>
                      <span className="font-bold text-yellow-600">12.8 MW</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Daily Generation</span>
                      <span className="font-bold text-yellow-600">342 MWh</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>System Efficiency</span>
                      <span className="font-bold text-yellow-600">94.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>CO₂ Avoided Today</span>
                      <span className="font-bold text-green-600">156 tons</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-6 h-6 text-primary" />
                      Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">IEC 61215 Panel Certification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">UL 1741 Inverter Standards</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">IEEE 1547 Grid Integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">NABCEP Installation Standards</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        
      </main>
      <Footer />
    </div>;
};
export default SolarEnergyUtilization;