// プロジェクトデータの共有ファイル
// Shared data file — import this anywhere you need project data

export const projects = [
    // featured: true のプロジェクトだけホームページに表示される
    // Only projects with featured: true appear on the homepage

  {
    featured: true,
    title: "Inventory Management System",
    category: "Full-Stack · Deployed",
    status: "Portfolio-ready deployed full-stack app",
    tags: ["Full-Stack", "Backend", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "JWT", "Docker", "Vercel", "Render", "Deployed", "CI/CD"],
    description:
      "A deployed full-stack inventory management dashboard built with React, TypeScript, FastAPI, PostgreSQL, SQLAlchemy, JWT authentication, Docker, Vercel, Render, and GitHub Actions. Includes protected routes, CRUD inventory management, search/filter/sort controls, analytics cards, stock status tracking, category summaries, responsive dashboard UI, and CI checks for backend, frontend, and Docker workflows.",
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
    status: "Public beta / polished frontend MVP",
    tags: ["Frontend", "React", "JavaScript", "Accessibility", "UX Design", "Deployed", "Beta", "Vite", "Product Design", "Vercel"],
    description:
      "A calm, accessible routine, focus and progress app designed around neurodivergent-friendly support, low-pressure task sequencing, demo routines, page controls, visual polish, and public beta feedback. Bloom includes guided demo flows, focus support, routines, moments, progress views, accessibility controls, and a roadmap toward full-stack persistence, authentication, and real user accounts. Used Claude Code and ChatGPT as supervised AI pair-programming tools while manually reviewing diffs, testing changes, and managing commits.",
    tech: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Accessibility",
      "localStorage",
      "Vercel",
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
    status: "Portfolio-ready deployed backend",
    tags: ["Backend", "API", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "JWT", "OAuth2", "Render", "Deployed", "CI/CD"],
    description:
      "A deployed FastAPI backend API with PostgreSQL, SQLAlchemy, JWT authentication, OAuth2 Swagger login, protected profile access, admin-only user listing, role-based access control, Docker support, Render deployment, and GitHub Actions CI. Recently improved with health/readiness endpoints, endpoint tests, CORS fixes for deployed frontend integrations, and safer admin role checking.",
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
    featured: true,
    title: "JWT Authentication Dashboard",
    category: "Frontend · Auth Integration",
    status: "Portfolio-ready deployed auth dashboard",
    tags: ["Frontend", "React", "TypeScript", "JWT", "Auth", "Vite", "Protected Routes", "Admin Dashboard", "FastAPI", "Vercel", "Render", "Deployed", "CI/CD"],
    description:
      "A polished React and TypeScript authentication dashboard connected to the deployed Mini User API backend. Includes JWT login, token storage, protected dashboard access, authenticated profile loading, admin-only user listing, role-based UI behaviour, loading and error states, Vercel deployment, Render backend integration, and GitHub Actions CI. This project demonstrates frontend authentication flow, protected routing, API integration, and admin access control.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "FastAPI",
      "JWT",
      "Vercel",
      "Render",
      "GitHub Actions",
    ],
    github: "https://github.com/Iris408/jwt-authentication-dashboard",
    demo: "https://jwt-authentication-dashboard-sepia.vercel.app",
    image: "/screenshots/jwt-dashboard-page.png",
    images: [
      "/public/screenshots/jwt-login-page.png",
      "/screenshots/jwt-dashboard-page.png",
      "/screenshots/jwt-admin-panel.png",
    ],
  },

  {
    featured: false,
    title: "AI HR Support Assistant",
    category: "Full-Stack · AI Workflow",
    status: "Portfolio-ready MVP",
    tags: ["Full-Stack", "Backend", "React", "Python", "PostgreSQL", "Docker", "CI/CD"],
    description:
      "Built a full-stack AI-assisted HR support dashboard using React, TypeScript, FastAPI, PostgreSQL, SQLAlchemy, Alembic, and Docker Compose. The app allows employees to submit HR tickets, uses mock AI logic to classify category and priority, provides suggested response drafts for HR review, and includes HR/Admin dashboards with filtering, sorting, responsive ticket queues, and status update workflows. Includes GitHub Actions backend, frontend, and Docker CI pipelines.",
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
    featured: true,
    title: "System Health Monitor",
    category: "DevOps · Monitoring",
    status: "Production-style v2 checkpoint complete",
    tags: ["DevOps", "Python", "Docker", "CI/CD", "Docker Compose", "GitHub Actions", "Monitoring", "Structured logging", "Healthchecks"],
    description:
      "Python system monitoring project that tracks CPU, memory, disk usage, and uptime with structured logging, Slack/email alerts, alert cooldowns, recovery alerts, a FastAPI `/health` endpoint, Docker healthchecks, and GitHub Actions CI/CD validation.",
    tech: [
      "Python",
      "FastAPI",
      "Docker",
      "Docker Compose",
      "CI/CD",
      "psutil",
      "Slack API",
      "SMTP Email",
      "Structured Logging",
    ],
    github: "https://github.com/Iris408/system-health-monitor",
    demo: "",
    image: "/screenshots/grafana-dashboard.png",
    images: [
      "/screenshots/grafana-dashboard.png",
      "/screenshots/system-health-monitor.png",
    ]
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
      "A React and TypeScript frontend dashboard that simulates vehicle health monitoring, diagnostic alert triage, severity filtering, selected alert details, module status tracking, and recent diagnostic event history using mock vehicle data.",
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
      "A Python PDF automation project that generates payment receipts using either terminal input or JSON sample data, with VAT calculation, receipt IDs, approved/declined payment examples, organized output folders, and GitHub Actions CI.",
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