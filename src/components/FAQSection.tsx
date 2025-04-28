import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="font-semibold text-gray-800">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-green-500" />
        ) : (
          <ChevronDown className="text-gray-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: 'What is ProDentim?',
      answer: 'ProDentim is an advanced oral health supplement that contains 3.5 billion probiotics and nutrients. It is specifically designed to support dental health by maintaining a healthy balance of beneficial bacteria in your mouth.',
    },
    {
      question: 'How does ProDentim work?',
      answer: 'ProDentim works by introducing beneficial bacteria into your oral microbiome. These probiotics help maintain healthy teeth and gums, support fresh breath, and aid in overall oral health maintenance.',
    },
    {
      question: 'Who can use ProDentim?',
      answer: 'ProDentim is suitable for adults who want to improve their oral health. It\'s especially beneficial for those who have concerns about their dental health or want to maintain healthy teeth and gums.',
    },
    {
      question: 'Why choose ProDentim over regular oral care products?',
      answer: 'Unlike regular oral care products that might eliminate both good and bad bacteria, ProDentim specifically targets maintaining a healthy balance of beneficial bacteria in your mouth, providing a more comprehensive approach to oral health.',
    },
    {
      question: 'How should I use ProDentim?',
      answer: 'Take one ProDentim tablet daily, preferably in the morning. For best results, slowly dissolve the tablet in your mouth. Consistent use for at least 3-6 months is recommended for optimal results.',
    },
    {
      question: 'Are there any side effects of using ProDentim?',
      answer: 'ProDentim is made from natural ingredients and is generally safe for use. However, as with any supplement, it\'s recommended to consult with your healthcare provider before starting, especially if you have any medical conditions or are taking medications.',
    },
  ];

  return (
    <section className="py-16 bg-white" id="faqs">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ProDentim Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;