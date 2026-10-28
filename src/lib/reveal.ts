import { useLayoutEffect } from 'react';

const STAGGER_MS = 80;
const MAX_STAGGER = 6;
// Longest reveal transition (the image curtain), plus a margin.
const SETTLE_MS = 1700;

/** Returns an element to its resting state: no reveal styles, so its own transitions apply again. */
function settle(el: HTMLElement) {
  el.removeAttribute('data-reveal');
  el.classList.remove('is-in');
  el.style.removeProperty('--delay');
}

/**
 * Reveals elements marked `data-reveal="up|fade|left|right|scale|line|img|words"` as they scroll
 * into view (the variants are styled in styles.css). Elements that arrive together are staggered
 * top-to-bottom; `data-delay` adds a fixed delay in ms. Once an element has settled its reveal
 * attribute is removed, so hover transitions take over and the resting layout is the static one.
 */
export function useReveal(key: string) {
  useLayoutEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      els.forEach(settle);
      return;
    }

    const settling = new Map<HTMLElement, number>();
    const io = new IntersectionObserver(
      (entries) => {
        const shown = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement)
          .sort((a, b) => {
            const ra = a.getBoundingClientRect();
            const rb = b.getBoundingClientRect();
            return ra.top - rb.top || ra.left - rb.left;
          });
        shown.forEach((el, i) => {
          io.unobserve(el);
          const delay = Number(el.dataset.delay ?? 0) + Math.min(i, MAX_STAGGER) * STAGGER_MS;
          el.style.setProperty('--delay', `${delay}ms`);
          el.classList.add('is-in');
          settling.set(
            el,
            window.setTimeout(() => {
              settling.delete(el);
              settle(el);
            }, delay + SETTLE_MS),
          );
        });
      },
      // No inset margin: elements at the very bottom of the page must still be able to intersect.
      { threshold: 0 },
    );
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      // Anything mid-reveal jumps to its end state; anything not yet shown is picked up by the next run.
      settling.forEach((timer, el) => {
        clearTimeout(timer);
        settle(el);
      });
    };
  }, [key]);
}
