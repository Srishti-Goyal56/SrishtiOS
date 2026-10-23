# SrishtiOS

Retro desktop-style portfolio of Srishti Goyal, a B.Tech Computer Science student (Cloud Engineering & DevOps Automation).
Built with React 18 and Vite 5 (JavaScript).

- Live: https://srishti-os-six.vercel.app/
- GitHub: https://github.com/Srishti-Goyal56/SrishtiOS

## Features
- Desktop with icons, draggable-style windows, minimize/close and a taskbar
- About Me window: education, Xebia internship, skills, certifications, interests and contact
- My Projects folder: every project listed once, with a dynamic project count, GitHub and live-demo buttons (shown only when a link exists) and a detail window per project
- Toolkit and Contact windows; resume served from `public/resume.pdf`

## Run locally
```
npm install
npm run dev       # development server
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Edit content
- Profile, About, experience, certifications, skills and contact links: `src/data/profile.js`
- Projects: `src/data/projects.js` (leave `github` or `demo` empty to hide that button; never use localhost URLs)
- Resume: replace `public/resume.pdf`
- Screenshots: add images to `public/images/` and list them in a project's `images` array

## Project structure
```
src/
  App.jsx            window manager and desktop icons
  App.css, index.css styles
  components/        Desktop, DesktopIcon, Window, Taskbar, Panels, ProjectWindow
  data/              profile.js, projects.js
public/              resume.pdf, images/
```

## Deploy on Vercel
The project is connected to Vercel (project `srishti-os`). Vercel detects Vite automatically (build command `npm run build`, output directory `dist`).
Every push to the production branch (usually `main`) triggers a new deployment. Check progress on the project's Deployments tab in the Vercel dashboard.
