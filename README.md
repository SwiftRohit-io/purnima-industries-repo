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
| `npm run deploy`    | Build and deploy to Firebase Hosting   |
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

| Variable           | Default                           | Purpose                                                                                                                                                                                                                                      |
| ------------------ | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_QUOTE_EMAIL` | `purnimaindustries2022@gmail.com` | Inbox the quote form addresses                                                                                                                                                                                                               |
| `VITE_GTAG_ID`     | `AW-18504839090`                  | Google Ads tag; set empty to disable                                                                                                                                                                                                         |
| `VITE_SITE_URL`    | _(empty)_                         | Public site address, e.g. `https://purnima-industries.web.app`. Makes the link-preview image an absolute URL so WhatsApp, LinkedIn and Facebook show it. Set it in `.env.production` (committed) or `.env.production.local` before building. |

Analytics only loads in production builds. A successful quote submission fires a
`generate_lead` event.

## Quote form

The form validates input (name, Indian 10-digit mobile, service, details) and opens the visitor's
email client with a pre-filled message, exactly like the original site. To send directly from the
site instead, replace `onOpenMailto` in `QuoteForm` with a call to a form backend
(e.g. Formspree, Web3Forms or your own API).

## Deployment

`npm run build` outputs a static site in `dist/`. It is set up for **Firebase Hosting**
(Google Cloud): `firebase.json` serves `dist/`, rewrites every path to `index.html`, and caches
the hashed files in `dist/assets/` for a year.

One-time setup:

```bash
npm install -g firebase-tools
firebase login
firebase use --add            # pick your Firebase project; this writes .firebaserc (commit it)
echo "VITE_SITE_URL=https://<project-id>.web.app" > .env.production.local
```

Every deploy after that:

```bash
npm run deploy                # builds, then runs firebase deploy --only hosting
```

The `dist/` folder also works on Vercel, Netlify, Cloudflare Pages or any static web server.

### Cloud Run

The `Dockerfile` builds the site and serves `dist/` with nginx on port 8080, so Cloud Run can
run it directly. Either deploy from Cloud Shell:

```bash
gcloud run deploy purnima-website --source . --region asia-south1 --allow-unauthenticated
```

or connect the GitHub repo in the Cloud Run console (**Continuously deploy from a repository**)
and choose **Dockerfile** as the build type, not Google Cloud's buildpacks. Builds from GitHub
read `VITE_SITE_URL` from the committed `.env.production`.
