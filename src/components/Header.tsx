import { Link } from 'react-router-dom';

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

export default function Header() {
  return (
    <header className="s site-header">
      <p className="a logo">
        <Link to="/">ORAPATH</Link>
      </p>
      <nav className="menu" aria-label="Site">
        {rows.map((row, i) => (
          <div key={i}>
            {row.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>
      <button className="login" type="button">
        Log In
      </button>
    </header>
  );
}
