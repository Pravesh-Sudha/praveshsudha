import { cn } from '@/lib/utils';
import { ViewContainer } from './ui/view-container';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Projects = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <section
      id="projects"
      className={cn(className, 'pt-10 lg:pt-0 pb-20 bg-gray-100')}
      {...props}
    >
      {/* Section Heading */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4 pt-4">Projects</h2>
        <p className="text-lg text-gray-600">
          Discover some of the exciting projects I’ve worked on, showcasing my expertise in AWS, Docker, and DevOps solutions.
        </p>
      </div>

      {/* Project Cards */}
      <ViewContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="p-6 border-2 border-gray-100 bg-white rounded-xl shadow-md">
          <h3 className="text-lg font-medium">2048 Game Deployment on AWS with Jenkins & Terraform</h3>
          <p className="text-gray-500 text-base mt-2">
            Deployed the 2048 game on AWS using a fully automated pipeline with Docker, Jenkins, and Terraform.
            This project showcases Infrastructure as Code, CI/CD, and containerization best practices.
          </p>
          <Link
            href="https://youtu.be/bZTPa7Xj6QE" // Replace with the actual URL
            className="group mt-4 inline-flex items-center gap-2 text-primary hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            View Project <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Project 2 */}
        <div className="p-6 border-2 border-gray-100 bg-white rounded-xl shadow-md">
          <h3 className="text-lg font-medium">Real-Time Twitter Streaming with Apache Kafka & Python</h3>
          <p className="text-gray-500 text-base mt-2">
            Built a real-time Twitter data pipeline using Apache Kafka, Python, Elasticsearch, and Kibana.
            It demonstrates stream processing, data visualization, and open-source data engineering.
          </p>
          <Link
            href="https://youtu.be/DROI7I2sbj8" // Replace with the actual URL
            className="group mt-4 inline-flex items-center gap-2 text-primary hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            View Project <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Project 3 */}
        <div className="p-6 border-2 border-gray-100 bg-white rounded-xl shadow-md">
          <h3 className="text-lg font-medium"> Flask To-Do App with AWS, Terraform, Jenkins & Docker</h3>
          <p className="text-gray-500 text-base mt-2">
            Created a full DevOps pipeline for a Flask-based To-Do app using Terraform, Jenkins, and Docker.
            Features email notification via AWS SNS when a task is completed — enabling real-time alerts.
          </p>
          <Link
            href="https://youtu.be/ZLRv0rVifL8" // Replace with the actual URL
            className="group mt-4 inline-flex items-center gap-2 text-primary hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            View Project <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </ViewContainer>
    </section>
  );
};

export default Projects;
