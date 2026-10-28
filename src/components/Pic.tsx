interface Props {
  src: string;
  alt?: string;
  className?: string;
  /** Drift the image against the scroll inside its frame. */
  parallax?: boolean;
  /** Load immediately (images at the top of a page). */
  eager?: boolean;
}

// A cropped image. The frame clips the image so it can rise in behind a curtain when revealed,
// drift on scroll and zoom on hover without spilling outside its box.
export default function Pic({ src, alt = '', className = '', parallax = false, eager = false }: Props) {
  return (
    <div className={`pic ${className}`} data-reveal="img" data-parallax={parallax ? '' : undefined}>
      <img src={src} alt={alt} decoding="async" loading={eager ? 'eager' : 'lazy'} />
    </div>
  );
}
