# orapath

React + TypeScript replica of the Orapath Wix site (https://alsalehyassmin.wixsite.com/orapath-1),
built with Vite.

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

The header, footer, forms and testimonial slideshow live in `src/components/`; images are in
`public/img/`. Because this is a single-page app, the host must rewrite unknown paths to
`index.html` for deep links to work.

## Layout

Positions were measured from the live site at a 1440px viewport. Elements use the `.a` class with
the `pos(x, y, w, h?)` helper from `src/lib/pos.ts`: `x`/`w` are pixels on a 1440 canvas (rendered
as percentages, so the page scales horizontally like the Wix grid), `y`/`h` are fixed pixels.
