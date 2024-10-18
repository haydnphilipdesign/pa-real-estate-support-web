import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const blogPosts = [
  {
    title: 'How to Choose the Right Transaction Coordinator for Your Real Estate Business',
    excerpt: 'Find out what to look for when selecting the right transaction coordinator for your real estate business.',
    date: '2024-10-22',
    author: 'PA Real Estate Support Services',
    slug: 'choosing-the-right-transaction-coordinator',
  },
  {
    title: 'How Professional Transaction Coordination Can Help You Close Deals Faster',
    excerpt: 'Discover how professional transaction coordination can speed up the real estate closing process.',
    date: '2024-10-15',
    author: 'PA Real Estate Support Services',
    slug: 'close-deals-faster-with-transaction-coordination',
  },
  {
    title: 'Common Pitfalls in Real Estate Transactions and How Transaction Coordination Prevents Them',
    excerpt: 'Avoid common real estate transaction pitfalls with the help of a professional transaction coordinator.',
    date: '2024-10-18',
    author: 'PA Real Estate Support Services',
    slug: 'common-pitfalls-in-real-estate',
  },
  {
    title: 'From Contract to Close: A Step-by-Step Guide to Real Estate Transaction Coordination',
    excerpt: 'A comprehensive guide to real estate transaction coordination from contract to closing.',
    date: '2024-10-23',
    author: 'PA Real Estate Support Services',
    slug: 'contract-to-close-transaction-coordination-guide',
  },
  {
    title: 'The Importance of Staying Organized in Real Estate Transactions',
    excerpt: 'Learn why organization is key to successful real estate transactions and how to achieve it.',
    date: '2024-10-16',
    author: 'PA Real Estate Support Services',
    slug: 'importance-of-staying-organized-in-real-estate',
  },
  {
    title: 'The Benefits of Outsourcing Transaction Coordination vs. Doing It Yourself',
    excerpt: 'Explore the pros and cons of outsourcing transaction coordination versus handling it yourself.',
    date: '2024-10-20',
    author: 'PA Real Estate Support Services',
    slug: 'outsourcing-vs-diy-transaction-coordination',
  },
  {
    title: 'Why Real Estate Teams Should Rely on Transaction Coordinators for Scaling Their Business',
    excerpt: 'Learn how transaction coordinators can help real estate teams scale their operations efficiently.',
    date: '2024-10-21',
    author: 'PA Real Estate Support Services',
    slug: 'scaling-with-transaction-coordinators',
  },
  {
    title: 'Top 5 Time-Saving Tips for Real Estate Agents Using a Transaction Coordinator',
    excerpt: 'Discover five time-saving tips for real estate agents who use a professional transaction coordinator.',
    date: '2024-10-17',
    author: 'PA Real Estate Support Services',
    slug: 'time-saving-tips-with-transaction-coordinator',
  },
  {
    title: 'How Transaction Coordination Supports Compliance with Real Estate Regulations',
    excerpt: 'Learn how transaction coordination ensures compliance with real estate laws and regulations.',
    date: '2024-10-19',
    author: 'PA Real Estate Support Services',
    slug: 'transaction-coordination-supports-compliance',
  },
  {
    title: 'What Is Transaction Coordination and Why Is It Essential for Real Estate Agents?',
    excerpt: 'Learn how transaction coordination can help real estate agents streamline their processes.',
    date: '2024-10-14',
    author: 'PA Real Estate Support Services',
    slug: 'what-is-transaction-coordination',
  },
];

const Blog: React.FC = () => {
  return (
    <div className="bg-gray-light">
      <PageHero 
        title="Our Blog" 
        subtitle="Insights and Updates from PA Real Estate Support Services"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <AnimatedSection className="py-16">
        <div className="container">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 font-serif">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="mr-2" size={16} />
                    <span className="mr-4">{post.date}</span>
                    <User className="mr-2" size={16} />
                    <span>{post.author}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="text-primary font-semibold flex items-center hover:underline">
                    Read More <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Blog;