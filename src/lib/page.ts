import { useEffect } from 'react';

export const img = (name: string) => `/img/${name}`;

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | Orapath 1`;
  }, [title]);
}
