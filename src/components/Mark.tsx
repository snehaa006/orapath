// The logo's "O": an open ring holding the guiding star.
export default function Mark({ className = '' }: { className?: string }) {
  return (
    <svg className={`mark ${className}`} viewBox="0 0 100 100" aria-hidden="true">
      <circle className="mark-ring" cx="50" cy="50" r="42" pathLength="100" />
      <path
        className="mark-star"
        d="M50 29c1.3 9.8 7.3 17.4 18 21-10.7 3.6-16.7 11.2-18 21-1.3-9.8-7.3-17.4-18-21 10.7-3.6 16.7-11.2 18-21z"
      />
    </svg>
  );
}
