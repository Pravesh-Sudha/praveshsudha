import { StaticImageData } from 'next/image';

// NavLink Types
type NavLinkType = {
  name: string;
  url: string;
  openInNewPage?: boolean;
};

export type NavLinksType = {
  links: NavLinkType[];
  cta?: NavLinkType;
};

// General Component Props
export type GeneralComponent = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export type GeneralComponentWithChild = GeneralComponent & {
  children: React.ReactNode;
};

// Specific Component Props
export type NavbarProps = GeneralComponent;

export type HeaderProps = GeneralComponentWithChild;

export type HeaderTitleProps = GeneralComponentWithChild;

export type HeaderDescriptionProps = GeneralComponentWithChild;

export type HeaderCtaProps = GeneralComponentWithChild;

export type HeaderImageProps = GeneralComponent & {
  src: StaticImageData;
  alt: string;
};

export type AboutProps = GeneralComponent;

export type ProjectsProps = GeneralComponent;

export type BlogProps = GeneralComponent;

export type FooterProps = GeneralComponent;

// Footer Links
type SingleFooterLink = {
  name: string;
  url: string;
  openInNewPage?: boolean;
  isNew?: boolean;
};

type FooterLinksSection = {
  name: string;
  links: SingleFooterLink[];
};

export type FooterLinks = FooterLinksSection[];

// Newsletter Props
export type NewsletterProps = GeneralComponent;

// Project Card Props
export type ProjectCardProps = GeneralComponent & {
  title: string;
  description: string;
  url: string;
};

// Socials Props
export type SocialLink = {
  platform: string;
  url: string;
  icon: StaticImageData; // Optional if you want platform-specific icons
};

export type SocialsProps = GeneralComponent & {
  socials: SocialLink[];
};
