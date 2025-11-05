# ICLOUD — E‑Commerce Website

Live demo: https://icloudtechnologies.vercel.app  
Repository: https://github.com/alymehroz512/ICLOUD

ICLOUD is a modern e‑commerce front-end built with React and Vite. It provides a responsive, component-driven storefront with state management and common e‑commerce UI patterns (carousel, product listings, routing, contact/email support). This repository contains the source for the client application.

---

## Table of Contents

- Project Overview
- Features
- Technology Stack
- Quick Start
  - Requirements
  - Install
  - Environment configuration
  - Development & build scripts
- Folder layout
- Configuration & common variables
- Deployment
- Contributing
- Troubleshooting
- Author & License

---

## Project Overview

This project is a single‑page React application scaffolded for fast development with Vite. It uses Redux Toolkit for application state, EmailJS for contact form integration, and modern UI libraries for layout and components.

Primary goals:
- Fast developer experience with Vite
- Clean component structure and state management with Redux Toolkit
- Responsive UI with Bootstrap and popular UI libraries
- Easy deployment (example hosted on Vercel)

---

## Features

- Client-side routing (React Router)
- Global state management (Redux Toolkit)
- Email/contact form integration with EmailJS
- Responsive layout using Bootstrap + react-bootstrap
- Carousels and sliders (embla-carousel, react-slick)
- Smooth scroll behavior and animations (react-scroll, framer-motion)
- Linting configuration (ESLint)

---

## Technology Stack

- Framework: React 19
- Bundler: Vite
- State management: @reduxjs/toolkit, react-redux
- Styling/UI: Bootstrap 5, react-bootstrap
- Animations & interactions: framer-motion, react-scroll
- Carousels: embla-carousel-react, react-slick, slick-carousel
- Email: @emailjs/browser
- Linting: ESLint
- Tooling: npm, Vite

See package.json for full dependency details:
- Scripts: dev, build, preview, lint

---

## Quick Start

Requirements:
- Node.js 18+ (or an active LTS)
- npm (or use pnpm/yarn if preferred — adjust commands accordingly)

1. Clone the repo
```bash
git clone https://github.com/alymehroz512/ICLOUD.git
cd ICLOUD
```

2. Install dependencies
```bash
npm install
```

3. Create environment variables (see Configuration below)

4. Start development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

6. Preview production build locally
```bash
npm run preview
```

7. Lint the project
```bash
npm run lint
```

---

## Folder layout (high level)

- public/ — static assets served as-is (favicon, images, etc.)
- src/ — React source files (components, pages, styles, store)
- index.html — Vite entry
- package.json, package-lock.json — dependencies & scripts
- vite.config.js — Vite configuration
- eslint.config.js — linting rules

Note: The project uses a typical React + Vite structure. Inspect `src/` for the app's components, routes, and Redux store.

---

## Configuration & Environment Variables

This project uses EmailJS for contact forms. When deploying or testing locally, set the necessary environment variables. With Vite, environment variables intended for client-side usage must be prefixed with `VITE_`.

Example (.env.local)
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace the placeholders with values from your EmailJS dashboard. If other third‑party services (analytics, payment) are added, follow a similar pattern.

---

## Deployment

This app is optimized for static hosting / SPA hosts (Vercel, Netlify, GitHub Pages with redirects). Typical steps for Vercel:

1. Connect the repository in Vercel.
2. Add environment variables (VITE_* ones).
3. Build command: `npm run build`
4. Output directory: `dist`

For other hosts, ensure SPA routing is supported or add appropriate rewrite rules.

---

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes and push
4. Open a Pull Request describing the change

Please follow existing code style and run `npm run lint` before submitting a PR. Provide clear commit messages and PR descriptions.

---

## Troubleshooting

- Dev server not starting:
  - Ensure Node and npm versions are compatible.
  - Delete node_modules and reinstall: `rm -rf node_modules && npm install`.
- Environment variables not available in client:
  - With Vite, variables must be prefixed with `VITE_`.
- Email form not sending:
  - Verify EmailJS credentials and that the public key/service/template are correct.

If you encounter other issues, open an issue in the repository with detailed steps to reproduce.

---

## Author

ICLOUD maintained by alymehroz512  
GitHub: https://github.com/alymehroz512

Live site: https://icloudtechnologies.vercel.app

---

## License

This project is licensed under the MIT License — see the LICENSE file for details.
