# New Aviv Website

Revised marketing site for [New Aviv](https://www.newaviv.com/), a counseling practice offering hope, care, and healing for young adults, couples, and families—primarily through virtual appointments, with in-person care at 240 Elm St, Floor 2, Somerville, Massachusetts.

Built with **Next.js**, **React**, **Tailwind CSS**, and **Lucide** icons. Branding and copy are adapted from newaviv.com.

## Pages

- `/` — Home
- `/about` — About New Aviv
- `/services` — Individual, couples, family, teen, and group counseling
- `/therapists` — Clinician directory with filters
- `/employment` — Open roles (MSW, LCSW, LICSW, LMHC, PMHNP/FNP)
- `/resources` — Crisis and community hotlines
- `/contact` — Inquiry form + FAQ

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- Logo is stored at `public/logo.png` (sourced from New Aviv Squarespace assets).
- Therapist photos load from `images.squarespace-cdn.com`.
- Contact phone on the live site: **(857) 284-8639**. Confirm the public email before production use (`contact@newaviv.com` is a placeholder pending confirmation).
- Forms are client-side success states until a backend or form service is wired.
