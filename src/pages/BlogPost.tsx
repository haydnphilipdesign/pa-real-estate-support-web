import React from 'react';
import { useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

// Import all blog post content
import * as choosingTheRightTC from '../blog-posts/choosing-the-right-transaction-coordinator.mdx';
import * as closeDealsFaster from '../blog-posts/close-deals-faster-with-transaction-coordination.mdx';
import * as commonPitfalls from '../blog-posts/common-pitfalls-in-real-estate.mdx';
import * as contractToClose from '../blog-posts/contract-to-close-transaction-coordination-guide.mdx';
import * as importanceOfStayingOrganized from '../blog-posts/importance-of-staying-organized-in-real-estate.mdx';
import * as outsourcingVsDIY from '../blog-posts/outsourcing-vs-diy-transaction-coordination.mdx';
import * as scalingWithTC from '../blog-posts/scaling-with-transaction-coordinators.mdx';
import * as timeSavingTips from '../blog-posts/time-saving-tips-with-transaction-coordinator.mdx';
import * as tcSupportsCompliance from '../blog-posts/transaction-coordination-supports-compliance.mdx';
import * as whatIsTC from '../blog-posts/what-is-transaction-coordination.mdx';

const blogPosts: { [key: string]: any } = {
  'choosing-the-right-transaction-coordinator': choosingTheRightTC,
  'close-deals-faster-with-transaction-coordination': closeDealsFaster,
  'common-pitfalls-in-real-estate': commonPitfalls,
  'contract-to-close-transaction-coordination-guide': contractToClose,
  'importance-of-staying-organized-in-real-estate': importanceOfStayingOrganized,
  'outsourcing-vs-diy-transaction-coordination': outsourcingVsDIY,
  'scaling-with-transaction-coordinators': scalingWithTC,
  'time-saving-tips-with-transaction-coordinator': timeSavingTips,
  'transaction-coordination-supports-compliance': tcSupportsCompliance,
  'what-is-transaction-coordination': whatIsTC,
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return <div>Post not found</div>;
  }

  const PostContent = post.default;

  return (
    <div className="bg-gray-light">
      <PageHero 
        title={post.title} 
        subtitle={post.date}
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <AnimatedSection className="py-16">
        <div className="container">
          <article className="bg-white rounded-lg shadow-md p-8">
            <div className="prose prose-lg mx-auto">
              <PostContent />
            </div>
          </article>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default BlogPost;