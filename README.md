# Manu Prathap — Portfolio (Angular 19)

A chat-style personal portfolio built with **Angular 19 standalone components, SSR, Signals, and SCSS**.

## ✨ Features

- 💬 **Chat-style interface** — type "projects", "skills", "experience" etc. to navigate
- 🌓 **Light / dark mode** with localStorage persistence
- ⚡ **SSR + prerender** for fast first paint and SEO
- 🎯 **Angular Signals** for state management
- 📱 **Fully responsive** (desktop / tablet / mobile)
- 🎨 **Project case studies** in Problem → Build → Result format
- 🔤 **Tabler Icons** + **Bricolage Grotesque** typography
- 🪪 **OpenGraph + Twitter meta tags** for link previews

## 🛠️ Tech Stack

- Angular 19.2 (standalone components)
- Angular SSR + prerender
- TypeScript 5.7
- SCSS with CSS custom properties
- Tabler Icons (CDN)
- Google Fonts (Bricolage Grotesque, Space Grotesk, JetBrains Mono)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (tested on 22.x)
- npm 10+

### Install & Run

```bash
npm install
npm start              # dev server on http://localhost:4200
```

### Production Build

```bash
npm run build          # builds to dist/manu-portfolio (browser + server)
npm run serve:ssr:manu-portfolio   # runs the SSR server
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home-section/      # Hero (avatar, typing animation, theme toggle)
│   │   ├── chat-screen/       # Scrolling chat area
│   │   ├── section/           # Renders all 9 content sections
│   │   └── input-box/         # Chat input + menu popup + footer
│   ├── data/
│   │   └── portfolio.data.ts  # All your content lives here — edit this!
│   ├── models/
│   │   └── chat.models.ts     # TypeScript interfaces
│   ├── services/
│   │   ├── chat.service.ts    # Signals-based chat state
│   │   └── theme.service.ts   # Light/dark theme
│   ├── app.component.ts
│   └── app.config.ts
├── assets/
│   ├── images/                # Profile photo (replace profile.svg with your .jpg/.png)
│   ├── projects/              # 6 project preview SVGs (replace with real screenshots)
│   └── resume.pdf             # ← REPLACE with your real resume PDF
├── index.html
└── styles.scss                # Global styles + theme variables
```

## ✏️ How to Customize

All your content lives in **`src/app/data/portfolio.data.ts`**. Open it and edit:

- `PROFILE` — name, tagline, contact info, social links
- `PROJECTS` — 6 project case studies (Problem / Build / Result)
- `EXPERIENCE` — work history
- `SKILLS` — tech skills (grouped by category automatically)
- `EDUCATION` — degrees
- `LANGUAGES` — language proficiency
- `CERTIFICATIONS` — courses & certs

### Replace the placeholders

| Placeholder                     | Replace with                                     |
| ------------------------------- | ------------------------------------------------ |
| `public/assets/images/profile.svg` | Your actual profile photo (rename to .jpg)        |
| `public/assets/projects/*.svg`  | Real screenshots of your projects (or keep SVGs) |
| `public/assets/resume.pdf`      | Your real resume PDF                             |

### Change colors / theme

Edit CSS variables in `src/styles.scss`:

```scss
:root {
  --accent: #0066ff;       /* light mode accent (default blue) */
}
body.dark-mode {
  --accent: #00d4ff;       /* dark mode accent (default cyan) */
}
```

## 🚢 Deploy to Vercel (recommended)

The repo is Vercel-ready out of the box (Angular SSR is auto-detected):

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: GitHub → vercel.com → Import Project
# Just push this folder to GitHub, then import it on vercel.com
# Vercel auto-detects Angular and configures the SSR build.
```

### Deploy to Firebase Hosting (alternative)

```bash
npm i -g firebase-tools
firebase init hosting    # choose "dist/manu-portfolio/browser" as public dir
npm run build
firebase deploy
```

For Firebase SSR you'd need Cloud Run + the Angular SSR runtime — Vercel is much simpler.

## 📜 License

MIT — feel free to fork and adapt.

---

Built with Angular 19 · SSR · Signals · TypeScript
