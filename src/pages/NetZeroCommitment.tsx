import { Target, TrendingDown, Award, Calendar, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const NetZeroCommitment = () => {
  const milestones = [
    {
      year: '2024',
      title: 'Carbon Neutral Operations',
      description: 'Achieved carbon neutral status across all facilities',
      status: 'completed'
    },
    {
      year: '2025',
      title: 'Net Zero Emissions',
      description: 'Complete elimination of net carbon emissions',
      status: 'in-progress'
    },
    {
      year: '2027',
      title: 'Carbon Negative',
      description: 'Remove more carbon than we produce',
      status: 'planned'
    },
    {
      year: '2030',
      title: 'Climate Positive',
      description: 'Actively contributing to global climate recovery',
      status: 'planned'
    }
  ];

  const commitments = [
    {
      icon: Target,
      title: 'Science-Based Targets',
      description: 'Our emissions reduction targets are aligned with climate science and the Paris Agreement goals.'
    },
    {
      icon: TrendingDown,
      title: 'Continuous Reduction',
      description: 'Year-over-year emissions reduction through efficiency improvements and renewable energy adoption.'
    },
    {
      icon: Award,
      title: 'Third-Party Verification',
      description: 'All sustainability claims are independently verified by accredited environmental auditors.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <img 
            src="/lovable-uploads/44c183d2-beca-48cf-abd8-95e23fd702bf.png" 
            alt="Net Zero Sustainability Icons" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
          />
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Net Zero <span className="gradient-text">Commitment</span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                Our unwavering commitment to achieving net-zero emissions through innovative 
                technology, renewable energy, and sustainable practices that set new industry standards.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Science-Based Targets Initiative</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Paris Agreement Aligned</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Third-Party Verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-card/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Roadmap</span> to Net Zero
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                A comprehensive timeline of our sustainability milestones and future commitments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <Card key={milestone.year} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold gradient-text">{milestone.year}</div>
                      <div className={`w-3 h-3 rounded-full ${
                        milestone.status === 'completed' ? 'bg-primary' :
                        milestone.status === 'in-progress' ? 'bg-yellow-500' : 'bg-muted'
                      }`}></div>
                    </div>
                    <CardTitle className="text-lg">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {milestone.description}
                    </CardDescription>
                  </CardContent>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                    milestone.status === 'completed' ? 'bg-primary' :
                    milestone.status === 'in-progress' ? 'bg-yellow-500' : 'bg-muted'
                  }`}></div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Commitments Section */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Core Commitments</span>
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                  We've established clear, measurable commitments backed by science-based targets 
                  and industry-leading practices to ensure accountability and transparency in our 
                  journey to net zero.
                </p>
                
                <div className="space-y-6">
                  {commitments.map((commitment, index) => {
                    const IconComponent = commitment.icon;
                    return (
                      <div key={commitment.title} className="flex gap-4 p-4 rounded-lg bg-card/30 hover:bg-card/50 transition-colors duration-300">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">{commitment.title}</h4>
                          <p className="text-foreground/70 leading-relaxed">{commitment.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-6 h-6 text-primary" />
                      Current Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Emissions Reduction</span>
                      <span className="font-bold text-primary">78%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Impact Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-card/30 rounded-lg">
                      <div className="text-2xl font-bold gradient-text">1.2M</div>
                      <div className="text-sm text-foreground/60">Tons CO₂ Avoided</div>
                    </div>
                    <div className="text-center p-4 bg-card/30 rounded-lg">
                      <div className="text-2xl font-bold gradient-text">100%</div>
                      <div className="text-sm text-foreground/60">Renewable Energy</div>
                    </div>
                    <div className="text-center p-4 bg-card/30 rounded-lg">
                      <div className="text-2xl font-bold gradient-text">45%</div>
                      <div className="text-sm text-foreground/60">Energy Efficiency</div>
                    </div>
                    <div className="text-center p-4 bg-card/30 rounded-lg">
                      <div className="text-2xl font-bold gradient-text">2025</div>
                      <div className="text-sm text-foreground/60">Net Zero Target</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default NetZeroCommitment;