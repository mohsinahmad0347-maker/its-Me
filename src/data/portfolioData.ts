export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  categoryTag: 'HEALTHCARE' | 'AUTOMOTIVE' | 'CORPORATE' | 'FITNESS' | 'CREATIVE';
  year: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    designConcept: string;
    developmentProcess: string;
    challenges: string;
    outcome: string;
    keyStats: { label: string; value: string }[];
  };
}

export interface TechnologyItem {
  name: string;
  category: 'FRONTEND' | 'DATA & BI' | 'TOOLS';
  level: string;
  description: string;
  color: string;
  badge: string;
  iconName: string;
}

export const PERSONAL_INFO = {
  name: 'MOHSIN AHMAD',
  title: 'Frontend Developer | MS Excel | Microsoft Power BI',
  role: 'Software Engineering Student',
  institution: 'Islamia College Peshawar',
  degree: 'Bachelor of Software Engineering',
  duration: '2025 – 2029',
  gpa: '4.00 / 4.00',
  location: 'Peshawar, Khyber Pakhtunkhwa, Pakistan',
  email: 'mohsinahmad0347@gmail.com',
  phone: '+92 330 5205409',
  photo: '/mohsin-ahmad.jpg',
  cvPdf: '/Mohsin_Ahmad_CV.pdf',
  introduction: `Motivated Software Engineering student at Islamia College Peshawar with a strong academic record and a keen interest in frontend development, data analysis, and business intelligence. Skilled in creating modern web interfaces and working with Microsoft Excel and Power BI for data organization, analysis, and visualization. Seeking opportunities to apply technical knowledge, gain professional experience, and contribute to real-world projects.`,
  tagline: 'Building modern digital experiences and turning data into clear, useful insights.',
};

export const SOCIAL_PROFILES = [
  {
    platform: 'GitHub',
    title: 'Explore my projects and code',
    url: 'https://github.com/mohsinahmad0347-maker',
    handle: '@mohsinahmad0347-maker',
    color: '#F8FAFC',
    accent: '#38BDF8',
  },
  {
    platform: 'LinkedIn',
    title: 'Connect with me professionally',
    url: 'https://www.linkedin.com/in/mohsin-ahmad%C2%AE-92356b403/',
    handle: 'in/mohsin-ahmad®',
    color: '#0A66C2',
    accent: '#60A5FA',
  },
  {
    platform: 'Facebook',
    title: 'Connect with me on Facebook',
    url: 'https://www.facebook.com/profile.php?id=61586514629344',
    handle: 'mohsin-ahmad',
    color: '#1877F2',
    accent: '#93C5FD',
  },
];

export const METRICS = [
  { id: 'projects', value: '05', label: 'TOTAL PROJECTS', desc: 'Production web builds delivered in 2026' },
  { id: 'experiences', value: '05', label: 'MAJOR WEB EXPERIENCES', desc: 'Fully responsive interactive platforms' },
  { id: 'year', value: '2026', label: 'PROJECT YEAR', desc: 'Current active release cycle' },
  { id: 'tech', value: '10+', label: 'TECHNOLOGIES & TOOLS', desc: 'Frontend, Excel & Power BI ecosystem' },
  { id: 'gpa', value: '4.00', label: 'ACADEMIC GPA', desc: 'Islamia College Peshawar (BSE)' },
];

export const ANALYTICS_DATA = {
  donut: [
    { name: 'Frontend Development', value: 45, color: '#7C3AED' },
    { name: 'Data Analysis', value: 25, color: '#38BDF8' },
    { name: 'Business Intelligence', value: 20, color: '#2563EB' },
    { name: 'Development Tools', value: 10, color: '#22C55E' },
  ],
  area: [
    { month: 'Jan 2026', activity: 28, hours: 35 },
    { month: 'Feb 2026', activity: 42, hours: 50 },
    { month: 'Mar 2026', activity: 58, hours: 68 },
    { month: 'Apr 2026', activity: 50, hours: 60 },
    { month: 'May 2026', activity: 72, hours: 82 },
    { month: 'Jun 2026', activity: 88, hours: 96 },
    { month: 'Jul 2026', activity: 95, hours: 105 },
    { month: 'Aug 2026', activity: 112, hours: 120 },
    { month: 'Sep 2026', activity: 128, hours: 135 },
  ],
  bar: [
    { name: 'HTML5', usage: 98, category: 'Frontend' },
    { name: 'CSS3', usage: 95, category: 'Frontend' },
    { name: 'JavaScript', usage: 92, category: 'Frontend' },
    { name: 'Tailwind CSS', usage: 94, category: 'Frontend' },
    { name: 'Bootstrap', usage: 86, category: 'Frontend' },
    { name: 'MS Excel', usage: 92, category: 'Data & BI' },
    { name: 'Power BI', usage: 88, category: 'Data & BI' },
    { name: 'Git', usage: 89, category: 'Tools' },
    { name: 'GitHub', usage: 91, category: 'Tools' },
    { name: 'VS Code', usage: 96, category: 'Tools' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'be-careful',
    number: '01',
    title: 'Be Careful',
    category: 'Healthcare / Clinical Website',
    categoryTag: 'HEALTHCARE',
    year: '2026',
    description: 'Modern clinical and healthcare web interface engineered with high-precision appointment management, vital signs telemetry visualization, and responsive design.',
    image: '/projects/project-be-careful.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Healthcare interface',
      'Responsive design',
      'Interactive navigation',
      'Structured clinical sections',
      'Modern glass UI',
      'Mobile responsive',
    ],
    liveUrl: 'https://be-careful-health.vercel.app',
    githubUrl: 'https://github.com/mohsinahmad/be-careful',
    caseStudy: {
      overview: 'Be Careful is a healthcare web platform created to bridge patient care workflows and clinical data tracking. It introduces high-readability dashboards, patient schedules, and vital sign monitoring in an intuitive interface.',
      problem: 'Traditional healthcare websites are cluttered, slow, and lack responsive visual clarity for patients and clinic staff.',
      solution: 'Designed a high-contrast dark glassmorphism clinical interface that emphasizes appointment tracking, clear medical alerts, and multi-device usability.',
      designConcept: 'Clean clinical aesthetics using calming cyan, deep slate, and emerald accents with smooth glassmorphism cards for maximum readability.',
      developmentProcess: 'Prototyped wireframes, structured semantic HTML5 layouts, implemented responsive CSS flexbox/grid architectures, and added vanilla JavaScript interaction handlers.',
      challenges: 'Balancing complex medical data density with uncluttered layout hierarchy on small mobile screens.',
      outcome: 'A lightweight clinical portal that loads instantly, displays vital patient statistics, and provides seamless scheduling navigation.',
      keyStats: [
        { label: 'Lighthouse Score', value: '99/100' },
        { label: 'Responsive Viewports', value: '100% Fluid' },
        { label: 'Load Time', value: '< 0.8s' },
      ],
    },
  },
  {
    id: 'grand-thief-autos',
    number: '02',
    title: 'Grand Thief Autos',
    category: 'Luxury Car Rental Website',
    categoryTag: 'AUTOMOTIVE',
    year: '2026',
    description: 'High-end exotic supercar rental web experience featuring vehicle category browsing, spec sheets, dynamic pricing tiers, and fleet reservation workflows.',
    image: '/projects/project-grand-thief-autos.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    features: [
      'Vehicle browsing & filtering',
      'Exotic supercar details',
      'Dynamic car categories',
      'Interactive booking section',
      'Fleet showcase carousel',
      'Client FAQ accordion',
      'Responsive mobile design',
    ],
    liveUrl: 'https://grand-thief-autos.vercel.app',
    githubUrl: 'https://github.com/mohsinahmad/grand-thief-autos',
    caseStudy: {
      overview: 'Grand Thief Autos is an exotic automobile rental platform that provides an ultra-premium booking portal for luxury car enthusiasts, corporate travelers, and events.',
      problem: 'Standard car rental portals fail to capture the adrenaline and luxury prestige of high-end supercars like Ferraris and McLarens.',
      solution: 'Crafted a dark metallic glassmorphism experience with neon purple and cyan ambient lighting, specification gauges (horsepower, 0-60mph), and instant booking tiers.',
      designConcept: 'Aerodynamic luxury design language inspired by modern hypercar cockpit displays, carbon fiber textures, and neon showroom lighting.',
      developmentProcess: 'Engineered using Tailwind CSS utility classes, custom CSS backdrop filters, and JavaScript for interactive specification modal views and reservation calculations.',
      challenges: 'Optimizing high-resolution vehicle imagery while keeping page animations smooth across mobile browsers.',
      outcome: 'A sleek automotive digital showroom delivering a 60fps interactive browsing experience across mobile and desktop.',
      keyStats: [
        { label: 'Fleet Categories', value: 'Supercars & SUVs' },
        { label: 'Booking Flow', value: '3 Steps' },
        { label: 'Visual Style', value: 'Cyber Luxury' },
      ],
    },
  },
  {
    id: 'vectoria',
    number: '03',
    title: 'Vectoria',
    category: 'Corporate Business Website',
    categoryTag: 'CORPORATE',
    year: '2026',
    description: 'Corporate business intelligence and enterprise cloud website highlighting enterprise AI solutions, cloud infrastructure metrics, case studies, and pricing models.',
    image: '/projects/project-vectoria.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    features: [
      'Enterprise services catalog',
      'Executive case studies',
      'Pricing tier cards',
      'Market insights & research',
      'Interactive contact section',
      'Technology solutions showcase',
      'AI & Cloud Intelligence metrics',
    ],
    liveUrl: 'https://vectoria-enterprise.vercel.app',
    githubUrl: 'https://github.com/mohsinahmad/vectoria',
    caseStudy: {
      overview: 'Vectoria is a modern corporate web application built for B2B technology consulting, enterprise AI deployments, and cloud transformations.',
      problem: 'Corporate enterprise sites often appear corporate-stiff and fail to communicate technical innovation and cloud agility.',
      solution: 'Developed a sophisticated dark SaaS dashboard presentation with interactive case studies, dynamic SLA metric cards, and responsive pricing tables.',
      designConcept: 'Deep space palette with electric purple and azure gradients, representing reliable enterprise compute and visionary intelligence.',
      developmentProcess: 'Developed with structured Tailwind CSS grids, interactive tabs for case study categories, and accessible accordion FAQ systems.',
      challenges: 'Structuring complex multi-tier enterprise solutions into digestible, engaging web sections.',
      outcome: 'A modern enterprise platform conveying high technological authority, verified SLAs, and intuitive lead conversion.',
      keyStats: [
        { label: 'Reliability SLA', value: '99.999%' },
        { label: 'Interactive Tabs', value: '5 Modules' },
        { label: 'Target Audience', value: 'Enterprise & Startups' },
      ],
    },
  },
  {
    id: 'you-can',
    number: '04',
    title: 'YOU CAN',
    category: 'Fitness / Exercise Website',
    categoryTag: 'FITNESS',
    year: '2026',
    description: 'High-energy fitness and exercise platform showcasing daily training routines, workout goal rings, calorie burn telemetry, and responsive wellness guides.',
    image: '/projects/project-you-can.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    features: [
      'Daily workout routines',
      'Calorie burn charts',
      'Interactive goal rings',
      'Training progress tracking',
      'Community challenges',
      'Responsive experience',
      'Interactive exercise filters',
    ],
    liveUrl: 'https://you-can-fitness.vercel.app',
    githubUrl: 'https://github.com/mohsinahmad/you-can',
    caseStudy: {
      overview: 'YOU CAN is an empowering fitness website designed to inspire athletes and fitness enthusiasts to track workout milestones and maintain training consistency.',
      problem: 'Fitness trackers can be overwhelming and discouraging when interfaces lack motivational feedback and visual progress indicators.',
      solution: 'Implemented an energetic dashboard with circular progress rings, neon lime accents, workout time trackers, and tailored training category selectors.',
      designConcept: 'Vibrant neon lime (#A3E635) and cyan against deep obsidian glass, simulating a high-end athletic smart-watch interface.',
      developmentProcess: 'Built interactive JavaScript metric toggles, SVG circular progress rings, and responsive CSS grid cards for diverse exercise splits.',
      challenges: 'Ensuring animated progress rings and workout timers maintain smooth rendering on lower-power mobile devices.',
      outcome: 'An exhilarating user experience that boosts workout adherence with clean visual feedback and intuitive exercise navigation.',
      keyStats: [
        { label: 'Workout Splits', value: 'HIIT, Strength, Yoga' },
        { label: 'Telemetry', value: 'Real-Time Rings' },
        { label: 'Mobile Score', value: '100% Touch-Optimized' },
      ],
    },
  },
  {
    id: 'razdar',
    number: '05',
    title: 'RAZDAR',
    category: 'Modern Web Experience',
    categoryTag: 'CREATIVE',
    year: '2026',
    description: 'Cutting-edge creative digital agency experience featuring interactive 3D glass cards, fluid layout transitions, typography hierarchy, and portfolio showcases.',
    image: '/projects/project-razdar.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Modern Web UI'],
    features: [
      '3D glassmorphic cards',
      'Fluid portfolio showcase',
      'Modern micro-interactions',
      'Interactive project modal',
      'Dark ambient glow effects',
      'Responsive experience',
      'Award-winning UI concept',
    ],
    liveUrl: 'https://razdar-experience.vercel.app',
    githubUrl: 'https://github.com/mohsinahmad/razdar',
    caseStudy: {
      overview: 'RAZDAR is a forward-looking digital experience exploring the frontiers of web aesthetic minimalism, glass physics, and interactive storytelling.',
      problem: 'Conventional agency portfolios look interchangeable and do not showcase experimental frontend craftsmanship.',
      solution: 'Created an artistic digital gallery with layered glass cards, glowing purple-cyan ambient gradients, and reactive hover tilt mechanics.',
      designConcept: 'Sci-fi minimalism with deep void backgrounds, luminescent brand badges, and hyper-clean editorial typography.',
      developmentProcess: 'Engineered custom CSS perspective transforms, hardware-accelerated transitions, and modular JavaScript state handlers.',
      challenges: 'Creating multi-layered glowing glass cards without introducing render lag or blurry font artifacts.',
      outcome: 'A memorable signature web experience showcasing frontend mastery, fluid layout responsiveness, and aesthetic excellence.',
      keyStats: [
        { label: 'Visual Depth', value: 'Multi-layer Glass' },
        { label: 'Animation Rate', value: '60 FPS' },
        { label: 'Design Tier', value: 'Awwwards Quality' },
      ],
    },
  },
];

export const TECHNOLOGIES: TechnologyItem[] = [
  {
    name: 'HTML5',
    category: 'FRONTEND',
    level: '98%',
    description: 'Semantic markup, accessible web hierarchy, modern HTML5 APIs, and SEO optimization.',
    color: '#E34F26',
    badge: 'Core Frontend',
    iconName: 'html5',
  },
  {
    name: 'CSS3',
    category: 'FRONTEND',
    level: '95%',
    description: 'Modern styling, CSS Grid, Flexbox, glassmorphism, keyframe animations, and custom properties.',
    color: '#1572B6',
    badge: 'Styling Master',
    iconName: 'css3',
  },
  {
    name: 'JavaScript',
    category: 'FRONTEND',
    level: '92%',
    description: 'ES6+ modern syntax, asynchronous programming, DOM manipulation, and interactive web logic.',
    color: '#F7DF1E',
    badge: 'Logic & State',
    iconName: 'javascript',
  },
  {
    name: 'Bootstrap',
    category: 'FRONTEND',
    level: '86%',
    description: 'Rapid responsive prototyping, grid frameworks, utilities, and cross-browser consistency.',
    color: '#7952B3',
    badge: 'Responsive UI',
    iconName: 'bootstrap',
  },
  {
    name: 'Tailwind CSS',
    category: 'FRONTEND',
    level: '94%',
    description: 'Utility-first architecture, dark mode theming, design systems, and responsive layouts.',
    color: '#06B6D4',
    badge: 'Modern Styling',
    iconName: 'tailwind',
  },
  {
    name: 'Microsoft Excel',
    category: 'DATA & BI',
    level: '92%',
    description: 'Advanced data organization, lookup formulas, pivot tables, scenario modeling, and data cleansing.',
    color: '#107C41',
    badge: 'Data Analysis',
    iconName: 'excel',
  },
  {
    name: 'Microsoft Power BI',
    category: 'DATA & BI',
    level: '88%',
    description: 'Business intelligence dashboards, data modeling, DAX expressions, and interactive KPI reporting.',
    color: '#F2C811',
    badge: 'Business Intelligence',
    iconName: 'powerbi',
  },
  {
    name: 'Git',
    category: 'TOOLS',
    level: '89%',
    description: 'Version control, branching strategies, commit workflows, and collaborative code integrity.',
    color: '#F05032',
    badge: 'Version Control',
    iconName: 'git',
  },
  {
    name: 'GitHub',
    category: 'TOOLS',
    level: '91%',
    description: 'Remote repository management, open source contribution, issue tracking, and project showcase.',
    color: '#FFFFFF',
    badge: 'Code Collaboration',
    iconName: 'github',
  },
  {
    name: 'VS Code',
    category: 'TOOLS',
    level: '96%',
    description: 'Primary IDE, extensions setup, debugging workflows, and optimized development environment.',
    color: '#007ACC',
    badge: 'Developer IDE',
    iconName: 'vscode',
  },
];

export const SERVICES = [
  {
    title: 'Frontend Development',
    description: 'Engineering responsive, accessible, and fast-loading web applications using HTML5, CSS3, and JavaScript.',
    tech: 'HTML5, CSS3, JavaScript',
    icon: 'Code2',
  },
  {
    title: 'Responsive Web Design',
    description: 'Crafting fluid layouts that look exceptional across mobile phones, tablets, laptops, and ultra-wide screens.',
    tech: 'Tailwind CSS, CSS Grid, Flexbox',
    icon: 'Smartphone',
  },
  {
    title: 'Modern UI Development',
    description: 'Implementing cutting-edge dark glassmorphism interfaces, smooth micro-interactions, and visual hierarchy.',
    tech: 'Tailwind CSS, Glassmorphism',
    icon: 'Sparkles',
  },
  {
    title: 'Dashboard Development',
    description: 'Building custom analytics dashboards with interactive metric cards, charts, and executive data overviews.',
    tech: 'JavaScript, CSS, Data Visualization',
    icon: 'LayoutDashboard',
  },
  {
    title: 'Data Visualization',
    description: 'Transforming complex datasets into clear, informative visual charts and actionable KPI displays.',
    tech: 'Power BI, Excel Charts',
    icon: 'BarChart3',
  },
  {
    title: 'Microsoft Excel',
    description: 'Structured data organization, automated spreadsheets, formula modeling, and pivot table analysis.',
    tech: 'Advanced Formulas, Pivot Tables',
    icon: 'FileSpreadsheet',
  },
  {
    title: 'Microsoft Power BI',
    description: 'Designing interactive business intelligence reports, DAX calculations, and executive intelligence dashboards.',
    tech: 'Power BI, DAX, Data Modeling',
    icon: 'PieChart',
  },
  {
    title: 'Data Analysis',
    description: 'Analyzing structured datasets to uncover patterns, trends, and operational insights for decision-makers.',
    tech: 'Excel, Power BI, Statistical Analysis',
    icon: 'TrendingUp',
  },
  {
    title: 'Business Intelligence',
    description: 'Consolidating business metrics into unified reporting ecosystems for strategic clarity and tracking.',
    tech: 'Power BI, Dashboarding, KPIs',
    icon: 'Target',
  },
];

export const KEY_STRENGTHS = [
  { title: 'Problem Solving', desc: 'Approaching technical and analytical bottlenecks with structured logical deduction.' },
  { title: 'Fast Learning', desc: 'Rapidly assimilating new frameworks, libraries, and analytics methodologies.' },
  { title: 'Analytical Thinking', desc: 'Deconstructing datasets and system requirements into clean, manageable components.' },
  { title: 'Creativity', desc: 'Designing modern, visually distinct digital interfaces that stand out from conventional templates.' },
  { title: 'Attention to Detail', desc: 'Pixel-perfect CSS implementations, strict spacing consistency, and data precision.' },
  { title: 'Team Collaboration', desc: 'Communicating clearly, sharing code repositories, and supporting group objectives.' },
  { title: 'Self-Learning', desc: 'Proactively exploring advanced web technologies, documentation, and industry best practices.' },
  { title: 'Communication', desc: 'Articulating technical and data concepts clearly to both technical and non-technical audiences.' },
];

export const CAREER_INTERESTS = [
  'Frontend Development',
  'Web Development',
  'Software Engineering',
  'Data Analysis',
  'Business Intelligence',
  'Dashboard Development',
];

export const LANGUAGES = [
  { name: 'English', proficiency: 'Professional', level: 'Professional Working Proficiency' },
  { name: 'Urdu', proficiency: 'Native', level: 'Native / Bilingual' },
  { name: 'Pashto', proficiency: 'Native', level: 'Native / Bilingual' },
];

export const TIMELINE = [
  {
    year: '2025',
    title: 'Bachelor of Software Engineering Commences',
    institution: 'Islamia College Peshawar',
    description: 'Began Bachelor of Software Engineering (BSE) degree program (2025 – 2029), establishing a top-tier academic record with a perfect 4.00 / 4.00 GPA.',
    status: 'Milestone',
  },
  {
    year: '2026',
    title: 'Production Web Projects Developed',
    institution: 'Independent & Academic Portfolio',
    description: 'Engineered five major web experiences: Be Careful (Healthcare), Grand Thief Autos (Luxury Rentals), Vectoria (Corporate), You Can (Fitness), and Razdar (Creative Agency).',
    status: 'Completed',
  },
  {
    year: '2026',
    title: 'Frontend & Business Intelligence Specialization',
    institution: 'Technical Focus',
    description: 'Intensified focus on modern web frontend technologies (HTML5, CSS3, JavaScript, Tailwind CSS) integrated with Microsoft Excel and Power BI data workflows.',
    status: 'Active',
  },
  {
    year: '2029',
    title: 'Expected Bachelor of Software Engineering Graduation',
    institution: 'Islamia College Peshawar',
    description: 'Anticipated completion of Bachelor of Software Engineering with premier technical expertise in software development and analytics.',
    status: 'Future',
  },
];

export const FAQS = [
  {
    q: 'What is Mohsin Ahmad\'s current academic status?',
    a: 'Mohsin Ahmad is currently a Software Engineering student pursuing a Bachelor of Software Engineering (BSE, 2025–2029) at Islamia College Peshawar with an exemplary 4.00 / 4.00 GPA.',
  },
  {
    q: 'What are Mohsin\'s primary core technical skills?',
    a: 'Mohsin specializes in Frontend Web Development (HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap) and Data/Business Intelligence (Microsoft Excel, Microsoft Power BI, Data Analysis, Data Visualization).',
  },
  {
    q: 'What major web projects has Mohsin built in 2026?',
    a: 'Mohsin has built 5 major web platforms in 2026: Be Careful (Healthcare Clinical Website), Grand Thief Autos (Luxury Car Rental), Vectoria (Corporate Business), You Can (Fitness & Exercise), and Razdar (Modern Web Experience).',
  },
  {
    q: 'Can I view and download Mohsin Ahmad\'s CV?',
    a: 'Yes! You can view the complete official CV in the built-in interactive viewer or click Download CV to receive the verified PDF directly.',
  },
];
