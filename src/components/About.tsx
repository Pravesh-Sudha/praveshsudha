import { cn } from '@/lib/utils';
import { AboutProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const About = ({ className, ...props }: AboutProps) => {
  return (
    <section
  id="about"
  className={cn(className, 'pt-10 lg:pt-0 pb-20')}
  {...props}
>
  <ViewContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-10">
    <div className="px-14 py-10 border-2 border-gray-100 bg-gray-50 rounded-xl">
      <h3 className="text-lg md:text-[20px] font-medium">
        Philosophy to Tech
      </h3>
      <p className="text-gray-500 text-base mt-2">
        Transitioned from a philosophy student to a DevOps engineer, blending critical thinking with technology to solve complex problems.
      </p>
    </div>

    <div className="px-14 py-10 border-2 border-gray-100 bg-gray-50 rounded-xl">
      <h3 className="text-lg md:text-[20px] font-medium">
        Open Source Contributor
      </h3>
      <p className="text-gray-500 text-base mt-2">
        Actively contributes to projects like{' '}
        <Link
          href="https://kubeshop.github.io/testkube/"
          className="group underline hover:no-underline inline-flex gap-2 items-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          Testkube{' '}
          <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
        </Link>{' '}
        and{' '}
        <Link
          href="https://blog.praveshsudha.com/how-i-contributed-to-kestra-a-beginners-perspective"
          className="group underline hover:no-underline inline-flex gap-2 items-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          Kestra{' '}
          <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
        , empowering developers worldwide through open-source collaboration.
      </p>
    </div>

    <div className="px-14 py-10 border-2 border-gray-100 bg-gray-50 rounded-xl">
      <h3 className="text-lg md:text-[20px] font-medium">
        Cloud and Automation Expert
      </h3>
      <p className="text-gray-500 text-base mt-2">
        Specializes in AWS, Docker, Kubernetes, and automation, offering tailored solutions to optimize workflows and reduce costs.
      </p>
    </div>

    <div className="px-14 py-10 border-2 border-gray-100 bg-gray-50 rounded-xl">
      <h3 className="text-lg md:text-[20px] font-medium">
        Blogger and Mentor
      </h3>
      <p className="text-gray-500 text-base mt-2">
        AWS Community Builder under the Containers category. Writes beginner-friendly blogs on{' '}
        <Link
          href="https://hashnode.com/@praveshstwt"
          className="group underline hover:no-underline inline-flex gap-2 items-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          Hashnode <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
        </Link>,{' '}
        <Link
          href="https://dev.to/pravesh_sudha_3c2b0c2b5e0"
          className="group underline hover:no-underline inline-flex gap-2 items-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          Dev.to <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
        </Link>, and{' '}
        <Link
          href="https://medium.com/@programmerpravesh"
          className="group underline hover:no-underline inline-flex gap-2 items-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          Medium <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
        </Link>{' '}
        to educate and inspire the next generation of DevOps enthusiasts.
      </p>
    </div>
  </ViewContainer>
</section>

  );
};

export default About;
