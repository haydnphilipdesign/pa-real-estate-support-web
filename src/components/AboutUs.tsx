import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-container px-4">
        <h2 className="text-h2 font-bold text-center mb-12">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/meeting-image.jpg" alt="Professional real estate consultation" className="rounded-lg shadow-md w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-4">
              PA Real Estate Support Services, LLC is dedicated to providing top-notch transaction coordination services to Keller Williams Agents in the Pocono Mountains of Pennsylvania.
            </p>
            <p className="mb-4">
              Our mission is to streamline the real estate transaction process, allowing agents to focus on what they do best - building client relationships and closing deals.
            </p>
            <p className="mb-4">
              With years of experience in the Pocono Mountains real estate market, we understand the unique challenges and opportunities in this beautiful region.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;