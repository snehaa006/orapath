import type { CSSProperties } from 'react';

interface Props {
  src: string;
  alt: string;
  style: CSSProperties;
  className?: string;
}

// A positioned, cropped image. The frame clips the image so it can zoom on
// hover and settle in when revealed without spilling outside its box.
export default function Pic({ src, alt, style, className = '' }: Props) {
  return (
    <div className={`a pic ${className}`} style={style}>
      <img className="cover" src={src} alt={alt} decoding="async" />
    </div>
  );
}
