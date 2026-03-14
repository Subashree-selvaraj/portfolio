export const skills = [
  {
    icon: 'Code',
    category: 'Languages',
    pills: ['JavaScript', 'Java'],
  },
  {
    icon: 'Server',
    category: 'Backend',
    pills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'JWT Authentication', 'Redis'],
  },
  {
    icon: 'Database',
    category: 'Databases',
    pills: ['MongoDB', 'Redis', 'SQL', 'Aggregation Pipelines'],
  },
  {
    icon: 'Cpu',
    category: 'AI Systems',
    pills: ['LangChain', 'Multi-LLM Integration', 'Conversational AI', 'LLM Application Development'],
  },
  {
    icon: 'Wrench',
    category: 'DevOps',
    pills: ['Docker', 'Git / GitHub', 'CI/CD (GitHub Actions)'],
  },
  {
    icon: 'Layout',
    category: 'UI',
    pills: ['React', 'HTML', 'CSS'],
  },
]

export const experience = [
  {
    company: 'Isaii',
    role: 'MERN Stack Developer Intern',
    date: 'Jun 2025 – Aug 2025',
    points: [
      <>Built admin dashboard with React.js, <strong>cutting manual processing time by 35%</strong>.</>,
      <>Implemented backend API data masking, <strong>reducing sensitive data exposure by 40%</strong>.</>,
      <>Introduced Redis caching — API response time dropped from <strong>480ms → 180ms</strong>.</>,
      <>Supported deployment pipeline handling <strong>10,000+ monthly transactions</strong>.</>,
    ],
  },
  {
    company: 'GirlScript Summer of Code',
    role: 'Open Source Contributor — Top 1.2% Globally',
    date: 'Feb 2025 – Mar 2025',
    points: [
      <><strong>Ranked #517 out of 42,000+</strong> contributors — top 1.2% globally, 17 merged pull requests.</>,
      <>Contributed bug fixes &amp; feature improvements to MERN stack projects used worldwide.</>,
      <>Optimized MongoDB performance via indexing strategies and aggregation pipeline refactoring.</>,
    ],
  },
]

export const projects = [
  {
    name: 'CampusLedger — College Document Request & Tracking System',
    highlight: 'Role-based workflow automation with secure document lifecycle.',
    desc: 'Full-stack document request platform for colleges with role-based approval workflows (Student → Admin → HOD → Principal). Includes secure JWT authentication, Cloudinary file storage, and automated email notifications for document lifecycle management.',
    icon: 'FileText',
    color: '#06b6d4',
    bg: 'linear-gradient(145deg,#0a001a,#150730,#0d1f35)',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'React', 'Cloudinary', 'Nodemailer'],
    demo: 'https://campusledger.onrender.com/',
    github: 'https://github.com/Subashree-selvaraj/online-college-document-request-and-tracking-system-saas',
    featured: true,
  },
  {
    name: 'SmartUzhavan — AI Agriculture Assistant',
    highlight: 'NDVI-powered crop health monitoring with bilingual voice interaction.',
    desc: 'AI agriculture platform with crop disease detection, NDVI crop health monitoring, real-time market price insights, and region-based crop impact visualization. Includes bilingual voice-enabled interaction and farmer collaboration using Socket.io.',
    icon: 'Leaf',
    color: '#10b981',
    bg: 'linear-gradient(145deg,#001408,#062d14,#0a3620)',
    stack: ['MERN', 'Socket.io', 'LangChain', 'OpenAI', 'Gemini', 'Leaflet Maps', 'NDVI Analysis', 'Microsoft Translator API'],
    demo: 'https://smartuzhavan.xyz/',
    github: 'https://github.com/Subashree-selvaraj/SmartUzhavan',
    featured: false,
  },
  {
    name: 'VisualFlow — AI Code Visualizer',
    highlight: 'Code-to-diagram generation using LLM reasoning.',
    desc: 'AI tool that converts Python and JavaScript code into animated flowcharts using LLM analysis and Mermaid.js. Built with Streamlit for interactive debugging visualization.',
    icon: 'GitBranch',
    color: '#8b5cf6',
    bg: 'linear-gradient(145deg,#0f0a2e,#1e1b50,#2a2470)',
    stack: ['LLM API', 'Mermaid.js', 'Streamlit', 'Python'],
    demo: 'https://visual-logic.streamlit.app/',
    github: 'https://github.com/Subashree-selvaraj/Visual-Logic',
    featured: false,
  },
  {
    name: 'SpendSmart — Expense Tracker',
    highlight: 'Automated categorization with interactive financial analytics.',
    desc: 'Personal finance tracker with automated expense categorization, budgeting insights, and interactive analytics for monitoring income and spending patterns.',
    icon: 'PieChart',
    color: '#f59e0b',
    bg: 'linear-gradient(145deg,#1a0a00,#2d1800,#3d2200)',
    stack: ['MERN', 'Node.js', 'MongoDB', 'React', 'Chart.js'],
    demo: null,
    github: 'https://github.com/Subashree-selvaraj/Spendsmart_',
    featured: false,
  },
  {
    name: 'E-Commerce Automation Framework',
    highlight: 'End-to-end Selenium testing with intelligent reporting.',
    desc: 'End-to-end test automation framework for e-commerce workflows (Login → Cart → Checkout → Validation) using Selenium, TestNG, and Page Object Model with automated reporting.',
    icon: 'Zap',
    color: '#ef4444',
    bg: 'linear-gradient(145deg,#0a1a00,#153000,#1f4400)',
    stack: ['Java', 'Selenium', 'TestNG', 'Maven', 'POM', 'Extent Reports'],
    demo: null,
    github: 'https://github.com/Subashree-selvaraj/ecommerce-automation-testing-framework',
    featured: false,
  },
]

export const achievements = [
  { icon: 'Globe', title: 'Top 1.2% Globally', sub: 'GSSoC — Rank #517 / 42,000 contributors', glow: '#22c55e' },
  { icon: 'Trophy', title: 'Winner', sub: 'Build Your Own AI Chatbot — 900+ participants', glow: '#7c3aed' },
  { icon: 'Medal', title: 'First Runner-Up', sub: 'Hackspora 2K25 — 140+ teams competed', glow: '#f59e0b' },
  { icon: 'Rocket', title: 'Top Submission', sub: 'GenAI Exchange Hackathon — MeitY & Startup India', glow: '#06b6d4' },
  { icon: 'Award', title: 'KiTE Achiever Award', sub: 'Recognized for academic & technical excellence', glow: '#f59e0b' },
  { icon: 'Code', title: '250+ LeetCode Problems', sub: 'Consistent problem solving in Java', glow: '#ec4899' },
]

export const certs = [
  { name: 'MongoDB Node.js Developer Path', by: 'MongoDB University' },
  { name: 'Postman API Fundamentals Student Expert', by: 'Postman' },
  { name: 'GitHub Foundations Certification', by: 'GitHub' },
  { name: 'OCI 2025 Certified Generative AI Professional', by: 'Oracle' },
]
