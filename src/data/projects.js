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
    description:
      "Deployed full-stack inventory dashboard with React, TypeScript, FastAPI, PostgreSQL, JWT login, protected routes, CRUD operations, Docker support, Vercel frontend deployment, Render backend deployment, and GitHub Actions CI checks.",
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
    description:
      "A calm, accessible routine and task sequencing app focused on neurodivergent-friendly routines, focus support, public beta feedback, accessibility page controls, visual identity polish, and future full-stack persistence.",
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
    description:
      "Deployed FastAPI backend API with PostgreSQL, SQLAlchemy, JWT authentication, role-based access control, Docker support, Swagger API documentation, Render deployment, and GitHub Actions CI checks. This API powers the JWT Authentication Dashboard frontend.",
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
    description:
      "Deployed React and TypeScript authentication dashboard connected to a FastAPI backend. Includes JWT login, token storage, protected dashboard access, admin-only user listing, role-based UI rendering, Vercel deployment, Render backend integration, and GitHub Actions CI checks.",
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
    description:
      "Python-based system monitoring tool that tracks CPU, memory, disk usage, and uptime with threshold alerts, structured logging, Slack/email notifications, Docker support, a FastAPI dashboard, a /health JSON endpoint, and GitHub Actions CI checks.",
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
    featured: false,
    title: "Technical Blog / Engineer Notebook",
    category: "Frontend · Technical Writing",
    status: "One-page MVP",
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
      "/screenshots/technical-blog-en.png",
      "/screenshots/technical-blog-field-notes.png",
    ],
  },

  // featured: false にするとホームには出ず /projects のみに表示される
  // featured: false means it only shows on the /projects page, not the homepage

  // 新しいプロジェクトはここに追加 / Add new projects here
];