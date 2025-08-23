import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'Data Center',
    href: '#datacenter'
  }, {
    name: 'Sustainability',
    href: '#sustainability'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map(item => <a key={item.name} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group">
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-neon">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50">
            <nav className="flex flex-col space-y-4 p-6">
              {navigation.map(item => <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                  {item.name}
                </a>)}
              <button className="btn-neon mt-4 self-start">
                Get Started
              </button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;