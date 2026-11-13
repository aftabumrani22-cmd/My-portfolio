import React from 'react';
import {
  Compass,
  Layers,
  Code2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { processSteps } from '../data/process';
import { SectionHeading } from './ui/SectionHeading';

export const WorkProcess: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-700">
            <Compass className="w-5 h-5" />
          </div>
        );
      case 1:
        return (
          <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700">
            <Layers className="w-5 h-5" />
          </div>
        );
      case 2:
        return (
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
            <Code2 className="w-5 h-5" />
          </div>
        );
      case 3:
        return (
          <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-700">
            <Compass className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <section id="process" className="py-16 sm:py-24 lg:py-28 relative bg-slate-50/80 text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="light"
          eyebrow="Methodology"
          title="How I Work"
          subtitle="A disciplined, engineering-first four-step framework ensuring every project moves from conceptual requirements to reliable deployment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="relative rounded-2xl bg-white border border-slate-200/90 hover:border-sky-500/50 hover:shadow-md transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group shadow-2xs"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-mono tracking-tighter text-slate-300 group-hover:text-sky-600 transition-colors">
                    {step.number}
                  </span>
                  <div>{getStepIcon(idx)}</div>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-sky-700 font-semibold mt-0.5 mb-4">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Action Items */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {step.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2 text-xs text-slate-600 group-hover:text-slate-800 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step indicator arrow for desktop */}
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-slate-300">
                  <ArrowRight className="w-6 h-6 text-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
