# Portfolio Website

A personal developer portfolio built with Astro, React, Tailwind CSS, and Framer Motion.

This portfolio showcases my full-stack, backend, and DevOps-focused projects while I continue building practical software engineering experience alongside my Master’s degree in Computer Science.

## Current Status

✅ Homepage with hero, about, stack, featured projects, and contact sections
✅ Dedicated /projects page for all projects
✅ Shared project data file for easier project updates
✅ Responsive layout
✅ Purple/pink visual theme update
✅ Astro updated
✅ Build tested locally

## Features

* Responsive portfolio homepage
* Featured projects section on the homepage
* Separate Projects page for all portfolio projects
* Shared project data file for easier maintenance
* Reusable React components
* Smooth animations with Framer Motion
* Tailwind CSS styling
* External GitHub and live demo links
* Contact section
* CV download link

## Tech Stack

* Astro
* React
* Tailwind CSS
* Framer Motion
* Lucide React
* JavaScript
* Vercel

## Project Structure

portfolio-website/
├── public/
│   ├── images/
│   └── Iris_CV.pdf
│
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   └── Stack.jsx
│   │
│   ├── data/
│   │   └── projects.js
│   │
│   ├── layouts/
│   │   └── MainLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   └── projects.astro
│   │
│   └── styles/
│       └── global.css
│
├── package.json
├── package-lock.json
└── README.md

### Pages

Homepage

The homepage includes:

* Hero section
* About section
* Tech stack section
* Featured projects section
* Contact section

The homepage displays only the first three projects marked as:
```bash
featured: true
```
inside:
```bash
src/data/projects.js
```
### Projects Page

The full Projects page is available at:
```bash
/projects
```
This page displays all projects stored in:
```bash
src/data/projects.js
```
### Featured Projects

Current homepage featured projects:

1. JWT Authentication Dashboard
2. System Health Monitor
3. Inventory Management System

### Adding New Projects

To add a new project, update:
```bash
src/data/projects.js
```
Example:
```bash
{
  featured: false,
  title: "Project Name",
  category: "Backend · API",
  description: "Short project description.",
  tech: ["Python", "FastAPI", "PostgreSQL"],
  github: "https://github.com/username/repo-name",
  demo: "",
  image: "/images/project-image.png"
}
```
Use:
```bash
featured: true
```
if the project should appear on the homepage.

Use:
```bash
featured: false
```
if the project should only appear on the /projects page.

### Installation

Clone the repository:
```bash
git clone https://github.com/Iris408/portfolio-website
```
Move into the project folder:
```bash
cd portfolio-website
```
Install dependencies:
```bash
npm install
```
Run the development server:
```bash
npm run dev
```
Build the project:
```bash
npm run build
```
Preview the production build:
```bash
npm run preview
```
### Deployment

This project is deployed using Vercel.

Typical deployment flow:
```bash
npm run build
git status
git add .
git commit -m "Update portfolio"
git push origin main
```
Vercel automatically redeploys the project after changes are pushed to GitHub.

## Recent Updates

* Added a dedicated /projects page
* Added shared project data in src/data/projects.js
* Updated homepage Featured Projects section to use shared project data
* Updated Navbar Projects link to route to /projects
* Updated portfolio colours from cyan/blue to purple/pink styling
* Updated About section text
* Cleaned duplicate stack display
* Updated Astro version
* Confirmed local development and build workflow

## Future Improvements

* Add more project screenshots
* Add project detail pages
* Add filtering by project type
* Add deployment status badges
* Add blog or learning notes section
* Add dark/light theme toggle
* Improve mobile project card layout
* Add accessibility improvements
* Add more backend and DevOps project summaries

## What I Learned

Through this portfolio update, I practiced:

* Building with Astro and React components
* Creating a reusable shared project data file
* Splitting homepage featured projects from a full projects page
* Updating route-based navigation
* Debugging missing imports and file path issues
* Testing local development and production builds
* Cleaning Tailwind CSS classes
* Maintaining a clearer project structure
* Preparing a portfolio for GitHub and deployment

## Notes

This portfolio is a work in progress and will continue to improve as I complete more full-stack, backend, and DevOps-focused projects.