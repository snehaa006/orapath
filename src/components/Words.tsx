import { Fragment, type CSSProperties } from 'react';

type Tag = 'h1' | 'h2' | 'h3' | 'p';

// Splits "What do we *do?*" into words; words between asterisks are set as <em>. A run of bare
// asterisks ("Session with ***") is kept as text.
function parse(text: string) {
  let em = false;
  return text.split(' ').map((raw) => {
    let word = raw;
    if (/^\*[^*]/.test(word)) {
      em = true;
      word = word.slice(1);
    }
    const isEm = em;
    if (/[^*]\*$/.test(word)) {
      em = false;
      word = word.slice(0, -1);
    }
    return { word, em: isEm };
  });
}

/** A heading whose words rise into place one after another when it scrolls into view. */
export default function Words({ text, as: Tag = 'h2', className = '' }: { text: string; as?: Tag; className?: string }) {
  const words = parse(text);
  return (
    <Tag className={`words ${className}`} data-reveal="words" aria-label={words.map((w) => w.word).join(' ')}>
      {/* Each word is masked by its own box; the spaces stay outside the masks so they don't collapse. */}
      {words.map(({ word, em }, i) => (
        <Fragment key={i}>
          {i > 0 && ' '}
          <span className="w" aria-hidden="true">
            <span style={{ '--i': i } as CSSProperties}>{em ? <em>{word}</em> : word}</span>
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}
