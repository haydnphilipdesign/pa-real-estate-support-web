import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Phone, Users } from 'lucide-react';

const services = [
  { icon: FileText, title: 'Document Management', description: 'Efficient handling of all transaction paperwork and contracts' },
  { icon: Calendar, title: 'Timeline Management', description: 'Keeping your transactions on schedule from contract to closing' },
  { icon: Phone, title: 'Communication Coordination', description: 'Seamless coordination between all parties involved in the transaction' },
  { icon: Users, title: 'Client Support', description: 'Dedicated assistance for agents and clients throughout the process' },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container">
        <h2 className="section-title text-center">Our Transaction Coordination Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-start bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <service.icon className="w-12 h-12 mr-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-2 font-serif">{service.title}</h3>
                <p className="text-gray-dark">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;