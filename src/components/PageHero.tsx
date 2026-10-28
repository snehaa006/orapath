import type { ReactNode } from 'react';
import { img } from '../lib/page';
import Pic from './Pic';

interface Props {
  image: string;
  /** Colour of the card that overlaps the bottom of the image. */
  tone?: 'white' | 'blue';
  children: ReactNode;
}

// Banner image with a card overlapping its lower edge, the layout the original pages open with.
export default function PageHero({ image, tone = 'white', children }: Props) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <Pic src={img(image)} className="page-hero-pic" parallax eager />
      <div className="wrap">
        <div className="page-hero-card" data-reveal="up">
          {children}
        </div>
      </div>
    </section>
  );
}
