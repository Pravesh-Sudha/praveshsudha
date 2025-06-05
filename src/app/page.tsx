import { headerImage } from '@/assets';
import About from '@/components/About';
import Projects from '@/components/Projects';
import {
  Header,
  HeaderTitle,
  HeaderDescription,
  HeaderCta,
  HeaderImage,
} from '@/components/Header';
import Newsletter from '@/components/Newsletter';
import HireMe from '@/components/Hire-me';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
  <Header>
    <HeaderTitle>
      Bridging critical thinking and innovation,{' '}
      <span className="relative inline-block">
        from philosophy to DevOps
        {}
        {/* <Image
          src={headerUnderline}
          alt="Header underline"
          className="absolute -bottom-1 lg:-bottom-4 lg:w-full left-0 lg:left-0 -z-20"
        /> */}
      </span>
    </HeaderTitle>

    <HeaderDescription>
      Pravesh Sudha is an AWS Community Builder (Containers) and a former philosophy student turned{' '}
      <Link
        href="https://www.linkedin.com/in/pravesh-sudha/"
        className="underline hover:no-underline"
        target="_blank"
        rel="noreferrer noopener"
      >
        DevOps Engineer
      </Link>
      . Blogger, Freelancer, and Open Source Contributor. Passionate about cloud computing, Kubernetes, and automation.
    </HeaderDescription>

    <HeaderCta>
      <Link
        href="#about"
        className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
      >
        <ArrowDown /> Know more
      </Link>
      <Link
        href="mailto:programmerpravesh@gmail.com"
        className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}
      >
        Get in touch
      </Link>
    </HeaderCta>

    <HeaderImage src={headerImage} alt="Pravesh Sudha" />
  </Header>

  <About />
  <Projects />
  <HireMe />
  <Newsletter />

</div>

  );
}
