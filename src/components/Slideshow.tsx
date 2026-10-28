import { useCallback, useEffect, useState, type KeyboardEvent } from 'react';
import { img, pos } from '../lib/pos';

export interface Testimonial {
  quote: string;
  author: string;
  image: string;
  imageX: number;
  boxX: number;
  boxHeight: number;
  textX: number;
  textWidth: number;
  /** y of the divider line and author, relative to the slideshow */
  ruleY: number;
  authorY: number;
  authorTracking?: string;
}

const INTERVAL_MS = 5000;

function Arrow() {
  return (
    <svg viewBox="0 0 39 11" aria-hidden="true">
      <path d="m33.5 0-.7.7L37.1 5H0v1h37.1l-4.3 4.3.7.7L39 5.5z" />
    </svg>
  );
}

export default function Slideshow({ slides, initial = 0 }: { slides: Testimonial[]; initial?: number }) {
  const [index, setIndex] = useState(initial);
  const [paused, setPaused] = useState(false);
  const go = useCallback((n: number) => setIndex((n + slides.length) % slides.length), [slides.length]);

  // Restarting the timer whenever the slide changes keeps manual navigation from
  // being followed by an immediate auto-advance. Hovering or focusing the
  // slideshow holds the current slide so it can be read.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), INTERVAL_MS);
    return () => clearTimeout(t);
  }, [index, go, paused]);

  function handleKey(e: KeyboardEvent<HTMLElement>) {
    if (e.key === 'ArrowLeft') go(index - 1);
    else if (e.key === 'ArrowRight') go(index + 1);
  }

  return (
    <section
      className="a slideshow"
      style={{ ...pos(0, 392, 1440, 840), background: 'var(--hero)' }}
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setPaused(false)}
      onKeyDown={handleKey}
    >
      <h2 className="a pink center" style={{ ...pos(245, 40, 949), fontSize: 56, lineHeight: '56px', letterSpacing: '-0.04em' }}>
        name of the guest
      </h2>
      {slides.map((s, i) => (
        <div key={s.author} className={`slide${i === index ? ' on' : ''}`} aria-hidden={i !== index}>
          <img className="a arch" src={img(s.image)} alt="" style={pos(s.imageX, 183, 394, 552)} />
          <div className="a" style={{ ...pos(s.boxX, 362, 558, s.boxHeight), background: '#fff' }} />
          <blockquote className="a quote" style={pos(s.textX, 412, s.textWidth)}>
            {s.quote}
          </blockquote>
          <div className="a rule rule-blue" style={pos(s.textX, s.ruleY, 38)} />
          <p className="a quote-by" style={{ ...pos(s.textX, s.authorY, 485), letterSpacing: s.authorTracking }}>
            {s.author}
          </p>
        </div>
      ))}
      <button className="a arrow prev" type="button" aria-label="Previous" style={pos(25, 467, 53, 18)} onClick={() => go(index - 1)}>
        <Arrow />
      </button>
      <button className="a arrow next" type="button" aria-label="Next" style={pos(1362, 467, 53, 18)} onClick={() => go(index + 1)}>
        <Arrow />
      </button>
      <div className="dots">
        {slides.map((s, i) => (
          <button
            key={s.author}
            className={`dot${i === index ? ' on' : ''}`}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  );
}
