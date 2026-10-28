import { useLayoutEffect } from 'react';

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

/**
 * Scroll-linked effects, written as CSS variables for styles.css to consume:
 *
 * - `data-parallax`: `--p` is the element's offset from the middle of the viewport, about -1 (above)
 *   to 1 (below). Images inside drift against the scroll.
 * - `data-progress`: `--progress` runs 0 → 1 as the element scrolls through the viewport — from its
 *   top crossing `data-start` (fraction of the viewport height, default 0.9) to its bottom crossing
 *   `data-end` (default 0.45). Drives line drawing, word highlighting and the timeline fill.
 *
 * Under reduced motion nothing is set and the CSS falls back to the finished state.
 */
export function useScrollFx(key: string) {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
    const progress = Array.from(document.querySelectorAll<HTMLElement>('[data-progress]'));
    let frame = 0;

    // All positions are read before any variable is written, so the frame costs one layout.
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const writes: [HTMLElement, string, number][] = [];
      for (const el of parallax) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh / 2 || r.top > vh * 1.5) continue;
        writes.push([el, '--p', clamp((r.top + r.height / 2 - vh / 2) / vh, -1, 1)]);
      }
      for (const el of progress) {
        const r = el.getBoundingClientRect();
        const start = Number(el.dataset.start ?? 0.9) * vh;
        const end = Number(el.dataset.end ?? 0.45) * vh;
        writes.push([el, '--progress', clamp((start - r.top) / (r.height + start - end), 0, 1)]);
      }
      for (const [el, name, value] of writes) el.style.setProperty(name, value.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [key]);
}
