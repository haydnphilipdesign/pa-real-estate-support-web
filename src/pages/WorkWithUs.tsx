import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const benefits = [
  "Focus on client relationships while we handle the paperwork",
  "Ensure compliance with all real estate regulations",
  "Streamline your transaction process",
  "Reduce stress and minimize errors",
  "Increase your productivity and close more deals",
  "Access to 30+ years of real estate expertise",
  "Customized support for your specific needs"
];

const process = [
  { title: "Initial Consultation", description: "We'll discuss your needs and how we can support your business." },
  { title: "Customized Plan", description: "We'll create a tailored plan to fit your specific requirements." },
  { title: "Onboarding", description: "We'll integrate our services seamlessly into your workflow." },
  { title: "Ongoing Support", description: "We'll provide continuous support throughout each transaction." }
];

const WorkWithUs: React.FC = () => {
  return (
    <div className="bg-light-gray">
      <PageHero 
        title="Work With Us" 
        subtitle="Partner with PA Real Estate Support Services for Streamlined Transactions"
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <section className="py-16">
        <div className="container mx-auto max-w-container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Benefits of Our Services</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-forest-green mr-2 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
              <p className="mb-4">
                With over 30 years of experience in the PA real estate industry, we bring unparalleled knowledge and skills to every transaction. Our founder, Debbie O'Brien, has worked in various roles including:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Transaction Coordinator</li>
                <li>Compliance Review Officer</li>
                <li>Executive Assistant to Broker of Record</li>
                <li>Office Manager for real estate and mortgage companies</li>
              </ul>
              <p>
                This diverse background allows us to understand and address the complex needs of real estate professionals in the Pocono Mountains.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-forest-green text-white">
        <div className="container mx-auto max-w-container px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Elevate Your Real Estate Business?</h2>
          <p className="mb-8 text-lg">
            Partner with PA Real Estate Support Services and experience the difference our expert transaction coordination can make for your business.
          </p>
          <Link to="/contact" className="inline-block bg-white text-forest-green px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
            Get Started Today <ArrowRight className="inline ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;