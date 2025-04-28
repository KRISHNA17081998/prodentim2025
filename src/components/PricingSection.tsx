import React from 'react';
import { CreditCard, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';


import sampleImage from '../Pictures/sample.webp'; 
import buyNowImage from '../Pictures/buy-now-1.gif'; 

interface PricingCardProps {
  bottles: number;
  price: number;
  shipping: string;
  savings: number;
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ bottles, price, shipping, savings, popular }) => {
  // Generate an array of bottle images based on the number of bottles
  const images = Array.from({ length: bottles }, (_, index) => (
    <img
      key={index}
      src={sampleImage} 
      alt={`${bottles} Bottles`}
      className="w-1/3 h-48 object-cover rounded-lg"
    />
  ));

  return (
    <div className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 ${popular ? 'border-2 border-amber-500' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}
      <div className="p-6">
        {/* Display the generated images */}
        <div className="flex justify-between mb-4">
          {images}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{bottles} Bottles</h3>
        <div className="text-3xl font-bold text-green-600 mb-2">${price}/bottle</div>
        <p className="text-gray-600 mb-4">Free Shipping: {shipping}</p>
        <p className="text-green-600 font-semibold mb-6">You Save: ${savings}</p>
        
        <div className="space-y-4">
          <a 
            href="https://cbcd94n-pog2jt0f2bl2vksk0o.hop.clickbank.net/?&tid=Wixlanding"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src={buyNowImage} 
              alt="Buy Now"
              className="w-auto h-16 md:h-20 transition-transform transform hover:scale-105"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Limited Time Special Pricing - Act Now!
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Secure Your Reserved ProDentim While Stocks Last
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            bottles={1} 
            price={69}
            shipping="US"
            savings={30}
          />
          <PricingCard
            bottles={3} 
            price={59}
            shipping="US"
            savings={120}
            popular={true}
          />
          <PricingCard
            bottles={6} 
            price={49}
            shipping="US"
            savings={300}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
