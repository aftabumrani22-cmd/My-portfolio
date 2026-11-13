import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Palette,
  Database,
  Wrench,
  CheckCircle2,
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import { SectionHeading } from './ui/SectionHeading';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code className="w-4 h-4 text-sky-400" />,
    programming: <Terminal className="w-4 h-4 text-indigo-400" />,
    uiux: <Palette className="w-4 h-4 text-pink-400" />,
    database: <Database className="w-4 h-4 text-emerald-400" />,
    tools: <Wrench className="w-4 h-4 text-amber-400" />,
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-28 relative bg-[#0B0F19] text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="Technical Proficiency"
          title="Skills & Technologies"
          subtitle="A transparent overview of core Computer Science competencies, web frameworks, and engineering tools."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
              }`}
            >
              <span className="hidden sm:inline-block">{categoryIcons[cat.id]}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-2xl bg-[#111726] border border-slate-800 p-6 hover:border-sky-500/40 transition-all duration-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {categoryIcons[cat.id]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1">{cat.description}</p>
                  </div>
                </div>

                {/* Skill List */}
                <ul className="mt-5 space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start justify-between gap-3"
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                        <span className="text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>

                      {skill.note && (
                        <span className="max-w-[48%] whitespace-normal text-right text-[11px] leading-tight font-mono text-slate-400 px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700/60">
                          {skill.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{cat.skills.length} core competencies</span>
                <span className="text-sky-400 font-medium">Demonstrated</span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Proficiency Context Notice */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-400">
            <span className="text-sky-400 font-semibold">Academic & Practical Depth:</span> Skills
            developed through rigorous coursework, project deliverables, and real software implementations.
          </p>
        </div>
      </div>
    </section>
  );
};
