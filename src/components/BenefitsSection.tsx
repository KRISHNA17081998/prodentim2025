import React from 'react';
import { Shield, Bone, Heart, Wind, Smile, Activity, Zap } from 'lucide-react';

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-green-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Benefits of ProDentim Supplement
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 mb-8">
            ProDentim pills are designed to support your teeth with essential vitamins and minerals. This special blend aims to prevent toothaches, gum problems, and periodontal disease. These pills promote a healthy balance of mouth bacteria, offering a convenient and effective way to maintain good dental health. Just chew one pill every morning to enjoy these benefits.
          </p>
          <p className="text-gray-600">
            ProDentim functions like a probiotic for your mouth, reintroducing beneficial bacteria. This helps in cavity prevention and enhances gum health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <BenefitCard
            icon={<Shield size={32} />}
            title="For Healthy Teeth and Gums"
            description="ProDentim strengthens and protects teeth and gums, making them stronger and more resistant to damage. Each capsule is packed with vitamins, minerals, and antioxidants."
          />
          <BenefitCard
            icon={<Bone size={32} />}
            title="Supports Bone Health"
            description="Containing calcium, magnesium, and manganese, ProDentim supports various bodily functions, including blood circulation and maintaining strong bones."
          />
          <BenefitCard
            icon={<Heart size={32} />}
            title="Boosts Immunity"
            description="ProDentim is enriched with vitamins C, D, and E known for boosting the immune system. It also includes zinc and copper to reduce inflammation."
          />
          <BenefitCard
            icon={<Wind size={32} />}
            title="Freshens Breath"
            description="ProDentim's prebiotics help control harmful bacteria, effectively managing bad breath."
          />
          <BenefitCard
            icon={<Smile size={32} />}
            title="Whitens Teeth"
            description="ProDentim prevents teeth from yellowing and keeps them white, boosting your confidence with a radiant smile."
          />
          <BenefitCard
            icon={<Activity size={32} />}
            title="Manages Inflammation"
            description="ProDentim relieves oral discomfort by addressing issues like bleeding gums, tooth decay, and chronic inflammation."
          />
          <BenefitCard
            icon={<Zap size={32} />}
            title="Provides Antioxidant Protection"
            description="ProDentim supplies essential antioxidants that protect the body from free radicals and support cell repair processes."
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;