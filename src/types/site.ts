export type Locale = "es" | "en";
export type Theme = "dark" | "light";

export type SkillIconKey =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "next"
  | "node"
  | "postgresql"
  | "tailwind"
  | "python";

export interface ProfileData {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  heroBackground: string;
  avatar: string;
  cv: Record<Locale, string>;
}

export interface SkillItem {
  name: string;
  icon: SkillIconKey;
}

export interface ProjectItem {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  stack: string[];
  projectUrl: string | null;
  buttonLabel?: Partial<Record<Locale, string>>;
}

export interface PortfolioCopy {
  loader: {
    text: string;
  };
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  controls: {
    dark: string;
    light: string;
    language: string;
  };
  hero: {
    badge: string;
    descriptionParagraphs: string[];
    roleLine: string;
    focusTitle: string;
    focusItems: [string, string, string];
    avatarPlaceholder: string;
    projectsCta: string;
    cvCta: string;
  };
  about: {
    kicker: string;
    title: string;
    summary: string;
    paragraphs: [string, string, string];
    focusTitle: string;
    focusItems: [string, string, string];
    readMore: string;
    showLess: string;
  };
  skills: {
    kicker: string;
    title: string;
    description: string;
  };
  projects: {
    kicker: string;
    title: string;
    description: string;
    openProject: string;
    missingProjectUrl: string;
  };
  contact: {
    kicker: string;
    title: string;
    description: string;
    linkedin: string;
    github: string;
    email: string;
  };
  footer: string;
}
