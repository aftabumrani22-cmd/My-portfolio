import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding Problem, Audience & Goals",
    description:
      "Every successful build starts with clarity. I dive deep into the specific requirements, user expectations, and core functional needs before writing any code or opening design tools.",
    points: [
      "Defining target audience and core user tasks",
      "Analyzing technical feasibility and constraints",
      "Outlining required features and milestones",
      "Reviewing reference designs or existing codebases",
    ],
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Information Architecture & Visual Prototyping",
    description:
      "Transforming functional requirements into cohesive visual systems. I sketch wireframes and draft high-fidelity Figma components that prioritize readability, accessible contrast, and intuitive navigation.",
    points: [
      "Structuring content hierarchy and wireframe layouts",
      "Selecting typography scales, palettes, and micro-interactions",
      "Designing responsive mobile, tablet, and desktop views",
      "Validating interaction flows before code implementation",
    ],
  },
  {
    number: "03",
    title: "Develop",
    subtitle: "Clean, Typed, Accessible Engineering",
    description:
      "Writing modular, maintainable React components using TypeScript and Tailwind CSS. I prioritize clean component separation, efficient state management, semantic HTML, and responsive styling.",
    points: [
      "Building reusable, self-contained UI components",
      "Ensuring strict TypeScript type safety across props and state",
      "Applying semantic HTML tags for accessibility and SEO",
      "Optimizing asset loading and responsive breakpoints",
    ],
  },
  {
    number: "04",
    title: "Refine",
    subtitle: "Testing, Cross-Device Verification & Polish",
    description:
      "Quality assurance and thorough verification. I test across browsers, screen resolutions, and devices, checking keyboard focus states, loading performance, and responsive integrity.",
    points: [
      "Validating responsive behavior on real mobile and desktop viewports",
      "Conducting accessibility checks for screen readers and keyboard users",
      "Auditing performance, bundle sizes, and console logs",
      "Fine-tuning transitions, hover states, and visual polish",
    ],
  },
];
