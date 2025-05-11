import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-green-600 shadow-md py-3' : 'bg-green-500 py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white font-bold text-xl md:text-2xl">ProDentim</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-green-100 transition-colors">About ProDentim</a>
            <a href="#how-it-works" className="text-white hover:text-green-100 transition-colors">How Does it Works?</a>
            <a href="#pricing" className="text-white hover:text-green-100 transition-colors">Pricing</a>
            <a href="#faqs" className="text-white hover:text-green-100 transition-colors">FAQs</a>
            <a
              href="https://cbcd94n-pog2jt0f2bl2vksk0o.hop.clickbank.net/?&tid=Wixlanding"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-full font-medium transition-all transform hover:scale-105 flex items-center"
            >
              <ShoppingCart size={18} className="mr-2" />
              Order Now
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-down">
            <a 
              href="#about" 
              className="block text-white py-2 hover:bg-green-600 px-4 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About ProDentim
            </a>
            <a 
              href="#how-it-works" 
              className="block text-white py-2 hover:bg-green-600 px-4 rounded transition-colors mt-1"
              onClick={() => setIsOpen(false)}
            >
              How Does it Works?
            </a>
            <a 
              href="#pricing" 
              className="block text-white py-2 hover:bg-green-600 px-4 rounded transition-colors mt-1"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faqs" 
              className="block text-white py-2 hover:bg-green-600 px-4 rounded transition-colors mt-1"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </a>
            <a
              href="https://cbcd94n-pog2jt0f2bl2vksk0o.hop.clickbank.net/?&tid=Wixlanding"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-full font-medium transition-colors mt-3 text-center"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
