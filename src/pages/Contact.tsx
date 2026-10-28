import SubmitForm from '../components/SubmitForm';
import { img, pos, usePageTitle } from '../lib/pos';
import Pic from '../components/Pic';

export default function Contact() {
  usePageTitle('Contact');

  return (
    <main className="s" style={{ height: 749 }}>
      <Pic src={img('contact.jpg')} alt="" style={pos(25, 25, 695, 699)} />
      <section className="a" style={{ ...pos(156, 252, 431, 245), background: '#fff' }} />
      <h1 className="a pink" style={{ ...pos(172, 273, 310), fontSize: 17, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
        Get in Touch
      </h1>
      <svg
        className="a"
        viewBox="20 20 160 160"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ ...pos(541, 277, 24, 24), fill: 'var(--blue)' }}
      >
        <path d="M180 89.333h-54.248l38.357-38.357-15.083-15.088-38.36 38.36V20H89.333v54.248l-38.36-38.36-15.082 15.088 38.357 38.357H20v21.333h54.251l-38.36 38.36 15.083 15.085 38.36-38.36V180h21.333v-54.248l38.36 38.36 15.083-15.085-38.36-38.36H180V89.333z" />
      </svg>
      <p className="a" style={{ ...pos(172, 426, 332), fontSize: 15, lineHeight: 1.5, letterSpacing: '-0.01em' }}>
        Reach out to us for any inquiries or collaborations. We are here to support you.
      </p>

      <SubmitForm className="a contact-form" style={pos(823, 164, 488)}>
        <div className="row">
          <div>
            <label className="field-label" htmlFor="c-first">
              First name *
            </label>
            <input className="field" id="c-first" type="text" required />
          </div>
          <div>
            <label className="field-label" htmlFor="c-last">
              Last name *
            </label>
            <input className="field" id="c-last" type="text" required />
          </div>
        </div>
        <label className="field-label" htmlFor="c-email" style={{ marginTop: 16 }}>
          Email *
        </label>
        <input className="field" id="c-email" type="email" required />
        <label className="field-label" htmlFor="c-msg" style={{ marginTop: 16 }}>
          Message
        </label>
        <textarea className="field" id="c-msg" style={{ marginTop: 7 }} />
        <button className="submit" type="submit" style={{ marginTop: 16 }}>
          Submit
        </button>
      </SubmitForm>
    </main>
  );
}
