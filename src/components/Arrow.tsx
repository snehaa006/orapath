export default function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg className={`arrow ${className}`} viewBox="0 0 39 11" aria-hidden="true">
      <path d="m33.5 0-.7.7L37.1 5H0v1h37.1l-4.3 4.3.7.7L39 5.5z" />
    </svg>
  );
}
