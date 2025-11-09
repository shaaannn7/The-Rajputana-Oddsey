
# The Rajputana Odyssey

A modern, responsive React + Vite travel brochure for Rajasthan. This single-page app showcases destinations, travel packages and sample trip plans with a clean UI and lazy-loaded routes.

## Features

- React + TypeScript + Vite
- Lazy-loaded routes for fast initial load
- Modular, reusable components
- Image galleries, modals and lightweight animations
- Sample data in `data/` (destinations, packages, plans)

## Tech

- React 19
- TypeScript
- Vite (dev server & production build)
- React Router
- Tailwind / custom CSS utilities

---

## Quick start (Windows PowerShell)

Prerequisites: Node.js 18+ installed.

1. Open PowerShell and change to the project folder:

```powershell
cd 'C:\Users\shaan\Downloads\the-rajputana-odyssey (2)'
```

2. Install dependencies:

```powershell
npm install
```

3. Start development server (Vite):

```powershell
npm run dev
# or npm run dev -- --open
```

Open the URL printed by Vite (e.g. `http://localhost:5173`). Do NOT open `index.html` directly using the file:// protocol.

---

## Build and preview (production)

```powershell
npm run build
npm run preview
```

The `npm run build` output will be in `dist/`. `npm run preview` serves the built files locally (production-like).

## Type checking (optional)

Vite's build may not fail on TypeScript errors. Run a type-only check:

```powershell
npx tsc --noEmit
```

Or add a `typecheck` script in `package.json`:

```json
"typecheck": "tsc --noEmit"
```

and run `npm run typecheck`.

---

## Deploy

Recommended: Vercel or Netlify for automatic deployments and PR previews. Alternatively, use GitHub Pages.

If deploying to GitHub Pages at `https://<user>.github.io/<repo>/`, set `base` in `vite.config.ts`:

```ts
export default defineConfig({
	base: '/repo-name/',
	plugins: [react()]
})
```

Then add a GitHub Actions deploy workflow or use Vercel/Netlify settings to build (`npm run build`) and publish the `dist/` folder.

---

## Project structure (important files)

```
App.tsx
index.tsx
index.html
vite.config.ts
package.json
components/
data/ (destinations.ts, packages.ts, plans.ts)
pages/ (React pages)
```

Note: This repo organizes components and pages at the project root as shown.

---

## Troubleshooting

- "npm is not recognized": install Node.js and restart PowerShell.
- Blank/white page: open browser DevTools (F12) → Console for errors. Also ensure you open the Vite URL, not the file:// path.
- Build errors: paste `npm run build` output here and I'll help diagnose.

---

## Contributing

- Fork the repo, create a feature branch, open a PR to `main`.
- Please run `npm install` and `npm run dev` locally before opening a PR.
- Add tests or type checks where applicable.

---

## License

Add a `LICENSE` file (MIT recommended) or choose your preferred license.

---

If you want, I can also add a GitHub Actions CI + deploy workflow, `.gitignore`, or a `typecheck` script to `package.json`. Tell me which and I'll add them.
