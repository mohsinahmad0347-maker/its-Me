import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ChevronDown, Sparkles, GraduationCap, MapPin, Award, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('summary');

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordionItems = [
    {
      id: 'summary',
      title: 'Professional Introduction & Academic Objectives',
      icon: User,
      content: (
        <div className="space-y-3 text-slate-300 leading-relaxed text-sm">
          <p className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.06] text-white/90 italic font-medium leading-relaxed">
            "{PERSONAL_INFO.introduction}"
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="px-2.5 py-1 rounded-md bg-purple-500/15 text-purple-300 border border-purple-500/25 font-semibold">
              Frontend Focus
            </span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 font-semibold">
              Excel Data Modeling
            </span>
            <span className="px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/25 font-semibold">
              Power BI Dashboards
            </span>
            <span className="px-2.5 py-1 rounded-md bg-sky-500/15 text-sky-300 border border-sky-500/25 font-semibold">
              Software Engineering (BSE)
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'education',
      title: 'Islamia College Peshawar Credentials & Standing',
      icon: GraduationCap,
      content: (
        <div className="space-y-3 text-xs text-slate-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-[10px] text-slate-400 uppercase font-mono">Academic Institution</div>
              <div className="text-white font-bold text-sm mt-0.5">{PERSONAL_INFO.institution}</div>
              <div className="text-slate-400 mt-1">Historic institution of academic distinction</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-[10px] text-slate-400 uppercase font-mono">Degree & Timeline</div>
              <div className="text-white font-bold text-sm mt-0.5">{PERSONAL_INFO.degree}</div>
              <div className="text-sky-400 mt-1 font-mono">Duration: {PERSONAL_INFO.duration}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-[10px] text-slate-400 uppercase font-mono">Cumulative Standing</div>
              <div className="text-emerald-400 font-bold text-base mt-0.5 font-mono">GPA: {PERSONAL_INFO.gpa}</div>
              <div className="text-slate-400 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Perfect 4.00 Record
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-[10px] text-slate-400 uppercase font-mono">Location</div>
              <div className="text-white font-medium mt-0.5">{PERSONAL_INFO.location}</div>
              <div className="text-slate-400 mt-1">Khyber Pakhtunkhwa, Pakistan</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'focus',
      title: 'Core Technical Focus & Discipline',
      icon: Compass,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 space-y-1.5">
            <div className="font-bold text-purple-300 text-sm">Frontend Engineering</div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Writing structured semantic HTML5, modular CSS3 layouts with Tailwind & Grid, and responsive JavaScript interaction handlers.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1.5">
            <div className="font-bold text-emerald-300 text-sm">Microsoft Excel</div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Organizing structured datasets, formulas, pivot tables, data cleansing, and multi-sheet financial and operational reporting.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
            <div className="font-bold text-amber-300 text-sm">Microsoft Power BI</div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Architecting data models, DAX measures, interactive KPI dashboards, and visual business intelligence reports.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="mb-14 scroll-mt-28">
      {/* Section Heading */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-purple-400 mb-1">
          <User className="w-3.5 h-3.5" />
          <span>AUTHENTIC BACKGROUND & IDENTITY</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          About Mohsin Ahmad
        </h2>
        <p className="text-sm text-slate-400">
          Software Engineering student dedicated to frontend interfaces and business intelligence
        </p>
      </div>

      {/* Content Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Medium Official Portrait Card (4 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4"
        >
          <div className="glass-card p-4 space-y-4 border border-white/15 shadow-xl shadow-purple-950/30">
            {/* Medium Portrait */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-sky-400/30 shadow-md group">
              <img
                src={PERSONAL_INFO.photo}
                alt="Mohsin Ahmad - Software Engineering Student"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-appBg/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="font-bold text-base">Mohsin Ahmad</div>
                <div className="text-xs text-sky-400">Software Engineering Student</div>
                <div className="text-[10px] text-slate-400 mt-0.5 font-mono">Islamia College Peshawar</div>
              </div>
            </div>

            {/* Quick Metrics list */}
            <div className="space-y-2 text-xs pt-1 border-t border-white/[0.08]">
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Degree</span>
                <span className="text-white font-medium">B.S. Software Engineering</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Academic Standing</span>
                <span className="text-emerald-400 font-mono font-bold">GPA 4.00 / 4.00</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Duration</span>
                <span className="text-sky-400 font-mono">2025 – 2029</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Location</span>
                <span className="text-white font-medium">Peshawar, Pakistan</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Accordions & Summary (8 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-8 space-y-4"
        >
          {accordionItems.map((item) => {
            const Icon = item.icon;
            const isOpen = openAccordion === item.id;

            return (
              <div
                key={item.id}
                className={`glass-card overflow-hidden transition-all duration-200 border ${
                  isOpen ? 'border-purple-500/40 shadow-lg shadow-purple-950/20' : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl border transition-colors ${
                      isOpen
                        ? 'bg-purple-600/20 border-purple-500/40 text-sky-400'
                        : 'bg-white/[0.04] border-white/[0.08] text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm sm:text-base text-white tracking-tight">
                      {item.title}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-1 rounded-lg bg-white/[0.04] text-slate-400"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-white/[0.06]">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
