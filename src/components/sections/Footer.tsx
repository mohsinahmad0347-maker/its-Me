import React from 'react';
import { PERSONAL_INFO, SOCIAL_PROFILES, TECHNOLOGIES } from '../../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { TechIcon, GitHubIcon, LinkedInIcon, FacebookIcon } from '../icons/TechIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#dashboard' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Analytics', href: '#analytics' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <GitHubIcon size={16} />;
      case 'LinkedIn':
        return <LinkedInIcon size={16} />;
      case 'Facebook':
        return <FacebookIcon size={16} />;
      default:
        return null;
    }
  };

  return (
    <footer className="mt-16 pt-12 pb-8 border-t border-white/10 glass-panel rounded-t-3xl relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Statement (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-sky-500 flex items-center justify-center font-mono font-extrabold text-[#FFFFFF] text-sm shadow-md">
                MA
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">MOHSIN AHMAD</h3>
                <div className="text-xs text-sky-400 font-semibold">{PERSONAL_INFO.title}</div>
              </div>
            </div>

            <p className="text-xs text-slate-300 italic max-w-sm leading-relaxed">
              "Building digital experiences with code, creativity and data."
            </p>

            <div className="text-[11px] text-slate-400">
              Software Engineering Student • Islamia College Peshawar (2025–2029)
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {SOCIAL_PROFILES.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 hover:border-sky-400/40 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-sky-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-slate-600">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Arsenal Badges (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              Technology Stack
            </div>
            <p className="text-[11px] text-slate-400">
              HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, Excel, Power BI, Git, GitHub, VS Code
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {TECHNOLOGIES.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-slate-300"
                >
                  <TechIcon name={tech.name} size={12} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Mohsin Ahmad. All rights reserved. Peshawar, Khyber Pakhtunkhwa, Pakistan.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/10 text-xs transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
