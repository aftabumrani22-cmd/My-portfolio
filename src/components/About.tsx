import React from 'react';
import {
  GraduationCap,
  Layout,
  Code2,
  Users2,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-sky-700" />,
      badgeBg: "bg-sky-50 border-sky-200",
      title: "Computer Science Rigor",
      description:
        "Solid foundations in object-oriented programming (OOP), data structures & algorithms (DSA), and relational database normalization.",
    },
    {
      icon: <Layout className="w-5 h-5 text-indigo-700" />,
      badgeBg: "bg-indigo-50 border-indigo-200",
      title: "UI/UX & Frontend Focus",
      description:
        "Translating wireframes and Figma prototypes into responsive, accessible, production-ready React interfaces that prioritize user experience.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-700" />,
      badgeBg: "bg-emerald-50 border-emerald-200",
      title: "Practical Academic Systems",
      description:
        "Academic work includes a pilgrim guidance concept, inventory database systems, and software prototypes.",
    },
    {
      icon: <Users2 className="w-5 h-5 text-amber-700" />,
      badgeBg: "bg-amber-50 border-amber-200",
      title: "Leadership & Collaboration",
      description:
        "Experienced leading volunteer initiatives at Hope Society Pakistan, organizing university symposiums, and communicating effectively across teams.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 relative bg-[#0f172a] text-slate-100 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="Background & Philosophy"
          title="About Me"
          subtitle="A Computer Science student bridging analytical logic with intuitive, human-centered frontend design."
        />

        <div className="mx-auto max-w-5xl">
          {/* Narrative Story & Key Pillars */}
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight mb-4">
              Bringing software foundations to intuitive interfaces
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a Computer Science student based in Lahore, Pakistan. My journey in
                technology began with foundational programming in C++ and database architectures,
                which instilled in me an appreciation for structured problem solving, algorithmic
                efficiency, and maintainable software design.
              </p>
              <p>
                Building academic systems sparked my interest in combining reliable software logic with
                an intuitive user experience. I focus on{' '}
                <strong className="text-white font-semibold">frontend development</strong> and{' '}
                <strong className="text-white font-semibold">UI design</strong>, using React, JavaScript,
                and modern CSS to create responsive web interfaces.
              </p>
              <p>
                In addition to academic projects, my leadership as Federal Chief Coordinator at Hope Society
                Pakistan helped me build skills in team coordination, clear communication, and taking
                ownership of shared work.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 hover:bg-[#0f172a] hover:border-sky-500/50 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg border ${item.badgeBg}`}>
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-bold text-slate-100 tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


