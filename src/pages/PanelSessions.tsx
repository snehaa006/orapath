import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { img, usePageTitle } from '../lib/page';
import Arrow from '../components/Arrow';
import PageHero from '../components/PageHero';
import Pic from '../components/Pic';
import Star from '../components/Star';
import Words from '../components/Words';

interface Session {
  num: string;
  /** The session page, when there is one. */
  to?: string;
  soon?: boolean;
  name: string;
  image: string;
  alt: string;
  text: ReactNode;
}

const sessions: Session[] = [
  {
    num: '01',
    to: '/session-1',
    name: 'Riham Alawaji',
    image: 'riham.jpg',
    alt: 'Panel session with Riham Alawaji',
    text: 'During our session with Riham Alawaji, we were able to grasp what a career in architecture, specifically in health, might look like. Riham Alawaji shared her professional experiences, advice, and overall trajectory of how she was able to emerge as a leading Saudi female architect. We were able to have a short architecture based workshop where the attendees were tasked with an architectural challenge.',
  },
  {
    num: '02',
    name: 'Nadia Almutlak',
    image: 'nadia.jpg',
    alt: 'Panel session with Nadia Almutlak',
    text: 'The panel session with Nadia Almutlak was primarily focused on her overall achievements, and career path as a consultant. She shared her insights and advice on her time at KAUST, ISEF, and other prestigious institutions. We completed the workshop(Kahoot) at the end by urging the attendees to truly harness and utilize their newly learned knowledge by answering questions.',
  },
  {
    num: '03',
    soon: true,
    name: 'Project Name',
    image: 'orapath-logo.jpg',
    alt: 'Orapath',
    text: (
      <>
        We’re working behind the scenes to bring you something new.
        <br />
        Stay tuned on our Instagram page for more details.
      </>
    ),
  },
];

export default function PanelSessions() {
  usePageTitle('Projects');

  return (
    <>
      <PageHero image="panel-hero.jpg">
        <Words as="h1" text="Panel *Sessions*" />
        <p>
          This is your Project Page. It's a great opportunity to help visitors understand the context and background of
          your latest work. Double click on the text box to start editing your content and make sure to add all the
          relevant details you want to share.
        </p>
      </PageHero>

      <section className="wrap timeline">
        {/* The line fills up to the middle of the screen as you scroll, lighting each session's star. */}
        <div className="tl-line" data-progress="" data-start="0.5" data-end="0.5" aria-hidden="true">
          <span />
        </div>
        {sessions.map((s) => (
          <article key={s.num} className={`tl-item${s.soon ? ' tl-item--soon' : ''}`}>
            <span className="tl-node" data-progress="" data-start="0.5" data-end="0.5" aria-hidden="true">
              <Star />
            </span>
            <div className="tl-media">
              <Pic src={img(s.image)} alt={s.alt} className="tl-pic" parallax={!s.soon} />
            </div>
            <div className="tl-body">
              <p className="tl-meta" data-reveal="up">
                {s.to ? (
                  <Link className="tl-num" to={s.to} aria-label={`${s.num} – ${s.name}`}>
                    {s.num}
                    <Arrow />
                  </Link>
                ) : (
                  <span className="tl-num">{s.num}</span>
                )}
                {s.soon && (
                  <span className="soon">
                    <span className="sr-only"> - </span>Coming Soon
                  </span>
                )}
              </p>
              <h2 data-reveal="up">{s.name}</h2>
              <p data-reveal="up">{s.text}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
