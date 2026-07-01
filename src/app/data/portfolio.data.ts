import {
  ProjectItem,
  ExperienceItem,
  SkillItem,
  EducationItem,
  LanguageSkill,
  PortfolioSection,
} from '../models/chat.models';

export const PROFILE = {
  name: 'Manu Prathap',
  initials: 'M.',
  title: 'Frontend Developer',
  tagline:
    'Frontend Developer with experience building scalable web products for past companies and client projects. Specialised in Angular, TypeScript, UI engineering, and production-ready frontend architecture.',
  typingRoles: [
    'Angular Developer',
    'TypeScript Engineer',
    'Frontend Architect',
    'Open to Opportunities',
  ],
  email: 'manuprathapkarimbil@gmail.com',
  phone: '+91 7025405061',
  location: 'Kerala, India',
  linkedin: 'https://linkedin.com/in/manuuprathaap',
  github: 'https://github.com/manuprathap',
  instagram: 'https://instagram.com/manuuprathaap',
  status: 'Immediate Joiner · Open to opportunities',
  languages: ['English', 'Malayalam', 'Hindi'],
  greeting: 'Hi 👋 I am Manu Prathap.',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ihub24',
    name: 'iHub-24 — Restaurant POS',
    tag: 'Angular 18 · Firebase · SSR · PWA',
    problem:
      'A Kerala-based restaurant chain needed a single POS that could run as a PWA on low-end tablets, push orders to the kitchen in real time, and split workflows by role (cashier / kitchen / admin) without server-side complexity.',
    build:
      'Sole-built the entire system — requirements, architecture, UI/UX, and release. Used Angular 18 with SSR + PWA, Firebase Firestore real-time listeners for live order streams, role-based dashboards, and Firebase Hosting for deployment.',
    result:
      'Production-deployed POS with zero-refresh order updates flowing to the kitchen. Cut order-to-kitchen latency to sub-second and replaced three separate paper-based workflows with one app.',
    github: '',
    live: '',
    image: '',
  },
  {
    id: 'tripxoxo',
    name: 'TRIPXOXO — Travel Platform',
    tag: 'Angular 16 · RxJS · REST · Jira',
    problem:
      'A travel product team needed a flexible booking platform where internal teams could compose custom intake forms per trip — no engineering round-trip every time a new campaign launched.',
    build:
      'Built a dynamic drag-and-drop form builder with custom reusable pipes and directives. Wired REST APIs through HttpClient interceptors for auth + centralised error handling, and ran the work in two-week Jira sprints with AI-assisted planning.',
    result:
      'Internal teams could ship new campaign forms in hours instead of days. Cut API error tickets by ~40% thanks to the centralised interceptor layer.',
    github: '',
    live: '',
    image: '',
  },
  {
    id: 'bookotrip',
    name: 'BookOTrip — Travel Booking',
    tag: 'Angular 16 · MySQL · REST',
    problem:
      'A growing OTA wanted a single platform for both domestic and international flight + hotel booking, with a responsive UI that worked across devices.',
    build:
      'Built admin and customer modules end-to-end with reactive state management, REST API integration, and a fully responsive UI. Co-ordinated with backend on schema and auth.',
    result:
      'Unified two legacy booking portals into one. Reduced time-to-book on mobile by ~30% based on UX testing.',
    github: '',
    live: '',
    image: '',
  },
  {
    id: 'stamppassport',
    name: 'Stamp the Passport — Visa Portal',
    tag: 'Angular 16 · Signzy API · Reactive Forms',
    problem:
      'A visa services company was processing applications manually — every country needed a different questionnaire, and passport verification was a slow back-and-forth with the verification provider.',
    build:
      'Designed dynamic country-specific visa questionnaires with document upload workflows, plus an admin portal. Integrated Signzy APIs for real-time passport verification, and built client- and server-side validation throughout.',
    result:
      'Cut manual review effort by roughly 60% — applications now self-validate and verification status flows back into the UI in real time.',
    github: '',
    live: '',
    image: '',
  },
  {
    id: 'geoperform',
    name: 'GeoPerform — Vessel Performance',
    tag: 'Angular 15 · RBAC',
    problem:
      'A maritime ops team needed role-based access to vessel performance data, with admins managing both data and user permissions.',
    build:
      'Developed admin and RBAC modules for vessel performance monitoring, including user management and granular permission controls.',
    result:
      'Single dashboard for fleet managers and admins. Replaced a spreadsheet-based reporting process with a live, auditable view.',
    github: '',
    live: '',
    image: '',
  },
  {
    id: 'pos-webapp',
    name: 'POS Web App',
    tag: 'React.js · REST',
    problem:
      'Small retailers needed a responsive POS that pulled real-time product, sales, and inventory data without a desktop install.',
    build:
      'Built a responsive React interface with REST API integration for live product, sales, and inventory updates.',
    result:
      'Shipped as a deployable web app — works on any browser, gives small retailers live stock visibility they didn\'t have before.',
    github: '',
    live: '',
    image: '',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'ElkanIO Research Labs',
    role: 'Angular Developer',
    period: 'Dec 2023 – Dec 2025',
    location: 'Kochi, India',
    highlights: [
      'Shipped high-performance Angular SPAs with SSR + PWA — measurably improved SEO, caching, and cross-platform performance.',
      'Integrated REST APIs via HttpClient interceptors for token-based auth, centralised error handling, and request/response management.',
      'Optimised apps using lazy loading, OnPush change detection, modular architecture, and RxJS best practices — cut load times across production apps.',
      'Delivered scalable state management with NgRx and established reusable component patterns across projects.',
      'Mentored junior developers on Angular best practices and ran code reviews.',
    ],
  },
  {
    company: 'Exouzia',
    role: 'Frontend Developer',
    period: 'Jan 2023 – Dec 2023',
    location: 'India',
    highlights: [
      'Built UI components and features in Angular, TypeScript, and JS with a focus on UX, scalability, and reuse.',
      'Integrated RESTful APIs and third-party plugins to improve inter-app communication.',
      'Maintained clean, performant code with consistent coding standards.',
    ],
  },
];

export const SKILLS: SkillItem[] = [
  { name: 'Angular', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'JavaScript ES6+', category: 'Frontend' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'HTML5 / CSS3 / SASS', category: 'Frontend' },
  { name: 'RxJS', category: 'State' },
  { name: 'NgRx', category: 'State' },
  { name: 'Signals (Angular 16+)', category: 'State' },
  { name: 'BehaviorSubject / Observables', category: 'State' },
  { name: 'Angular Material', category: 'UI' },
  { name: 'PrimeNG', category: 'UI' },
  { name: 'Bootstrap', category: 'UI' },
  { name: 'Chart.js', category: 'UI' },
  { name: 'Three.js', category: 'UI' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Python / Django', category: 'Backend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Firebase Firestore', category: 'Database' },
  { name: 'Firebase Auth', category: 'Cloud' },
  { name: 'Firebase Hosting', category: 'Cloud' },
  { name: 'AWS (EC2, S3)', category: 'Cloud' },
  { name: 'Docker (basic)', category: 'Cloud' },
  { name: 'CI/CD', category: 'Cloud' },
  { name: 'Git / GitHub', category: 'Tooling' },
  { name: 'Jasmine / Karma', category: 'Tooling' },
  { name: 'Jira / Agile', category: 'Tooling' },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech — Computer Science Engineering',
    institution: 'APJ Abdul Kalam Technological University · Royal College of Engineering and Technology, Kerala',
    period: 'Jul 2019 – May 2022',
    description:
      'Computer Science foundation covering algorithms, data structures, OS, DBMS, and software engineering. Final-year project work in web technologies.',
  },
  {
    degree: 'Diploma — Computer Engineering',
    institution: 'Directorate of Technical Education, Kerala · Govt. Polytechnic College Kunnamkulam',
    period: 'Jul 2016 – Apr 2019',
    description:
      'Diploma in Computer Engineering — programming fundamentals, networking, and applied projects.',
  },
];

export const CERTIFICATIONS = [
  {
    name: 'Generative AI & Agentic AI',
    issuer: '2026 – Present (In Progress)',
    description:
      'LLM fundamentals, prompt engineering, RAG pipelines, and building AI agents — applied to frontend integration and AI-powered web experiences.',
  },
];

export const LANGUAGES: LanguageSkill[] = [
  { name: 'English', level: 90 },
  { name: 'Malayalam', level: 100 },
  { name: 'Hindi', level: 70 },
  { name: 'Tamil', level: 50 },
];

export const SECTIONS: PortfolioSection[] = [
  { key: 'hello', keywords: ['hello', 'hi', 'hey', 'name'], title: 'Hello', render: 'hello' },
  { key: 'about', keywords: ['about', 'about you', 'who'], title: 'About', render: 'about' },
  { key: 'projects', keywords: ['project', 'projects', 'work', 'portfolio'], title: 'Projects', render: 'projects' },
  { key: 'experience', keywords: ['experience', 'job', 'work history'], title: 'Experience', render: 'experience' },
  { key: 'skills', keywords: ['skill', 'skills', 'tech', 'stack'], title: 'Skills', render: 'skills' },
  { key: 'education', keywords: ['education', 'degree', 'college', 'university'], title: 'Education', render: 'education' },
  { key: 'communication', keywords: ['communication', 'language', 'languages'], title: 'Languages', render: 'communication' },
  { key: 'contact', keywords: ['contact', 'reach', 'email', 'hire'], title: 'Contact', render: 'contact' },
  { key: 'resume', keywords: ['resume', 'cv'], title: 'Resume', render: 'resume' },
];

export const SUGGESTED_QUERIES = [
  'About',
  'Projects',
  'Experience',
  'Skills',
  'Education',
  'Contact',
  'Resume',
];
