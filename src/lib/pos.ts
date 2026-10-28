import { useEffect, type CSSProperties } from 'react';

/**
 * Absolute position on the 1440px design canvas, consumed by the `.a` class.
 * x and w are rendered as percentages of the page width (so layouts scale like
 * the Wix grid); y and h are fixed pixels.
 */
export function pos(x: number, y: number, w: number, h?: number): CSSProperties {
  return {
    '--x': x,
    '--y': `${y}px`,
    '--w': w,
    ...(h !== undefined && { '--h': `${h}px` }),
  } as CSSProperties;
}

export const img = (name: string) => `/img/${name}`;

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | Orapath 1`;
  }, [title]);
}
