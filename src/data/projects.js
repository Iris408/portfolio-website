// プロジェクトデータの共有ファイル
// Shared data file — import this anywhere you need project data

export const projects = [
  {
    // featured: true のプロジェクトだけホームページに表示される
    // Only projects with featured: true appear on the homepage
    featured: true,
    title: "Inventory Management System",
    category: "Full-Stack · Backend",
    description:
      "Interactive inventory management dashboard with analytics, CRUD operations, filtering systems, and backend API integration.",
    // 使用技術のリスト / List of technologies used
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/Iris408/inventory-management-system",
    // デモがない場合は空文字列 / Empty string means no demo link shown
    demo: "",
    // 画像は public/images/ フォルダに置く / Put images in the public/images/ folder
    image: "/images/inventory.png",
  },
  {
    featured: true,
    title: "JWT Authentication Dashboard",
    category: "Full-Stack · Auth",
    description:
      "Full-stack authentication platform with JWT authentication, protected routes, PostgreSQL integration, and Dockerized backend services.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/Iris408/jwt-authentication-dashboard",
    demo: "https://jwt-authentication-dashboard-sepia.vercel.app/",
    image: "/images/jwt.png",
  },
  {
    featured: true,
    title: "System Health Monitor",
    category: "DevOps · Monitoring",
    description:
      "Linux monitoring tool for tracking CPU, memory, and disk utilisation with Slack alert integrations and Docker support.",
    tech: ["Python", "Linux", "Docker", "Slack API"],
    github: "https://github.com/Iris408/system-health-monitor",
    demo: "",
    image: "/images/monitor.png",
  },
  // 新しいプロジェクトはここに追加 / Add new projects here
  // featured: false にするとホームには出ず /projects のみに表示される
  // featured: false means it only shows on the /projects page, not the homepage
];