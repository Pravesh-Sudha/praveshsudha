import React from 'react';
import Image from 'next/image';
import { awsGig, dockerGig } from '@/assets';

const HireMe: React.FC = () => {
  return (
    <section
     id='hire-me'
     className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Hire Me</h1>
        <p className="text-lg text-center mb-12">
          Looking for top-notch DevOps solutions? I specialize in AWS cloud solutions and Docker containerization. Explore my Fiverr gigs below to see how I can help you with your projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* AWS Cloud Solutions */}
  <div className="bg-white p-6 shadow-lg rounded-2xl">
    <Image
      src={awsGig} // Replace with the actual image path or URL
      alt="AWS Cloud Solutions"
      className="w-full h-auto object-contain rounded-lg mb-4"
    />
    <h2 className="text-2xl font-semibold mb-4">AWS Cloud Solutions</h2>
    <p className="text-gray-700 mb-6">
      Get expert assistance with AWS services including setup, optimization, and troubleshooting. Perfect for startups and businesses looking to scale seamlessly in the cloud.
    </p>
    <a
      href="https://www.fiverr.com/praveshsudha/setup-and-fix-issues-on-amazon-web-services-aws"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition"
    >
      Explore Gig
    </a>
  </div>

  {/* Docker Containerization */}
  <div className="bg-white p-6 shadow-lg rounded-2xl">
    <Image
      src={dockerGig} // Replace with the actual image path or URL
      alt="Docker Containerization"
      className="w-full h-auto object-contain rounded-lg mb-4"
    />
    <h2 className="text-2xl font-semibold mb-4">Docker Containerization</h2>
    <p className="text-gray-700 mb-6">
      Simplify deployment and scaling with Docker. I provide end-to-end containerization solutions tailored to your applications for efficient DevOps workflows.
    </p>
    <a
      href="https://www.fiverr.com/praveshsudha/dockerize-and-deploy-your-application"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition"
    >
      Explore Gig
    </a>
  </div>
</div>

      </div>
    </section>
  );
};

export default HireMe;
