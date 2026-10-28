import { Fragment } from 'react';
import Star from './Star';

// An endless ticker. The track holds two identical halves and slides by one half per loop; the
// second half (and the repeat inside each half that fills wide screens) is hidden from screen readers.
export default function Marquee({ items, className = '' }: { items: string[]; className?: string }) {
  const half = (hidden: boolean) => (
    <div className="marquee-half" aria-hidden={hidden || undefined}>
      {[0, 1].map((copy) => (
        <Fragment key={copy}>
          {items.map((item) => (
            <span key={item} className="marquee-item" aria-hidden={copy > 0 || undefined}>
              {item}
              <Star />
            </span>
          ))}
        </Fragment>
      ))}
    </div>
  );
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track">
        {half(false)}
        {half(true)}
      </div>
    </div>
  );
}
