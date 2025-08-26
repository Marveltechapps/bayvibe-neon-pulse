import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DataCenter from '../components/DataCenter';
import Sustainability from '../components/Sustainability';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <DataCenter />
        <Sustainability />
        <Contact />
      </main>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get in Touch with Us</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Have questions or need expert support? Our team is ready to help you with all your data center needs—reach out today!
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            size="lg"
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white"
          >
            CONTACT US →
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
