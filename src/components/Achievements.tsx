import React from 'react';
import {
  Trophy,
  Award,
  Medal,
  FileCheck,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { achievementsData } from '../data/achievements';
import { SectionHeading } from './ui/SectionHeading';

export const Achievements: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'award':
        return (
          <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700">
            <Trophy className="w-5 h-5" />
          </div>
        );
      case 'recognition':
        return (
          <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-700">
            <Award className="w-5 h-5" />
          </div>
        );
      case 'competition':
        return (
          <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700">
            <Medal className="w-5 h-5" />
          </div>
        );
      case 'certification':
        return (
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
            <FileCheck className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-800 text-slate-300">
            <Sparkles className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <section id="achievements" className="py-16 sm:py-24 lg:py-28 relative bg-[#0f172a] text-slate-100 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="Honors & Recognition"
          title="Achievements & Certificates"
          subtitle="A verified record of collegiate recognitions, symposium coordinating honors, and certified engineering accomplishments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-[#07090e]/70 border border-slate-800 hover:border-sky-500/50 hover:bg-[#0f172a] hover:shadow-md transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div>{getCategoryIcon(item.category)}</div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#0f172a] text-slate-300 border border-slate-800 shadow-2xs">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-100 tracking-tight group-hover:text-sky-700 transition-colors">
                  {item.title}
                </h3>

                {/* Organization & Context */}
                <div className="mt-1.5 flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-slate-300">
                    {item.organization}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {item.eventOrContext}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Footer status / verified tag */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Record
                </span>
                <span className="text-slate-400">{item.recognition}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <p>
            Official certificates and commendation documents are available for inspection upon recruiter request.
          </p>
        </div>
      </div>
    </section>
  );
};

