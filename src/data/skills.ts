import type { SkillCategoryGroup } from '../types';

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces.",
    skills: [
      { name: "HTML5", category: "frontend", note: "Semantic Structure & Accessibility" },
      { name: "CSS3", category: "frontend", note: "Flexbox, Grid, Modern Layouts" },
      { name: "JavaScript", category: "frontend", note: "ES6+, DOM, Asynchronous JS" },
      { name: "React", category: "frontend", note: "Components, Hooks & State" },
      { name: "Tailwind CSS", category: "frontend", note: "Utility-First Styling" },
    ],
  },
  {
    id: "programming",
    title: "Core Programming",
    description: "Algorithmic thinking, data structures, and computer science foundations.",
    skills: [
      { name: "C++", category: "programming", note: "OOP, Data Structures & Logic" },
      { name: "Python", category: "programming", note: "Beginner Level (Scripting & Basics)" },
    ],
  },
  {
    id: "uiux",
    title: "UI/UX & Design",
    description: "User-centered design thinking, wireframing, and interactive prototyping.",
    skills: [
      { name: "Figma", category: "uiux", note: "Component Libraries & UI Layouts" },
      { name: "Wireframing", category: "uiux", note: "Information Architecture & Flows" },
      { name: "Prototyping", category: "uiux", note: "Interactive Screen Transitions" },
      { name: "Responsive Design", category: "uiux", note: "Mobile-First Adaptation" },
    ],
  },
  {
    id: "database",
    title: "Databases & Data Modeling",
    description: "Relational database schema architecture and structured querying.",
    skills: [
      { name: "MySQL", category: "database", note: "Schema Design & Constraints" },
      { name: "SQL", category: "database", note: "Complex Joins, Aggregations & Views" },
      { name: "Database Design", category: "database", note: "ERDs & Normalization (1NF-3NF)" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "Version control, development environments, and build pipelines.",
    skills: [
      { name: "Git", category: "tools", note: "Version Control & Branching" },
      { name: "GitHub", category: "tools", note: "Collaboration & Repositories" },
      { name: "VS Code", category: "tools", note: "Primary Development IDE" },
      { name: "Vite", category: "tools", note: "Fast Build & Development Tooling" },
    ],
  },
];
