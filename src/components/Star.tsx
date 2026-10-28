// The four-point guiding star from the Orapath logo.
export default function Star({ className = '' }: { className?: string }) {
  return (
    <svg className={`star ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c.7 6.3 5.2 10.9 12 12-6.8 1.1-11.3 5.7-12 12-.7-6.3-5.2-10.9-12-12C6.8 10.9 11.3 6.3 12 0z" />
    </svg>
  );
}
