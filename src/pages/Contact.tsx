import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-light-gray">
      <PageHero 
        title="Contact Us" 
        subtitle="Get in Touch with PA Real Estate Support Services"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <section className="py-16">
        <div className="container mx-auto max-w-container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="mr-2 text-forest-green" />
                  <span>Bushkill, PA</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 text-forest-green" />
                  <a href="tel:5705884637" className="hover:text-forest-green transition duration-300">(570) 588-4637</a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 text-forest-green" />
                  <a href="mailto:debbie@parealestatesupport.com" className="hover:text-forest-green transition duration-300">debbie@parealestatesupport.com</a>
                </li>
                <li className="flex items-center">
                  <Clock className="mr-2 text-forest-green" />
                  <span>Monday - Friday, 9AM to 5PM</span>
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">About Us</h3>
                <p>
                  PA Real Estate Support Services, LLC provides expert transaction coordination services to Keller Williams Agents and other real estate professionals in the Pocono Mountains of Pennsylvania. With over 30 years of experience, we're here to streamline your real estate transactions.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                  ></textarea>
                </div>
                <button type="submit" className="bg-forest-green text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;