import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [{
    name: 'Data Center',
    href: '/data-center',
    isExternal: false
  }, {
    name: 'Building Infrastructure',
    href: '/building-infrastructure',
    isExternal: false
  }, {
    name: 'IT & Hardware Infrastructure',
    href: '/it-hardware-infrastructure',
    isExternal: false
  }, {
    name: 'Digital Data Infrastructure',
    href: '/digital-data-infrastructure',
    isExternal: false
  }, {
    name: 'Sustainability',
    href: '/sustainability',
    isExternal: false
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/38108738-303a-43ab-8f29-eb8c9be04fd1.png" alt="BayVibe DC" className="h-8 md:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map(item => item.isExternal ? <a key={item.name} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                  {item.name}
                </a> : <Link key={item.name} to={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                  {item.name}
                </Link>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50">
            <nav className="flex flex-col space-y-4 p-6">
              {navigation.map(item => item.isExternal ? <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    {item.name}
                  </a> : <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    {item.name}
                  </Link>)}
              <Link 
                to="/contact" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-lg font-medium transition-colors duration-300 mt-4 self-start inline-block text-center"
              >
                Contact Us
              </Link>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;