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
          <h3 className="text-lg font-medium">AWS Cloud Cost Optimization</h3>
          <p className="text-gray-500 text-base mt-2">
            A Lambda function to clean up unnecessary EBS snapshots, reducing cloud storage costs.
            This project demonstrates cost-efficient AWS resource management and automation.
          </p>
          <Link
            href="https://github.com/Pravesh-Sudha/AWS-cloud-cost-optimization" // Replace with the actual URL
            className="group mt-4 inline-flex items-center gap-2 text-green-600 hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            View Project <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Project 2 */}
        <div className="p-6 border-2 border-gray-100 bg-white rounded-xl shadow-md">
          <h3 className="text-lg font-medium">MERN Stack Dockerization</h3>
          <p className="text-gray-500 text-base mt-2">
            Containerized and deployed a full MERN stack application using Docker Compose.
            Simplified the setup process and improved scalability for modern web applications.
          </p>
          <Link
            href="https://praveshstwt.hashnode.dev/how-to-containerise-and-deploy-a-mern-stack-application-with-docker-compose" // Replace with the actual URL
            className="group mt-4 inline-flex items-center gap-2 text-green-600 hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            View Project <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Project 3 */}
        <div className="p-6 border-2 border-gray-100 bg-white rounded-xl shadow-md">
          <h3 className="text-lg font-medium">Ultimate Shell Script Project</h3>
          <p className="text-gray-500 text-base mt-2">
            Developed a shell script to automatically send Jenkins logs to an S3 bucket,
            improving log retention and cost optimization for CI/CD pipelines.
          </p>
          <Link
            href="https://praveshstwt.hashnode.dev/mastering-cost-optimisation-with-shell-scripting-automate-log-storage-in-s3-for-budget-friendly-infrastructure" // Replace with the actual URL
            className="group mt-4 inline-flex items-center gap-2 text-green-600 hover:underline"
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
