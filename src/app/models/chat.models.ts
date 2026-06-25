export type SectionKey =
  | 'hello'
  | 'about'
  | 'projects'
  | 'experience'
  | 'skills'
  | 'education'
  | 'communication'
  | 'contact'
  | 'resume';

export type Sender = 'user' | 'bot';

export interface ChatMessage {
  id: string;
  sender: Sender;
  text?: string;
  sectionKey?: SectionKey;
  timestamp: number;
}

export interface ProjectItem {
  id: string;
  name: string;
  tag: string; // e.g. "Angular 18 · Firebase"
  problem: string;
  build: string;
  result: string;
  github?: string;
  live?: string;
  image: string; // path or placeholder url
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'State' | 'UI' | 'Backend' | 'Database' | 'Cloud' | 'Tooling' | 'Design';
  icon?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface LanguageSkill {
  name: string;
  level: number; // 0-100
}

export interface PortfolioSection {
  key: SectionKey;
  keywords: string[];
  title: string;
  render: 'hello' | 'about' | 'projects' | 'experience' | 'skills' | 'education' | 'communication' | 'contact' | 'resume';
}
