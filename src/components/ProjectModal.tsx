import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  UserCheck,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0C111C] border border-white/[0.12] rounded-3xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 border border-white/[0.08] hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.category === 'web' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/15 text-sky-400 border border-sky-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Project
            </span>
          )}
          <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-slate-800/80 text-slate-300 border border-white/[0.08]">
            {project.category === 'database' ? 'Database & SQL' : 'Web & Systems'}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {project.status}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {project.title}
        </h2>
        <p className="text-sm font-medium text-slate-400 mt-1">{project.subtitle}</p>

        {/* Executive Summary */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-900/60 border border-white/[0.06] text-sm text-slate-300 leading-relaxed">
          {project.summary}
        </div>

        {/* Problem & Solution Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-rose-500/[0.04] border border-rose-500/20">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs uppercase font-mono tracking-wider mb-2">
              <AlertCircle className="w-4 h-4" />
              The Challenge / Problem
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/20">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase font-mono tracking-wider mb-2">
              <CheckCircle className="w-4 h-4" />
              The Engineering Solution
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3">
            Key Implemented Features
          </h3>
          <ul className="grid grid-cols-1 gap-2.5">
            {project.features.map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-white/[0.04] text-xs sm:text-sm text-slate-300"
              >
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* My Role & Contributions */}
        <div className="mt-6 p-4 rounded-2xl bg-indigo-500/[0.05] border border-indigo-500/20">
          <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase font-mono tracking-wider mb-1.5">
            <UserCheck className="w-4 h-4" />
            My Contribution & Role
          </div>
          <p className="text-xs sm:text-sm text-slate-300">{project.role}</p>
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-sky-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links & Actions */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-400 bg-slate-900/60 rounded-xl border border-white/[0.05]">
                Academic Demo / Local Build
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

