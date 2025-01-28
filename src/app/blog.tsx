import React from 'react';
import { cn } from '@/lib/utils';

const Blog = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <section
      id="blog"
      className={cn(
        className,
        'pt-16 pb-16 min-h-screen bg-gray-100'
      )}
      {...props}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">My Blog</h1>
        <p className="text-center text-gray-600 mb-8">
          Explore all my blogs on DevOps, cloud computing, and more on Hashnode!
        </p>
        <div className="w-full h-[80vh] border rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://praveshsudha.hashnode.dev/" // Replace with your Hashnode URL
            title="Pravesh Sudha Hashnode Blog"
            className="w-full h-full"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Blog;
