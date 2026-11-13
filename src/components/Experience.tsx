import React, { useState } from 'react';
import {
  Briefcase,
  HeartHandshake,
  Calendar,
  MapPin,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { experienceData } from '../data/experience';
import type { ExperienceType } from '../types';
import { SectionHeading } from './ui/SectionHeading';

export const Experience: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');

  const typeDetails: Record<
    ExperienceType,
    { label: string; badgeClass: string; icon: React.ReactNode }
  > = {
    leadership: {
      label: 'Leadership & Governance',
      badgeClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      icon: <ShieldCheck className="w-4 h-4 text-indigo-400" />,
    },
    volunteer: {
      label: 'Community Volunteering',
      badgeClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      icon: <HeartHandshake className="w-4 h-4 text-emerald-400" />,
    },
    employment: {
      label: 'Employment Experience',
      badgeClass: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
      icon: <Briefcase className="w-4 h-4 text-sky-400" />,
    },
  };

  const filteredExperience =
    filterType === 'all'
      ? experienceData
      : experienceData.filter((item) => item.type === filterType);

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-28 relative bg-[#0B0F19] text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="Career & Community"
          title="Experience & Leadership"
          subtitle="A clear, honest record distinguishing leadership coordination, voluntary social initiatives, and technical roles."
        />

        {/* Filter Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              filterType === 'all'
                ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
            }`}
          >
            All Roles ({experienceData.length})
          </button>
          <button
            onClick={() => setFilterType('leadership')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              filterType === 'leadership'
                ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
            }`}
          >
            Leadership
          </button>
          <button
            onClick={() => setFilterType('volunteer')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              filterType === 'volunteer'
                ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
            }`}
          >
            Volunteering
          </button>
          <button
            onClick={() => setFilterType('employment')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              filterType === 'employment'
                ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
            }`}
          >
            Employment
          </button>
        </div>

        {/* Timeline Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center/Side Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-0.5 bg-slate-800" />

          <div className="space-y-8 sm:space-y-12">
            {filteredExperience.map((exp) => (
              <div key={exp.id} className="relative pl-12 sm:pl-20 group">
                {/* Timeline Node Bullet */}
                <div className="absolute left-2 sm:left-6 -translate-x-1/2 top-1.5 w-5 h-5 rounded-full bg-[#0B0F19] border-2 border-sky-400 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                </div>

                {/* Card Container */}
                <div className="rounded-2xl bg-[#111726] border border-slate-800 hover:border-sky-500/40 p-4 sm:p-7 shadow-sm transition-all duration-200">
                  {/* Top Meta Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${typeDetails[exp.type].badgeClass}`}
                      >
                        {typeDetails[exp.type].icon}
                        <span>{typeDetails[exp.type].label}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="hidden sm:flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm font-semibold text-sky-400 mt-0.5">
                    {exp.organization}
                  </h4>

                  {/* Summary */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-5">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Key Responsibilities & Deliverables
                    </span>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-sky-400/80 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Gained Footer */}
                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400 mr-1">
                      Strengths Demonstrated:
                    </span>
                    {exp.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-900/80 text-slate-300 border border-white/[0.05]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
