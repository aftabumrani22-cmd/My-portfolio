import React, { useState } from 'react';
import {
  ArrowRight,
  Database,
  Sparkles,
  Code2,
} from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import { projects } from '../data/projects';
import type { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { SectionHeading } from './ui/SectionHeading';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Web & Systems', value: 'web' },
    { label: 'Database & SQL', value: 'database' },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 relative bg-[#0f172a] text-slate-100 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="Featured Engineering"
          title="Featured Projects"
          subtitle="Real-world academic systems and production-grade applications developed with disciplined logic, modern UX, and relational database integrity."
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="inline-flex max-w-full flex-wrap justify-center p-1 rounded-2xl bg-[#0f172a] border border-slate-800 shadow-xs">
            {filters.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-2.5 sm:px-4 py-2 rounded-xl text-[11px] sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedFilter === tab.value
                    ? 'bg-sky-600 text-white font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0f172a] border border-slate-800/90 hover:border-sky-500/50 hover:shadow-lg transition-all duration-300 shadow-xs flex flex-col justify-between overflow-hidden"
            >
              {/* Card Banner */}
              <div className="relative h-44 w-full bg-[#07090e] border-b border-slate-800 p-6 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  {project.category === 'web' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/15 text-sky-300 border border-sky-500/30">
                      <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                      Featured Project
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                      {project.category === 'database' ? 'RDBMS' : 'Software System'}
                    </span>
                  )}

                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-sky-300 group-hover:border-sky-500/50 transition-all shadow-xs">
                    {project.category === 'database' ? (
                      <Database className="w-4 h-4" />
                    ) : (
                      <Code2 className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Subtitle / Type Indicator inside banner */}
                <div className="z-10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    {project.status}
                  </span>
                  <h4 className="text-lg font-bold text-slate-100 tracking-tight line-clamp-1 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h4>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded-lg text-[11px] font-mono bg-[#07090e] text-slate-500 border border-slate-800">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-sky-200 transition-colors cursor-pointer group/btn"
                  >
                    <span>View Architecture & Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 border border-slate-700 transition-colors"
                        title="GitHub Repository"
                        aria-label={`View ${project.title} GitHub repository`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};


