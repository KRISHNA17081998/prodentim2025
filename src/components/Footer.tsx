import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-300 text-sm leading-relaxed">
              The content on this website is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any illness. The FDA has not evaluated the information provided. It is advisable to consult with a physician before making changes to your diet, exercise, or taking supplements. Individual results may vary.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center mb-8">
          <p>ProDentim Dental |</p>
  <p>Tooth Pain Treatment |</p>
  <p>Gums Health ProDentim |</p>
  <p>Teeth Whitening ProDentim |</p>
  <p>Healthy Gums ProDentim |</p>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">© Copyright 2025 ProDentim All Rights Reserved.</p>
            <div className="flex justify-center space-x-4 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-white hover:underline transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-500">|</span>
              <Link to="/disclaimer" className="text-gray-300 hover:text-white hover:underline transition-colors">
                Disclaimer
              </Link>
              <span className="text-gray-500">|</span>
              <Link to="/terms" className="text-gray-300 hover:text-white hover:underline transition-colors">
                Terms Of Use
              </Link>
              <span className="text-gray-500">|</span>
              <Link to="/admin" className="text-gray-300 hover:text-white hover:underline transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;