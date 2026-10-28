import { Link } from 'react-router-dom';
import { img, pos, usePageTitle } from '../lib/pos';
import Pic from '../components/Pic';

const body = { fontSize: 15, lineHeight: '1.8em', letterSpacing: '-0.01em' } as const;
const heading = { fontSize: 30, lineHeight: 'normal' } as const;

export default function PanelSessions() {
  usePageTitle('Projects');

  return (
    <main className="s" style={{ height: 2258 }}>
      <Pic src={img('panel-hero.jpg')} alt="" style={pos(0, 0, 1440, 446)} />
      <section className="a" style={{ ...pos(230, 124, 980, 348), background: '#fff' }} />
      <h1 className="a pink" style={{ ...pos(358, 204, 750), fontSize: 56, lineHeight: 'normal' }}>
        Panel Sessions
      </h1>
      <p className="a" style={{ ...pos(358, 311, 658), fontSize: 16, lineHeight: '1.8em', letterSpacing: '-0.01em' }}>
        This is your Project Page. It's a great opportunity to help visitors understand the context and background of your
        latest work. Double click on the text box to start editing your content and make sure to add all the relevant
        details you want to share.
      </p>
      <div className="a rule rule-blue" style={pos(230, 459, 980)} />

      <Pic src={img('riham.jpg')} alt="Panel session with Riham Alawaji" style={pos(271, 613, 378, 283)} />
      <p className="a" style={{ ...pos(710, 613, 200), ...heading }}>
        <Link className="u" to="/session-1">
          01
        </Link>
      </p>
      <h2 className="a" style={{ ...pos(710, 654, 401), ...heading, letterSpacing: '-0.03em' }}>
        Riham Alawaji&nbsp;
      </h2>
      <p className="a" style={{ ...pos(710, 716, 470), ...body }}>
        <span style={{ fontSize: 16 }}>
          During our session with Riham Alawaji, we were able to grasp what a career in architecture, specifically in
          health, might look like. Riham Alawaji shared her professional experiences, advice, and overall trajectory of how
          she was able to emerge as a leading Saudi female architect. We were able to have a short architecture based
          workshop where the attendees were tasked with an architectural challenge.&nbsp;
        </span>
      </p>
      <div className="a rule" style={pos(230, 960, 980)} />

      <p className="a" style={{ ...pos(271, 1044, 200), ...heading }}>
        02
      </p>
      <h2 className="a" style={{ ...pos(271, 1086, 402), fontSize: 46, lineHeight: 'normal' }}>
        <span style={{ fontSize: 30 }}>Nadia Almutlak</span>
      </h2>
      <p className="a" style={{ ...pos(271, 1168, 402), ...body }}>
        <span style={{ fontSize: 16 }}>
          The <span style={{ letterSpacing: '-0.010667em' }}>panel</span>&nbsp;session with Nadia Almutlak was primarily
          focused on her overall achievements, and career path as a consultant. She shared her insights and advice on her
          time at KAUST, ISEF, and other prestigious institutions. We completed the workshop(Kahoot) at the end by urging
          the attendees to truly harness and utilize their newly learned knowledge by answering questions.
        </span>
      </p>
      <Pic src={img('nadia.jpg')} alt="Panel session with Nadia Almutlak" style={pos(792, 1011, 378, 283)} />
      <div className="a rule" style={pos(230, 1445, 980)} />

      <Pic src={img('orapath-logo.jpg')} alt="Orapath" style={pos(276, 1583, 401, 167)} />
      <p className="a" style={{ ...pos(710, 1554, 277), ...heading }}>
        03 - Coming Soon
      </p>
      <h2 className="a" style={{ ...pos(710, 1596, 401), ...heading }}>
        Project Name
      </h2>
      <p className="a" style={{ ...pos(710, 1694, 401), fontSize: 16, lineHeight: '1.8em', letterSpacing: '-0.01em' }}>
        We’re working behind the scenes to bring you something new.
        <br />
        Stay tuned on our Instagram page for more details.&nbsp;
      </p>
      <div className="a rule" style={pos(230, 1820, 980)} />
      <div className="a rule" style={pos(230, 2253, 980)} />
    </main>
  );
}
