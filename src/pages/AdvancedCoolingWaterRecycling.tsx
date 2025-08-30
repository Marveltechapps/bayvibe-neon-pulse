import { Droplets, Thermometer, Recycle, Cpu, TrendingDown, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const AdvancedCoolingWaterRecycling = () => {
  const coolingTechnologies = [
    {
      icon: Thermometer,
      title: 'AI-Powered Thermal Management',
      description: 'Machine learning algorithms optimize cooling systems in real-time, reducing energy consumption by 45%.',
      efficiency: '45% savings',
      color: 'text-blue-500'
    },
    {
      icon: Droplets,
      title: 'Closed-Loop Water Recycling',
      description: 'Advanced filtration and treatment systems achieve 98% water recycling rate with zero waste discharge.',
      efficiency: '98% recycling',
      color: 'text-cyan-500'
    },
    {
      icon: Cpu,
      title: 'Precision Liquid Cooling',
      description: 'Direct-to-chip cooling technology for high-density servers with unprecedented thermal efficiency.',
      efficiency: '60°C reduction',
      color: 'text-purple-500'
    },
    {
      icon: Recycle,
      title: 'Heat Recovery Systems',
      description: 'Waste heat capture and repurposing for facility heating and hot water generation.',
      efficiency: '85% recovery',
      color: 'text-green-500'
    }
  ];

  const waterMetrics = [
    { metric: '98%', label: 'Water Recycling Rate', description: 'Closed-loop system efficiency' },
    { metric: '2.3M', label: 'Gallons Saved Annually', description: 'Water conservation impact' },
    { metric: '40%', label: 'Cooling Energy Reduction', description: 'Smart system optimization' },
    { metric: '24/7', label: 'Continuous Monitoring', description: 'Real-time quality control' }
  ];

  const processes = [
    {
      step: '1',
      title: 'Water Intake & Pre-treatment',
      description: 'Initial filtration and conditioning of water sources before entering cooling systems.',
      technology: 'Multi-stage filtration'
    },
    {
      step: '2',
      title: 'Precision Cooling Distribution',
      description: 'Intelligent distribution of cooled water to high-density server racks and equipment.',
      technology: 'Smart flow control'
    },
    {
      step: '3',
      title: 'Heat Exchange & Recovery',
      description: 'Efficient heat transfer and waste heat capture for secondary applications.',
      technology: 'Advanced heat exchangers'
    },
    {
      step: '4',
      title: 'Water Treatment & Recycling',
      description: 'Comprehensive treatment and purification for continuous water system reuse.',
      technology: 'Chemical-free treatment'
    }
  ];

  const qualityStandards = [
    { parameter: 'pH Level', target: '6.5-8.5', current: '7.2', status: 'optimal' },
    { parameter: 'Conductivity', target: '<500 μS/cm', current: '320 μS/cm', status: 'optimal' },
    { parameter: 'Total Dissolved Solids', target: '<300 ppm', current: '185 ppm', status: 'optimal' },
    { parameter: 'Turbidity', target: '<1 NTU', current: '0.3 NTU', status: 'optimal' },
    { parameter: 'Temperature', target: '18-22°C', current: '20°C', status: 'optimal' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <img 
            src="/lovable-uploads/dd199b64-98a2-43f5-81f8-e977087035f7.png" 
            alt="Advanced Water Treatment and Cooling Facility" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
          />
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Advanced Cooling &<br/><span className="gradient-text">Water Recycling</span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                Revolutionary cooling technology combined with comprehensive water recycling systems 
                that minimize environmental impact while maximizing operational efficiency.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>98% Water Recycling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>45% Energy Reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Zero Waste Discharge</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Water Metrics */}
        <section className="py-16 bg-card/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Water Conservation <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Quantifiable results from our advanced water management and recycling systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {waterMetrics.map((metric, index) => (
                <Card key={metric.label} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {metric.metric}
                    </div>
                    <div className="font-semibold mb-2">{metric.label}</div>
                    <div className="text-sm text-foreground/60">{metric.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cooling Technologies */}
        <section className="py-16">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Innovative <span className="gradient-text">Cooling Solutions</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Next-generation cooling technologies that deliver superior performance with minimal environmental impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {coolingTechnologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <Card key={tech.title} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className={`w-6 h-6 ${tech.color}`} />
                        </div>
                        <div className="flex-grow">
                          <CardTitle className="text-xl mb-2">{tech.title}</CardTitle>
                          <div className={`text-sm font-semibold ${tech.color} mb-2`}>
                            {tech.efficiency}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {tech.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Water Treatment Process */}
        <section className="py-16 bg-card/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Water Treatment <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Comprehensive four-stage process ensuring maximum water recycling and quality
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processes.map((process, index) => (
                <Card key={process.step} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">{process.step}</span>
                    </div>
                    <CardTitle className="text-lg">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed mb-3">
                      {process.description}
                    </CardDescription>
                    <div className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                      {process.technology}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Monitoring */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Water Quality <span className="gradient-text">Monitoring</span>
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                  Continuous real-time monitoring ensures optimal water quality throughout 
                  our recycling systems, maintaining the highest standards for equipment protection.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>24/7 automated quality monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>Real-time alert systems for deviations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>Predictive maintenance algorithms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>Compliance with international standards</span>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="w-6 h-6 text-blue-500" />
                    Live Water Quality Data
                  </CardTitle>
                  <CardDescription>
                    Current system parameters and quality metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {qualityStandards.map((standard, index) => (
                    <div key={standard.parameter} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{standard.parameter}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-foreground/60">Target: {standard.target}</span>
                          <span className="text-sm font-bold text-blue-600">{standard.current}</span>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1">
                        <div className="bg-blue-500 h-1 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Environmental Benefits */}
        <section className="py-16 bg-card/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Environmental <span className="gradient-text">Benefits</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Measurable positive impact on water conservation and environmental sustainability
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingDown className="w-8 h-8 text-blue-500" />
                  </div>
                  <CardTitle>Water Consumption Reduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold gradient-text mb-2">75%</div>
                  <CardDescription>
                    Compared to traditional data center cooling systems through advanced recycling
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Recycle className="w-8 h-8 text-green-500" />
                  </div>
                  <CardTitle>Circular Water Economy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold gradient-text mb-2">Zero</div>
                  <CardDescription>
                    Waste discharge with comprehensive treatment and reuse of all water resources
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-cyan-500" />
                  </div>
                  <CardTitle>Ecosystem Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                  <CardDescription>
                    Protection of local water sources through minimal extraction and zero contamination
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AdvancedCoolingWaterRecycling;