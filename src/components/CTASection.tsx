import React from 'react';
import { CreditCard } from 'lucide-react';  // Importing CreditCard icon from lucide-react

// Import the image directly
import buyNowGif from '../Pictures/buy-now-1.gif';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white" id="order">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Order Your Discounted ProDentim Now!
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center">
                <CreditCard size={48} className="text-gray-600 mr-2" />
                <span className="text-gray-600">All Major Cards Accepted</span>
              </div>
            </div>

            {/* Use the image imported above */}
            <a
              href="https://cbcd94n-pog2jt0f2bl2vksk0o.hop.clickbank.net/?&tid=Wixlanding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={buyNowGif} // Use the imported gif image here
                alt="Buy Now"
                className="mx-auto"
              />
            </a>

            <p className="mt-6 text-gray-600 text-sm">
              *Secure checkout with 256-bit SSL encryption
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
