import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="bg-[#05080F] border-t border-slate-800 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#hero" className="flex items-center gap-3 group mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-slate-950 font-bold text-xs shadow-sm">
                <Terminal className="w-4 h-4 text-slate-950" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors">
                {siteConfig.name}
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Computer Science student and frontend developer based in Lahore, Pakistan.
              Focused on engineering production-ready web applications and intuitive interfaces.
            </p>

            <div className="flex items-center gap-3">
              {siteConfig.socials.github && <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.06] text-slate-400 hover:text-white hover:border-sky-500/30 transition-all"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>}

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.06] text-slate-400 hover:text-white hover:border-sky-500/30 transition-all"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-sky-400 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top & Specs */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-white/[0.08] transition-all cursor-pointer group"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-sky-400" />
            </button>

            <div className="text-left md:text-right mt-6 md:mt-0 text-[11px] font-mono text-slate-400 space-y-1">
              <p>Designed with Care</p>
              <p className="text-slate-300">React / TypeScript / Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            {siteConfig.name}
          </p>

          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Crafted in Lahore, Pakistan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

