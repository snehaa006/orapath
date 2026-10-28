import { img, usePageTitle } from '../lib/page';
import Btn from '../components/Btn';
import Pic from '../components/Pic';
import Words from '../components/Words';

const DATE = '24 juin 2035, 13:06 – 15:06';
const [DAY, MONTH, YEAR] = DATE.split(',')[0].split(' ');

const events = [
  { image: 'event-1.jpg', title: 'EmpowerHer Interactive Skill-Building Workshop', action: 'Buy Tickets' },
  { image: 'event-2.jpg', title: 'EmpowerHer Speaker Series: Women in Leadership', action: 'RSVP' },
  { image: 'event-3.jpg', title: 'EmpowerHer Global Networking Night', action: 'RSVP' },
];

export default function UpcomingEvents() {
  usePageTitle('Upcoming Events');

  return (
    <section className="wrap events">
      <header className="events-head">
        <Words as="h1" text="Upcoming *Events*" />
        <span className="events-count" data-reveal="up" aria-hidden="true">
          0{events.length}
        </span>
      </header>
      <ol className="event-list">
        {events.map((e) => (
          <li key={e.title} className="event" data-reveal="up">
            <p className="event-date" aria-hidden="true">
              <span className="event-day">{DAY}</span>
              <span>{MONTH}</span>
              <span>{YEAR}</span>
            </p>
            <Pic src={img(e.image)} className="event-pic" />
            <div className="event-info">
              <p className="event-time">{DATE}</p>
              <h2>
                <a href="#">{e.title}</a>
                <span className="sr-only"> / </span>
              </h2>
              <p className="event-where">EmpowerHer Platform</p>
            </div>
            <Btn className="event-cta">{e.action}</Btn>
          </li>
        ))}
      </ol>
    </section>
  );
}
