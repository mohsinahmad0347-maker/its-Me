import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const GitHubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export const LinkedInIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export const FacebookIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-6 h-6", size = 24 }) => {
  const iconLower = name.toLowerCase().replace(/\s+/g, '');

  switch (iconLower) {
    case 'html5':
    case 'html':
      return (
        <svg viewBox="0 0 512 512" width={size} height={size} className={className}>
          <path fill="#E44D26" d="M107.6 460L74.9 92.4h362.2L404.4 460 255.8 501.3z"/>
          <path fill="#F16529" d="M256 468.2l120.4-33.4 27.8-311.6H256z"/>
          <path fill="#EBEBEB" d="M256 221.7h-60.8l-4.2-47.2H256V127H133.5l12.6 141.6H256zM256 352.4l-.5.1-50.8-13.7-3.3-36.4H154l6.4 72 95.6 26.5z"/>
          <path fill="#FFFFFF" d="M255.8 221.7h60.9l-5.7 64.3-55.2 14.9v48l98.8-27.4 13.9-156.4H255.8zM255.8 127v47.5h115.1l4.2-47.5z"/>
        </svg>
      );

    case 'css3':
    case 'css':
      return (
        <svg viewBox="0 0 512 512" width={size} height={size} className={className}>
          <path fill="#264DE4" d="M107.6 460L74.9 92.4h362.2L404.4 460 255.8 501.3z"/>
          <path fill="#2965F1" d="M256 468.2l120.4-33.4 27.8-311.6H256z"/>
          <path fill="#EBEBEB" d="M256 221.7h-60.8l-4.2-47.2H256V127H133.5l12.6 141.6H256zM256 352.4l-.5.1-50.8-13.7-3.3-36.4H154l6.4 72 95.6 26.5z"/>
          <path fill="#FFFFFF" d="M255.8 221.7h60.9l-5.7 64.3-55.2 14.9v48l98.8-27.4 13.9-156.4H255.8zM255.8 127v47.5h115.1l4.2-47.5z"/>
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 630 630" width={size} height={size} className={className}>
          <rect width="630" height="630" fill="#F7DF1E" rx="80"/>
          <path d="M365.4 479.4c13.7 22.3 32.1 36.6 65.6 36.6 27.4 0 45.3-13.7 45.3-32.6 0-22.7-18-30.9-48.4-44.1l-16.7-7.2c-47.7-20.3-79.3-46.1-79.3-100.8 0-49.8 38.2-87.5 98.4-87.5 42.6 0 73.1 15 93.6 51.5l-44.1 28.3c-10.7-19.3-25.3-27.9-49.8-27.9-22.3 0-36.6 13.7-36.6 29.6 0 20.6 14.6 28.8 42.1 40.7l16.7 7.3c56.7 24.5 86.7 49.8 86.7 105.1 0 59.7-46.8 92.7-107.3 92.7-59.7 0-97.9-28.8-115.9-65.7zM187.8 486.2c9.4 16.7 18 30.9 38.6 30.9 20.2 0 33-8.2 33-39.5V248.5h52.8v229.6c0 60.1-35.2 87.5-84.5 87.5-38.2 0-63.5-19.7-74.7-44.1z"/>
        </svg>
      );

    case 'bootstrap':
      return (
        <svg viewBox="0 0 512 512" width={size} height={size} className={className}>
          <rect width="512" height="512" rx="100" fill="#7952B3"/>
          <path fill="#FFFFFF" d="M208.5 125h95.4c48.6 0 75.9 22.1 75.9 59.4 0 26.6-15.3 47.7-39.7 54.7v2c30.4 6.6 48.7 28.4 48.7 58.9 0 42.2-31.9 66-83.3 66h-97V125zm53.4 92.6h37.4c17.5 0 28.2-8.3 28.2-22.6 0-14.8-10.9-22.6-28.7-22.6h-36.9v45.2zm0 100.9h41.4c20.4 0 32.7-9.4 32.7-25.1 0-16.2-12.7-25.6-32.9-25.6h-41.2v50.7z"/>
        </svg>
      );

    case 'tailwind':
    case 'tailwindcss':
      return (
        <svg viewBox="0 0 256 154" width={size} height={size} className={className}>
          <path fill="#38BDF8" d="M128 0C93.9 0 72.5 17.1 64 51.2c12.8-17.1 27.7-23.5 44.8-19.2 9.8 2.4 16.7 9.5 24.5 17.3 12.6 12.8 27.2 27.7 58.7 27.7 34.1 0 55.5-17.1 64-51.2-12.8 17.1-27.7 23.5-44.8 19.2-9.8-2.5-16.7-9.5-24.5-17.3C174.1 34.9 159.5 20 128 0zM64 76.8C29.9 76.8 8.5 93.9 0 128c12.8-17.1 27.7-23.5 44.8-19.2 9.8 2.5 16.7 9.5 24.5 17.3 12.6 12.8 27.2 27.7 58.7 27.7 34.1 0 55.5-17.1 64-51.2-12.8 17.1-27.7 23.5-44.8 19.2-9.8-2.5-16.7-9.5-24.5-17.3C110.1 111.7 95.5 96.8 64 76.8z"/>
        </svg>
      );

    case 'microsoftexcel':
    case 'excel':
    case 'msexcel':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <path fill="#107C41" d="M228 32H84c-6.6 0-12 5.4-12 12v36H40c-6.6 0-12 5.4-12 12v72c0 6.6 5.4 12 12 12h32v36c0 6.6 5.4 12 12 12h144c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12z"/>
          <path fill="#21A366" d="M84 44h144v168H84z"/>
          <path fill="#107C41" d="M128 72h72v24h-72zm0 36h72v24h-72zm0 36h72v24h-72zm0 36h72v24h-72z"/>
          <path fill="#33C481" d="M28 92h80v72H28z" rx="6"/>
          <path fill="#FFFFFF" d="M54 106l14 22-14 22h14l7-13 7 13h14l-14-22 14-22H92l-7 13-7-13H54z"/>
        </svg>
      );

    case 'microsoftpowerbi':
    case 'powerbi':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <rect width="256" height="256" rx="48" fill="#F2C811"/>
          <path fill="#E0A800" d="M60 148h32v68H60zm52-44h32v112h-32zm52-64h32v176h-32z" rx="6"/>
          <path fill="#333333" d="M60 148c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v68H60z"/>
          <path fill="#222222" d="M112 104c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v112h-32z"/>
          <path fill="#111111" d="M164 40c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v176h-32z"/>
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <path fill="#F05032" d="M246.5 115.5l-106-106c-9.5-9.5-25-9.5-34.5 0l-96.5 96.5c-9.5 9.5-9.5 25 0 34.5l106 106c9.5 9.5 25 9.5 34.5 0l96.5-96.5c9.5-9.5 9.5-25 0-34.5z"/>
          <path fill="#FFFFFF" d="M160.7 122.9l-27.1-27.1v-17c6.1-3.6 10.2-10.2 10.2-17.8 0-11.6-9.4-21-21-21s-21 9.4-21 21c0 7.6 4.1 14.2 10.2 17.8v17l-26.6 26.6c-3.6-1.5-7.5-2.4-11.7-2.4-16.3 0-29.5 13.2-29.5 29.5s13.2 29.5 29.5 29.5 29.5-13.2 29.5-29.5c0-4.1-.8-8.1-2.4-11.7l25.8-25.8h.1v56.8c-6.1 3.6-10.2 10.2-10.2 17.8 0 11.6 9.4 21 21 21s21-9.4 21-21c0-7.6-4.1-14.2-10.2-17.8V126l24.4 24.4c-1.5 3.6-2.4 7.5-2.4 11.7 0 16.3 13.2 29.5 29.5 29.5s29.5-13.2 29.5-29.5c0-16.3-13.2-29.5-29.5-29.5-4.2 0-8.1.9-11.7 2.4z"/>
        </svg>
      );

    case 'github':
      return <GitHubIcon size={size} className={className} />;

    case 'vscode':
    case 'visualstudiocode':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <path fill="#0065A9" d="M188.7 254.4l60-28.7c4.5-2.2 7.3-6.8 7.3-11.8V42.1c0-5-2.8-9.6-7.3-11.8l-60-28.7c-4.9-2.3-10.7-1.8-15.1 1.4L64.2 84.8 28.5 57.8c-4.4-3.3-10.4-3.3-14.8 0L2.8 66.2C.9 67.7 0 70 0 72.4s.9 4.7 2.8 6.2l47.6 36.4L2.8 151.4c-1.9 1.5-2.8 3.8-2.8 6.2s.9 4.7 2.8 6.2l10.9 8.4c4.4 3.3 10.4 3.3 14.8 0l35.7-27 109.4 81.8c4.4 3.2 10.2 3.7 15.1 1.4z"/>
          <path fill="#007ACC" d="M196.2 36.4l-114 86.8 114 86.8V36.4z"/>
          <path fill="#1F9CF0" d="M188.7 1.6c4.9-2.3 10.7-1.8 15.1 1.4l52.2 39.1-60.5 45.4-6.8-85.9z"/>
        </svg>
      );

    default:
      return (
        <div className={`flex items-center justify-center rounded-lg bg-white/10 text-white font-bold text-xs ${className}`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
