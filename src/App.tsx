import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PanelSessions from './pages/PanelSessions';
import Session from './pages/Session';
import InterviewProjects from './pages/InterviewProjects';
import About from './pages/About';
import UpcomingEvents from './pages/UpcomingEvents';
import Contact from './pages/Contact';

// Paths match the original Wix URLs.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="s-projects-side-by-side" element={<PanelSessions />} />
        <Route path="session-1" element={<Session />} />
        <Route path="projects" element={<InterviewProjects />} />
        <Route path="about" element={<About />} />
        <Route path="upcoming-events" element={<UpcomingEvents />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
