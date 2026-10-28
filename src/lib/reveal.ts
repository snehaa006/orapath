import { useLayoutEffect } from 'react';

type Variant = 'img' | 'line' | 'fade' | 'up';

const STAGGER_MS = 70;
const MAX_STAGGER = 8;
// Longest reveal transition (the image curtain), plus a margin.
const SETTLE_MS = 1600;

function variant(el: HTMLElement): Variant {
  if (el.tagName === 'IMG' || el.classList.contains('pic')) return 'img';
  if (el.classList.contains('rule')) return 'line';
  if (!el.textContent?.trim()) return 'fade'; // colour blocks behind text
  return 'up';
}

function reset(el: HTMLElement) {
  el.classList.remove('rv', 'rv-img', 'rv-line', 'rv-fade', 'rv-up', 'rv-in');
  el.style.transitionDelay = '';
}

/**
 * Fades positioned elements (`.a`) in as they scroll into view. Elements that
 * arrive together are staggered top-to-bottom. Once an element has settled its
 * reveal classes are removed, so its own hover transitions take over again and
 * the final layout is exactly the static one.
 */
export function useReveal(key: string) {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const pending = new Set<HTMLElement>();
    const timers: number[] = [];

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
          pending.delete(el);
          const delay = Math.min(i, MAX_STAGGER) * STAGGER_MS;
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('rv-in');
          timers.push(window.setTimeout(() => reset(el), delay + SETTLE_MS));
        });
      },
      // No inset margin: elements at the very bottom of the page must still be able to intersect.
      { threshold: 0 },
    );

    document.querySelectorAll<HTMLElement>('main .a, .site-footer .a').forEach((el) => {
      if (el.dataset.revealed !== undefined || el.classList.contains('no-rv') || el.parentElement?.closest('.a')) return;
      el.dataset.revealed = '';
      el.classList.add('rv', `rv-${variant(el)}`);
      pending.add(el);
      io.observe(el);
    });

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      // Anything not yet shown goes back to normal so a re-run can pick it up.
      pending.forEach((el) => {
        reset(el);
        delete el.dataset.revealed;
      });
    };
  }, [key]);
}
