import React from 'react';

// Import the image directly
import discountedImage from '../Pictures/discounted.webp';

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
            {/* Price Drop Section */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-red-500">Massive Price Drop:</h3>
              <p className="text-xl text-gray-600 mt-2">
                Originally $199 Per Bottle, Now at a Discounted Price!
              </p>
              <p className="text-lg text-gray-600 mt-2 font-medium">
                Limited Time Offer: Grab Your Bottle Now, Supplies Won’t Last!
              </p>
            </div>

            {/* Image */}
            <div className="mb-6">
              <img
                src={discountedImage} // Use the imported image here
                alt="Discounted ProDentim"
                className="mx-auto rounded-lg shadow-md"
              />
            </div>

            {/* Discount Button */}
            <a
              href="https://cbcd94n-pog2jt0f2bl2vksk0o.hop.clickbank.net/?&tid=Wixlanding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold text-lg rounded-xl hover:bg-green-600 transition duration-300">
                Get Your 80% Discount Now!
              </button>
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
