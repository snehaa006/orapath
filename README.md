# orapath

Static HTML/CSS replica of the Orapath Wix site (https://alsalehyassmin.wixsite.com/orapath-1).
No framework, no build step required to view: open `index.html` in a browser.

## Pages

| File | Original page |
| --- | --- |
| `index.html` | Home |
| `s-projects-side-by-side.html` | Projects (panel sessions) |
| `session-1.html` | Session 1 |
| `projects.html` | Interview Projects |
| `about.html` | About |
| `upcoming-events.html` | Upcoming Events |
| `contact.html` | Contact |

## Layout

Positions were measured from the live site at a 1440px viewport. Elements use the
`.a` helper in `assets/style.css`: `--x`/`--w` are pixels on a 1440 canvas (rendered
as percentages, so the page scales horizontally like the Wix grid), `--y`/`--h` are
fixed pixels.

## Shared header and footer

The header and footer live in `partials/`. After editing either, sync them into every
page with:

```bash
node build.js
```
