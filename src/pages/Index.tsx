import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DataCenter from '../components/DataCenter';
import Sustainability from '../components/Sustainability';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
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
      <Footer />
    </div>
  );
};

export default Index;
