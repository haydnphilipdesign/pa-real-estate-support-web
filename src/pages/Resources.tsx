import React, { useState } from 'react';
import { FileText, Search, Download, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const resources = [
  { title: "Transaction Coordination Checklist", type: 'Checklist', downloadLink: '#' },
  { title: "Real Estate Transaction Timeline", type: 'Guide', downloadLink: '#' },
  { title: "Common Real Estate Contract Terms Explained", type: 'Guide', downloadLink: '#' },
  { title: "Compliance Checklist for Real Estate Transactions", type: 'Checklist', downloadLink: '#' },
  { title: "Effective Communication in Real Estate Transactions", type: 'Guide', downloadLink: '#' },
  { title: "Real Estate Transaction Management Software Comparison", type: 'Comparison', downloadLink: '#' },
  { title: "Best Practices for Document Management in Real Estate", type: 'Guide', downloadLink: '#' },
  { title: "Understanding Escrow in Real Estate Transactions", type: 'Guide', downloadLink: '#' },
  { title: "Real Estate Transaction Coordinator Job Description Template", type: 'Template', downloadLink: '#' },
  { title: "Key Performance Indicators for Transaction Coordinators", type: 'Guide', downloadLink: '#' },
];

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-light">
      <PageHero 
        title="Resources" 
        subtitle="Helpful Tools and Information for Real Estate Professionals"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <AnimatedSection className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 font-serif">Empower Your Real Estate Business</h2>
            <p className="text-xl text-gray-600 mb-8">
              Access our curated collection of resources designed to help you streamline your real estate transactions and grow your business.
            </p>
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover-lift">
                <FileText className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-serif">{resource.title}</h3>
                <p className="text-gray-600 mb-4">Type: {resource.type}</p>
                <a
                  href={resource.downloadLink}
                  className="inline-flex items-center text-primary font-semibold hover:underline"
                >
                  Download <Download className="ml-2" size={16} />
                </a>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4 font-serif">Need More Assistance?</h3>
            <p className="text-xl text-gray-600 mb-8">
              Our team of expert transaction coordinators is here to help you navigate the complexities of real estate transactions.
            </p>
            <Link to="/contact" className="btn btn-primary shadow-md hover:shadow-lg transition-shadow duration-300">
              Contact Us for Personalized Support <ArrowRight className="inline ml-2" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Resources;