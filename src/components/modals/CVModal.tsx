import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, CheckCircle2, GraduationCap, Mail, Phone, MapPin, Printer } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import confetti from 'canvas-confetti';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    const link = document.createElement('a');
    link.href = PERSONAL_INFO.cvPdf;
    link.download = 'Mohsin_Ahmad_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl -z-10"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-panel/95 border border-white/20 shadow-2xl shadow-purple-950/60 overflow-hidden"
        >
          {/* Header Controls */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  Mohsin Ahmad — Official Curriculum Vitae
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    VERIFIED
                  </span>
                </h3>
                <p className="text-xs text-slate-400">Bachelor of Software Engineering (2025 – 2029) • GPA 4.00</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-sky-500 text-[#FFFFFF] text-xs font-bold shadow-md shadow-purple-600/30 hover:scale-[1.02] transition-transform"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download PDF</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close CV preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Embedded CV View */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-appBg/80 space-y-6 scrollbar-thin">
            {/* CV Paper Card Simulation */}
            <div className="max-w-3xl mx-auto p-6 sm:p-10 rounded-2xl bg-panelAlt border border-white/15 shadow-2xl text-slate-200 space-y-6">
              {/* Paper Header with Photo */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/10 pb-6">
                <div className="space-y-1.5">
                  <h1 className="text-3xl font-extrabold text-white tracking-tight">
                    MOHSIN AHMAD
                  </h1>
                  <div className="text-sky-400 font-bold text-sm sm:text-base">
                    Frontend Developer | MS Excel | Microsoft Power BI
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Software Engineering Student • Islamia College Peshawar
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1 font-mono">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-purple-400" /> mohsinahmad0347@gmail.com
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-sky-400" /> +92 330 5205409
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Peshawar, KP, Pakistan
                    </span>
                  </div>
                </div>

                {/* Profile Photo Thumbnail */}
                <div className="flex-shrink-0 self-start sm:self-center">
                  <img
                    src={PERSONAL_INFO.photo}
                    alt="Mohsin Ahmad"
                    className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-xl border border-sky-400/40 shadow-lg"
                  />
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-purple-400 border-b border-white/10 pb-1">
                  Professional Summary
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{PERSONAL_INFO.introduction}"
                </p>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-purple-400 border-b border-white/10 pb-1">
                  Education
                </h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-bold text-white">
                    <span>Bachelor of Software Engineering (BSE)</span>
                    <span className="font-mono text-sky-400">2025 – 2029</span>
                  </div>
                  <div className="text-slate-400">Islamia College Peshawar, Khyber Pakhtunkhwa, Pakistan</div>
                  <div className="text-emerald-400 font-bold font-mono">Cumulative Academic Standing: GPA 4.00 / 4.00</div>
                </div>
              </div>

              {/* Technical Skills (Strictly Verified, No Python) */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-purple-400 border-b border-white/10 pb-1">
                  Technical Expertise & Core Competencies
                </h4>
                <div className="space-y-1.5 text-xs">
                  <div>
                    <strong className="text-white">Frontend Development: </strong>
                    <span className="text-slate-300">HTML5, CSS3, JavaScript (ES6+), Bootstrap, Tailwind CSS, Responsive Web Design, UI/UX Basics</span>
                  </div>
                  <div>
                    <strong className="text-white">Data & Business Intelligence: </strong>
                    <span className="text-slate-300">Microsoft Excel, Microsoft Power BI, Data Analysis, Data Visualization, Dashboard Development, Data Reporting</span>
                  </div>
                  <div>
                    <strong className="text-white">Developer Tooling: </strong>
                    <span className="text-slate-300">Git, GitHub, Visual Studio Code (VS Code)</span>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-purple-400 border-b border-white/10 pb-1">
                  Production Web Projects (2026)
                </h4>
                <div className="space-y-2.5 text-xs">
                  <div>
                    <div className="font-bold text-white">1. Be Careful — Healthcare & Clinical Web Interface (2026)</div>
                    <div className="text-[11px] text-purple-300 font-mono">HTML, CSS, JavaScript</div>
                    <div className="text-slate-400 text-[11px]">Healthcare portal with vital signs telemetry and scheduling workflows.</div>
                  </div>
                  <div>
                    <div className="font-bold text-white">2. Grand Thief Autos — Luxury Exotic Car Rental Platform (2026)</div>
                    <div className="text-[11px] text-purple-300 font-mono">HTML, CSS, JavaScript, Tailwind CSS</div>
                    <div className="text-slate-400 text-[11px]">Supercar fleet reservation with dark glassmorphism and spec filters.</div>
                  </div>
                  <div>
                    <div className="font-bold text-white">3. Vectoria — Corporate Business & Enterprise Intelligence Website (2026)</div>
                    <div className="text-[11px] text-purple-300 font-mono">HTML, CSS, JavaScript, Tailwind CSS</div>
                    <div className="text-slate-400 text-[11px]">Enterprise cloud and AI solutions portal with interactive case studies and pricing tables.</div>
                  </div>
                  <div>
                    <div className="font-bold text-white">4. YOU CAN — Fitness & Workout Activity Platform (2026)</div>
                    <div className="text-[11px] text-purple-300 font-mono">HTML, CSS, JavaScript, Responsive Design</div>
                    <div className="text-slate-400 text-[11px]">Dynamic fitness tracking dashboard with goal rings and calorie burn charts.</div>
                  </div>
                  <div>
                    <div className="font-bold text-white">5. RAZDAR — Creative Modern Web Experience (2026)</div>
                    <div className="text-[11px] text-purple-300 font-mono">HTML, CSS, JavaScript, Modern Web UI</div>
                    <div className="text-slate-400 text-[11px]">Immersive digital agency portfolio with 3D glass cards and fluid micro-interactions.</div>
                  </div>
                </div>
              </div>

              {/* Languages & Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-4 text-xs">
                <div>
                  <h4 className="text-[11px] font-bold font-mono uppercase tracking-wider text-purple-400 mb-1">Languages</h4>
                  <p className="text-slate-300">English (Professional) • Urdu (Native) • Pashto (Native)</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold font-mono uppercase tracking-wider text-purple-400 mb-1">Key Strengths</h4>
                  <p className="text-slate-300">Problem Solving, Fast Learning, Analytical Thinking, Attention to Detail</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="p-4 border-t border-white/10 bg-appBg/60 flex items-center justify-between">
            <div className="text-xs text-slate-400 font-mono">
              File: <span className="text-sky-400 font-semibold">Mohsin_Ahmad_CV.pdf</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Tab</span>
              </a>
              <button
                type="button"
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-sky-500 text-[#FFFFFF] text-xs font-bold shadow-md shadow-purple-600/30 hover:scale-[1.02] transition-transform"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Verified PDF</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
