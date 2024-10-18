import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="mr-2 text-deep-blue" />
                123 Real Estate Ave, City, State 12345
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-deep-blue" />
                (123) 456-7890
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-deep-blue" />
                info@parealestatessllc.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Office Locations</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.925932837533!2d-75.16522368461436!3d39.95240297942149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c62f36fbe869%3A0xa926f57fb5c32f!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1647886157955!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;