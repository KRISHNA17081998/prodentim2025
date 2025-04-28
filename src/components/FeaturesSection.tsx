import React from 'react';
import { CheckCircle, Award, Flag, Clock } from 'lucide-react';
import fcaImage from '../Pictures/fca.webp';
import naturalImage from '../Pictures/natural.webp';
import miaImage from '../Pictures/MIA.webp';
import gmpImage from '../Pictures/GMP.webp';








const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
      <div className="bg-green-100 p-4 rounded-full mb-4 text-green-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose ProDentim Formula?
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard 
  icon={<img src={fcaImage} alt="FDA Approved" className="w-12 h-12" />}
  title="FDA Approved"
  description="ProDentim is a dietary supplement designed to support dental health. It is made in a facility that has been approved by the FDA."
/>

<FeatureCard 
  icon={<img src={naturalImage} alt="100% Natural" className="w-12 h-12" />}
  title="100% Natural"
  description="ProDentim for healthy teeth because it is made from all-natural ingredients."
/>

<FeatureCard 
  icon={<img src={miaImage} alt="Made in USA" className="w-12 h-12" />}
  title="Made In USA"
  description="ProDentim is a supplement made in the USA."
/>

<FeatureCard 
  icon={<img src={gmpImage} alt="GMP Certified" className="w-12 h-12" />}
  title="GMP Certified"
  description="ProDentim is GMP certified, which means it meets high pharmaceutical standards."
/>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;