import { FooterLinks, NavLinksType } from '@/types';

export const NAV_LINKS: NavLinksType = {
  links: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Projects',
      url: '#projects',
    },
    {
      name: 'Hire-me',
      url: '#hire-me', // Fixed typo
    },
    {
      name: 'Blog',
      url: 'https://blog.praveshsudha.com',
      openInNewPage: true,
    },
    {
      name: 'Newsletter',
      url: '#newsletter',
    },
  ],
};

export const NAV_LINKS_COURSE: NavLinksType = {
  links: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Resources',
      url: '#resources',
    },
    {
      name: 'Syllabus',
      url: '#syllabus',
    },
    {
      name: 'Blog',
      url: 'https://blog.praveshsudha.com',
      openInNewPage: true,
    },
  ],
  cta: {
    name: 'Register',
    url: '#register',
  },
};

export const FOOTER_LINKS: FooterLinks = [
  {
    name: 'Socials',
    links: [
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/@pravesh-sudha',
        openInNewPage: true,
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/@praveshstwt',
        openInNewPage: true,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/pravesh-sudha/',
        openInNewPage: true,
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/sudha.pravesh/',
        openInNewPage: true,
      },
    ],
  },
  {
    name: 'Other',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Pravesh-Sudha',
        openInNewPage: true,
      },
      {
        name: 'Dev.To',
        url: 'https://dev.to/pravesh_sudha_3c2b0c2b5e0',
        openInNewPage: true,
      },
      {
        name: 'Medium',
        url: 'https://medium.com/@programmerpravesh',
        openInNewPage: true,
      },
      {
        name: 'Hashnode',
        url: 'https://blog.praveshsudha.com',
        openInNewPage: true,
      },
    ],
  },
  {
    name: 'Resources',
    links: [
      {
        name: 'Home',
        url: '/',
        openInNewPage: false, // Updated
      },
      {
        name: 'Blog',
        url: 'https://blog.praveshsudha.com',
        openInNewPage: true, // Updated
      },
      {
        name: 'Projects',
        url: '#projects',
        openInNewPage: false, // Updated
      },
      {
        name: 'Hire-me',
        url: '#hire-me',
        openInNewPage: false, // Updated
      },
    ],
  },
];
