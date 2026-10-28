import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useReveal } from '../lib/reveal';
import Header from './Header';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  useReveal(pathname);

  return (
    <>
      <ScrollProgress />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
