import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { img, usePageTitle } from '../lib/page';
import Arrow from '../components/Arrow';
import Badge from '../components/Badge';
import Btn from '../components/Btn';
import KineticType from '../components/KineticType';
import Mark from '../components/Mark';
import Marquee from '../components/Marquee';
import Pic from '../components/Pic';
import ScrollText from '../components/ScrollText';
import Star from '../components/Star';
import Words from '../components/Words';
import { BookIcon, CompassIcon, SummitIcon } from '../components/Icons';

// Each pillar quotes the part of the mission statement it stands for.
const pillars = [
  { title: 'Educate', text: 'Industry specific mentorship, interactive panels, and workshops.', Icon: BookIcon },
  { title: 'Guide', text: 'Through enriching conversation, guidance, and support.', Icon: CompassIcon },
  {
    title: 'Empower',
    text: 'We will equip the next generation of female leaders with the knowledge, and ambition they need to pursue their prospective goals.',
    Icon: SummitIcon,
  },
];

// Where the path passes through each pillar's star, as fractions of the track (see the SVG path).
const nodes = [
  { x: 1 / 6, y: 0.75 },
  { x: 3 / 6, y: 0.25 },
  { x: 5 / 6, y: 0.6 },
];

export default function Home() {
  usePageTitle('Home');

  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap hero-inner">
          <p className="eyebrow eyebrow--light hero-eyebrow">
            <Star /> Educate - Guide - Empower
          </p>
          <h1 className="hero-title" aria-label="ORAPATH">
            {/* The O is the logo's ring and star; the other letters rise in one by one. */}
            {['O', ...'RAPATH'].map((ch, i) => (
              <span key={i} className="ch" style={{ '--i': i } as CSSProperties}>
                <span>{i === 0 ? <Mark /> : ch}</span>
              </span>
            ))}
          </h1>
          <svg className="hero-swoosh" viewBox="0 0 600 40" aria-hidden="true">
            <path d="M4 30C90 8 170 6 250 20s170 22 250 4c35-8 65-12 96-10" pathLength="1" />
          </svg>
          <p className="hero-lead">
            Orapath is a female led initiative that aims to inspire and guide ambitious female youth through panels and
            workshops supporting their endeavors.
          </p>
          <Btn to="/upcoming-events" variant="pink" className="hero-cta">
            Register Now
          </Btn>
        </div>
        <Pic src={img('about-left.jpg')} className="arch hero-pic hero-pic--left" parallax eager />
        <Pic src={img('riham.jpg')} className="arch hero-pic hero-pic--right" parallax eager />
        <Badge className="hero-badge" />
      </section>

      <Marquee items={['Educate', 'Guide', 'Empower', 'Panels', 'Workshops', 'Mentorship']} />

      <section className="wrap mission">
        <div className="mission-copy">
          <p className="eyebrow" data-reveal="up">
            <Star /> Our Mission &amp; Vision
          </p>
          <ScrollText text="Orapath guides *ambitious young women* by providing industry specific mentorship, interactive panels, and workshops. Through enriching conversation, guidance, and support, we will equip *the next generation of female leaders* with the knowledge, and ambition they need to pursue their prospective goals." />
          <Btn to="/about" reveal="up">
            Learn More
          </Btn>
        </div>
        <div className="mission-visual">
          <Pic src={img('mission-banner.jpg')} className="arch mission-pic" parallax />
          <span className="sticker" aria-hidden="true" data-reveal="scale">
            <Star />
          </span>
        </div>
      </section>

      <section className="path">
        <div className="wrap">
          <Words text="Educate - Guide - *Empower*" className="path-title" />
          <div className="path-track" data-progress="" data-start="0.85" data-end="0.55">
            <svg className="path-line" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true">
              <path
                className="path-ghost"
                d="M0 170C80 170 110 150 200 150 340 150 440 50 600 50S840 120 1000 120C1100 120 1150 95 1200 80"
              />
              <path
                className="path-draw"
                d="M0 170C80 170 110 150 200 150 340 150 440 50 600 50S840 120 1000 120C1100 120 1150 95 1200 80"
                pathLength="1"
              />
            </svg>
            {nodes.map((n, i) => (
              <span
                key={i}
                className="path-node"
                style={{ left: `${n.x * 100}%`, top: `${n.y * 100}%`, '--at': (0.15 + i * 0.33).toFixed(2) } as CSSProperties}
              >
                <Star />
              </span>
            ))}
          </div>
          <ol className="pillars">
            {pillars.map(({ title, text, Icon }, i) => (
              <li key={title} className="pillar" data-reveal="up">
                <span className="pillar-icon">
                  <Icon />
                </span>
                <span className="pillar-num">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wwd">
        <KineticType />
        <div className="wrap wwd-inner">
          <div className="wwd-head">
            <Words text="What do we *do?*" />
            <span className="wwd-rule" data-reveal="line" />
            <Link className="link link--light" to="/about" data-reveal="up">
              Read More <Arrow />
            </Link>
          </div>
          <div className="wwd-body">
            <p data-reveal="up">
              Orapath provides panel sessions and workshops led by female industry professional within a certain field.
              The panel can range from 1-2 hours per session and is a safe platform for individuals to truly navigate
              through what specific industry might suit them.
            </p>
            <div className="wwd-collage">
              <Pic src={img('nadia.jpg')} className="wwd-pic wwd-pic--a" parallax />
              <Pic src={img('about-right.jpg')} className="wwd-pic wwd-pic--b" parallax />
            </div>
          </div>
        </div>
        <Star className="wwd-star" />
      </section>
    </>
  );
}
