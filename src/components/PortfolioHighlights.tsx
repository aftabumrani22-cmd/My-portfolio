import React from 'react';
import { BriefcaseBusiness, Code2, Layers3 } from 'lucide-react';
import { projects } from '../data/projects';
import { experienceData } from '../data/experience';
import { skillCategories } from '../data/skills';

const highlights = [
  {
    value: projects.length,
    label: 'Featured Projects',
    description: 'Academic builds and practical software concepts',
    icon: <Code2 className="h-5 w-5" aria-hidden="true" />,
  },
  {
    value: skillCategories.length,
    label: 'Skill Areas',
    description: 'Frontend, programming, design, data, and tools',
    icon: <Layers3 className="h-5 w-5" aria-hidden="true" />,
  },
  {
    value: experienceData.length,
    label: 'Experience Entries',
    description: 'Leadership, volunteering, and support experience',
    icon: <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />,
  },
];

export const PortfolioHighlights: React.FC = () => (
  <section className="relative overflow-hidden border-y border-slate-800 bg-[#07090e] py-12 sm:py-16" aria-label="Portfolio at a glance">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_55%)]" />
    <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
      {highlights.map((item, index) => (
        <article
          key={item.label}
          className="reveal-on-scroll group rounded-2xl border border-slate-800 bg-[#0f172a]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] sm:p-7"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start justify-between gap-4">
            <p className="bg-gradient-to-r from-sky-100 to-sky-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
              {item.value.toString().padStart(2, '0')}
            </p>
            <span className="rounded-xl border border-sky-400/15 bg-sky-400/10 p-3 text-sky-300">
              {item.icon}
            </span>
          </div>
          <h2 className="mt-3 text-base font-bold tracking-tight text-slate-100">{item.label}</h2>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">{item.description}</p>
        </article>
      ))}
    </div>
  </section>
);
