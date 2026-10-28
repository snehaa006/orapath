import type { CSSProperties } from 'react';
import { Link, NavLink } from 'react-router-dom';

const rows = [
  [
    { to: '/', label: 'Home' },
    { to: '/s-projects-side-by-side', label: 'Projects' },
    { to: '/projects', label: 'Interview Projects' },
    { to: '/about', label: 'About' },
  ],
  [
    { to: '/upcoming-events', label: 'Upcoming Events' },
    { to: '/contact', label: 'Contact' },
  ],
];

// --i staggers the entrance animation from left to right.
const order = (i: number) => ({ '--i': i }) as CSSProperties;

export default function Header() {
  let n = 1;
  return (
    <header className="s site-header">
      <p className="a logo" style={order(0)}>
        <Link to="/">ORAPATH</Link>
      </p>
      <nav className="menu" aria-label="Site">
        {rows.map((row, i) => (
          <div key={i}>
            {row.map((item) => (
              <NavLink key={item.to} to={item.to} end style={order(n++)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
      <button className="login" type="button" style={order(n)}>
        Log In
      </button>
    </header>
  );
}
