import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Download, Menu, Moon, Sun, Sparkles, Command } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenCommandPalette: () => void;
  onOpenNotifications: () => void;
  onOpenCVModal: () => void;
  onOpenMobileMenu: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  unreadNotificationsCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenCommandPalette,
  onOpenNotifications,
  onOpenCVModal,
  onOpenMobileMenu,
  isDark,
  toggleTheme,
  unreadNotificationsCount = 3,
}) => {
  const navigate = useNavigate();

  const getSectionTitle = (id: string) => {
    switch (id) {
      case 'dashboard':
        return 'Executive Overview';
      case 'about':
        return 'About Mohsin Ahmad';
      case 'skills':
        return 'Technical Skills';
      case 'projects':
        return 'Project Command Center';
      case 'analytics':
        return 'Portfolio Analytics';
      case 'technology':
        return 'Technology Arsenal';
      case 'services':
        return 'Specialized Services';
      case 'education':
        return 'Academic Credentials';
      case 'timeline':
        return 'Milestones & Timeline';
      case 'strengths':
        return 'Core Strengths';
      case 'career-interests':
        return 'Career Interests';
      case 'resume':
        return 'Interactive Resume';
      case 'social-links':
        return 'Social Profiles';
      case 'contact':
        return 'Direct Contact';
      default:
        return 'Portfolio Dashboard';
    }
  };

  return (
    <header className="sticky top-4 z-30 mb-8 select-none">
      <div className="glass-panel rounded-2xl px-4 py-3 flex items-center justify-between gap-3 shadow-lg shadow-black/40 border border-white/10 backdrop-blur-xl transition-all">
        {/* LEFT: Mobile Hamburger & Page Title */}
        <div className="flex items-center gap-3">
          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Open mobile navigation"
          >
            <Menu className="w-5 h-5 text-sky-400" />
          </button>

          {/* Breadcrumbs & Active Title */}
          <div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono tracking-wider uppercase">
              <span>MOHSIN AHMAD</span>
              <span className="text-slate-600">/</span>
              <span className="text-sky-400 font-semibold">{activeSection}</span>
            </div>
            <h1 className="text-sm md:text-base font-bold text-white tracking-tight flex items-center gap-2">
              {getSectionTitle(activeSection)}
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-sky-400 shadow-sm shadow-sky-400" />
            </h1>
          </div>
        </div>

        {/* CENTER: Global Search / Command Bar Trigger */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-4">
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-sky-500/40 hover:bg-white/[0.07] text-slate-400 hover:text-white transition-all duration-200 text-xs shadow-inner group"
          >
            <div className="flex items-center gap-2.5">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
              <span>Search projects, skills, commands...</span>
            </div>
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-slate-300 border border-white/10">
              <Command className="w-3 h-3" />
              <span>K</span>
            </div>
          </button>
        </div>

        {/* RIGHT: Actions, Notifications, Theme, Avatar & Download CV */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Quick Search Icon for tablet/mobile */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Open search"
          >
            <Search className="w-4 h-4 text-sky-400" />
          </button>

          {/* Notifications Trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={onOpenNotifications}
              className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-sky-500 text-[9px] font-bold text-[#FFFFFF] shadow-sm shadow-purple-500/50">
                  {unreadNotificationsCount}
                </span>
              )}
            </button>
          </div>

          {/* Theme Toggle (Mobile/Tablet quick switch) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-300" />
            )}
          </button>

          {/* Download CV Action Button */}
          <button
            type="button"
            onClick={onOpenCVModal}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 text-[#FFFFFF] text-xs font-semibold shadow-md shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-95 transition-all duration-200 border border-white/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </button>

          {/* Profile Avatar */}
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              navigate('/about');
            }}
            className="flex items-center gap-2 pl-1 group focus:outline-none"
            title="Mohsin Ahmad Profile"
          >
            <div className="relative">
              <img
                src={PERSONAL_INFO.photo}
                alt="Mohsin Ahmad"
                className="w-9 h-9 rounded-xl object-cover border border-sky-400/40 shadow-sm shadow-sky-500/30 group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-appBg" />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};
