import { img, pos, usePageTitle } from '../lib/pos';

const cards = [
  { x: 128, y: 187, image: 'zero-carbon.jpg', title: 'Zero Carbon World' },
  { x: 802, y: 187, image: 'interview-card.jpg', title: 'Interview with *** ' },
  { x: 128, y: 678, image: 'renewable.jpg', title: 'Renewable Energy Program' },
  { x: 802, y: 678, image: 'rainforest.jpg', title: 'Rainforest Action Initiative' },
];

export default function InterviewProjects() {
  usePageTitle('Projects (List)');

  return (
    <main className="s" style={{ height: 1089 }}>
      <h1 className="a pink center" style={{ ...pos(320, 49, 800), fontSize: 56, lineHeight: '1.4em' }}>
        Projects
      </h1>
      {cards.map(({ x, y, image, title }) => (
        <div key={title}>
          <img className="a cover" src={img(image)} alt="" style={pos(x, y, 509, 403)} />
          <div className="a" style={{ ...pos(x - 81, y + 77, 350, 290), background: '#fff' }} />
          <h2 className="a pink" style={{ ...pos(x - 37, y + 108, 280), fontSize: 26, lineHeight: 1.4 }}>
            {title}
          </h2>
          <p className="a" style={{ ...pos(x - 37, y + 197, 280), fontSize: 14, lineHeight: '1.6em' }}>
            This is placeholder text. To change this content, double-click on the element and click Change Content.
          </p>
          <a className="a btn-outline" href="#" style={pos(x - 37, y + 295, 116, 39)}>
            Read More
          </a>
        </div>
      ))}
    </main>
  );
}
