// プロジェクトデータの共有ファイル
// Shared data file — import this anywhere you need project data

export const projects = [
    // featured: true のプロジェクトだけホームページに表示される
    // Only projects with featured: true appear on the homepage

  {
    featured: true,
    title: "Inventory Management System",
    category: "Full-Stack · Deployed",
    status: "Deployed full-stack MVP",
    tags: ["Full-Stack", "Backend", "React", "Python", "PostgreSQL", "Docker", "Deployed", "CI/CD"],
    description:
      "Deployed full-stack inventory dashboard with React, TypeScript, FastAPI, PostgreSQL, JWT login, protected routes, CRUD operations, Docker support, Vercel frontend deployment, Render backend deployment. Includes GitHub Actions pipelines for backend checks, frontend build validation, and Docker Compose validation.",  
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "JWT",
      "Vercel",
      "Render",
      "GitHub Actions",
    ],
    github: "https://github.com/Iris408/inventory-management-system",
    demo: "https://inventory-management-system-iris408.vercel.app",
    image: "/screenshots/inventory-dashboard.png",
  },

  {
    featured: true,
    title: "Bloom - Calm Routine, Focus & Progress App",
    category: "Capstone · Accessibility",
    status: "Public beta / frontend MVP",
    tags: ["Frontend", "React", "Accessibility", "Deployed"],
    description:
      "A calm, accessible routine and task sequencing app focused on neurodivergent-friendly routines, focus support, public beta feedback, accessibility page controls, visual identity polish, and future full-stack persistence. Used Claude Code and ChatGPT as supervised AI pair-programming tools for code review, debugging support, backend security/configuration checks, and documentation, while manually reviewing diffs, testing changes, and managing Git commits.",
    tech: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Accessibility",
      "localStorage",
    ],
    github: "https://github.com/Iris408/bloom-app",
    demo: "https://bloom-app-three-xi.vercel.app/",
    image: "/screenshots/bloom-overview.png",
    images: [
      "/screenshots/bloom-overview.png",
      "/screenshots/bloom-page-controls.png",
      "/screenshots/bloom-login-modal.png",
      "/screenshots/bloom-demo-modal.png",
      "/screenshots/bloom-demo-home.png",
      "/screenshots/bloom-routines.png",
      "/screenshots/bloom-focus.png",
      "/screenshots/bloom-exit-demo.png",
    ],
  },

  {
    featured: true,
    title: "Mini User API",
    category: "Backend · API",
    status: "Deployed backend MVP",
    tags: ["Backend", "Python", "PostgreSQL", "Docker", "Deployed", "CI/CD"],
    description:
      "A minimal user API built with FastAPI and PostgreSQL, featuring JWT authentication, protected routes, and Docker deployment. Includes GitHub Actions backend CI for dependency checks, Python syntax validation, and Docker image validation.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "JWT",
      "OAuth2",
      "Render",
      "GitHub Actions",
    ],
    github: "https://github.com/Iris408/mini-user-api",
    demo: "https://mini-user-api.onrender.com/docs",
    image: "/screenshots/mini-user-api.png",
  },

  {
    featured: false,
    title: "JWT Authentication Dashboard",
    category: "Full-Stack · Auth",
    status: "Deployed frontend integration",
    tags: ["Full-Stack", "Python", "PostgreSQL", "Docker", "Deployed", "CI/CD"],
    description:
      "A React and TypeScript authentication dashboard connected to a FastAPI backend, with login, protected dashboard routes, admin-only access, and deployed frontend/backend integration. Includes GitHub Actions frontend CI and Docker image validation.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "FastAPI",
      "JWT",
      "Vercel",
      "Render",
      "GitHub Actions",
    ],
    github: "https://github.com/Iris408/jwt-authentication-dashboard",
    demo: "https://jwt-authentication-dashboard-sepia.vercel.app",
    image: "/screenshots/jwt-auth-dashboard.png",
  },

  {
    featured: false,
    title: "AI HR Support Assistant",
    category: "Full-Stack · AI Workflow",
    status: "Portfolio-ready MVP",
    tags: ["Full-Stack", "Backend", "React", "Python", "PostgreSQL", "Docker"],
    description:
      "Built a full-stack AI-assisted HR support dashboard using React, TypeScript, FastAPI, PostgreSQL, SQLAlchemy, Alembic, and Docker Compose. The app allows employees to submit HR tickets, uses mock AI logic to classify category and priority, provides suggested response drafts for HR review, and includes HR/Admin dashboards with filtering, sorting, responsive ticket queues, and status update workflows.",
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Docker Compose",
    ],
    github: "https://github.com/Iris408/ai-hr-support-assistant",
    demo: "",
    image: "/screenshots/ai-hr-support-assistant.png",
  },

  {
    featured: false,
    title: "System Health Monitor",
    category: "DevOps · Monitoring",
    status: "Completed beginner DevOps project",
    tags: ["DevOps", "Python", "Docker", "CI/CD"],
    description:
      "Python-based system monitoring tool that tracks CPU, memory, disk usage, and uptime with threshold alerts, structured logging, Slack/email notifications, Docker support, a FastAPI dashboard, a /health JSON endpoint. Includes GitHub Actions backend CI for dependency checks, Python syntax validation, optional tests, and Docker image validation.",
    tech: [
      "Python",
      "FastAPI",
      "Docker",
      "Docker Compose",
      "Linux",
      "psutil",
      "Slack API",
      "SMTP Email",
      "GitHub Actions",
    ],
    github: "https://github.com/Iris408/system-health-monitor",
    demo: "",
    image: "/screenshots/system-health-monitor.png",
  },

  {
    title: "Log Intelligence Analyzer",
    category: "Backend · Log Analysis",
    description:
      "A Python and FastAPI backend project that analyzes log files, detects error patterns, stores imported logs in PostgreSQL, and exposes API endpoints for summaries, errors, reports, and stored log data. Includes GitHub Actions backend CI for dependency checks, Python syntax validation, optional tests, and Docker image validation.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "SQLAlchemy"],
    tags: ["Backend", "Python", "FastAPI", "PostgreSQL", "Docker", "CI/CD"],
    github: "https://github.com/Iris408/log-intelligence-analyzer",
    demo: "",
    image: "/screenshots/log_intelligence_output.png",
    images: [
      "/screenshots/log_intelligence_output.png",
      "/screenshots/log_intelligence_docker.png",
    ],
    featured: false,
  },

  {
    featured: true,
    title: "Vehicle Diagnostic UI Demo",
    category: "Frontend · Vehicle Diagnostics",
    status: "Portfolio-ready frontend MVP",
    tags: ["Frontend", "React", "TypeScript"],
    description:
      "A React and TypeScript vehicle diagnostic dashboard that simulates vehicle health monitoring, diagnostic alert triage, severity filtering, selected alert details, technician-focused suggested actions, and vehicle module health tracking using mock diagnostic data.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "CSS",
      "Responsive Design",
      "Mock Diagnostic Data",
    ],
    github: "https://github.com/Iris408/vehicle-diagnostic-ui-demo",
    demo: "",
    image: "/screenshots/vehicle-diagnostic-dashboard.png",
  },

  {
    title: "Java Expense Tracker API",
    category: "Java · Backend",
    description:
      "A Java learning project progressing from a console-based expense tracker toward a Spring Boot API with PostgreSQL, Docker, CRUD endpoints, validation, and backend architecture practice.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Maven"],
    tags: ["Java", "Backend", "PostgreSQL", "Docker"],
    github: "https://github.com/Iris408/java-expense-tracker-api",
    demo: "",
    image: "",
    images: [],
    featured: false,
  },

  {
    featured: false,
    title: "Technical Blog · Engineer Notebook",
    category: "Frontend · Documentation",
    status: "One-page MVP",
    tags: ["Frontend", "Documentation"],
    description:
      "A minimalist one-page technical blog built to document engineering notes, debugging lessons, project progress, and technical Japanese practice. The page uses a Japanese-first structure with English support, helping me practise clear technical explanations while maintaining a simple developer portfolio-style layout.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Technical Writing",
      "Technical Japanese",
    ],
    github: "https://github.com/Iris408/technical-blog",
    demo: "https://iris408.github.io/technical-blog/",
    image: "/screenshots/technical-blog-jp.png",
    images: [
      "/screenshots/technical-blog-jp.png",
      "/screenshots/technical-blog-en.png",
      "/screenshots/technical-blog-field-notes.png",
    ],
  },

  {
    title: "Live Weather Report",
    category: "Python · Automation",
    status: "Completed Python automation project",
    description:
      "A Python automation project that generates live weather reports with API request handling, retry and timeout logic, fallback error handling, and readable project documentation. Includes GitHub Actions Python CI for dependency installation and syntax validation.",
    tech: ["Python", "API Requests", "ReportLab", "GitHub Actions"],
    tags: ["Python", "Automation", "CI/CD"],
    github: "https://github.com/Iris408/live_weather_report",
    demo: "",
    image: "",
    images: [],
    featured: false,
  },

  {
    title: "Payment Receipt Generator",
    category: "Python · PDF Automation",
    status: "Completed PDF automation project",
    description:
      "A Python PDF automation project that generates payment receipts with VAT calculation, approved and declined payment examples, reusable receipt formatting, and EN/JP code comments. Includes GitHub Actions Python CI for dependency installation and syntax validation.",
    tech: ["Python", "ReportLab", "PDF Generation", "GitHub Actions"],
    tags: ["Python", "Automation", "CI/CD"],
    github: "https://github.com/Iris408/payment_receipt_generator",
    demo: "",
    image: "",
    images: [],
    featured: false,
  },

  // featured: false にするとホームには出ず /projects のみに表示される
  // featured: false means it only shows on the /projects page, not the homepage

  // 新しいプロジェクトはここに追加 / Add new projects here
];