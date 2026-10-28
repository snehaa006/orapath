import Slideshow, { type Testimonial } from '../components/Slideshow';
import { img, usePageTitle } from '../lib/page';
import PageHero from '../components/PageHero';
import Pic from '../components/Pic';
import Words from '../components/Words';

const testimonials: Testimonial[] = [
  {
    quote: '"Testimonials provide a sense of what it\'s like to work with you, or what it\'s like to use your products and services."',
    author: 'Robert Rose, Product Designer',
    image: 'guest-1.jpg',
  },
  {
    quote: '“Have customers review you and share what they had to say. Click to edit and add their testimonial.”',
    author: 'Alexa Young, Product Manager',
    image: 'guest-2.jpg',
  },
  {
    quote: '"A great testimonial can boost your brand’s image. Click to edit and add your own."',
    author: 'Don Francis, Tech Lead',
    image: 'guest-3.jpg',
  },
];

const LONG =
  'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.';
const MEDIUM =
  'This is your Project description. A brief summary can help visitors understand the context of your work. Click on "Edit Text" or double click on the text box to start.';
const SHORT = 'This is your Project description. Click on "Edit Text" or double click on the text box to start.';

// Two staggered columns, as laid out in the Wix repeater.
const columns = [
  [
    { image: 'project-1.jpg', text: LONG },
    { image: 'project-3.jpg', text: MEDIUM },
    { image: 'project-5.jpg', text: LONG },
  ],
  [
    { image: 'project-2.jpg', text: SHORT },
    { image: 'project-4.jpg', text: LONG },
    { image: 'project-6.jpg', text: MEDIUM },
  ],
];

export default function Session() {
  usePageTitle('Session 1');
  const initialSlide = Number(new URLSearchParams(window.location.search).get('slide') ?? 0) || 0;

  return (
    <>
      <PageHero image="session-hero.jpg">
        <Words as="h1" text="Session *with* ***" />
      </PageHero>

      <Slideshow slides={testimonials} initial={initialSlide} />

      <section className="wrap projects">
        {columns.map((col, c) => (
          <div key={c} className={`projects-col${c ? ' projects-col--offset' : ''}`}>
            {col.map((p) => (
              <article key={p.image} className="project" data-reveal="up">
                <Pic src={img(p.image)} className="project-pic" />
                <h2>Project Name</h2>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
