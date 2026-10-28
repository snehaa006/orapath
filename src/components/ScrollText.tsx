import type { CSSProperties } from 'react';

/**
 * A paragraph that lights up word by word as it scrolls through the viewport. Words between
 * asterisks also get a pink marker highlight that draws in once they are lit.
 */
export default function ScrollText({ text, className = '' }: { text: string; className?: string }) {
  const words = text.trim().split(/\s+/);
  let mark = false;
  return (
    <p className={`scroll-text ${className}`} data-progress="" data-start="0.95" data-end="0.5" style={{ '--n': words.length } as CSSProperties}>
      {words.map((raw, i) => {
        let word = raw;
        if (word.startsWith('*')) {
          mark = true;
          word = word.slice(1);
        }
        const marked = mark;
        if (word.endsWith('*')) {
          mark = false;
          word = word.slice(0, -1);
        }
        return (
          <span key={i} className={marked ? 'mk' : undefined} style={{ '--i': i } as CSSProperties}>
            {word}{' '}
          </span>
        );
      })}
    </p>
  );
}
