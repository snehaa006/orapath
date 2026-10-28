import { Link } from 'react-router-dom';
import { pos } from '../lib/pos';
import SubmitForm from './SubmitForm';

const social = [
  { href: 'https://www.facebook.com/wix', label: 'Facebook' },
  { href: 'https://www.linkedin.com/company/wix-com', label: 'LinkedIn' },
  { href: 'https://www.tiktok.com/@wix', label: 'Tik Tok' },
];

const policies = ['Privacy Policy', 'Accessibility Statement', 'Terms & Conditions', 'Refund Policy'];

export default function Footer() {
  return (
    <footer className="s site-footer">
      <p className="a ft-brand">
        <Link to="/">Datum Voice</Link>
      </p>
      <p className="a" style={pos(308, 37, 152)}>123-456-7890</p>
      <p className="a" style={pos(308, 53, 152)}>
        <a href="mailto:info@mysite.com">info@mysite.com</a>
      </p>
      <p className="a" style={pos(308, 84, 161)}>500 Terry Francine St. San Francisco, CA 94158</p>
      <p className="a ft-social" style={pos(308, 152, 179)}>
        {social.map((s, i) => (
          <span key={s.label}>
            {i > 0 && <br />}
            <a href={s.href} target="_blank" rel="noreferrer noopener">
              {s.label}
            </a>
          </span>
        ))}
      </p>
      <div className="a" style={pos(666, 37, 152)}>
        {policies.map((p) => (
          <p key={p}>
            <a href="#">{p}</a>
          </p>
        ))}
      </div>
      <p className="a ft-news">
        Stay informed,
        <br />
        join our newsletter
      </p>
      <SubmitForm className="a newsletter">
        <label className="field-label" htmlFor="nl-email">
          Email *
        </label>
        <input className="field" id="nl-email" type="email" required />
        <label className="check" style={{ marginTop: 25 }}>
          <input type="checkbox" required />
          <span>Yes, subscribe me to your newsletter. *</span>
        </label>
        <button className="submit" type="submit" style={{ marginTop: 23 }}>
          Submit
        </button>
      </SubmitForm>
      <p className="a copyright">
        © 2035 by Datum Voice. Powered and secured by{' '}
        <a href="https://www.wix.com" target="_blank" rel="noreferrer noopener">
          Wix
        </a>
      </p>
    </footer>
  );
}
