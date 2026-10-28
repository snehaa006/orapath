import type { CSSProperties } from 'react';

const WORDS = ['Educate', 'Guide', 'Empower'];
const ROWS = 4;

// Rows of the three pillars, alternating solid and outlined, sliding in opposite directions as the
// band scrolls past. Decorative: the same words are on the page as text.
export default function KineticType() {
  return (
    <div className="kinetic" data-progress="" data-start="1" data-end="0" aria-hidden="true">
      {Array.from({ length: ROWS }, (_, row) => (
        <div key={row} className="kinetic-row" style={{ '--dir': row % 2 ? 1 : -1 } as CSSProperties}>
          {Array.from({ length: 4 }, (_, k) =>
            WORDS.map((w, j) => (
              <span key={`${k}${w}`} className={(j + row) % 2 ? 'outline' : undefined}>
                {w}
              </span>
            )),
          )}
        </div>
      ))}
    </div>
  );
}
