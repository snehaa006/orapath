import { Link } from 'react-router-dom';
import { img, pos, usePageTitle } from '../lib/pos';

export default function Home() {
  usePageTitle('Home');

  return (
    <main className="s" style={{ height: 1315 }}>
      <section className="a" style={{ ...pos(0, 0, 1440, 412), background: 'var(--hero)' }} />
      <h1 className="a pink center" style={{ ...pos(230, 87, 980), fontSize: 130, lineHeight: '130px' }}>
        <span style={{ letterSpacing: '0.15em' }}>ORAPATH</span>
      </h1>
      <p className="a white center" style={{ ...pos(405, 237, 629), fontSize: 15, lineHeight: '28.8px', letterSpacing: '-0.16px' }}>
        Orapath is a female led initiative that aims &nbsp;to inspire and guide ambitious female youth through panels and
        workshops supporting their endeavors.
      </p>
      <a className="a register" href="#" style={pos(649, 325, 142, 42)}>
        Register Now
      </a>

      <img className="a cover" src={img('mission-banner.jpg')} alt="" style={pos(0, 412, 1440, 292)} />
      <h2 className="a" style={{ ...pos(10, 453, 262), fontSize: 28, lineHeight: 1.4, letterSpacing: '-0.01em' }}>
        Our Mission &amp; Vision
      </h2>
      <p className="a white" style={{ ...pos(361, 450, 595), fontSize: 21, lineHeight: 1.5, letterSpacing: '-0.01em' }}>
        Orapath guides ambitious young women by providing industry specific mentorship, interactive panels, and workshops.
        Through enriching conversation, guidance, and support, we will equip the next generation of female leaders with the
        knowledge, and ambition they need to pursue their prospective goals.&nbsp;
      </p>
      <Link className="a btn" to="/about" style={pos(361, 649, 237, 45)}>
        Learn More
      </Link>

      <section className="a" style={{ ...pos(1, 705, 718, 528), background: 'var(--blue)' }} />
      {/* Wix renders this with an 88px strut and a 56px span; the strut sets the line height. */}
      <h2 className="a white" style={{ ...pos(139, 794, 356), fontSize: 88, lineHeight: 'normal' }}>
        <span style={{ fontSize: 56 }}>What do we do?</span>
      </h2>
      <div className="a" style={{ ...pos(139, 1043, 30, 5), borderTop: '1px solid #fff' }} />
      <Link className="a read-more" to="/about" style={pos(129, 1080, 122, 42)}>
        Read More
      </Link>
      <p className="a" style={{ ...pos(778, 847, 430), fontSize: 17, lineHeight: '1.8em' }}>
        <span style={{ fontSize: 18 }}>
          Orapath provides panel sessions and workshops led by female industry professional within a certain field. The
          panel can range from 1-2 hours per session and is a safe platform for individuals to truly navigate through what
          specific industry&nbsp;might suit them.&nbsp;
        </span>
      </p>
    </main>
  );
}
