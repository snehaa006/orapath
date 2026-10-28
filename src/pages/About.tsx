import { Link } from 'react-router-dom';
import { img, pos, usePageTitle } from '../lib/pos';

const statement = { fontSize: 19, lineHeight: '1.8em' } as const;
const panelTitle = { fontSize: 45, lineHeight: 'normal' } as const;

const team = [
  { y: 2038, w: 482, name: 'Jane Doe - Founder' },
  { y: 2090, w: 482, name: 'John Smith - Event Coordinator' },
  { y: 2143, w: 503, name: 'Maria Garcia - Marketing Manager' },
  { y: 2197, w: 482, name: 'David Wang - Technical Support' },
  { y: 2250, w: 482, name: 'Sara Ali - Speaker Liaison' },
  { y: 2304, w: 482, name: 'Lila Patel - Workshop Facilitator' },
];

export default function About() {
  usePageTitle('About');

  return (
    <main className="s" style={{ height: 3002 }}>
      <img className="a cover" src={img('about-hero.jpg')} alt="" style={pos(0, 0, 1440, 534)} />
      <section className="a" style={{ ...pos(377, 84, 678, 368), background: 'var(--blue)' }} />
      <h1 className="a pink center" style={{ ...pos(436, 148, 566), fontSize: 56, lineHeight: 'normal' }}>
        What is Orapath?
      </h1>
      <p className="a white center" style={{ ...pos(495, 255, 449), fontSize: 22, lineHeight: '1.8em', letterSpacing: '-0.01em' }}>
        Orapath is a female led initiative that aims to inspire and guide ambitious female youth through panels and
        workshops providing support for their endeavours.
      </p>

      <img className="a cover" src={img('about-left.jpg')} alt="" style={pos(16, 534, 284, 417)} />
      <h2 className="a pink center" style={{ ...pos(423, 562, 584), fontSize: 41, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
        &nbsp;What do we aim to provide?&nbsp;
      </h2>
      <section className="a" style={{ ...pos(371, 641, 685, 257), background: 'var(--pink)' }} />
      <p className="a center" style={{ ...pos(428, 682, 584), fontSize: 22, lineHeight: '1.5em', letterSpacing: '-0.01em' }}>
        We aim to provide self development courses such as business mentorship from industry experts through panels and
        workshops and Q&amp;A sessions with successful individuals.&nbsp;
      </p>
      <img className="a cover" src={img('about-right.jpg')} alt="" style={pos(1140, 534, 284, 417)} />
      <Link className="a btn" to="/contact" style={pos(1260, 534, 154, 45)}>
        Join Now
      </Link>

      <section className="a" style={{ ...pos(1, 952, 718, 329), background: 'var(--blue)' }} />
      <h2 className="a white" style={{ ...pos(73, 1072, 631), ...panelTitle }}>
        Why Was Orapath created?
      </h2>
      <p className="a" style={{ ...pos(777, 1013, 665), ...statement }}>
        As female saudi youth, we realized that there are many barriers between youth gaining &nbsp;experience or an idea
        of an industry of interest when deciding possible career paths. &nbsp;We have overcome these challenges by providing
        a network, and path for the youth to pursue their interests and gain an understanding of what the specific
        interest, from the perspective of a professional, might look like from the panel and workshop.&nbsp;
      </p>

      <section className="a" style={{ ...pos(1, 1283, 718, 378), background: 'var(--pink)' }} />
      <h2 className="a white" style={{ ...pos(152, 1438, 631), ...panelTitle }}>
        Mission Statement
      </h2>
      <p className="a" style={{ ...pos(777, 1344, 665), ...statement, letterSpacing: '-0.01em' }}>
        Orapath guides ambitious young women by providing industry specific mentorship, interactive panels, and workshops.
        Through enriching conversation, guidance, and support, we will equip the next generation of female leaders with the
        knowledge, and ambition they need to pursue their prospective goals.
      </p>

      <section className="a" style={{ ...pos(1, 1663, 718, 328), background: 'var(--blue)' }} />
      <h2 className="a pink center" style={{ ...pos(-15, 1696, 738), fontSize: 33, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
        Educate - Guide - Empower
      </h2>
      <h2 className="a white" style={{ ...pos(171, 1793, 631), ...panelTitle }}>
        Vision Statement
      </h2>
      <p className="a" style={{ ...pos(777, 1724, 665), ...statement, letterSpacing: '-0.01em' }}>
        To cultivate an environment where young women are inspired, supported, and leading in their field of choice with a
        reliable network and community that champions their success.
      </p>

      <h2 className="a pink" style={{ ...pos(26, 1992, 310), fontSize: 17, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
        Meet Our Team
      </h2>
      <div className="pink" style={{ fontSize: 33, lineHeight: 1.3, letterSpacing: '-0.03em' }}>
        {team.map((m) => (
          <p key={m.name} className="a" style={pos(26, m.y, m.w)}>
            {m.name}
          </p>
        ))}
      </div>
      <p className="a" style={{ ...pos(26, 2774, 482), fontSize: 15, lineHeight: 1.5, letterSpacing: '-0.01em' }}>
        Our dedicated team is committed to ensuring that Orapath delivers a world-class experience to all participants. We
        bring together a diverse group of professionals who are passionate about empowering women and creating a supportive
        environment for growth and success.
      </p>
      <Link className="a btn" to="/contact" style={pos(26, 2914, 154, 45)}>
        Join Us
      </Link>
      <img className="a cover" src={img('team.jpg')} alt="" style={pos(720, 1992, 694, 970)} />
    </main>
  );
}
