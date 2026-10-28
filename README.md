# orapath

React + TypeScript site for Orapath, built with Vite. It started as a replica of the Orapath Wix site
(https://alsalehyassmin.wixsite.com/orapath-1) and has since been redesigned. It keeps that site's
palette, copy and imagery on a responsive layout.

## Getting started

```bash
npm install
npm run dev
```

`npm run build` type-checks and writes a production build to `dist/`; `npm run preview` serves it.

## Routes

Paths match the original Wix URLs.

| Path | Component |
| --- | --- |
| `/` | `src/pages/Home.tsx` |
| `/s-projects-side-by-side` | `src/pages/PanelSessions.tsx` |
| `/session-1` | `src/pages/Session.tsx` |
| `/projects` | `src/pages/InterviewProjects.tsx` |
| `/about` | `src/pages/About.tsx` |
| `/upcoming-events` | `src/pages/UpcomingEvents.tsx` |
| `/contact` | `src/pages/Contact.tsx` |

Shared pieces (header, footer, forms, slideshow, buttons, pictures and the motifs below) live in
`src/components/`; images are in `public/img/`. Because this is a single-page app, the host must
rewrite unknown paths to `index.html` for deep links to work; `vercel.json` does this on Vercel
(static files still take precedence).

## Design

- **Colour:** the original blue `#5a70a0` and pink `#d7a7c1`, plus a deep shade (`--ink`) and light
  tints (`--blush`, `--mist`) of them, defined at the top of `src/styles.css`.
- **Type:** Fraunces (serif display, with pink italic accents) and DM Sans (body). Both are
  self-hosted via `@fontsource-variable`.
- **Motifs:** the concept comes from the logo and the name. The guiding star inside the logo's "O"
  (`Star.tsx`, `Mark.tsx`) marks each step and session. Lines trace the path as you scroll: the hero
  swoosh, the Educate - Guide - Empower path on Home, and the session timeline. Arched photo frames
  and white cards overlapping photos carry over from the original layout.
- **Layout:** normal responsive flow with a `.wrap` container, collapsing to one column on phones,
  with a full-screen menu below 1080px.

## Motion

All animation ends in the static layout and is switched off under `prefers-reduced-motion`.

- `src/lib/reveal.ts` reveals elements marked `data-reveal="up|fade|left|right|scale|line|img|words"`
  as they scroll into view, staggered top-to-bottom: images rise behind a curtain, headings rise word
  by word (`Words.tsx`).
- `src/lib/scroll.ts` turns scroll position into CSS variables. `data-parallax` makes images drift
  inside their frames. `data-progress` drives the word-by-word highlight of the mission statement
  (`ScrollText.tsx`), the drawn path and its stars, the sliding kinetic type, and the timeline fill.
- Page changes play a blue/pink curtain. The hero letters rise in as the logo's ring draws and its
  star spins. A rotating badge, a marquee band, and a header that hides on scroll down round it out.
- Hover states cover buttons (colour sweep), nav pills, the team list, event rows, and project cards
  that tilt toward the pointer. The testimonial slideshow shows a progress bar, pauses on
  hover/focus, and responds to arrow keys and swipes.
