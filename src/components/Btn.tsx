import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';

interface Props {
  /** Router path; otherwise `href` is used. */
  to?: string;
  href?: string;
  variant?: 'pink' | 'light' | 'ghost';
  reveal?: string;
  className?: string;
  children: ReactNode;
}

// Pill button: a colour fill sweeps up from below on hover and the arrow nudges forward.
export default function Btn({ to, href = '#', variant, reveal, className = '', children }: Props) {
  const props = { className: `btn${variant ? ` btn--${variant}` : ''} ${className}`, 'data-reveal': reveal };
  const inner = (
    <>
      <span>{children}</span>
      <Arrow />
    </>
  );
  return to ? (
    <Link to={to} {...props}>
      {inner}
    </Link>
  ) : (
    <a href={href} {...props}>
      {inner}
    </a>
  );
}
