import Header from '../components/Header';
import Footer from '../components/Footer';
import { BarChart3, Zap, Settings, TrendingUp } from 'lucide-react';

const DatabaseOptimizationPerformance = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <div className="h-96 bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-800 relative">
              <div className="absolute inset-0 bg-black/30"></div>
              <img 
                src="/lovable-uploads/7c7c18c7-3c86-4847-869a-5d206dced275.png" 
                alt="Database Analytics and Performance" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Database Optimization & Performance
                  </h1>
                  <p className="text-xl text-gray-200">
                    Maximum efficiency and lightning-fast query responses
                  </p>
                </div>
              </div>
              {/* Blue lighting effects */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute top-10 left-1/4 w-2 h-32 bg-blue-400 blur-sm"></div>
                <div className="absolute top-20 right-1/3 w-1 h-24 bg-cyan-300 blur-sm"></div>
                <div className="absolute bottom-10 left-1/3 w-3 h-20 bg-blue-500 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">High-Performance Database Solutions</h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Our data center ensures high-speed data processing through optimized indexing, query tuning, and efficient storage management. Advanced performance monitoring and automated workload balancing enhance scalability and responsiveness. By implementing partitioning, caching, and real-time analytics, we maximize database efficiency and reliability.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-xl p-6">
                <BarChart3 className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Performance Monitoring</h3>
                <p className="text-gray-300">Real-time analytics and comprehensive monitoring of database performance metrics.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Zap className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Query Optimization</h3>
                <p className="text-gray-300">Advanced indexing strategies and query tuning for maximum response speed.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <Settings className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Automated Workload Balancing</h3>
                <p className="text-gray-300">Intelligent load distribution and resource allocation for optimal performance.</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <TrendingUp className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Scalability Enhancement</h3>
                <p className="text-gray-300">Dynamic scaling capabilities with partitioning and caching strategies.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Optimization Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li>• Intelligent indexing strategies</li>
                  <li>• Automated query optimization</li>
                  <li>• Memory caching systems</li>
                  <li>• Connection pooling</li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li>• Data partitioning techniques</li>
                  <li>• Real-time performance analytics</li>
                  <li>• Automated maintenance tasks</li>
                  <li>• 24/7 performance monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DatabaseOptimizationPerformance;