import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  LayoutDashboard,
  User,
  Code2,
  FolderKanban,
  BarChart3,
  Cpu,
  GraduationCap,
  Download,
  Mail,
  Sun,
  Moon,
  Sidebar,
  X,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { PROJECTS, TECHNOLOGIES } from '../../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onToggleSidebar: () => void;
  onToggleTheme: () => void;
  onOpenCVModal: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onToggleSidebar,
  onToggleTheme,
  onOpenCVModal,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const baseCommands: CommandItem[] = [
    { id: 'c-dash', title: 'Go to Dashboard Overview', category: 'Navigation', icon: LayoutDashboard, action: () => onNavigate('/') },
    { id: 'c-about', title: 'Go to About Mohsin Ahmad', category: 'Navigation', icon: User, action: () => onNavigate('/about') },
    { id: 'c-skills', title: 'Go to Skills & Arsenal', category: 'Navigation', icon: Code2, action: () => onNavigate('/technology') },
    { id: 'c-projects', title: 'Go to Project Command Center', category: 'Navigation', icon: FolderKanban, action: () => onNavigate('/projects') },
    { id: 'c-analytics', title: 'Go to Portfolio Analytics', category: 'Navigation', icon: BarChart3, action: () => onNavigate('/analytics') },
    { id: 'c-tech', title: 'Go to Technology Ecosystem', category: 'Navigation', icon: Cpu, action: () => onNavigate('/technology') },
    { id: 'c-edu', title: 'Go to Education & Islamia College', category: 'Navigation', icon: GraduationCap, action: () => onNavigate('/education') },
    { id: 'c-resume', title: 'Go to Digital Resume', category: 'Navigation', icon: User, action: () => onNavigate('/resume') },
    { id: 'c-cv', title: 'Download Official CV (PDF)', category: 'Action', icon: Download, action: onOpenCVModal },
    { id: 'c-contact', title: 'Go to Contact Form', category: 'Navigation', icon: Mail, action: () => onNavigate('/contact') },
    { id: 'c-side', title: 'Toggle Floating Sidebar Collapse', category: 'Interface', icon: Sidebar, action: onToggleSidebar },
    { id: 'c-theme', title: 'Toggle Theme (Light / Dark)', category: 'Interface', icon: Sun, action: onToggleTheme },
  ];

  // Dynamic project commands
  const projectCommands: CommandItem[] = PROJECTS.map((p) => ({
    id: `proj-${p.id}`,
    title: `Project: ${p.title} (${p.category})`,
    category: 'Projects',
    icon: FolderKanban,
    action: () => onNavigate('/projects'),
  }));

  // Dynamic technology commands
  const techCommands: CommandItem[] = TECHNOLOGIES.map((t) => ({
    id: `tech-${t.name}`,
    title: `Skill: ${t.name} (${t.category} - ${t.level})`,
    category: 'Technologies',
    icon: Code2,
    action: () => onNavigate('/technology'),
  }));

  const allItems = [...baseCommands, ...projectCommands, ...techCommands];

  const filteredItems = allItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
          onClose();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
        />

        {/* Modal Palette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl rounded-3xl bg-popover/95 border border-white/20 shadow-2xl shadow-purple-950/80 overflow-hidden flex flex-col max-h-[75vh]"
        >
          {/* Search Input Bar */}
          <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-white/[0.02]">
            <Search className="w-5 h-5 text-sky-400" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command, project, or skill (e.g. Projects, Power BI, CV)..."
              className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin">
            {filteredItems.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-400">
                No matching commands or skills found.
              </div>
            ) : (
              filteredItems.map((item, index) => {
                const Icon = item.icon;
                const isSelected = selectedIndex === index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      item.action();
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all text-xs ${
                      isSelected
                        ? 'bg-gradient-to-r from-purple-600/30 to-sky-500/20 text-[#FFFFFF] border border-purple-500/40 shadow-sm'
                        : 'text-slate-300 hover:bg-white/[0.04] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-purple-500/30 text-sky-300' : 'bg-white/5 text-slate-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium truncate">{item.title}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                        {item.category}
                      </span>
                      {isSelected && <ArrowRight className="w-3.5 h-3.5 text-sky-400" />}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Quick Footer Helper */}
          <div className="p-3 border-t border-white/10 bg-appBg/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <div className="flex items-center gap-3">
              <span>↑↓ to navigate</span>
              <span>•</span>
              <span>↵ to select</span>
              <span>•</span>
              <span>esc to dismiss</span>
            </div>
            <span className="text-purple-400 font-semibold">Mohsin Ahmad OS</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
