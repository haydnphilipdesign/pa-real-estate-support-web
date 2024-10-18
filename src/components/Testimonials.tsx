import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'John Doe', role: 'Keller Williams Agent', content: 'PA Real Estate Support Services has been a game-changer for my business. Their attention to detail and professionalism is unmatched.' },
  { name: 'Jane Smith', role: 'Broker', content: 'Working with Debbie and her team has allowed me to focus on growing my client base while they handle the intricate details of transactions.' },
  { name: 'Mike Johnson', role: 'Real Estate Investor', content: 'The level of expertise and support provided by PA Real Estate Support Services is truly exceptional. Highly recommended!' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-container px-4">
        <h2 className="text-h2 font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;