import type { CSSProperties } from 'react';
import { img, usePageTitle } from '../lib/page';
import Btn from '../components/Btn';
import PageHero from '../components/PageHero';
import Pic from '../components/Pic';
import Star from '../components/Star';
import Words from '../components/Words';

const statements = [
  {
    title: 'Why Was Orapath created?',
    tone: 'blue',
    text: 'As female saudi youth, we realized that there are many barriers between youth gaining experience or an idea of an industry of interest when deciding possible career paths. We have overcome these challenges by providing a network, and path for the youth to pursue their interests and gain an understanding of what the specific interest, from the perspective of a professional, might look like from the panel and workshop.',
  },
  {
    title: 'Mission Statement',
    tone: 'pink',
    text: 'Orapath guides ambitious young women by providing industry specific mentorship, interactive panels, and workshops. Through enriching conversation, guidance, and support, we will equip the next generation of female leaders with the knowledge, and ambition they need to pursue their prospective goals.',
  },
  {
    title: 'Vision Statement',
    tone: 'blue',
    tagline: 'Educate - Guide - Empower',
    text: 'To cultivate an environment where young women are inspired, supported, and leading in their field of choice with a reliable network and community that champions their success.',
  },
];

const team = [
  'Jane Doe - Founder',
  'John Smith - Event Coordinator',
  'Maria Garcia - Marketing Manager',
  'David Wang - Technical Support',
  'Sara Ali - Speaker Liaison',
  'Lila Patel - Workshop Facilitator',
];

export default function About() {
  usePageTitle('About');

  return (
    <>
      <PageHero image="about-hero.jpg" tone="blue">
        <Words as="h1" text="What is *Orapath?*" />
        <p>
          Orapath is a female led initiative that aims to inspire and guide ambitious female youth through panels and
          workshops providing support for their endeavours.
        </p>
      </PageHero>

      <section className="wrap aim">
        <Pic src={img('about-left.jpg')} className="arch aim-pic" parallax />
        <div className="aim-body">
          <Words text="What do we aim to *provide?*" />
          <div className="aim-card" data-reveal="up">
            <Star />
            <p>
              We aim to provide self development courses such as business mentorship from industry experts through panels
              and workshops and Q&amp;A sessions with successful individuals.
            </p>
          </div>
          <Btn to="/contact" reveal="up">
            Join Now
          </Btn>
        </div>
        <Pic src={img('about-right.jpg')} className="arch aim-pic aim-pic--low" parallax />
      </section>

      <section className="wrap stack">
        {statements.map((s, i) => (
          <article key={s.title} className={`stack-card stack-card--${s.tone}`} style={{ '--i': i } as CSSProperties}>
            <div className="stack-head">
              <span className="stack-num">0{i + 1}</span>
              {s.tagline && <p className="stack-tagline">{s.tagline}</p>}
              <h2>{s.title}</h2>
            </div>
            <p className="stack-text">{s.text}</p>
            <Star className="stack-star" />
          </article>
        ))}
      </section>

      <section className="wrap team">
        <div className="team-copy">
          <h2 className="eyebrow" data-reveal="up">
            <Star /> Meet Our Team
          </h2>
          <ul className="team-list">
            {team.map((member, i) => {
              const [name, role] = member.split(' - ');
              return (
                <li key={member} data-reveal="up">
                  <span className="team-num">0{i + 1}</span>
                  <span className="team-name">{name}</span>
                  <span className="team-role">
                    <span className="sr-only"> - </span>
                    {role}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="team-text" data-reveal="up">
            Our dedicated team is committed to ensuring that Orapath delivers a world-class experience to all participants.
            We bring together a diverse group of professionals who are passionate about empowering women and creating a
            supportive environment for growth and success.
          </p>
          <Btn to="/contact" reveal="up">
            Join Us
          </Btn>
        </div>
        <div className="team-visual">
          <Pic src={img('team.jpg')} className="arch team-pic" parallax />
        </div>
      </section>
    </>
  );
}
