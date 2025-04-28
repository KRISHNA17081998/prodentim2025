import React from 'react';
import { Check } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How Does ProDentim Works?
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          </div>

          <div className="space-y-6 text-gray-700">
            <p className="leading-relaxed">
              Prodentim uses powerful tiny organisms to improve your mouth's health. Each tablet contains 3.5 billion good bacteria that work together to keep your mouth in good shape.
            </p>

            <p className="leading-relaxed">
              Prodentim Capsules are packed with vitamins, minerals, and other nutrients that help solve oral problems, leading to positive results.
            </p>

            <p className="leading-relaxed">
              This supplement targets your gums directly, working on your tooth roots and enhancing your interactions with others.
            </p>

            <div className="bg-green-50 p-6 rounded-xl my-8">
              <p className="leading-relaxed mb-4">
                Regular use of Prodentim not only boosts your immune system but also shields you from illnesses. It includes antioxidants that naturally strengthen your immune system.
              </p>

              <p className="leading-relaxed">
                Prodentim supports your gut health by adding good bacteria. Users often report improved digestion on the official website.
              </p>
            </div>

            <p className="leading-relaxed">
              By combating harmful oral bacteria, Prodentim helps with dry mouth, dental issues, and bad breath. It recognizes the link between oral health, digestion, and the immune system, emphasizing its importance.
            </p>

            <div className="bg-amber-50 p-6 rounded-xl my-8">
              <p className="leading-relaxed mb-4">
                The product promotes the growth of beneficial oral bacteria and enhances mouth health with probiotics. Chewing one tablet slowly each morning is optimal for your overall health, gums, and teeth.
              </p>

              <p className="leading-relaxed">
                Each bottle contains thirty pills, and for a month's supply, take one tablet daily, preferably in the morning. Consistent use for at least six months yields the best results. Notice improved teeth, gums, and breath within a week.
              </p>
            </div>

            <p className="leading-relaxed">
              Prodentim not only treats current gum issues but also prevents future ones. It's an excellent choice for supporting your respiratory system, resolving problems, and preventing breathing issues.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 shrink-0" />
                <p className="ml-4">Prodentim enhances dental health by securely bonding teeth and keeping them firmly rooted in the gums.</p>
              </div>

              <div className="flex items-start">
                <Check className="text-green-500 mt-1 shrink-0" />
                <p className="ml-4">The supplement strengthens tooth enamel, creating a protective barrier that prevents germs from entering the gums. Regular use effectively reduces the risk of dental problems by warding off harmful oral bacteria.</p>
              </div>

              <div className="flex items-start">
                <Check className="text-green-500 mt-1 shrink-0" />
                <p className="ml-4">Quickly improve oral health with Prodentim Pills. Eliminate harmful microorganisms effortlessly, ensuring cavity-free teeth. Enjoy your favorite treats worry-free anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;