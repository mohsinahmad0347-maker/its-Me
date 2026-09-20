import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { DashboardOverview } from '../components/sections/DashboardOverview';
import { AnalyticsDashboard } from '../components/sections/AnalyticsDashboard';
import { AboutSection } from '../components/sections/AboutSection';
import { EducationSection } from '../components/sections/EducationSection';
import { TechnologyArsenal } from '../components/sections/TechnologyArsenal';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { StrengthsAndInterests } from '../components/sections/StrengthsAndInterests';
import { TimelineSection } from '../components/sections/TimelineSection';
import { DigitalResume } from '../components/sections/DigitalResume';
import { DownloadCVSection } from '../components/sections/DownloadCVSection';
import { SocialProfiles } from '../components/sections/SocialProfiles';
import { ContactSection } from '../components/sections/ContactSection';

interface CVPageProps {
  onOpenCVModal: () => void;
}

export const DashboardPage: React.FC<CVPageProps> = ({ onOpenCVModal }) => (
  <>
    <Hero onOpenCVModal={onOpenCVModal} />
    <DashboardOverview />
  </>
);

export const AnalyticsPage: React.FC = () => <AnalyticsDashboard />;

export const AboutPage: React.FC = () => <AboutSection />;

export const EducationPage: React.FC = () => <EducationSection />;

export const TechnologyPage: React.FC = () => <TechnologyArsenal />;

export const ProjectsPage: React.FC = () => <ProjectsSection />;

export const ServicesPage: React.FC = () => <ServicesSection />;

export const StrengthsPage: React.FC = () => <StrengthsAndInterests />;

export const TimelinePage: React.FC = () => <TimelineSection />;

export const ResumePage: React.FC<CVPageProps> = ({ onOpenCVModal }) => (
  <DigitalResume onOpenCVModal={onOpenCVModal} />
);

export const DownloadCVPage: React.FC<CVPageProps> = ({ onOpenCVModal }) => (
  <DownloadCVSection onOpenCVModal={onOpenCVModal} />
);

export const SocialPage: React.FC = () => <SocialProfiles />;

export const ContactPage: React.FC = () => <ContactSection />;

export const NotFoundPage: React.FC = () => (
  <section className="flex flex-col items-center justify-center py-24 text-center">
    <div className="text-7xl font-extrabold text-gradient-purple-cyan mb-4">404</div>
    <h2 className="text-xl font-bold text-white mb-2">Page Not Found</h2>
    <p className="text-sm text-slate-400 mb-8 max-w-md">
      This dashboard route does not exist. Head back to the main dashboard to continue exploring the portfolio.
    </p>
    <Link
      to="/"
      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 text-[#FFFFFF] text-sm font-semibold shadow-lg shadow-purple-600/30 hover:scale-105 active:scale-95 transition-transform border border-white/20"
    >
      Back to Dashboard
    </Link>
  </section>
);
