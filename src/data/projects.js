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
    title: "Bloom — Calm Routine, Focus & Progress App",
    category: "Capstone · Full-Stack · Accessibility",
    status: "Public beta · Deployed full-stack application",
    tags: ["Full-Stack", "React", "JavaScript", "FastAPI", "PostgreSQL", "Authentication", "Accessibility", "Responsive Design", "Docker", "Deployed", "Beta", "Capstone"],
    description:
      "Bloom is a calm, accessibility-first routine, focus, and progress application designed around neurodivergent-friendly support and low-pressure productivity. " +
      "It includes authenticated user accounts, JWT-protected routes, persistent routines and profile data, focus sessions, progress tracking, moments and reflections, guided demo experiences, and configurable accessibility controls. " +
      "The application uses a dual-mode architecture that keeps demo data separate from authenticated user data. Built with React, FastAPI, PostgreSQL, JWT authentication, and Docker, with development managed through structured testing, debugging, release documentation, GitHub, and Jira.",
    tech: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "JWT Authentication",
      "Docker",
      "Vercel",
      "Accessibility",
    ],
    detailsPath: "/case-studies/bloom",
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
    featured: false,
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
      "/screenshots/jwt-login-page.png",
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
    category: "DevOps · Monitoring · Observability",
    status: "Production-style monitoring stack · In progress",
    tags: ["DevOps", "Python", "FastAPI", "Docker", "Docker Compose", "GitHub Actions", "Monitoring",  "Observability",  "Prometheus", "Grafana", "Structured logging", "Healthchecks"],
    description:
      "A Python and FastAPI system-monitoring project that tracks CPU, memory, disk usage, and uptime. It includes structured logging, Slack and email alerts, alert cooldowns, recovery notifications, a health endpoint, Docker healthchecks, and Prometheus metrics, and Grafana dashboards.",
    tech: [
      "Python",
      "FastAPI",
      "Docker",
      "Docker Compose",
      "Prometheus", 
      "Grafana",
      "GitHub Actions",
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
    status: "Backend API checkpoint complete",
    tags: ["Backend", "Python", "FastAPI", "PostgreSQL", "Docker", "CI/CD"],
    description:
      "A Python and FastAPI backend project that analyzes log files, detects error patterns, stores imported logs in PostgreSQL, and exposes API endpoints for summaries, errors, reports, and stored log data. Includes GitHub Actions backend CI for dependency checks, Python syntax validation, optional tests, and Docker image validation.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "SQLAlchemy"],
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
    status: "Learning project · In progress",
    tags: ["Java", "Backend", "Spring Boot", "PostgreSQL", "Docker"],
    description:
      "A Java backend learning project progressing from a console-based expense tracker toward a Spring Boot REST API. The roadmap includes PostgreSQL persistence, CRUD endpoints, request validation, Docker support, testing, and layered backend architecture practice.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Maven"],
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
  featured: false,
  title: "社員管理システム · Employee Management System",
  category: "Java · Backend · Technical Japanese",
  status: "v0.2.0 · Employee CRUD and search complete",
  tags: ["Java", "Backend", "Spring Boot", "PostgreSQL", "REST API", "JPA", "Hibernate", "Docker", "Technical Japanese", "Internationalisation"],
  description:
    "A Japanese-first employee management system built with Java, Spring Boot, PostgreSQL, Spring Data JPA, and Docker. The project is designed to practise production-style backend development alongside technical Japanese, using Japanese domain terminology for employee records, departments, employment status, and administrative workflows. The planned system includes employee CRUD operations, validation, filtering, pagination, database migrations, API documentation, automated tests, and role-based administrative access.",
  tech: [
    "Java",
    "Spring Boot",
    "Spring Data JPA",
    "PostgreSQL",
    "Hibernate",
    "Docker",
    "Maven",
    "JUnit",
    "Technical Japanese",
  ],
  github:
    "https://github.com/Iris408/employee-management-system",
  demo: "",
  image: "",
  images: [],
},
{
  featured: false,
  title: "Java Mini User API",
  category: "Java · Backend · Authentication",
  status: "Foundation planned",
  tags: ["Java", "Backend", "Spring Boot", "PostgreSQL", "REST API", "Spring Security", "JWT", "JPA", "Docker", "Testing"],
  description:
    "A Java and Spring Boot REST API designed to rebuild the core concepts of my FastAPI Mini User API using the Java backend ecosystem. The project will include user registration, password hashing, PostgreSQL persistence, request validation, JWT authentication, protected profile endpoints, role-based access control, exception handling, automated tests, Docker support, and API documentation.",
  tech: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA",
    "PostgreSQL",
    "JWT",
    "Docker",
    "Maven",
    "JUnit",
    "Mockito",
  ],
  github: "",
  demo: "",
  image: "",
  images: [],
},

  // featured: false にするとホームには出ず /projects のみに表示される
  // featured: false means it only shows on the /projects page, not the homepage

  // 新しいプロジェクトはここに追加 / Add new projects here
];