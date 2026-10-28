import { useEffect, useState, type CSSProperties } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Mark from './Mark';

const items = [
  { to: '/', label: 'Home' },
  { to: '/s-projects-side-by-side', label: 'Projects' },
  { to: '/projects', label: 'Interview Projects' },
  { to: '/about', label: 'About' },
  { to: '/upcoming-events', label: 'Upcoming Events' },
  { to: '/contact', label: 'Contact' },
];

// --i staggers entrance animations from left to right (and top to bottom in the menu).
const order = (i: number) => ({ '--i': i }) as CSSProperties;

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Solid once the page moves; slides away while scrolling down and returns on the way back up.
  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 8);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.documentElement.classList.add('menu-open');
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const state = `${scrolled ? ' is-scrolled' : ''}${hidden && !open ? ' is-hidden' : ''}${open ? ' is-open' : ''}`;

  return (
    <>
      <header className={`site-header${state}`}>
        <div className="wrap header-bar">
          <Link className="logo" to="/" aria-label="ORAPATH home" style={order(0)}>
            <Mark />
            <span>rapath</span>
          </Link>
          <nav className="nav" aria-label="Site">
            {items.map((item, i) => (
              <NavLink key={item.to} to={item.to} end style={order(i + 1)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button className="login" type="button" style={order(items.length + 1)}>
            Log In
          </button>
          <button
            className="burger"
            type="button"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <div id="menu" className={`menu${open ? ' is-open' : ''}`}>
        <nav aria-label="Menu">
          {items.map((item, i) => (
            <NavLink key={item.to} to={item.to} end style={order(i)}>
              <small>0{i + 1}</small>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button className="btn btn--pink menu-login" type="button" style={order(items.length)}>
          Log In
        </button>
      </div>
    </>
  );
}
