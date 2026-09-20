import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  User,
  GraduationCap,
  Code2,
  FolderKanban,
  Languages as LangIcon,
  Sparkles,
  Target,
  Download,
  ExternalLink,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, TECHNOLOGIES, KEY_STRENGTHS, CAREER_INTERESTS, LANGUAGES } from '../../data/portfolioData';
import { TechIcon } from '../icons/TechIcons';

interface DigitalResumeProps {
  onOpenCVModal: () => void;
}

export const DigitalResume: React.FC<DigitalResumeProps> = ({ onOpenCVModal }) => {
  const [activeTab, setActiveTab] = useState<string>('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'languages', label: 'Languages', icon: LangIcon },
    { id: 'strengths', label: 'Strengths', icon: Sparkles },
    { id: 'career-interests', label: 'Career Interests', icon: Target },
  ];

  return (
    <section id="resume" className="mb-14 scroll-mt-28">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-sky-400 mb-1">
            <FileText className="w-3.5 h-3.5" />
            <span>INTERACTIVE EXECUTIVE DOSSIER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Digital Resume
          </h2>
          <p className="text-sm text-slate-400">
            Real-time digital credentials dossier of Mohsin Ahmad
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenCVModal}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-sky-500 text-[#FFFFFF] text-xs font-bold shadow-md shadow-purple-600/30 hover:scale-[1.02] transition-transform self-start sm:self-center"
        >
          <Download className="w-3.5 h-3.5" />
          <span>View Official PDF</span>
        </button>
      </div>

      {/* Main Resume Card with Tabs */}
      <div className="glass-card border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
        {/* Tab Headers Navigation */}
        <div className="flex items-center gap-1.5 p-2.5 bg-white/[0.02] border-b border-white/[0.08] overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap relative ${
                  isActive
                    ? 'text-white bg-white/[0.08] shadow-sm border border-purple-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeResumeTab"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-purple-500 to-sky-400 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Area */}
        <div className="p-6 sm:p-8 min-h-[320px]">
          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={PERSONAL_INFO.photo}
                      alt="Mohsin Ahmad"
                      className="w-16 h-16 rounded-2xl object-cover border border-purple-400/40 shadow-md"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                      <div className="text-xs font-semibold text-sky-400">{PERSONAL_INFO.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{PERSONAL_INFO.location}</div>
                    </div>
                  </div>
                  <div className="text-right sm:self-center">
                    <span className="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
                      GPA {PERSONAL_INFO.gpa}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{PERSONAL_INFO.introduction}"
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Email</div>
                    <div className="text-white font-medium mt-0.5 truncate">{PERSONAL_INFO.email}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Phone</div>
                    <div className="text-white font-medium mt-0.5 font-mono">{PERSONAL_INFO.phone}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Academic Status</div>
                    <div className="text-emerald-400 font-medium mt-0.5">{PERSONAL_INFO.role}</div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.degree}</h3>
                    <span className="font-mono text-xs text-sky-400 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
                      {PERSONAL_INFO.duration}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-purple-300">{PERSONAL_INFO.institution}</div>
                  <div className="text-xs text-slate-400">{PERSONAL_INFO.location}</div>
                  <div className="pt-2 border-t border-white/[0.06] flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-400 font-mono">
                      Academic Standing: Cumulative GPA {PERSONAL_INFO.gpa} (Perfect Record)
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {TECHNOLOGIES.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                    >
                      <div className="flex items-center gap-2.5">
                        <TechIcon name={tech.name} size={20} />
                        <div>
                          <div className="text-xs font-bold text-white">{tech.name}</div>
                          <div className="text-[10px] text-slate-400">{tech.category}</div>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-sky-400">{tech.level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {PROJECTS.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-xs text-purple-400">{p.number}</span>
                        <h4 className="font-bold text-sm text-white">{p.title}</h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                          {p.year}
                        </span>
                      </div>
                      <div className="text-xs text-sky-400 mt-0.5">{p.category}</div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">{p.description}</p>
                    </div>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start sm:self-center flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-300 text-xs font-semibold hover:bg-sky-500/30 transition-colors"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'languages' && (
              <motion.div
                key="languages"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-sm font-bold text-white">{lang.name}</div>
                    <div className="text-xs text-sky-400 mt-0.5">{lang.proficiency}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{lang.level}</div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'strengths' && (
              <motion.div
                key="strengths"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
              >
                {KEY_STRENGTHS.map((s) => (
                  <div key={s.title} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-xs font-bold text-white">{s.title}</div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'career-interests' && (
              <motion.div
                key="career-interests"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
              >
                {CAREER_INTERESTS.map((interest) => (
                  <div
                    key={interest}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-xs font-semibold text-white">{interest}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
