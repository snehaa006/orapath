import type { PointerEvent } from 'react';
import { img, usePageTitle } from '../lib/page';
import Btn from '../components/Btn';
import Pic from '../components/Pic';
import Star from '../components/Star';
import Words from '../components/Words';

const cards = [
  { image: 'zero-carbon.jpg', title: 'Zero Carbon World' },
  { image: 'interview-card.jpg', title: 'Interview with ***' },
  { image: 'renewable.jpg', title: 'Renewable Energy Program' },
  { image: 'rainforest.jpg', title: 'Rainforest Action Initiative' },
];

// Cards lean slightly toward the pointer.
function tilt(e: PointerEvent<HTMLElement>) {
  if (e.pointerType !== 'mouse') return;
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--rx', `${((e.clientY - r.top) / r.height - 0.5) * -5}deg`);
  e.currentTarget.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - 0.5) * 7}deg`);
}

function untilt(e: PointerEvent<HTMLElement>) {
  e.currentTarget.style.removeProperty('--rx');
  e.currentTarget.style.removeProperty('--ry');
}

export default function InterviewProjects() {
  usePageTitle('Projects (List)');

  return (
    <section className="wrap interviews">
      <header className="page-head">
        <span className="page-head-star" data-reveal="scale">
          <Star />
        </span>
        <Words as="h1" text="*Projects*" />
      </header>
      <div className="interview-grid">
        {cards.map(({ image, title }) => (
          <article key={title} className="interview" onPointerMove={tilt} onPointerLeave={untilt}>
            <Pic src={img(image)} className="interview-pic" />
            <div className="interview-card" data-reveal="up">
              <h2>{title}</h2>
              <p>This is placeholder text. To change this content, double-click on the element and click Change Content.</p>
              <Btn variant="ghost">Read More</Btn>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
