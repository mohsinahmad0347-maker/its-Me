import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderKanban, ExternalLink, FileText, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { PROJECTS, Project } from '../../data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    'ALL',
    'WEB DEVELOPMENT',
    'DASHBOARDS',
    'HEALTHCARE',
    'FITNESS',
    'AUTOMOTIVE',
    'CORPORATE',
    'CREATIVE',
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'WEB DEVELOPMENT') return true; // all are major web experiences
    if (activeFilter === 'DASHBOARDS') {
      return (
        project.id === 'be-careful' ||
        project.id === 'vectoria' ||
        project.id === 'you-can'
      );
    }
    if (activeFilter === 'HEALTHCARE') return project.categoryTag === 'HEALTHCARE';
    if (activeFilter === 'AUTOMOTIVE') return project.categoryTag === 'AUTOMOTIVE';
    if (activeFilter === 'CORPORATE') return project.categoryTag === 'CORPORATE';
    if (activeFilter === 'FITNESS') return project.categoryTag === 'FITNESS';
    if (activeFilter === 'CREATIVE') return project.categoryTag === 'CREATIVE';
    return true;
  });

  return (
    <section id="projects" className="mb-14 scroll-mt-28">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-sky-400 mb-1">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>FEATURED PRODUCTION EXPERIENCES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Project Command Center
          </h2>
          <p className="text-sm text-slate-400">
            All five major web platforms engineered by Mohsin Ahmad in 2026
          </p>
        </div>

        <div className="text-xs font-mono text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-xl border border-purple-500/20 self-start md:self-auto">
          Showing <span className="font-bold text-white">{filteredProjects.length}</span> of 5 Web Builds
        </div>
      </div>

      {/* FILTER BUTTONS BAR */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-8 overflow-x-auto scrollbar-none">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-purple-600 to-sky-500 text-[#FFFFFF] shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 3-COLUMN / 2-COLUMN / 1-COLUMN RESPONSIVE PROJECT GRID */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="glass-card glass-card-hover group flex flex-col justify-between overflow-hidden border border-white/[0.1] rounded-3xl"
            >
              {/* Project Top: Thumbnail Preview */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-90" />

                  {/* Top Bar Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-xs font-mono font-bold text-[#FFFFFF] border border-white/20">
                      {project.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-purple-600/40 backdrop-blur-md text-[11px] font-mono font-semibold text-purple-200 border border-purple-400/30">
                      {project.year}
                    </span>
                  </div>

                  {/* Category Pill on bottom of image */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-sky-500/20 backdrop-blur-md text-sky-300 text-[10px] font-semibold tracking-wide uppercase border border-sky-400/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white text-xs font-semibold border border-white/[0.1] transition-all group-hover:border-purple-500/40"
                >
                  <FileText className="w-3.5 h-3.5 text-purple-400" />
                  <span>Case Study</span>
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-sky-500 text-[#FFFFFF] text-xs font-bold shadow-sm shadow-purple-600/20 hover:shadow-purple-600/40 transition-all hover:scale-[1.02]"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
