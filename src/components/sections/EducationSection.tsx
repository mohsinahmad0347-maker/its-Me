import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, BookOpen, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="mb-14 scroll-mt-28">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-sky-400 mb-1">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>ACADEMIC FOUNDATION & EXCELLENCE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Education & Academic Standing
        </h2>
        <p className="text-sm text-slate-400">
          Formal software engineering degree program at Islamia College Peshawar
        </p>
      </div>

      {/* Main Education Featured Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-6 sm:p-8 border border-white/15 relative overflow-hidden"
      >
        {/* Subtle Background Glow Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Institution & Degree (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs font-semibold">
                Bachelor's Degree
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-mono font-semibold flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {PERSONAL_INFO.duration}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                GPA {PERSONAL_INFO.gpa}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.degree}
              </h3>
              <div className="text-lg font-semibold text-gradient-purple-cyan mt-1">
                {PERSONAL_INFO.institution}
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pt-1">
              Enrolled in an intensive Software Engineering curriculum emphasizing algorithmic problem solving, software design principles, database architecture, and modern application development. Maintained a flawless 4.00 / 4.00 academic record while independently architecting multiple production web interfaces and data intelligence dashboards.
            </p>

            {/* Academic Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-white">Perfect Academic Record</div>
                  <div className="text-[11px] text-slate-400">4.00 / 4.00 cumulative GPA standing</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <BookOpen className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-white">Software Engineering Rigor</div>
                  <div className="text-[11px] text-slate-400">Foundational & applied computing paradigms</div>
                </div>
              </div>
            </div>
          </div>

          {/* GPA & Standing Highlight Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-purple-950/40 via-panelAlt to-sky-950/30 border border-white/10 text-center shadow-lg">
            <div className="p-3 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-400 mb-3">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-xs uppercase font-mono tracking-widest text-slate-400">Academic Standing</div>
            <div className="text-4xl sm:text-5xl font-extrabold font-mono text-gradient-purple-cyan my-1">
              4.00
            </div>
            <div className="text-xs font-bold text-emerald-400 font-mono">
              MAXIMUM POSSIBLE: 4.00
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 mt-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-purple-500 via-sky-400 to-emerald-400 rounded-full" />
            </div>
            <div className="text-[10px] text-slate-400 mt-2 font-mono">
              Islamia College Peshawar (2025–2029)
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
