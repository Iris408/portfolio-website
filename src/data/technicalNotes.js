export const technicalNotes = [
  {
    title: "Fixing Frontend CI TypeScript Errors",
    project: "AI HR Support Assistant",
    category: "Frontend / TypeScript / CI/CD",
    tags: ["Frontend", "TypeScript", "CI/CD", "React"],
    date: "2026-07-05",
    status: "Fixed / Learned",
    summary:
      "GitHub Actions caught hidden TypeScript issues involving JSX/TSX imports, named/default exports, and inconsistent component props.",
    problem:
      "Frontend CI failed during the production build even though the app had worked during development.",
    cause:
      "Dashboard components used inconsistent import/export styles and different prop names for the same stat card component.",
    fix:
      "Created a typed AdminStatCard component, updated StatCard exports, and allowed StatCard to accept either title or label props.",
    lesson:
      "CI/CD can catch hidden frontend type issues before deployment. Reusable TypeScript components need consistent imports, exports, and props.",
  },
  {
    title: "Fixing Backend Tests for AI HR Support Assistant",
    project: "AI HR Support Assistant",
    category: "Backend / FastAPI / Pytest",
    tags: ["Backend", "FastAPI", "Pytest", "PostgreSQL"],
    date: "2026-06-28",
    status: "Fixed / Learned",
    summary:
      "Cleaned up the backend testing checkpoint until the AI HR Support Assistant test suite passed successfully.",
    problem:
      "The backend needed a stable testing checkpoint before larger features like authentication, role-based access, and CI/CD.",
    cause:
      "The app was becoming more realistic, with FastAPI routes, PostgreSQL logic, SQLAlchemy models, schemas, and ticket workflows.",
    fix:
      "Validated the backend test setup until the suite reached 11 passing tests.",
    lesson:
      "Backend tests make a project stronger because they confirm the API works beyond manual testing.",
  },
  {
    title: "Fixing an Astro Build Hang",
    project: "Portfolio Website",
    category: "Frontend / Astro / Build Tools",
    tags: ["Frontend", "Astro", "Build Tools"],
    date: "2026-07-05",
    status: "Fixed / Learned",
    summary:
      "Fixed a local Astro build hang by clearing stale processes and disabling Astro telemetry during builds.",
    problem:
      "The Astro build appeared to stick before producing normal build output.",
    cause:
      "The issue was likely caused by stale Astro/Vite/Node processes, cache state, or telemetry hanging before the build output.",
    fix:
      "Stopped old processes, cleared build cache, and updated the build command to disable Astro telemetry.",
    lesson:
      "Build issues are not always code errors. Sometimes the local tooling environment needs to be reset.",
  },
];