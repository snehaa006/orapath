import { img, pos, usePageTitle } from '../lib/pos';

const events = [
  { y: 161, image: 'event-1.jpg', title: 'EmpowerHer Interactive Skill-Building Workshop', action: 'Buy Tickets', actionWidth: 120 },
  { y: 422, image: 'event-2.jpg', title: 'EmpowerHer Speaker Series: Women in Leadership', action: 'RSVP', actionWidth: 100 },
  { y: 683, image: 'event-3.jpg', title: 'EmpowerHer Global Networking Night', action: 'RSVP', actionWidth: 100 },
];
const ROW_HEIGHT = 261;

export default function UpcomingEvents() {
  usePageTitle('Upcoming Events');

  return (
    <main className="s" style={{ height: 975 }}>
      <h1 className="a" style={{ ...pos(35, 60, 766), fontSize: 23, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
        Upcoming Events
      </h1>
      <div className="a rule rule-blue" style={pos(30, events[0].y, 1380, 1)} />
      {events.map((e) => (
        <div key={e.title}>
          <img className="a cover" src={img(e.image)} alt="" style={pos(30, e.y + 31, 355, 200)} />
          <p className="a" style={{ ...pos(410, e.y + 101, 880), fontSize: 16, lineHeight: '24px' }}>
            24 juin 2035, 13:06 – 15:06
          </p>
          <p className="a" style={{ ...pos(410, e.y + 121, 880), fontSize: 26, lineHeight: '36.4px' }}>
            <a href="#">{e.title}</a> / <span style={{ fontSize: 16, lineHeight: '22.4px' }}>EmpowerHer Platform</span>
          </p>
          <a className="a btn" href="#" style={{ ...pos(1407 - e.actionWidth, e.y + 110, e.actionWidth, 42), lineHeight: '22.4px' }}>
            {e.action}
          </a>
          <div className="a rule rule-blue" style={pos(30, e.y + ROW_HEIGHT, 1380, 1)} />
        </div>
      ))}
    </main>
  );
}
