import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  User,
  Code2,
  FolderKanban,
  BarChart3,
  Cpu,
  Briefcase,
  GraduationCap,
  GitBranch,
  Sparkles,
  Target,
  FileText,
  Download,
  Share2,
  Mail,
  Settings,
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  onOpenSettings: () => void;
  onOpenCVModal: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  path: string;
  isAction?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { id: 'about', label: 'About', icon: User, path: '/about' },
  { id: 'skills', label: 'Skills', icon: Code2, path: '/technology' },
  { id: 'projects', label: 'Projects', icon: FolderKanban, path: '/projects' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics' },
  { id: 'technology', label: 'Technology', icon: Cpu, path: '/technology' },
  { id: 'services', label: 'Services', icon: Briefcase, path: '/services' },
  { id: 'education', label: 'Education', icon: GraduationCap, path: '/education' },
  { id: 'timeline', label: 'Timeline', icon: GitBranch, path: '/timeline' },
  { id: 'strengths', label: 'Strengths', icon: Sparkles, path: '/strengths' },
  { id: 'career-interests', label: 'Career Interests', icon: Target, path: '/strengths' },
  { id: 'resume', label: 'Resume', icon: FileText, path: '/resume' },
  { id: 'download-cv', label: 'Download CV', icon: Download, path: '/cv', isAction: true },
  { id: 'social-links', label: 'Social Links', icon: Share2, path: '/social' },
  { id: 'contact', label: 'Contact', icon: Mail, path: '/contact' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  setIsCollapsed,
  mobileOpen,
  setMobileOpen,
  onOpenSettings,
  onOpenCVModal,
  isDark,
  toggleTheme,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (item: NavItem) => {
    navigate(item.path);
    if (item.id === 'download-cv') {
      onOpenCVModal();
    }
    if (mobileOpen) setMobileOpen(false);
  };

  const ICON_SIZE = 18;
  const SIDEBAR_WIDTH = 63;

  const getActivePath = () => {
    const pathMap: Record<string, string> = {
      '/': 'dashboard',
      '/about': 'about',
      '/technology': 'skills',
      '/projects': 'projects',
      '/analytics': 'analytics',
      '/services': 'services',
      '/education': 'education',
      '/timeline': 'timeline',
      '/strengths': 'strengths',
      '/resume': 'resume',
      '/cv': 'download-cv',
      '/social': 'social-links',
      '/contact': 'contact',
    };
    return pathMap[location.pathname] || 'dashboard';
  };

  const activeId = getActivePath();

  const renderSidebarContent = (isMobile: boolean) => (
    <>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 63 1000"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', maxWidth: '63px' }}
      >
        <defs>
          <linearGradient id="sg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4C2CDB" />
            <stop offset="35%" stopColor="#5B35F5" />
            <stop offset="65%" stopColor="#4B2FD8" />
            <stop offset="100%" stopColor="#3021B7" />
          </linearGradient>
          <radialGradient id="sr" cx="50%" cy="20%" r="60%">
            <stop offset="0%" stopColor="#5B35F5" stopOpacity="0.40" />
            <stop offset="100%" stopColor="#5B35F5" stopOpacity="0" />
          </radialGradient>
          <clipPath id="sc">
            <path d="M 31.5 0 C 15 0, 5 15, 5 35 C 5 55, 8 65, 8 80 L 8 920 C 8 935, 5 945, 5 965 C 5 985, 15 1000, 31.5 1000 L 31.5 1000 C 48 1000, 58 985, 58 965 C 58 945, 55 935, 55 920 L 55 80 C 55 65, 58 55, 58 35 C 58 15, 48 0, 31.5 0 Z" />
          </clipPath>
        </defs>
        <rect x="0" y="0" width="63" height="1000" fill="url(#sg)" clipPath="url(#sc)" style={{ filter: 'drop-shadow(0 0 18px rgba(83, 61, 255, 0.20))' }} />
        <rect x="0" y="0" width="63" height="1000" fill="url(#sr)" clipPath="url(#sc)" />
        <rect x="0" y="0" width="63" height="1000" fill="rgba(62, 39, 190, 0.78)" clipPath="url(#sc)" style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }} />
        <path d="M 31.5 0 C 15 0, 5 15, 5 35 C 5 55, 8 65, 8 80 L 8 920 C 8 935, 5 945, 5 965 C 5 985, 15 1000, 31.5 1000 L 31.5 1000 C 48 1000, 58 985, 58 965 C 58 945, 55 935, 55 920 L 55 80 C 55 65, 58 55, 58 35 C 58 15, 48 0, 31.5 0 Z" fill="none" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1" />
      </svg>
      <nav className="relative z-10 flex flex-col items-center justify-between h-full pb-4">
        <div className="flex flex-col space-y-[2px] w-full">
          {NAV_ITEMS.filter(item => !item.isAction).map(item => {
            const isActive = activeId === item.id;
            return (
              <div key={item.id} className="relative group">
                <button type="button" onClick={() => handleNavClick(item)} aria-label={item.label} className="relative flex items-center justify-center w-[42px] h-[42px] transition-all duration-180 ease-out" style={{ opacity: isActive ? 1 : 0.7 }}>
                  {isActive && <div className="absolute inset-0 flex items-center justify-center rounded-[11px]" style={{ background: 'rgba(255, 255, 255, 0.10)', border: '1px solid rgba(255, 255, 255, 0.10)', boxShadow: '0 0 10px rgba(255, 255, 255, 0.07)' }} />}
                  <item.icon size={ICON_SIZE} strokeWidth={1.75} style={{ color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.70)', filter: isActive ? 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.25))' : 'none', transition: 'all 180ms ease' }} />
                </button>
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 z-50 px-2.5 py-1 rounded-md bg-popover text-white text-xs border border-white/15 shadow-xl whitespace-nowrap pointer-events-none transition-all duration-200 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" style={{ background: 'rgba(15, 15, 25, 0.95)', boxShadow: '0 8px 25px rgba(0, 0, 0, 0.35)' }}>{item.label}</div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col space-y-[9px] w-full">
          <div className="relative group" onMouseEnter={() => setHoveredItem('settings')} onMouseLeave={() => setHoveredItem(null)}>
            <button type="button" onClick={onOpenSettings} aria-label="Settings" className="relative flex items-center justify-center w-[42px] h-[42px] transition-all duration-180 ease-out">
              <Settings size={ICON_SIZE} strokeWidth={1.75} style={{ color: hoveredItem === 'settings' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.70)', filter: hoveredItem === 'settings' ? 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.25))' : 'none', transition: 'all 180ms ease' }} />
            </button>
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 z-50 px-2.5 py-1 rounded-md bg-popover text-white text-xs border border-white/15 shadow-xl whitespace-nowrap pointer-events-none transition-all duration-200 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" style={{ background: 'rgba(15, 15, 25, 0.95)', boxShadow: '0 8px 25px rgba(0, 0, 0, 0.35)' }}>Settings</div>
          </div>
        </div>
      </nav>
    </>
  );

  return (
    <>
      <motion.aside initial={false} className="hidden md:flex fixed left-[29px] top-[28px] bottom-[28px] z-[9999] flex-col items-center overflow-visible" style={{ width: `${SIDEBAR_WIDTH}px`, height: 'calc(100vh - 56px)', maxHeight: 'calc(100vh - 56px)' }}>
        {renderSidebarContent(false)}
      </motion.aside>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm md:hidden" />
            <motion.aside initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25, stiffness: 280 }} className="fixed left-[29px] top-[28px] bottom-[28px] z-50 w-[63px] max-w-[85vw] md:hidden overflow-visible" style={{ height: 'calc(100vh - 56px)', maxHeight: 'calc(100vh - 56px)' }}>
              {renderSidebarContent(true)}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};