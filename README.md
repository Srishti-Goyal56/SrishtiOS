# SrishtiOS
Retro-desktop portfolio. React + Vite.
## Run: `npm install` → `npm run dev` → `npm run build`
## Edit content
- Name, links, About, Toolkit: `src/data/profile.js` (fill `linkedin`, `email`, `resumeUrl`; empty = hidden in production)
- Projects: `src/data/projects.js` (fill the `[Add ...]` placeholders, especially Landslide Risk Monitoring AI)
- Resume: put `resume.pdf` in `public/`, set `resumeUrl: '/resume.pdf'`
- Screenshots: put images in `public/images/`, set `images: ['/images/aiops.png']`
## GitHub
`git init && git add . && git commit -m "SrishtiOS" && git branch -M main && git remote add origin <your-repo-url> && git push -u origin main`
## Netlify
Add new site → Import from GitHub. Build command `npm run build`, publish directory `dist`. Every push to `main` redeploys.
