// プロジェクトデータの共有ファイル
// Shared data file — import this anywhere you need project data

export const projects = [
  {
    // featured: true のプロジェクトだけホームページに表示される
    // Only projects with featured: true appear on the homepage
    featured: true,
    title: "Inventory Management System",
    category: "Full-Stack · Deployed",
    description:
      "Deployed full-stack inventory dashboard with React, TypeScript, FastAPI, PostgreSQL, JWT login, protected routes, CRUD operations, Docker support, Vercel frontend deployment, Render backend deployment, and GitHub Actions CI checks.",
    // 使用技術のリスト / List of technologies used
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
    // デモがない場合は空文字列 / Empty string means no demo link shown
    demo: "https://inventory-management-system-iris408.vercel.app",
    // 画像は public/images/ フォルダに置く / Put images in the public/images/ folder
    image: "/images/inventory_dashboard.png",
  },

  {
    featured: true,
    title: "Mini User API",
    category: "Backend · API",
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
    image: "/images/mini-user-api.png",
  },

  {
    featured: true,
    title: "JWT Authentication Dashboard",
    category: "Full-Stack · Auth",
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
    image: "/images/jwt-auth-dashboard.png",
  },

  {
    featured: true,
    title: "System Health Monitor",
    category: "DevOps · Monitoring",
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
    image: "/images/system-health-monitor.png",
  },

  {
    featured: false,
    title: "Bloom",
    category: "Capstone · Accessibility",
    description:
      "Active frontend capstone project focused on a calm, neurodivergent-friendly visual routine builder. Current features include task actions, an emoji picker, reusable UI components, font size controls, OpenDyslexic support, a reduce motion toggle, and accessible layout design.",
    tech: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Accessibility",
      "UI Design",
    ],
    github: "https://github.com/Iris408/bloom-app",
    demo: "",
    image: "/images/bloom-app.png",
  },

  // 新しいプロジェクトはここに追加 / Add new projects here
  // featured: false にするとホームには出ず /projects のみに表示される
  // featured: false means it only shows on the /projects page, not the homepage
]