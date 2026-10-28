import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';
import Field from './Field';
import Star from './Star';
import SubmitForm from './SubmitForm';

const social = [
  { href: 'https://www.facebook.com/wix', label: 'Facebook' },
  { href: 'https://www.linkedin.com/company/wix-com', label: 'LinkedIn' },
  { href: 'https://www.tiktok.com/@wix', label: 'Tik Tok' },
];

const policies = ['Privacy Policy', 'Accessibility Statement', 'Terms & Conditions', 'Refund Policy'];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap ft-top">
        <div className="ft-info">
          <p className="ft-brand" data-reveal="up">
            <Link to="/">Datum Voice</Link>
          </p>
          <div className="ft-cols">
            <div data-reveal="up">
              <p>123-456-7890</p>
              <p>
                <a href="mailto:info@mysite.com">info@mysite.com</a>
              </p>
              <p className="ft-address">500 Terry Francine St. San Francisco, CA 94158</p>
            </div>
            <ul data-reveal="up">
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul data-reveal="up">
              {policies.map((p) => (
                <li key={p}>
                  <a href="#">{p}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ft-news" data-reveal="up">
          <h2>
            Stay informed,
            <br />
            <em>join our newsletter</em>
          </h2>
          <SubmitForm className="newsletter">
            <Field id="nl-email" label="Email *" type="email" required autoComplete="email" />
            <label className="check">
              <input type="checkbox" required />
              <span>Yes, subscribe me to your newsletter. *</span>
            </label>
            <button className="btn btn--pink" type="submit">
              <span>Submit</span>
              <Arrow />
            </button>
          </SubmitForm>
        </div>
      </div>
      <p className="ft-mark" aria-hidden="true" data-reveal="words">
        {'ORAPATH'.split('').map((ch, i) => (
          <span key={i} className="w">
            <span style={{ '--i': i } as CSSProperties}>{ch}</span>
          </span>
        ))}
      </p>
      <div className="wrap ft-bottom">
        <p className="copyright">
          © 2035 by Datum Voice. Powered and secured by{' '}
          <a href="https://www.wix.com" target="_blank" rel="noreferrer noopener">
            Wix
          </a>
        </p>
        <button className="to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Star />
          Back to top
        </button>
      </div>
    </footer>
  );
}
