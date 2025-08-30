import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AIEdgeComputingIntegration = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-purple-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI & Edge Computing Integration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-driven data processing and edge computing are transforming real-time analytics 
              and decentralized infrastructure for next-generation applications.
            </p>
          </div>
        </div>
      </section>

      {/* AI Integration Overview */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Intelligent Infrastructure</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our AI and edge computing integration strategy focuses on bringing computational 
                power closer to data sources while leveraging artificial intelligence for 
                predictive analytics, automated optimization, and real-time decision making.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Real-time AI processing at the edge
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Distributed machine learning capabilities
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Automated infrastructure optimization
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Ultra-low latency applications support
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/lovable-uploads/b62a70c3-2070-4796-87cc-bc4b11af0096.png" 
                alt="AI cube processor on circuit board with neural network connections" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">AI-Powered Capabilities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">AI</span>
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Predictive Analytics</h3>
              <p className="text-gray-300">
                Advanced machine learning algorithms analyze patterns to predict equipment failures, 
                optimize resource allocation, and prevent downtime before issues occur.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">ML</span>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Automated Optimization</h3>
              <p className="text-gray-300">
                Self-learning systems continuously optimize cooling, power distribution, and 
                workload placement to maximize efficiency and reduce operational costs.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">RT</span>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Real-Time Processing</h3>
              <p className="text-gray-300">
                Edge AI nodes process data locally for applications requiring ultra-low latency, 
                including autonomous vehicles, IoT devices, and augmented reality systems.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">CV</span>
              </div>
              <h3 className="text-xl font-bold text-orange-400 mb-4">Computer Vision</h3>
              <p className="text-gray-300">
                Intelligent monitoring systems use computer vision to detect anomalies, 
                unauthorized access, and equipment status changes throughout the facility.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">NLP</span>
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-4">Natural Language Processing</h3>
              <p className="text-gray-300">
                AI-powered interfaces enable natural language interaction with data center 
                management systems for intuitive control and monitoring capabilities.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">DL</span>
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Deep Learning</h3>
              <p className="text-gray-300">
                Neural networks analyze complex patterns in massive datasets to improve 
                decision-making and automate sophisticated infrastructure management tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Edge Computing Architecture */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Edge Computing Architecture</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Distributed Intelligence Network</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our edge computing infrastructure creates a distributed network of intelligent 
                nodes that process data closer to its source, reducing latency and bandwidth 
                requirements while enabling real-time decision making.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Micro data centers at strategic locations</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">5G-enabled edge processing nodes</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Autonomous edge-to-cloud orchestration</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">Intelligent workload distribution</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h4 className="text-lg font-semibold text-white mb-4">Performance Metrics</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Latency Reduction</span>
                    <span className="text-purple-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Bandwidth Savings</span>
                    <span className="text-blue-400">70%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full w-[70%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Processing Efficiency</span>
                    <span className="text-green-400">92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-[92%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Real-World Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Autonomous Vehicles</h3>
              <p className="text-gray-300 mb-4">
                Edge AI processing enables split-second decision making for autonomous vehicles, 
                processing sensor data locally for immediate response without cloud dependency.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Sub-millisecond response times</li>
                <li>• Real-time object detection and tracking</li>
                <li>• Offline operation capability</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Smart Manufacturing</h3>
              <p className="text-gray-300 mb-4">
                Industrial IoT devices leverage edge AI for predictive maintenance, 
                quality control, and automated production optimization in real-time.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Predictive equipment maintenance</li>
                <li>• Automated quality inspection</li>
                <li>• Production line optimization</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Healthcare Systems</h3>
              <p className="text-gray-300 mb-4">
                Edge computing enables real-time patient monitoring, medical image analysis, 
                and critical care systems that require immediate processing and response.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Real-time vital sign monitoring</li>
                <li>• Instant medical image analysis</li>
                <li>• Emergency response automation</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Smart Cities</h3>
              <p className="text-gray-300 mb-4">
                Urban infrastructure leverages distributed AI for traffic optimization, 
                environmental monitoring, and public safety management across city networks.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Traffic flow optimization</li>
                <li>• Environmental sensor networks</li>
                <li>• Public safety monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIEdgeComputingIntegration;