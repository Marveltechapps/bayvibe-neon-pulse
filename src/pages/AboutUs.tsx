import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-blue-700/20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="relative mb-8">
              <img 
                src="/lovable-uploads/a3559e42-6053-42f4-a276-44e79280862f.png" 
                alt="Futuristic data center corridor with blue lighting and server racks" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              At BayVibe DC, we specialize in next-generation data center solutions, offering secure, scalable, and high-performance infrastructure. Our 
              commitment to innovation, sustainability, and reliability ensures seamless digital transformation for businesses worldwide. With cutting-edge 
              technology and AI-driven optimizations, we empower enterprises to thrive in a connected world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                We envision a future-ready digital infrastructure, delivering secure, 
                scalable, and sustainable data solutions. By integrating cutting-edge 
                technology and AI-driven efficiency, we empower businesses with 
                unmatched reliability and innovation.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/c1f12c46-b5df-406c-bd3e-102ac0968d8b.png" 
                alt="Futuristic digital interface with circular blue holographic elements and hand interaction" 
                className="w-full rounded-lg shadow-xl bg-white/10 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="/lovable-uploads/5870d442-e73f-45a9-afd9-9126e26f2336.png" 
                alt="Futuristic digital innovation with glowing circular interface and business icons" 
                className="w-full rounded-lg shadow-xl bg-white/10 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to provide high-performance, eco-friendly data center 
                solutions, ensuring seamless connectivity, security, and operational 
                excellence. We strive to optimize digital transformation through 
                advanced computing, AI integration, and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Who We Are</h2>
              <p className="text-gray-300 leading-relaxed">
                We are a leading infrastructure company with our decade 
                of experiences, we provide data center facilities, committed 
                to delivering enterprise-grade infrastructure with high 
                availability, security, and efficiency. Our expertise spans 
                cloud hosting, colocation services, AI-driven automation, 
                and disaster recovery, ensuring business continuity and 
                growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src="/lovable-uploads/b7c7eb17-c398-4f74-b5e4-296c5476de4e.png" 
                  alt="Modern data center infrastructure with blue lighting" 
                  className="w-full rounded-lg shadow-xl bg-white/10 backdrop-blur-sm"
                />
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/1fa4f355-375a-4f15-bdf4-a9dc73957021.png" 
                  alt="Sustainable data center infrastructure with green cloud technology and renewable energy" 
                  className="w-full rounded-lg shadow-xl bg-white/10 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 bg-gradient-to-r from-green-900/20 to-green-700/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch with Us</h2>
          <p className="text-gray-300 mb-8">
            Have questions or need expert support? Our team is ready to help you with all 
            your data center needs—reach out today!
          </p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-3">
              CONTACT US →
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;