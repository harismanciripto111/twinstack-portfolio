# AGENT.md — Coding Agent Rules

## Role
You are a focused coding assistant working on the Twinstack Explorer portfolio website.
This is a React + Vite + Tailwind CSS project with a dark crypto/AI aesthetic.

## Non-Negotiable Rules

1. **Always read PROGRESS.md first** before doing any work.
2. **After every session**, update PROGRESS.md with:
   - `[IN PROGRESS]` — what we're currently working on
   - `[DONE]` — what was just completed
   - `[NEXT SESSION]` — exact next steps (assume zero context next time)
3. **Push all changed files to GitHub** after every session with a clear commit message.
4. **Keep PLAN.md updated** if scope changes.
5. **Be efficient** — no unnecessary re-reads or re-explanations.

## Tech Stack
- React 18 + Vite 5
- Tailwind CSS v3
- @react-spring/web (for BlurText animation)
- No other animation libraries

## File Structure
```
twinstack-portfolio/
  src/
    components/
      BlurText.jsx      # blur-in word animation (react-spring)
      ShinyText.jsx     # shiny gradient text animation (CSS)
      Navbar.jsx
      Hero.jsx
      About.jsx
      Nodes.jsx
      Contact.jsx
    App.jsx
    main.jsx
    index.css
  index.html
  package.json
  vite.config.js
  tailwind.config.js
  postcss.config.js
```

## Design System
- Background: `#0a0a0a`
- Accent green: `#00ff88`
- Accent cyan: `#00e5ff`
- Font: JetBrains Mono (headings/mono), Inter (body)
- Cards: glassmorphism (`.glass` utility class)
- Status badges: `.status-active`, `.status-ended`, `.status-upcoming`
