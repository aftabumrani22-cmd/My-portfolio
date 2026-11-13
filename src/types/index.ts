export type ProjectCategory = 'all' | 'web' | 'uiux' | 'database';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'uiux' | 'database';
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  role: string;
  status: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  iconName?: string;
  gradient: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'programming' | 'uiux' | 'database' | 'tools';
  note?: string; // Honest proficiency context (e.g. "Academic Projects", "Beginner", "Intermediate")
  iconName?: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export type ExperienceType = 'leadership' | 'volunteer' | 'employment';

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  type: ExperienceType;
  location?: string;
  summary: string;
  responsibilities: string[];
  skillsGained: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  eventOrContext: string;
  recognition: string;
  description: string;
  category: 'award' | 'recognition' | 'competition' | 'certification';
  badge: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}
