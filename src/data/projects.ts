import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "hope-society-pakistan-website",
    title: "Hope Society Pakistan Website",
    subtitle: "Community Organization Website",
    category: "web",
    summary:
      "Designed and built a website for Hope Society Pakistan to give the organization a clear online presence and make its work easier to discover.",
    problem:
      "A community organization needs a straightforward way to introduce its mission, share its initiatives, and help visitors learn how to get involved.",
    solution:
      "Created an organization-focused website with a clear page structure, responsive layouts, and direct paths to explore the society and its activities.",
    features: [
      "Organization-focused content structure for presenting the society and its work",
      "Responsive layouts for mobile, tablet, and desktop screens",
      "Clear navigation between key information and initiatives",
      "Accessible visual hierarchy and readable typography",
    ],
    role: "Website Designer & Frontend Developer",
    status: "Completed",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "",
    liveUrl: "",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "portfolio-websites",
    title: "Personal Portfolio Websites",
    subtitle: "Portfolio Design & Development",
    category: "web",
    summary:
      "Created multiple portfolio websites to present professional profiles, skills, selected work, and contact information through polished, responsive experiences.",
    problem:
      "A portfolio needs to make a person's strengths and work easy to understand while remaining usable across screen sizes.",
    solution:
      "Designed and developed multiple portfolio experiences with focused content, consistent visual styling, responsive layouts, and clear navigation.",
    features: [
      "Multiple portfolio website designs tailored to personal branding",
      "Sections for profile, skills, projects, and contact details",
      "Responsive layouts for mobile, tablet, and desktop screens",
      "Clear navigation and visual hierarchy for browsing work",
    ],
    role: "Portfolio Designer & Frontend Developer",
    status: "Completed",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "",
    liveUrl: "",
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
  },
  {
    id: "smart-umrah",
    title: "Smart Umrah Pilgrim Assistant",
    subtitle: "Computer Science Project",
    category: "web",
    summary:
      "A mobile-first assistance system engineered to guide pilgrims through Umrah rituals with location-aware checkpoints, audio instructions, and contextual prayer reminders.",
    problem:
      "During the spiritual journey of Umrah, pilgrimsâ€”especially first-time visitors and elderly individualsâ€”frequently experience confusion regarding ritual sequences, precise boundaries (such as Safa & Marwah or Tawaf rounds), and appropriate supplications in crowded environments.",
    solution:
      "Developed a structured digital companion offering clear, step-by-step ritual progression. The system provides audio-guided instructions, geo-aware contextual prompts, and verified Arabic supplications with translations.",
    features: [
      "Location-aware guidance assisting pilgrims at critical ritual waypoints in Makkah",
      "Spoken voice instructions and audio recitations for seamless hands-free navigation",
      "Step and round tracking reminders during Tawaf and Sa'i circuits",
      "Categorized Dua library with phonetics and English/Urdu translations",
      "Offline-first architecture for essential ritual texts when cellular connectivity fluctuates",
    ],
    role: "Lead Developer & UI Designer (Concept, Interface Architecture, Feature Implementation)",
    status: "In Development",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Geolocation API", "Web Audio API", "Figma"],
    githubUrl: "",
    liveUrl: "", // Provide URL when deployed or leave empty
    gradient: "from-sky-500/20 via-indigo-500/10 to-transparent",
  },
  {
    id: "cafeteria-management",
    title: "Campus Cafeteria Management System",
    subtitle: "Academic Software Engineering Project",
    category: "web",
    summary:
      "An automated ordering and inventory tracking system built to streamline daily campus cafeteria billing, menu updates, and sales records.",
    problem:
      "Campus cafeterias struggle during peak rush hours with manual paper billing, delayed order processing, frequent item stockouts, and unreliable end-of-day revenue reconciliation.",
    solution:
      "Engineered an intuitive interface for staff and students. It features real-time digital menu display, rapid order ticket creation, automatic price calculation, and basic inventory tracking to eliminate calculation discrepancies.",
    features: [
      "Dynamic menu catalog with categorised items, availability toggles, and price tiers",
      "Point-of-sale rapid order entry with automated bill generation and receipt preview",
      "Daily order logging and inventory depletion tracking",
      "Role-based access separating student cashier operations from administrative reports",
      "Clean, responsive desktop/tablet layout optimized for fast touch-based checkout",
    ],
    role: "Full-Stack Contributor (Frontend Flow, State Management & System Logic)",
    status: "Completed Academic Project",
    techStack: ["JavaScript", "HTML5", "CSS3 / Tailwind", "Local Storage / Node", "Figma"],
    githubUrl: "",
    liveUrl: "",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "pharmacy-expiry-database",
    title: "Pharmacy Expiry & Inventory Database",
    subtitle: "Relational Database Management System (RDBMS)",
    category: "database",
    summary:
      "A normalized relational database system designed in MySQL to eliminate expired drug dispensing through batch tracking, supplier auditing, and automated expiry alerts.",
    problem:
      "Pharmacies handle thousands of medicinal products with differing batch numbers and strict shelf-life constraints. Manual inventory checks often fail to catch near-expiry medicines, causing financial waste and patient health hazards.",
    solution:
      "Architected a normalized 3NF relational schema in MySQL with robust table relationships connecting medicines, suppliers, categories, and purchase batches. Developed targeted SQL views and stored queries to flag batches expiring within 30, 60, and 90 days.",
    features: [
      "Normalized 3NF schema preventing data redundancy across suppliers and drug categories",
      "Batch-level expiry tracking tracking manufacture dates, arrival dates, and unit stock",
      "Complex SQL queries & views filtering critical 'Near Expiry' and 'Low Stock' inventory",
      "Supplier management tracking purchase histories, lead times, and contact protocols",
      "Integrity constraints (Foreign keys, ON DELETE cascades, CHECK constraints) safeguarding data validity",
    ],
    role: "Database Architect & SQL Developer (ERD Design, Normalization, Query Scripting)",
    status: "Completed Course Project (Database Systems)",
    techStack: ["MySQL", "SQL", "Database Normalization (3NF)", "ERD Modeling", "phpMyAdmin"],
    githubUrl: "",
    liveUrl: "",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
];

