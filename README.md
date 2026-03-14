# Brainwave Landing Page – React, Vite, TypeScript, TailwindCSS, Framer Motion Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055)](https://www.framer.com/motion/)

A modern, single-page landing site for an AI chat product. It is built as a front-end showcase with React, Vite, TypeScript, and Tailwind CSS. The project is aimed at learning and reuse: you get a full landing layout (hero, features, pricing, roadmap, footer), scroll-based animations with Framer Motion, a responsive header with mobile menu, and a data-driven structure so you can adapt content and styling without touching every component. No backend or API is required—everything runs in the browser. Below you’ll find how to run it, how it’s structured, and how to reuse or extend it for your own projects.

- **Live Demo:** [https://brainwave-ui-landing.vercel.app/](https://brainwave-ui-landing.vercel.app/)

![Screenshot 2025-07-30 at 13 26 23](https://github.com/user-attachments/assets/56060732-b01f-4ed0-955c-76247b9d1ebe)
![Screenshot 2025-07-30 at 13 26 45](https://github.com/user-attachments/assets/577eca3a-a04e-46c5-b0b9-7c2e0ab7de94)
![Screenshot 2025-07-30 at 13 27 01](https://github.com/user-attachments/assets/2a80408e-cd8c-4d54-ac3f-5d32eb5a1f0b)
![Screenshot 2025-07-30 at 13 27 16](https://github.com/user-attachments/assets/502cb83d-bb2d-48c5-a439-98ba2c5eba6f)
![Screenshot 2025-07-30 at 13 27 30](https://github.com/user-attachments/assets/9853f330-d763-44f3-b345-814832e9f3fd)
![Screenshot 2025-07-30 at 13 27 41](https://github.com/user-attachments/assets/546e4b4c-4ca5-4ce3-a39b-fe0a46a5444c)
![Screenshot 2025-07-30 at 13 27 52](https://github.com/user-attachments/assets/71d45c5e-7355-49cf-a40f-18afa17ffa1c)
![Screenshot 2025-07-30 at 13 28 14](https://github.com/user-attachments/assets/a784062c-f38e-447d-b89b-7313feac3af7)
![Screenshot 2025-07-30 at 13 28 40](https://github.com/user-attachments/assets/ae17bea4-fbf7-4122-93d2-c46878b62d5a)
![Screenshot 2025-07-30 at 13 28 54](https://github.com/user-attachments/assets/4bebed12-23d5-45e1-a01e-40756087869e)
![Screenshot 2025-07-30 at 13 29 08](https://github.com/user-attachments/assets/328d9c8a-da42-4c13-a12e-f02059c842fd)

## Table of Contents

- [Project Overview](#project-overview)
- [How to Run & Use](#how-to-run--use)
- [Environment Variables (.env)](#environment-variables-env)
- [Features & Functionality](#features--functionality)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Components Walkthrough](#components-walkthrough)
- [Data & Constants](#data--constants)
- [API & Backend](#api--backend)
- [Reusing Components in Other Projects](#reusing-components-in-other-projects)
- [Keywords & Concepts](#keywords--concepts)
- [License](#license)

---

## Project Overview

This repository is a **front-end only** landing page. It demonstrates:

- A full landing layout: **Header** → **Hero** → **Benefits** → **Collaboration** → **Services** → **Pricing** → **Roadmap** → **Footer**.
- **React 19** with **TypeScript** for type-safe components.
- **Vite 6** for fast dev server and optimized production builds.
- **Tailwind CSS** for utility-first styling and a custom design system (colors, typography, spacing).
- **Framer Motion** for scroll-triggered and staggered animations (fade, slide, stagger).
- **React Router** (BrowserRouter) for hash-based in-page navigation and future-ready routing.
- **Centralized content** in `src/constants/index.ts` so copy, links, and images can be changed in one place.

There is **no backend, no database, and no API**. All content is static or driven by the constants file. The site can be built and deployed to any static host (e.g. Vercel, Netlify).

---

## How to Run & Use

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** (or yarn/pnpm)

### Install dependencies

```bash
npm install
```

### Development

Start the Vite dev server (hot reload):

```bash
npm run dev
```

Then open the URL shown in the terminal (e.g. `http://localhost:5173`).

### Build for production

Type-check and build:

```bash
npm run build
```

Output is in the `dist/` folder. Serve it with any static file server.

### Preview production build locally

```bash
npm run preview
```

### Lint

Run ESLint (TypeScript + React):

```bash
npm run lint
```

---

## Environment Variables (.env)

**You do not need any environment variables to run this project.** It works out of the box with no `.env` file.

If you later add features that need config (e.g. analytics ID, feature flags), you can:

1. Create a `.env` in the project root (and add `.env` to `.gitignore` if it already isn’t).
2. Define variables with the `VITE_` prefix so Vite exposes them to the client, e.g. `VITE_APP_NAME=Brainwave`.
3. Use them in code as `import.meta.env.VITE_APP_NAME`.

Example optional `.env`:

```env
# Optional – not required for current project
VITE_APP_NAME=Brainwave
VITE_DEMO_URL=https://brainwave-ui-landing.vercel.app/
```

Again: the current codebase does not read any env vars; the above is only for future or optional use.

---

## Features & Functionality

| Feature               | Description                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Responsive header** | Logo, nav links (Features, Pricing, How to use, Roadmap), “New account” / “Sign in”, and a mobile hamburger menu. Active link is highlighted by hash. |
| **Hero**              | Headline, subtitle, “Get started” CTA, hero image with gradient border, parallax-style elements, notification card, and company logos.                |
| **Benefits**          | Grid of feature cards (icons, text, “Explore more”) with hover and scroll-in animations.                                                              |
| **Collaboration**     | Two-column layout: feature list + central “app wheel” with integration icons (Figma, Notion, Discord, etc.).                                          |
| **Services**          | Three blocks: “Smartest AI” (image + list), “Photo editing” card, “Video generation” with icons and video bar.                                        |
| **Pricing**           | Decorative sphere/stars, heading, and pricing cards (Basic, Premium, Enterprise) with features and CTAs.                                              |
| **Roadmap**           | Grid of roadmap items with status (Done / In progress), dates, images, and “Our roadmap” button.                                                      |
| **Footer**            | Copyright and social links (Discord, Twitter, Instagram, Telegram, Facebook).                                                                         |
| **Animations**        | Sections and cards use Framer Motion (fade-in, slide from left/right/up/down, stagger on scroll).                                                     |
| **Mobile menu**       | Hamburger opens full-screen overlay with nav links; body scroll is locked when open.                                                                  |

Navigation is **hash-based** (e.g. `#features`, `#pricing`). There are no separate routes or pages; everything is a single scrollable page.

---

## Technology Stack

| Technology              | Role                                                    |
| ----------------------- | ------------------------------------------------------- |
| **React 19**            | UI components and hooks.                                |
| **TypeScript 5.6**      | Typed props, constants, and build-time checks.          |
| **Vite 6**              | Dev server, HMR, and production bundling.               |
| **Tailwind CSS 3.4**    | Utility classes, custom theme (colors, fonts, spacing). |
| **Framer Motion 11**    | Scroll and stagger animations.                          |
| **React Router DOM 6**  | `BrowserRouter` and `useLocation` for hash-based nav.   |
| **react-just-parallax** | Parallax effects in the hero.                           |
| **scroll-lock**         | Disable body scroll when mobile menu is open.           |

**Dev tools:** ESLint, typescript-eslint, PostCSS, Autoprefixer.

---

## Project Structure

```bash
brainwave-landing/
├── index.html              # Entry HTML, meta tags, root div
├── package.json
├── tsconfig.json            # TypeScript config
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts           # Vite + React plugin
├── tailwind.config.js       # Tailwind theme (colors, fonts, components)
├── postcss.config.js
├── eslint.config.js
├── vercel.json              # SPA rewrite for deployment
├── public/
│   ├── vite.svg             # Favicon / app icon
│   └── images/              # Optional static images
└── src/
    ├── main.tsx             # React root, Router, StrictMode
    ├── App.tsx              # Layout: Header + sections + ButtonGradient
    ├── index.css            # Tailwind imports + global/base styles
    ├── vite-env.d.ts        # Vite + asset module types, scroll-lock
    ├── lib/
    │   └── motion.ts        # Framer Motion variants (fadeInUp, stagger, etc.)
    ├── constants/
    │   └── index.ts         # Nav, hero, pricing, roadmap, benefits, socials
    ├── assets/
    │   ├── index.ts         # Re-exports of image/SVG imports
    │   ├── svg/             # React SVG components (ButtonSvg, SectionSvg, etc.)
    │   ├── benefits/        # Card backgrounds, icons
    │   ├── collaboration/   # Curves, app icons
    │   ├── pricing/         # Lines, stars
    │   ├── roadmap/         # Done/undone icons, images
    │   ├── socials/         # Social icons
    │   └── ...              # Other images (hero, services, etc.)
    └── components/
        ├── Header.tsx
        ├── Hero.tsx
        ├── Benefits.tsx
        ├── Collaboration.tsx
        ├── Services.tsx
        ├── Pricing.tsx
        ├── PricingList.tsx
        ├── Roadmap.tsx
        ├── Footer.tsx
        ├── Section.tsx      # Section wrapper + optional crosses
        ├── Heading.tsx      # Section title + tag + text
        ├── Tagline.tsx      # Small label with brackets
        ├── Button.tsx       # Primary CTA (link or button)
        ├── Generating.tsx   # “AI is generating” pill
        ├── Notification.tsx # Notification card
        ├── CompanyLogos.tsx
        └── design/          # Section-specific subcomponents
            ├── Header.tsx   # Hamburger overlay (Rings, SideLines, etc.)
            ├── Hero.tsx     # Gradient, BottomLine, BackgroundCircles
            ├── Benefits.tsx # GradientLight
            ├── Collaboration.tsx # LeftCurve, RightCurve
            ├── Pricing.tsx   # LeftLine, RightLine
            ├── Roadmap.tsx  # Gradient
            └── Services.tsx # Gradient, PhotoChatMessage, VideoBar, etc.
```

---

## Components Walkthrough

- **`App.tsx`**  
  Renders the fixed header and the main scroll area: Hero → Benefits → Collaboration → Services → Pricing → Roadmap → Footer. It also renders `ButtonGradient` once so all buttons can use the shared SVG gradient definitions.

- **`Section`**  
  Wraps each major block. It handles padding, optional “crosses” decoration, side lines, and a Framer Motion fade-in on scroll. Use it for any new section to keep layout and animation consistent.

- **`Heading`**  
  Renders an optional tagline (via `Tagline`), a title, and optional description. Used in Benefits, Pricing, Roadmap, Services for consistent section titles.

- **`Button`**  
  Renders either an `<a>` (when `href` is set) or a `<button>` (when `onClick` is used). Supports `white` style and custom `className`/`px`. Uses `ButtonSvg` for the gradient border.

- **`Header`**  
  Logo, nav links from `constants`, “New account” / “Sign in”, and mobile menu button. Uses `useLocation().hash` for active state and `scroll-lock` when the menu is open.

- **`Hero`**  
  Headline, CTA, hero image card, parallax content, notification, and company logos. Uses motion variants from `lib/motion` for fade-in and stagger.

- **`Benefits`**  
  Maps over `benefits` from constants; each card uses a background image, icon, text, and optional `GradientLight`. Cards animate in with a stagger.

- **`Collaboration`**  
  Left: feature list and “Try it now” button. Right: app wheel with icons from `collabApps`. Curves and content use `fadeInLeft` / `fadeInRight`.

- **`Services`**  
  Three areas: main “Smartest AI” block, “Photo editing” card, “Video generation” block. Uses `staggerContainer` and `staggerItem` for scroll animations.

- **`Pricing`**  
  Decorative sphere/stars, `Heading`, then `PricingList` and line decorations. Sphere and list use different motion variants.

- **`Roadmap`**  
  Heading and a grid of roadmap items (from `constants`). Each item shows date, status, image, title, and text. Cards use stagger animation.

- **`Footer`**  
  Copyright (current year) and social links from `socials`. Content fades in on scroll.

To **add a new section**: create a component (e.g. `Testimonials.tsx`), wrap content in `<Section>`, optionally use `<Heading>` and motion from `lib/motion`, then add the component in `App.tsx` between existing sections.

---

## Data & Constants

All copy and asset references used across the landing page live in **`src/constants/index.ts`**. This includes:

- **`navigation`** – Header nav items (title, url, optional `onlyMobile`).
- **`heroIcons`** – Icons shown in the hero.
- **`notificationImages`** – Images in the hero notification card.
- **`companyLogos`** – Logos in the hero footer.
- **`brainwaveServices`** / **`brainwaveServicesIcons`** – Services list and icons.
- **`roadmap`** – Roadmap items (title, text, date, status, imageUrl, colorful).
- **`collabContent`** / **`collabText`** / **`collabApps`** – Collaboration copy and app icons.
- **`pricing`** – Pricing tiers (title, description, price, features).
- **`benefits`** – Benefit cards (title, text, backgroundUrl, iconUrl, imageUrl, light).
- **`socials`** – Footer social links (title, iconUrl, url).

Assets (images, SVGs) are imported in **`src/assets/index.ts`** and re-exported; constants import from there. To change content (e.g. add a nav item or a pricing tier), edit `constants/index.ts`. To change or add images, update `assets/index.ts` and/or drop files into the correct `assets` subfolder.

---

## API & Backend

This project **does not use any API or backend**. There are no fetch calls, no environment-based API URLs, and no server. All data is:

- Either hard-coded in components, or
- Sourced from `src/constants/index.ts` (and assets from `src/assets`).

If you later connect a backend (e.g. contact form, CMS), you would:

1. Add a `VITE_API_URL` (or similar) in `.env` if needed.
2. Use `fetch` or a client (e.g. axios) in a new component or hook.
3. Keep the existing landing structure and animations as-is; only the data source would change.

---

## Reusing Components in Other Projects

You can copy and adapt parts of this repo into another React + Vite + Tailwind project:

1. **Section + Heading + Tagline**  
   Copy `Section.tsx`, `Heading.tsx`, `Tagline.tsx`, and the shared `SectionSvg` / `Brackets` (or your own icons). They only depend on Tailwind and (for `Section`) Framer Motion. Adjust class names to match your theme.

2. **Button + ButtonSvg + ButtonGradient**  
   Copy `Button.tsx`, `assets/svg/ButtonSvg.tsx`, and `assets/svg/ButtonGradient.tsx`. Render `ButtonGradient` once at app root so gradient IDs are defined. Change colors in `ButtonGradient` and `ButtonSvg` to fit your design.

3. **Motion variants**  
   Copy `src/lib/motion.ts`. Use the same `fadeInUp`, `staggerContainer`, `staggerItem`, etc. in any `motion.div` or `motion.section` in your app.

4. **Header + mobile menu**  
   Copy `Header.tsx` and `components/design/Header.tsx`. Replace `navigation` with your own links and ensure `scroll-lock` is installed. Logo and CTAs can be swapped for your brand.

5. **Constants-driven layout**  
   Use the same pattern: one `constants` file (or module) that exports nav, features, pricing, etc., and components that map over these arrays. That keeps content editable in one place.

When reusing, keep in mind:

- Tailwind config (e.g. `n-1`, `color-1`, `h1`, `body-1`) is project-specific; either copy the relevant parts of `tailwind.config.js` or replace classes with your own.
- Asset paths (e.g. `../assets`) must match your folder structure, or replace with your own assets and imports.

---

## Keywords & Concepts

- **SPA (Single Page Application)** – One HTML page; navigation is in-page (hash or client-side routing).
- **Landing page** – A single scrollable page aimed at conversion (CTAs, features, pricing).
- **Component-based UI** – Building the interface from reusable React components.
- **TypeScript** – Typed JavaScript; interfaces in `constants` and props in components.
- **Vite** – Build tool that uses ES modules and fast HMR during development.
- **Tailwind CSS** – Utility-first CSS; design tokens (colors, spacing) live in `tailwind.config.js`.
- **Framer Motion** – Declarative animations (e.g. `initial`, `whileInView`, `variants`) for enter/scroll effects.
- **Hash routing** – Links like `#features`; `useLocation().hash` is used to highlight the active nav item.
- **Scroll lock** – Disabling body scroll when the mobile menu is open so only the menu scrolls.
- **Parallax** – Slight movement of elements on scroll (here via `react-just-parallax` in the hero).

---

## Conclusion

This repo is a **learning and template** codebase for a modern landing page. It shows how to structure a React + TypeScript + Vite app, use Tailwind for layout and theme, drive content from a constants file, and add scroll-based animations with Framer Motion. You can run it locally with `npm install` and `npm run dev`, deploy the `dist/` folder to any static host, and reuse or extend components and patterns in your own projects. No backend or environment variables are required to run it as-is.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

---

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
