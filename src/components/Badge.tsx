import { useId } from 'react';
import Star from './Star';

// A slowly turning stamp of circular text around the guiding star.
export default function Badge({ text = 'Educate • Guide • Empower • ', className = '' }: { text?: string; className?: string }) {
  const id = `ring${useId().replace(/:/g, '')}`;
  return (
    <div className={`badge ${className}`} aria-hidden="true">
      <svg className="badge-ring" viewBox="0 0 200 200">
        <defs>
          <path id={id} d="M100 100m-76 0a76 76 0 1 1 152 0a76 76 0 1 1-152 0" />
        </defs>
        <text>
          <textPath href={`#${id}`} textLength="477">
            {text}
          </textPath>
        </text>
      </svg>
      <Star />
    </div>
  );
}
