import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParallaxBackground from './ParallaxBackground';
import GradientText from './GradientText';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="text-center z-10 max-w-3xl px-4">
        <motion.h1 
          className="text-h1 font-bold mb-6 font-serif text-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">PA Real Estate Support Services</span>
        </motion.h1>
        <motion.p 
          className="text-2xl mb-12 text-shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Expert Transaction Coordination for Real Estate Professionals in the Pocono Mountains
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-x-4"
        >
          <Link to="/services" className="btn btn-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
            Explore Our Services
          </Link>
          <Link to="/contact" className="btn btn-secondary shadow-lg hover:shadow-xl transition-shadow duration-300">
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;