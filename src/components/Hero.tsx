import React from 'react';
import {
  ArrowDown,
  Download,
  MapPin,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import { LinkedinIcon } from './icons/SocialIcons';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  const techStackBadges = [
    { name: 'C++', category: 'Core CS' },
    { name: 'Python', category: 'Core CS' },
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'MySQL', category: 'Database' },
    { name: 'OOP & DSA', category: 'CS Theory' },
    { name: 'Figma', category: 'UI/UX' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A0E17]"
    >
      {/* Subtle CS Engineer Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          {/* Left Column: Technical Headline & Verified Actions */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left">
            {/* Professional Status Pill */}
            {siteConfig.availability.isAvailable && (
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>{siteConfig.availability.badgeText}</span>
              </div>
            )}

            {/* Role & Location Meta */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              <span className="text-sky-400 font-semibold">{siteConfig.education.degree}</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {siteConfig.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl min-[380px]:text-[2.7rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] sm:leading-[1.12] mb-5 sm:mb-6">
              Engineering Clean,<br className="hidden sm:block" />{' '}
              <span className="text-sky-400">
                Intuitive Web Applications.
              </span>
            </h1>

            {/* Supporting Intro tailored for CS recruiters & clients */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              Computer Science student focused on frontend development, responsive interfaces, and practical software projects. I enjoy turning complex requirements into clear, user-friendly experiences.
            </p>

            {/* Action Buttons with direct LinkedIn access */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-white bg-[#0A66C2] hover:bg-[#08539e] transition-all duration-200 shadow-sm cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={siteConfig.cvPath}
                download="Aftab-Ali-CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 transition-all duration-200 cursor-pointer"
                title="Download Aftab Ali's Curriculum Vitae"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Tech Stack Pills */}
            <div className="pt-6 border-t border-white/[0.08] w-full">
              <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Core Competencies & Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {techStackBadges.map((tech) => (
                  <span
                    key={tech.name}
                    className="text-xs px-2.5 py-1 rounded-lg border border-slate-700/80 bg-slate-900/80 text-slate-200 font-mono flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Developer Portrait Visual */}
          <div className="order-1 lg:order-2 lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Portrait Card */}
              <div className="relative rounded-2xl bg-[#111726] border border-slate-800 p-4 shadow-xl overflow-hidden group">
                {/* Image Container with 3:4 portrait ratio */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full max-h-[460px] sm:max-h-none rounded-xl overflow-hidden bg-[#070A11] border border-slate-800">
                  <img
                    src={siteConfig.profileImage}
                    alt={siteConfig.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-102"
                    loading="eager"
                  />

                  {/* Gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/20 to-transparent pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 shadow">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      <span>Lahore</span>
                    </div>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {siteConfig.name}
                        </h3>
                        <p className="text-xs text-sky-400 font-mono">
                          {siteConfig.shortRole}
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-xs">
                        BSCS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="mt-3 px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2 min-w-0">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span className="truncate">{siteConfig.education.status}</span>
                  </div>
                  <span className="text-emerald-400 font-medium">Open to Offers</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

