import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Navbar } from './components/layout/Navbar';
import { BackgroundCanvas } from './components/layout/BackgroundCanvas';
import { CustomCursor } from './components/layout/CustomCursor';
import { Footer } from './components/sections/Footer';
import { CVModal } from './components/modals/CVModal';
import { CommandPalette } from './components/modals/CommandPalette';
import { NotificationDropdown } from './components/modals/NotificationDropdown';
import { SettingsDrawer } from './components/modals/SettingsDrawer';
import {
  DashboardPage,
  AnalyticsPage,
  AboutPage,
  EducationPage,
  TechnologyPage,
  ProjectsPage,
  ServicesPage,
  StrengthsPage,
  TimelinePage,
  ResumePage,
  DownloadCVPage,
  SocialPage,
  ContactPage,
  NotFoundPage,
} from './pages';

/* Maps each route to the Navbar title key */
const ROUTE_SECTION: Record<string, string> = {
  '/': 'dashboard',
  '/analytics': 'analytics',
  '/about': 'about',
  '/education': 'education',
  '/technology': 'skills',
  '/projects': 'projects',
  '/services': 'services',
  '/strengths': 'strengths',
  '/timeline': 'timeline',
  '/resume': 'resume',
  '/cv': 'download-cv',
  '/social': 'social-links',
  '/contact': 'contact',
};

export const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Active page key (drives Navbar title + breadcrumb)
  const activeSection = ROUTE_SECTION[location.pathname] ?? 'dashboard';

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(() => {
    const saved = localStorage.getItem('sidebar_collapsed');
    return saved ? JSON.parse(saved) : true;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modals & Drawers
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(4);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Preferences
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    // Anything that is not explicitly light/midnight (legacy) falls back to dark
    return saved === 'light' || saved === 'midnight' ? false : true;
  });
  const [customCursorEnabled, setCustomCursorEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem('cursor_enabled');
    return saved ? JSON.parse(saved) : true;
  });
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    const saved = localStorage.getItem('reduced_motion');
    return saved ? JSON.parse(saved) : false;
  });
  const [glassBlurLevel, setGlassBlurLevel] = useState<string>(() => {
    return localStorage.getItem('glass_blur') || '24px';
  });

  // Save preferences
  useEffect(() => {
    localStorage.setItem('sidebar_collapsed', JSON.stringify(isSidebarCollapsed));
  }, [isSidebarCollapsed]);

  useEffect(() => {
    localStorage.setItem('portfolio_theme', isDark ? 'dark' : 'light');
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    root.style.colorScheme = isDark ? 'dark' : 'light';

    // Keep the browser UI chrome (mobile address bar etc.) in sync
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark ? '#080A12' : '#F0F4FA');
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('cursor_enabled', JSON.stringify(customCursorEnabled));
  }, [customCursorEnabled]);

  useEffect(() => {
    localStorage.setItem('reduced_motion', JSON.stringify(reducedMotion));
    document.documentElement.classList.toggle('reduce-motion', reducedMotion);
  }, [reducedMotion]);

  useEffect(() => {
    localStorage.setItem('glass_blur', glassBlurLevel);
    document.documentElement.style.setProperty('--blur-val', glassBlurLevel);
  }, [glassBlurLevel]);

  // Global Keyboard Shortcuts (CTRL + K to open Command Palette, ESC to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
        setCvModalOpen(false);
        setNotificationsOpen(false);
        setSettingsOpen(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="relative min-h-screen bg-appBg text-white selection:bg-purple-600 selection:text-white transition-colors duration-300">
      {/* 1. Custom Glowing Desktop Cursor */}
      <CustomCursor enabled={customCursorEnabled} />

      {/* 2. Futuristic Ambient Background Canvas */}
      <BackgroundCanvas />

      {/* 3. Signature Floating Sidebar (Left) */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        mobileOpen={mobileMenuOpen}
        setMobileOpen={setMobileMenuOpen}
        onOpenSettings={() => setSettingsOpen(true)}
        onOpenCVModal={() => setCvModalOpen(true)}
        isDark={isDark}
        toggleTheme={() => setIsDark(!isDark)}
      />

      {/* 4. Main Content Canvas with Dynamic Left Margin for Floating Sidebar */}
      <div
        className={`min-h-screen flex flex-col transition-all duration-300 ease-in-out py-4 pr-4 sm:pr-6 lg:pr-8 pl-4 sm:pl-6 ${
          isSidebarCollapsed
            ? 'md:pl-[96px]'
            : 'md:pl-[284px]'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col">
          {/* Main Floating Glass Navbar */}
          <Navbar
            activeSection={activeSection}
            onOpenCommandPalette={() => setCommandPaletteOpen(true)}
            onOpenNotifications={() => setNotificationsOpen(true)}
            onOpenCVModal={() => setCvModalOpen(true)}
            onOpenMobileMenu={() => setMobileMenuOpen(true)}
            isDark={isDark}
            toggleTheme={() => setIsDark(!isDark)}
            unreadNotificationsCount={unreadNotifications}
          />

          {/* Multi-Page Routes */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<DashboardPage onOpenCVModal={() => setCvModalOpen(true)} />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/strengths" element={<StrengthsPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/resume" element={<ResumePage onOpenCVModal={() => setCvModalOpen(true)} />} />
              <Route path="/cv" element={<DownloadCVPage onOpenCVModal={() => setCvModalOpen(true)} />} />
              <Route path="/social" element={<SocialPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Signature Glass Footer */}
          <Footer />
        </div>
      </div>

      {/* 5. Modals & Overlays */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
        onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onToggleTheme={() => setIsDark(!isDark)}
        onOpenCVModal={() => setCvModalOpen(true)}
      />

      <NotificationDropdown
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        onClear={() => setUnreadNotifications(0)}
      />

      <SettingsDrawer
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        isDark={isDark}
        toggleTheme={() => setIsDark(!isDark)}
        setTheme={setIsDark}
        isSidebarCollapsed={isSidebarCollapsed}
        toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        customCursorEnabled={customCursorEnabled}
        setCustomCursorEnabled={setCustomCursorEnabled}
        reducedMotion={reducedMotion}
        setReducedMotion={setReducedMotion}
        glassBlurLevel={glassBlurLevel}
        setGlassBlurLevel={setGlassBlurLevel}
      />
    </div>
  );
};

export default App;
