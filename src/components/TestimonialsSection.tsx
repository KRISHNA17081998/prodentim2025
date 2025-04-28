import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  image: string;
  name: string;
  location: string;
  testimonial: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ image, name, location, testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-green-500" 
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
          <div className="flex text-amber-400 mt-1">
            <Star size={16} fill="#FBBF24" stroke="none" />
            <Star size={16} fill="#FBBF24" stroke="none" />
            <Star size={16} fill="#FBBF24" stroke="none" />
            <Star size={16} fill="#FBBF24" stroke="none" />
            <Star size={16} fill="#FBBF24" stroke="none" />
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">{testimonial}</p>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ProDentim Chosen By Thousands
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            See what our customers have to say about their experience with ProDentim
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial 
            image="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Sarah Johnson"
            location="New York, NY"
            testimonial="I've struggled with gum sensitivity for years. After using ProDentim for just a month, I've noticed a significant improvement. My dentist even commented on how healthy my gums look now!"
          />
          
          <Testimonial 
            image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Michael Thompson"
            location="Chicago, IL"
            testimonial="As someone who's had dental issues my whole life, finding ProDentim has been a game-changer. It's easy to use, tastes great, and I can really feel the difference in my oral health."
          />
          
          <Testimonial 
            image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Emily Rodriguez"
            location="Los Angeles, CA"
            testimonial="I was skeptical at first, but ProDentim has exceeded my expectations. My breath is fresher, my teeth feel cleaner, and my last dental checkup was the best I've had in years!"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;