# Purnima Industries — Website

Marketing site for **Purnima Industries**, Ambernath MIDC — fiber laser cutting, CNC bending,
sheet metal fabrication and cable tray manufacturing.

## Tech stack

| Concern     | Choice                                                      |
| ----------- | ----------------------------------------------------------- |
| UI          | React 19 + TypeScript (strict)                              |
| Build / dev | Vite                                                        |
| Styling     | Tailwind CSS v4 (CSS-first `@theme`, design tokens)         |
| Forms       | react-hook-form + Zod validation                            |
| Testing     | Vitest + Testing Library (jsdom)                            |
| Quality     | ESLint (typescript-eslint, react-hooks, jsx-a11y), Prettier |
| CI          | GitHub Actions — format, lint, typecheck, test, build       |

## Getting started

```bash
nvm use            # Node 22
npm install
cp .env.example .env.local   # optional
npm run dev        # http://localhost:5173
```

| Script              | What it does                           |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Start the dev server                   |
| `npm run build`     | Typecheck and build to `dist/`         |
| `npm run preview`   | Serve the production build locally     |
| `npm run lint`      | ESLint                                 |
| `npm run format`    | Prettier (with Tailwind class sorting) |
| `npm run typecheck` | `tsc -b`                               |
| `npm test`          | Run unit/component tests               |

## Project structure

```
src/
├── assets/              Images (logo, shop floor, press brake, works gate, work/ gallery)
├── components/
│   ├── layout/          Header, Footer, MobileActionBar
│   ├── sections/        Hero, About, Services, Work, Capability, Location, Contact, QuoteForm
│   └── ui/              Button, Container, Eyebrow, Section, PhotoFrame, SpecTable, Lightbox
├── config/site.ts       Company details: phones, email, address, map coordinates
├── data/content.ts      Page content: services, machines, materials, stats, badges
├── data/work.ts         Recent work gallery entries
├── lib/                 Quote schema + mailto builder, analytics, cn() helper
├── styles/index.css     Tailwind entry + design tokens (light/dark)
├── types/               Shared content types
└── App.tsx              Page composition
```

### Editing content

- **Contact details / address / map pin** → `src/config/site.ts`
- **Services, machines, material capacities, stats, trust badges, form options** → `src/data/content.ts`
- **Recent work gallery** → `src/data/work.ts`. Add `<slug>-600.webp` and `<slug>-1200.webp` (square)
  to `src/assets/work/`, then add one entry with that slug, a title, a spec line and alt text.
- **Colours & fonts** → tokens at the top of `src/styles/index.css`. Dark mode follows the OS
  preference; force a theme with `<html data-theme="light|dark">`.

### Environment variables

| Variable           | Default                           | Purpose                              |
| ------------------ | --------------------------------- | ------------------------------------ |
| `VITE_QUOTE_EMAIL` | `purnimaindustries2022@gmail.com` | Inbox the quote form addresses       |
| `VITE_GTAG_ID`     | `AW-18504839090`                  | Google Ads tag; set empty to disable |

Analytics only loads in production builds. A successful quote submission fires a
`generate_lead` event.

## Quote form

The form validates input (name, Indian 10-digit mobile, service, details) and opens the visitor's
email client with a pre-filled message, exactly like the original site. To send directly from the
site instead, replace `onOpenMailto` in `QuoteForm` with a call to a form backend
(e.g. Formspree, Web3Forms or your own API).

## Deployment

`npm run build` outputs a static site in `dist/` that can be hosted on Vercel, Netlify,
Cloudflare Pages, GitHub Pages or any static web server.
