import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EmergingTrendsDataCenter = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Emerging Trends in Data Center Infrastructure
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The industry is shifting toward hyperscale data centers, energy-efficient cooling, 
              and cloud repatriation strategies with cutting-edge innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Trends Overview */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/lovable-uploads/b7c7eb17-c398-4f74-b5e4-296c5476de4e.png" 
                alt="Modern data center infrastructure with advanced cooling systems" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Industry Evolution</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                The data center industry is experiencing a revolutionary transformation driven by 
                technological advances, sustainability requirements, and evolving computational demands. 
                We stay at the forefront of these changes to deliver superior infrastructure solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Hyperscale architecture adoption</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Advanced cooling innovations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">AI-powered infrastructure management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Trends */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Leading Infrastructure Trends</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Two-Phase Liquid Cooling</h3>
              <p className="text-gray-300">
                Revolutionary cooling technology that uses phase-change materials to achieve 
                unprecedented thermal management efficiency, reducing energy consumption by up to 40%.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-green-400 mb-4">Edge-to-Cloud Integration</h3>
              <p className="text-gray-300">
                Seamless integration between edge computing nodes and centralized cloud infrastructure, 
                enabling ultra-low latency applications and distributed processing capabilities.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Autonomous Operations</h3>
              <p className="text-gray-300">
                AI-driven autonomous data center operations that predict failures, optimize performance, 
                and manage resources without human intervention, ensuring 99.99% uptime.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Sustainable Design</h3>
              <p className="text-gray-300">
                Carbon-neutral data centers powered by renewable energy sources with circular 
                economy principles and waste heat recovery systems for maximum efficiency.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-red-400 mb-4">Hyperconverged Infrastructure</h3>
              <p className="text-gray-300">
                Software-defined infrastructure that combines compute, storage, and networking 
                in a single platform, simplifying deployment and reducing operational complexity.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Quantum-Ready Infrastructure</h3>
              <p className="text-gray-300">
                Future-proofed infrastructure designed to support quantum computing integration, 
                specialized cooling requirements, and hybrid classical-quantum workloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Strategy */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Implementation Strategy</h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Research & Development</h3>
                <p className="text-gray-300">
                  Continuous evaluation of emerging technologies and their potential impact on 
                  data center operations and efficiency.
                </p>
              </div>
              
              <div className="md:w-1/3">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Pilot Programs</h3>
                <p className="text-gray-300">
                  Small-scale implementation and testing of new technologies in controlled 
                  environments before full deployment.
                </p>
              </div>
              
              <div className="md:w-1/3">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Full Integration</h3>
                <p className="text-gray-300">
                  Comprehensive rollout of proven technologies across our entire data center 
                  infrastructure for maximum benefit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmergingTrendsDataCenter;