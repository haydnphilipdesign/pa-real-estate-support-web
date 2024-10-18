import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Statistics from '../components/Statistics';
import Benefits from '../components/Benefits';
import AnimatedSection from '../components/AnimatedSection';
import GradientText from '../components/GradientText';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <AnimatedSection className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 font-bold mb-6 font-serif">
                Welcome to <GradientText text="PA Real Estate Support Services" />
              </h2>
              <p className="mb-6 text-gray-dark">
                We are your trusted partner in real estate transaction coordination, serving Keller Williams Agents and other real estate professionals in the Pocono Mountains of Pennsylvania. Our expert services ensure smooth, compliant, and efficient transactions from contract to closing.
              </p>
              <Link to="/about" className="btn btn-primary shadow-md hover:shadow-lg transition-shadow duration-300">
                Learn More About Us <ArrowRight className="inline ml-2" />
              </Link>
            </div>
            <motion.img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Real Estate Support" 
              className="w-full h-auto rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </AnimatedSection>
      
      <Services />
      <Statistics />
      <Benefits />
      
      <AnimatedSection className="py-20 bg-gray-light">
        <div className="container text-center">
          <h2 className="text-h2 font-bold mb-8 font-serif">
            <GradientText text="Stay Informed and Empowered" />
          </h2>
          <p className="mb-12 text-xl text-gray-dark">Explore our resources and blog for valuable insights into real estate transaction coordination.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/blog" className="btn btn-primary shadow-md hover:shadow-lg transition-shadow duration-300">
              Read Our Blog <ArrowRight className="inline ml-2" />
            </Link>
            <Link to="/resources" className="btn btn-secondary shadow-md hover:shadow-lg transition-shadow duration-300">
              Access Resources <ArrowRight className="inline ml-2" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-h2 font-bold mb-8 font-serif">
            <GradientText text="Ready to Streamline Your Real Estate Transactions?" />
          </h2>
          <p className="mb-12 text-xl text-gray-dark">Let us handle the details while you focus on growing your business and serving your clients.</p>
          <Link to="/contact" className="btn btn-primary shadow-md hover:shadow-lg transition-shadow duration-300">
            Contact Us Today <ArrowRight className="inline ml-2" />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;