import React from 'react';
import {
  MonitorSmartphone,
  Code2,
  Palette,
  Sparkles,
  RefreshCw,
  Wrench,
  ArrowRight,
  Check,
} from 'lucide-react';
import { servicesData } from '../data/services';
import { SectionHeading } from './ui/SectionHeading';

export const Services: React.FC = () => {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'MonitorSmartphone':
        return <MonitorSmartphone className="w-5 h-5 text-sky-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-pink-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-emerald-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code2 className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-28 relative bg-[#0B0F19] text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="What I Offer"
          title="Services & Capabilities"
          subtitle="Focused frontend engineering and UI/UX design services delivered with transparent timelines and clean code."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-[#111726] border border-slate-800 hover:border-sky-500/40 p-7 shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon header */}
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 transition-all">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-sky-400 mt-1 mb-4">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Concrete Deliverables */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                    Included Deliverables
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquire CTA Button */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 transition-all group/btn"
                >
                  <span>Inquire for Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
