import { useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from 'react';
import { img } from '../lib/page';
import Arrow from './Arrow';
import Star from './Star';

export interface Testimonial {
  quote: string;
  author: string;
  image: string;
}

const INTERVAL_MS = 5000;
const SWIPE_PX = 50;

export default function Slideshow({ slides, initial = 0 }: { slides: Testimonial[]; initial?: number }) {
  const [index, setIndex] = useState(() => ((initial % slides.length) + slides.length) % slides.length);
  const [paused, setPaused] = useState(false);
  const swipeFrom = useRef<number | null>(null);
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

  function handlePointerUp(e: PointerEvent<HTMLElement>) {
    if (swipeFrom.current === null) return;
    const dx = e.clientX - swipeFrom.current;
    swipeFrom.current = null;
    if (Math.abs(dx) > SWIPE_PX) go(index + (dx < 0 ? 1 : -1));
  }

  return (
    <section
      className="slideshow"
      aria-roledescription="carousel"
      aria-labelledby="guests"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setPaused(false)}
      onKeyDown={handleKey}
      onPointerDown={(e) => e.pointerType !== 'mouse' && (swipeFrom.current = e.clientX)}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => (swipeFrom.current = null)}
    >
      <div className="wrap">
        <h2 id="guests" className="slideshow-title" data-reveal="up">
          name of the guest
        </h2>
        <div className="slides">
          {slides.map((s, i) => (
            <figure
              key={s.author}
              className={`slide${i === index ? ' on' : ''}${i % 2 ? ' flip' : ''}`}
              aria-hidden={i !== index}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              <div className="slide-pic">
                <img src={img(s.image)} alt="" decoding="async" loading="lazy" />
              </div>
              <blockquote className="slide-card">
                <Star />
                <p className="quote">{s.quote}</p>
                <footer>
                  <span className="slide-rule" />
                  <cite>{s.author}</cite>
                </footer>
              </blockquote>
            </figure>
          ))}
        </div>
        <div className="ss-nav">
          <button className="ss-arrow prev" type="button" aria-label="Previous" onClick={() => go(index - 1)}>
            <Arrow />
          </button>
          <div className="dots">
            {slides.map((s, i) => (
              <button
                key={s.author}
                className={`dot${i === index ? ' on' : ''}`}
                type="button"
                aria-label={`Slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
              >
                <span className="dot-bar">
                  {/* Keyed so the fill restarts with the timer. */}
                  {i === index && !paused && (
                    <span key={index} className="dot-fill" style={{ '--t': `${INTERVAL_MS}ms` } as CSSProperties} />
                  )}
                </span>
              </button>
            ))}
          </div>
          <button className="ss-arrow next" type="button" aria-label="Next" onClick={() => go(index + 1)}>
            <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
}
