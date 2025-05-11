import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import sampleImage from '../Pictures/sample.webp'; // Adjust path if needed
import buyNowGif from '../Pictures/buy-now-1.gif'; // Import your GIF image

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {/* Clickable Heading */}
            <a
              href="https://cbcd94n-pog2jt0f2bl2vksk0o.hop.clickbank.net/?&tid=Wixlanding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold text-lg md:text-xl mb-2 hover:underline inline-block"
            >
              ProDentim® | Restore Oral Health Naturally & Eliminate Bad Breath
            </a>

            <p className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              ProDentim® is a natural probiotic formula that helps restore good bacteria in your mouth.
              Say goodbye to bad breath, plaque, and gum discomfort with this advanced oral health support. 
              Get fresher breath and a confident smile—naturally.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <p className="text-gray-700 mb-4">
                ProDentim is an oral health supplement that focuses on the beneficial bacteria in your mouth. These good bacteria are essential for maintaining a healthy mouth, and ProDentim helps them thrive.
                Each ProDentim candy contains around 3.5 billion probiotics, along with various plant-based ingredients, nutrients, and minerals. This combination is designed to refresh and revitalize your gums and dental tissues naturally.              
              </p>
              <p className="text-gray-700 mb-4">
                Each ProDentim candy contains around 3.5 billion probiotics, along with various plant-based ingredients, nutrients, and minerals. This combination is designed to refresh and revitalize your gums and dental tissues naturally.
              </p>
              <p className="text-gray-700">
                By using ProDentim, you support the growth of good bacteria in your mouth, which can lead to better oral health. The natural plant ingredients in ProDentim work to keep your gums and teeth healthy, providing a simple and effective way to maintain a fresh and clean mouth.
              </p>
            </div>

            {/* Buy Now Button */}
            <div className="text-center md:text-left">
              <a 
                href="https://cbcd94n-pog2jt0f2bl2vksk0o.hop.clickbank.net/?&tid=Wixlanding"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src={buyNowGif} 
                  alt="Buy Now"
                  className="w-auto h-16 md:h-20 transition-transform transform hover:scale-105"
                />
              </a>
            </div>
          </div>

          {/* Product Image */}
          <div className="md:w-1/2 md:pl-12">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-amber-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src={sampleImage} 
                  alt="ProDentim Product"
                  className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
