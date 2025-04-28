import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProductInfoSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Is ProDentim Supplement?
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              Introducing ProDentim Dental Formula – an amazing oral probiotic supplement packed with 3.5 billion beneficial bacteria and five proven nutrients. This special blend is made to help your gums and teeth stay healthy by boosting the good bacteria in your mouth.
            </p>
            
            <div className="flex items-start mb-6">
              <ChevronRight className="text-green-500 mt-1 shrink-0" />
              <p className="text-gray-700 leading-relaxed">
                ProDentim Dietary Supplements contain different strains of good bacteria that scientists have studied extensively. Our pills are designed to make your gums and teeth stronger and fight against things that can harm them. Normal oral care products like toothpaste and mouthwash sometimes remove the good bacteria, upsetting the natural balance in your mouth.
              </p>
            </div>
            
            <div className="flex items-start mb-6">
              <ChevronRight className="text-green-500 mt-1 shrink-0" />
              <p className="text-gray-700 leading-relaxed">
                ProDentim is created to replace the good bacteria, reduce harmful things, and keep your mouth wet. By keeping a healthy balance of good bacteria, ProDentim helps break down food bits and remove bad bacteria, which stops possible oral problems. The supplement has a neutral pH, which helps good bacteria grow and makes your teeth and gums stronger.
              </p>
            </div>
            
            <div className="flex items-start">
              <ChevronRight className="text-green-500 mt-1 shrink-0" />
              <p className="text-gray-700 leading-relaxed">
                Everyone, no matter their age or health, can benefit from using ProDentim to care for their mouth and keep it healthy.
              </p>
            </div>
            
            <div className="mt-10 text-center">
              <a 
                href="#order" 
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white py-3 px-8 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Try ProDentim Today!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfoSection;