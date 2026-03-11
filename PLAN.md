# PLAN.md — Twinstack Explorer Portfolio

## Project Goal
A personal portfolio website for Twinstack — a crypto & AI hobbyist who runs blockchain testnet nodes.
Showcases identity, node history, and social links. Dark crypto aesthetic.

## Tech Stack
- React 18 + Vite 5
- Tailwind CSS v3
- @react-spring/web (BlurText dependency)
- Google Fonts: JetBrains Mono + Inter

## Sections
1. **Navbar** — fixed top, logo + nav links + online pulse indicator
2. **Hero** — BlurText heading, ShinyText tagline, CTA buttons, scroll indicator
3. **About** — Bio text + stats grid (10+ testnets, 7 networks, 3+ years, 4 active)
4. **Nodes** — Card grid split into Active and Past testnets
5. **Contact** — Social links (Twitter/X, GitHub, Discord) + footer

## Node List (editable in Nodes.jsx)
### Active
- Ritual (Infernet / AI)
- Alignerd (AI Validator)
- Aztec (ZK L2)
- Story Protocol (IP L1)
- Waku (P2P messaging)

### Ended
- Nulink (Privacy)
- Nillion (Blind compute)
- Lava Network (RPC)

## Design Tokens
- bg: `#0a0a0a`
- green accent: `#00ff88`
- cyan accent: `#00e5ff`
- glass: `rgba(255,255,255,0.03)` + `backdrop-filter: blur(12px)`
- grid bg: subtle 50px grid lines

## Deployment
- Target: GitHub Pages or Vercel
- Repo: `twinstack-portfolio` on GitHub
