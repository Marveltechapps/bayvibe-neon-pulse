import { Award, CheckCircle, FileCheck, Globe, Leaf, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
const SustainableInfrastructureCompliance = () => {
  const certifications = [{
    icon: Award,
    title: 'LEED Platinum Certification',
    description: 'Highest level of green building certification for sustainable design and construction practices.',
    issuer: 'U.S. Green Building Council',
    status: 'Certified',
    color: 'text-green-500'
  }, {
    icon: Globe,
    title: 'ISO 14001 Environmental Management',
    description: 'International standard for environmental management systems and continuous improvement.',
    issuer: 'International Organization for Standardization',
    status: 'Certified',
    color: 'text-blue-500'
  }, {
    icon: Leaf,
    title: 'Energy Star Partnership',
    description: 'EPA recognition for superior energy efficiency and environmental performance.',
    issuer: 'U.S. Environmental Protection Agency',
    status: 'Active Partner',
    color: 'text-yellow-500'
  }, {
    icon: Shield,
    title: 'ISO 50001 Energy Management',
    description: 'International standard for energy management systems and energy performance improvement.',
    issuer: 'International Organization for Standardization',
    status: 'Certified',
    color: 'text-purple-500'
  }];
  const complianceAreas = [{
    category: 'Building Materials',
    requirements: ['Recycled content materials (minimum 30%)', 'Low-emission building materials', 'Sustainably sourced wood products', 'Non-toxic construction materials'],
    compliance: '100%'
  }, {
    category: 'Energy Efficiency',
    requirements: ['High-performance building envelope', 'LED lighting systems throughout', 'Smart HVAC control systems', 'Energy recovery ventilation'],
    compliance: '98%'
  }, {
    category: 'Water Conservation',
    requirements: ['Low-flow fixtures and fittings', 'Rainwater harvesting systems', 'Greywater recycling infrastructure', 'Native landscaping with minimal irrigation'],
    compliance: '95%'
  }, {
    category: 'Waste Management',
    requirements: ['Construction waste diversion (>75%)', 'Comprehensive recycling programs', 'Organic waste composting systems', 'Hazardous material proper disposal'],
    compliance: '92%'
  }];
  const sustainabilityFeatures = [{
    title: 'Green Roof Systems',
    description: 'Living roof installation that reduces stormwater runoff, provides insulation, and creates habitat.',
    benefit: '40% stormwater reduction'
  }, {
    title: 'Smart Building Automation',
    description: 'Integrated systems that optimize energy consumption, air quality, and occupant comfort.',
    benefit: '30% energy savings'
  }, {
    title: 'Renewable Material Usage',
    description: 'Extensive use of recycled steel, concrete, and other sustainable building materials.',
    benefit: '45% recycled content'
  }, {
    title: 'Carbon-Neutral Construction',
    description: 'Construction process offset through verified carbon credit programs and clean energy.',
    benefit: 'Net-zero construction'
  }];
  const auditResults = [{
    area: 'Energy Performance',
    score: 94,
    benchmark: 'Exceeds industry standard by 25%'
  }, {
    area: 'Water Efficiency',
    score: 91,
    benchmark: 'Top 10% of data centers globally'
  }, {
    area: 'Materials & Resources',
    score: 88,
    benchmark: 'LEED Platinum qualification'
  }, {
    area: 'Indoor Environmental Quality',
    score: 96,
    benchmark: 'Exceeds ASHRAE standards'
  }, {
    area: 'Innovation in Design',
    score: 92,
    benchmark: 'Industry leadership recognition'
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-500/10 to-blue-500/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <img src="/lovable-uploads/72ef39fd-7a44-43b7-8cb4-f3fab9b6aa49.png" alt="Sustainable Infrastructure Building Blocks" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" />
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Sustainable Infrastructure &<br /><span className="gradient-text">Compliance</span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                Our commitment to sustainable infrastructure goes beyond compliance, setting new 
                industry standards for environmental responsibility and operational excellence.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>LEED Platinum Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>ISO 14001 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Energy Star Partner</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-card/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Industry <span className="gradient-text">Certifications</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Third-party verified certifications demonstrating our commitment to sustainability excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return <Card key={cert.title} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className={`w-6 h-6 ${cert.color}`} />
                        </div>
                        <div className="flex-grow">
                          <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                          <div className={`text-sm font-semibold ${cert.color} mb-2`}>
                            {cert.status}
                          </div>
                          <div className="text-sm text-foreground/60">{cert.issuer}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {cert.description}
                      </CardDescription>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* Compliance Areas */}
        <section className="py-16">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Compliance <span className="gradient-text">Framework</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Comprehensive compliance across all aspects of sustainable infrastructure development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {complianceAreas.map((area, index) => <Card key={area.category} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{area.category}</CardTitle>
                      <div className="text-2xl font-bold gradient-text">{area.compliance}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {area.requirements.map((requirement, reqIndex) => <div key={reqIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{requirement}</span>
                        </div>)}
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Sustainability Features */}
        <section className="py-16 bg-card/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sustainable <span className="gradient-text">Features</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Innovative infrastructure elements that exceed standard sustainability requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sustainabilityFeatures.map((feature, index) => <Card key={feature.title} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed mb-4">
                      {feature.description}
                    </CardDescription>
                    <div className="text-sm font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                      {feature.benefit}
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Audit Results */}
        

        {/* Future Commitments */}
        <section className="py-16 bg-card/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Future <span className="gradient-text">Commitments</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Ongoing initiatives to advance sustainability and exceed evolving compliance requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-green-500" />
                  </div>
                  <CardTitle>Carbon Negative by 2030</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Committed to removing more carbon from the atmosphere than we produce through 
                    advanced carbon capture and renewable energy investments.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-blue-500" />
                  </div>
                  <CardTitle>Global Standard Setting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Leading industry initiatives to establish new international standards for 
                    sustainable data center design and operation.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-500" />
                  </div>
                  <CardTitle>Continuous Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ongoing research and development partnerships to pioneer next-generation 
                    sustainable technologies and practices.
                  </CardDescription>
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
export default SustainableInfrastructureCompliance;