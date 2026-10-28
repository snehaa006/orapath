import Slideshow, { type Testimonial } from '../components/Slideshow';
import { img, pos, usePageTitle } from '../lib/pos';

const testimonials: Testimonial[] = [
  {
    quote: '"Testimonials provide a sense of what it\'s like to work with you, or what it\'s like to use your products and services."',
    author: 'Robert Rose, Product Designer',
    image: 'guest-1.png',
    imageX: 270,
    boxX: 612,
    boxHeight: 342,
    textX: 652,
    textWidth: 485,
    ruleY: 590,
    authorY: 626,
    authorTracking: '-0.01em',
  },
  {
    quote: '“Have customers review you and share what they had to say. Click to edit and add their testimonial.”',
    author: 'Alexa Young, Product Manager',
    image: 'guest-2.png',
    imageX: 755,
    boxX: 273,
    boxHeight: 301,
    textX: 315,
    textWidth: 485,
    ruleY: 553,
    authorY: 585,
    authorTracking: '-0.01em',
  },
  {
    quote: '"A great testimonial can boost your brand’s image. Click to edit and add your own."',
    author: 'Don Francis, Tech Lead',
    image: 'guest-3.png',
    imageX: 270,
    boxX: 612,
    boxHeight: 301,
    textX: 654,
    textWidth: 460,
    ruleY: 553,
    authorY: 589,
  },
];

const LONG =
  'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.';
const MEDIUM =
  'This is your Project description. A brief summary can help visitors understand the context of your work. Click on "Edit Text" or double click on the text box to start.';
const SHORT = 'This is your Project description. Click on "Edit Text" or double click on the text box to start.';

// Two staggered columns, as laid out in the Wix repeater.
const projects = [
  { x: 272, y: 1324, imageY: 1527, image: 'project-1.jpg', text: LONG },
  { x: 272, y: 1844, imageY: 2021, image: 'project-3.jpg', text: MEDIUM },
  { x: 272, y: 2338, imageY: 2541, image: 'project-5.jpg', text: LONG },
  { x: 809, y: 1324, imageY: 1450, image: 'project-2.jpg', text: SHORT },
  { x: 809, y: 1767, imageY: 1970, image: 'project-4.jpg', text: LONG },
  { x: 809, y: 2287, imageY: 2464, image: 'project-6.jpg', text: MEDIUM },
];

export default function Session() {
  usePageTitle('Session 1');
  const initialSlide = Number(new URLSearchParams(window.location.search).get('slide') ?? 0);

  return (
    <main className="s" style={{ height: 2840 }}>
      <img className="a cover" src={img('session-hero.jpg')} alt="" style={pos(230, 40, 980, 352)} />
      <div className="a" style={{ ...pos(473, 166, 494, 100), background: '#fff' }} />
      <h1 className="a pink center" style={{ ...pos(490, 182, 460), fontSize: 56, lineHeight: 'normal' }}>
        Session with ***
      </h1>

      <Slideshow slides={testimonials} initial={initialSlide} />

      {projects.map((p) => (
        <div key={p.image}>
          <h2 className="a" style={{ ...pos(p.x, p.y, 345), fontSize: 20, lineHeight: 'normal' }}>
            Project Name
          </h2>
          <p className="a" style={{ ...pos(p.x, p.y + 46, 345), fontSize: 16, lineHeight: '1.6em', letterSpacing: '-0.01em' }}>
            {p.text}
          </p>
          <img className="a cover" src={img(p.image)} alt="" style={pos(p.x, p.imageY, 358, 212)} />
        </div>
      ))}
    </main>
  );
}
