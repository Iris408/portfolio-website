export const theBuildRoomNotes = [
  {
    id: "BR-009",
    title: "Fixing React API Response-Shape Rendering",
    project: "PartsPilot",
    category: "Frontend / React / API Integration",
    tags: [
      "Frontend",
      "React",
      "JavaScript",
      "FastAPI",
      "Debugging",
      "Full-Stack",
    ],
    date: "2026-08-21",
    status: "Fixed / Learned",
    pinned: false,
    summary:
      "Fixed a React rendering failure caused by storing an API response wrapper object in state instead of the parts array contained inside it.",
    problem:
      "The PartsPilot frontend successfully received data from the backend, but the interface failed when it attempted to run parts.map(). React expected parts to be an array, but the state contained the complete response object.",
    cause:
      "The FastAPI endpoint returned an object containing an items property rather than returning an array directly. The frontend used setParts(data), which stored the wrapper object in state. Array methods such as map could not be used on that object.",
    fix:
      "Inspected the returned JSON structure and changed the state update to setParts(data.items). Confirmed the data path by working through the response as object, property, array index, and item property before rendering it in JSX.",
    lesson:
      "A successful API request does not guarantee that the returned data has the shape a component expects. Before updating React state, inspect the response structure and store the specific value the interface needs.",
  },
  {
    id: "BR-008",
    title: "Debugging Docker Port Mapping and CORS",
    project: "PartsPilot",
    category: "Full-Stack / Docker / API Integration",
    tags: [
      "Docker",
      "React",
      "FastAPI",
      "CORS",
      "Debugging",
      "Full-Stack",
    ],
    date: "2026-08-21",
    status: "Fixed / Learned",
    pinned: true,
    summary:
      "Diagnosed a failed React-to-FastAPI connection by separating the container’s internal port from the port exposed to the host and then correcting the backend CORS configuration.",
    problem:
      "The React frontend could not load parts from the FastAPI backend. Requests targeted localhost:8000 even though Docker exposed the API to the host on port 8001. Browser requests also required permission to cross from the frontend origin to the backend origin.",
    cause:
      "The Docker mapping 8001:8000 meant FastAPI listened on port 8000 inside its container but was accessed through port 8001 from the host browser. The frontend and backend also ran on different origins, so the browser applied CORS restrictions.",
    fix:
      "Changed the frontend request URL to use http://localhost:8001/api/parts and configured FastAPI to allow requests from the frontend development origin. Used the browser error and HTTP response type to distinguish connection, route, authentication, server, and CORS failures.",
    lesson:
      "Docker port mappings have a container side and a host side. Browser-based frontend code must use the host port, while cross-origin permission must be configured by the backend rather than bypassed in the frontend.",
  },
  {
    id: "BR-007",
    title: "Fixing PartsPilot Tests Outside Docker",
    project: "PartsPilot",
    category: "Backend / FastAPI / Pytest",
    tags: [
      "Backend",
      "FastAPI",
      "Pytest",
      "SQLAlchemy",
      "PostgreSQL",
      "Docker",
    ],
    date: "2026-08-04",
    status: "Fixed / Learned",
    pinned: false,
    summary:
      "Separated the PartsPilot test environment from its Docker-only PostgreSQL hostname by introducing an isolated test database and FastAPI dependency overrides.",
    problem:
      "Backend tests failed when they were run directly from the host machine because the application attempted to connect to PostgreSQL using the hostname db.",
    cause:
      "The hostname db was the Docker Compose service name. It could be resolved by containers on the Compose network, but it was not a valid PostgreSQL hostname for pytest processes running directly on the Mac.",
    fix:
      "Configured the tests to use an isolated SQLite database and overrode the application’s database dependency during test execution. This allowed endpoint tests to run independently without connecting to the development PostgreSQL container or changing its data.",
    lesson:
      "Application and test environments should not share hidden infrastructure assumptions. Dependency injection makes it possible to test FastAPI routes against a controlled database while preserving PostgreSQL for development and production.",
  },
  {
    id: "BR-006",
    title: "Safely Renaming a Dockerised Backend Project",
    project: "AccessHub",
    category: "Backend / Docker / Repository Maintenance",
    tags: [
      "Backend",
      "Docker",
      "Security",
      "Git",
      "FastAPI",
      "PostgreSQL",
    ],
    date: "2026-08-01",
    status: "Fixed / Learned",
    pinned: false,
    summary:
      "Reviewed code, Docker configuration, environment settings and documentation while renaming the Secure User Management project and removing stale project references.",
    problem:
      "Renaming the project involved more than changing its repository title. Old names remained in Docker Compose configuration, build paths, database settings and documentation, while sensitive configuration also needed to be reviewed.",
    cause:
      "A project identity can be repeated across source files, container configuration, environment variables, volumes, documentation and deployment settings. Updating only visible names leaves inconsistent configuration behind.",
    fix:
      "Applied the rename one area at a time, searched for stale references, corrected Docker Compose project and build configuration, reviewed the local database implications and rotated exposed secret configuration. Validated the Compose file before rebuilding and retesting authentication, CRUD and health endpoints.",
    lesson:
      "Repository renames should be treated as controlled configuration migrations. Search globally, protect secrets, understand whether database volumes need migration or recreation, and validate each layer before considering the rename complete.",
  },
  {
    id: "BR-005",
    title: "Fixing Inventory Dashboard Analytics",
    project: "PartsPilot",
    category: "Full-Stack / React / FastAPI / PostgreSQL",
    tags: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Debugging",
      "Analytics",
    ],
    date: "2026-07-26",
    status: "Fixed / Learned",
    pinned: true,
    summary:
      "Diagnosed and resolved an analytics issue where dashboard totals were calculated from a paginated ten-item response instead of the full PostgreSQL inventory.",
    problem:
      "As new products were added, the inventory table updated correctly, but the dashboard continued to report totals for only ten items. Product count, quantity, inventory value, and stock-status metrics were therefore inaccurate.",
    cause:
      "The React frontend calculated global dashboard metrics directly from the /items response. That endpoint intentionally returns a paginated dataset with a default limit of ten records, while the backend aggregation endpoints already calculated statistics across the full database.",
    fix:
      "Separated paginated inventory data from reporting data. The inventory preview continued using /items, while dashboard KPIs and category analytics were connected to /items/stats, /items/category-summary, and /items/category-value. Added dedicated React state and refreshed aggregate data after create, update, and delete operations.",
    lesson:
      "Paginated operational data should not be reused for global analytics. When frontend totals do not match database records, trace the complete data flow and verify which endpoint supplies each part of the interface.",
  },
    {
    id: "BR-004",
    title: "Fixing Bloom Routine Synchronisation",
    project: "Bloom",
    category: "Full-Stack / React / FastAPI / PostgreSQL",
    tags: ["React", "FastAPI", "Debugging", "Full-Stack"],
    date: "2026-07-13",
    status: "Fixed / Learned",
    pinned: true,
    summary:
      "Diagnosed and resolved a routine persistence issue where authenticated users were unknowingly using localStorage instead of the backend API.",
    problem:
      "Routines created on the Routines page did not appear on Home or Progress, and authenticated users were not persisting routine changes to PostgreSQL.",
    cause:
      "Routines.jsx imported backend CRUD functions but never called them. The page always used localStorage regardless of authentication state, creating two separate data sources.",
    fix:
      "Implemented backend CRUD flows for authenticated users, preserved localStorage behaviour for demo users, added cross-page synchronisation events, and connected routine operations to FastAPI.",
    lesson:
      "When multiple features fail together, trace the complete data flow before fixing individual symptoms. Often a single architectural issue is responsible for several visible bugs.",
  },
  {
    id: "BR-003",
    title: "Fixing Frontend CI TypeScript Errors",
    project: "AI HR Support Assistant",
    category: "Frontend / TypeScript / CI/CD",
    tags: ["Frontend", "TypeScript", "CI/CD", "React"],
    date: "2026-07-05",
    status: "Fixed / Learned",
    pinned: false,
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
    id: "BR-002",
    title: "Fixing an Astro Build Hang",
    project: "Portfolio Website",
    category: "Frontend / Astro / Build Tools",
    tags: ["Frontend", "Astro", "Build Tools"],
    date: "2026-07-05",
    status: "Fixed / Learned",
    pinned: true,
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
  {
    id: "BR-001",
    title: "Fixing Backend Tests for AI HR Support Assistant",
    project: "AI HR Support Assistant",
    category: "Backend / FastAPI / Pytest",
    tags: ["Backend", "FastAPI", "Pytest", "PostgreSQL"],
    date: "2026-06-28",
    status: "Fixed / Learned",
    pinned: false,
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
];