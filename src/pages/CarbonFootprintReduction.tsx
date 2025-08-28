import { TrendingDown, BarChart3, Leaf, Zap, Target, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
const CarbonFootprintReduction = () => {
  const reductionStrategies = [{
    icon: Zap,
    title: 'Energy Efficiency Optimization',
    description: 'Advanced AI algorithms optimize power consumption across all systems, reducing energy waste by 40%.',
    impact: '40% reduction',
    color: 'text-yellow-500'
  }, {
    icon: Leaf,
    title: 'Renewable Energy Integration',
    description: 'Complete transition to renewable energy sources including solar, wind, and hydroelectric power.',
    impact: '100% renewable',
    color: 'text-green-500'
  }, {
    icon: TrendingDown,
    title: 'Process Optimization',
    description: 'Streamlined operations and smart automation reduce operational carbon emissions significantly.',
    impact: '35% reduction',
    color: 'text-blue-500'
  }, {
    icon: Target,
    title: 'Carbon Offsetting',
    description: 'Strategic partnerships with verified carbon offset projects to neutralize remaining emissions.',
    impact: '100% offset',
    color: 'text-purple-500'
  }];
  const metrics = [{
    label: 'Total Emissions Reduced',
    value: '2.4M',
    unit: 'tons CO₂'
  }, {
    label: 'Energy Efficiency Gain',
    value: '45%',
    unit: 'improvement'
  }, {
    label: 'Renewable Energy Usage',
    value: '100%',
    unit: 'of total power'
  }, {
    label: 'Carbon Intensity',
    value: '0.12',
    unit: 'kg CO₂/kWh'
  }];
  const timeline = [{
    year: '2020',
    milestone: 'Baseline Assessment',
    description: 'Comprehensive carbon footprint analysis',
    status: 'completed'
  }, {
    year: '2021',
    milestone: '25% Reduction',
    description: 'Initial efficiency improvements implemented',
    status: 'completed'
  }, {
    year: '2022',
    milestone: '50% Reduction',
    description: 'Renewable energy transition begins',
    status: 'completed'
  }, {
    year: '2023',
    milestone: '75% Reduction',
    description: 'Advanced optimization systems deployed',
    status: 'completed'
  }, {
    year: '2024',
    milestone: 'Carbon Neutral',
    description: 'Net-zero operational emissions achieved',
    status: 'in-progress'
  }, {
    year: '2025',
    milestone: 'Carbon Negative',
    description: 'Remove more carbon than we produce',
    status: 'planned'
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-500/10 to-blue-500/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <img src="/lovable-uploads/9ccc427d-6e1a-488e-bfee-9116f6b7bdc3.png" alt="Carbon Footprint Reduction" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" />
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Carbon Footprint <span className="gradient-text">Reduction</span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                Through innovative technologies and strategic initiatives, we've achieved industry-leading 
                carbon footprint reduction while maintaining world-class data center performance.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>78% Emissions Reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Real-time Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Verified Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Overview */}
        <section className="py-16 bg-card/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Measurable <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Our carbon reduction efforts are backed by comprehensive data and continuous monitoring
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => <Card key={metric.label} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-foreground/60 mb-1">{metric.unit}</div>
                    <div className="text-sm font-medium">{metric.label}</div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Reduction Strategies */}
        <section className="py-16">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Reduction Strategies</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Comprehensive approach to carbon footprint reduction through technology and innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {reductionStrategies.map((strategy, index) => {
              const IconComponent = strategy.icon;
              return <Card key={strategy.title} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className={`w-6 h-6 ${strategy.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{strategy.title}</CardTitle>
                          <div className={`text-sm font-semibold ${strategy.color} mb-2`}>
                            {strategy.impact}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {strategy.description}
                      </CardDescription>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-card/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Reduction <span className="gradient-text">Timeline</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Our journey towards carbon neutrality with clear milestones and achievements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timeline.map((item, index) => <Card key={item.year} className={`relative overflow-hidden ${item.status === 'completed' ? 'border-green-500/50' : item.status === 'in-progress' ? 'border-yellow-500/50' : 'border-muted'}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold gradient-text">{item.year}</div>
                      <div className={`w-3 h-3 rounded-full ${item.status === 'completed' ? 'bg-green-500' : item.status === 'in-progress' ? 'bg-yellow-500' : 'bg-muted'}`}></div>
                    </div>
                    <CardTitle className="text-lg">{item.milestone}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${item.status === 'completed' ? 'bg-green-500' : item.status === 'in-progress' ? 'bg-yellow-500' : 'bg-muted'}`}></div>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Monitoring & Verification */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Continuous <span className="gradient-text">Monitoring</span>
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                  Real-time carbon footprint tracking and third-party verification ensure transparency 
                  and accountability in our reduction efforts.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Real-time emissions monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Monthly third-party audits</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Public transparency reports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Industry standard compliance</span>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-green-500" />
                    Live Carbon Tracking
                  </CardTitle>
                  <CardDescription>
                    Current month performance metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Scope 1 Emissions</span>
                      <span className="font-bold text-green-600">-65%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{
                      width: '65%'
                    }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Scope 2 Emissions</span>
                      <span className="font-bold text-green-600">-89%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{
                      width: '89%'
                    }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Scope 3 Emissions</span>
                      <span className="font-bold text-green-600">-42%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{
                      width: '42%'
                    }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        
      </main>
      <Footer />
    </div>;
};
export default CarbonFootprintReduction;