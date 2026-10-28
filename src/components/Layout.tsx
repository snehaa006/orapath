import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useReveal } from '../lib/reveal';
import { useScrollFx } from '../lib/scroll';
import Header from './Header';
import Footer from './Footer';
import Mark from './Mark';
import ScrollProgress from './ScrollProgress';

export default function Layout() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useReveal(pathname);
  useScrollFx(pathname);

  return (
    <>
      {/* Blue and pink panels lift away to uncover each page; keyed so it replays on navigation. */}
      <div key={pathname} className="curtain" aria-hidden="true">
        <Mark />
      </div>
      <ScrollProgress />
      <Header />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
