import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "responsive-web-dev",
    title: "Responsive Web Development",
    tagline: "Mobile-first, fast-loading, cross-device websites",
    description:
      "Crafting modern websites that render smoothly on mobile phones, tablets, and wide desktop displays without layout breakage.",
    deliverables: [
      "Fluid responsive layout grids",
      "Semantic HTML5 & modern CSS/Tailwind",
      "Cross-browser testing (Chrome, Safari, Firefox, Edge)",
      "Accessible structure with keyboard navigation",
    ],
    iconName: "MonitorSmartphone",
  },
  {
    id: "frontend-implementation",
    title: "Frontend React Implementation",
    tagline: "Translating wireframes into interactive, typed code",
    description:
      "Turning Figma designs or concepts into functional React + TypeScript components with clean code, state management, and reusable patterns.",
    deliverables: [
      "Modular, maintainable React component tree",
      "TypeScript interfaces for strict type safety",
      "State management and client-side interactions",
      "API data fetching & dynamic UI rendering",
    ],
    iconName: "Code2",
  },
  {
    id: "uiux-prototyping",
    title: "UI/UX Wireframing & Prototyping",
    tagline: "User-centered design architecture before coding",
    description:
      "Structuring intuitive layouts in Figma with clear visual hierarchies, user journey flows, and clickable prototypes to validate ideas early.",
    deliverables: [
      "Low-fidelity wireframes to high-fidelity mockups",
      "Clickable interactive prototypes in Figma",
      "Color palettes, typography scales & UI components",
      "Usability-focused layout audits",
    ],
    iconName: "Palette",
  },
  {
    id: "landing-page-dev",
    title: "Landing Page Development",
    tagline: "High-impact single-page experiences designed to convert",
    description:
      "Developing focused landing pages for personal branding, products, academic portfolios, or campus societies that highlight key value propositions.",
    deliverables: [
      "Compelling hero section & call-to-actions",
      "Lightweight animations & micro-interactions",
      "SEO meta-tags and social share previews",
      "Fast loading speeds with zero unnecessary overhead",
    ],
    iconName: "Sparkles",
  },
  {
    id: "website-redesign",
    title: "Website Redesign & Modernization",
    tagline: "Transforming dated layouts into sleek digital experiences",
    description:
      "Revamping outdated websites with clean typography, modern dark or light styling, enhanced responsiveness, and improved user navigation.",
    deliverables: [
      "Modern visual facelift matching current web aesthetics",
      "Responsive overhaul for mobile and tablet users",
      "Cleaner navigation hierarchy and typography polish",
      "Speed improvements and code cleanup",
    ],
    iconName: "RefreshCw",
  },
  {
    id: "maintenance-bug-fixes",
    title: "Website Maintenance & Support",
    tagline: "Keeping your web presence up-to-date and bug-free",
    description:
      "Assisting with regular content updates, styling adjustments, bug diagnosis, link verification, and minor feature additions.",
    deliverables: [
      "Layout bug fixes & responsiveness tweaks",
      "Content updates, text changes, and image optimization",
      "Dependency audits and console error diagnosis",
      "Reliable and friendly ongoing communication",
    ],
    iconName: "Wrench",
  },
];
