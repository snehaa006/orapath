import { img, usePageTitle } from '../lib/page';
import Arrow from '../components/Arrow';
import Field from '../components/Field';
import Pic from '../components/Pic';
import SubmitForm from '../components/SubmitForm';
import Words from '../components/Words';

export default function Contact() {
  usePageTitle('Contact');

  return (
    <section className="wrap contact">
      <div className="contact-visual">
        <Pic src={img('contact.jpg')} className="contact-pic" parallax eager />
        <div className="contact-card" data-reveal="up">
          <div className="contact-card-head">
            <Words as="h1" text="Get in *Touch*" />
            <svg className="asterisk" viewBox="20 20 160 160" aria-hidden="true">
              <path d="M180 89.333h-54.248l38.357-38.357-15.083-15.088-38.36 38.36V20H89.333v54.248l-38.36-38.36-15.082 15.088 38.357 38.357H20v21.333h54.251l-38.36 38.36 15.083 15.085 38.36-38.36V180h21.333v-54.248l38.36 38.36 15.083-15.085-38.36-38.36H180V89.333z" />
            </svg>
          </div>
          <p>Reach out to us for any inquiries or collaborations. We are here to support you.</p>
        </div>
      </div>

      <SubmitForm className="contact-form">
        <div className="row" data-reveal="up">
          <Field id="c-first" label="First name *" required autoComplete="given-name" />
          <Field id="c-last" label="Last name *" required autoComplete="family-name" />
        </div>
        <div data-reveal="up">
          <Field id="c-email" label="Email *" type="email" required autoComplete="email" />
        </div>
        <div data-reveal="up">
          <Field id="c-msg" label="Message" multiline />
        </div>
        <button className="btn" type="submit" data-reveal="up">
          <span>Submit</span>
          <Arrow />
        </button>
      </SubmitForm>
    </section>
  );
}
