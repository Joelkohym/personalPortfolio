# Personal Portfolio

A modern, dark-themed portfolio site built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed for Vercel deployment.

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Customization

All your personal info lives in **one file**: `src/data/site-config.ts`

| Section        | What to edit                                        |
|----------------|-----------------------------------------------------|
| `siteConfig`   | Name, title, tagline, email, bio, social links      |
| `projects`     | Your projects — set `featured: true` for large cards |
| `experiences`  | Work history with highlights                        |
| `skills`       | Tech stack pills shown in the About section         |

### Adding project images
Drop screenshots into `public/projects/` and reference them in site-config as `/projects/filename.png`.

### Adding your résumé
Place your PDF at `public/resume.pdf`.

## Deploy to Vercel

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Deploy — no env vars needed

## Structure

```
src/
├── app/            # Layout, page, global styles
├── components/     # Navbar, Hero, About, Projects, Experience, Contact
└── data/
    └── site-config.ts   # ← All your content here
```
