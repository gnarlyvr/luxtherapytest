# Lux Therapy Website

Professional marketing site for Lux Therapy, a group therapy practice. Built with **Next.js**, **React**, **Tailwind CSS**, and **Lucide** icons.

## What’s included

| Path | Description |
|------|-------------|
| `src/app/` | Pages (Home, About, Services, Therapists, Employment, Resources, Contact) |
| `src/components/` | Shared UI (Header, Footer, forms, FAQ, therapist filters) |
| `src/data/` | Site copy, services, therapists, FAQs |
| `public/` | Static assets |
| `package.json` | Dependencies and npm scripts |
| `README.md` | This file — setup and usage instructions |

`node_modules` and `.next` are **not** included. Install dependencies after unzipping.

## Requirements

- [Node.js](https://nodejs.org/) 20+ (LTS recommended)
- npm (comes with Node.js)

## Setup instructions

1. Unzip this archive to a folder of your choice.
2. Open a terminal in that folder (the one that contains `package.json`).
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the site in your browser:

**http://localhost:3000**

## Production build

```bash
npm run build
npm run start
```

## npm scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot reload) |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Site map

- `/` — Home / landing
- `/about` — About Lux Therapy
- `/services` — Our Services
- `/therapists` — Meet our Therapists (filterable)
- `/employment` — Careers / openings
- `/resources` — Reading, crisis lines, newsletter
- `/contact` — Contact form + FAQ (primary CTA)

## Before going live

- Replace placeholder phone, address, email, and fax in `src/data/site.ts`
- Add a real Google Maps embed on the Contact page
- Wire contact / careers / newsletter forms to a backend or form service
- Swap Unsplash images for licensed photography if required
- Update `metadataBase` in `src/app/layout.tsx` to your real domain

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
