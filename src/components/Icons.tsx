// Line icons for the three pillars: Educate, Guide, Empower.
const common = { viewBox: '0 0 24 24', 'aria-hidden': true, className: 'icon' } as const;

export function BookIcon() {
  return (
    <svg {...common}>
      <path d="M12 6.5C10 5 7 4.5 3 5v13c4-.5 7 0 9 1.5 2-1.5 5-2 9-1.5V5c-4-.5-7 0-9 1.5zM12 6.5v13" />
    </svg>
  );
}

export function CompassIcon() {
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </svg>
  );
}

export function SummitIcon() {
  return (
    <svg {...common}>
      <path d="M2 20 9 9.5l4 5.5 3-4 6 9zM9 9.5V3l5 1.6L9 6.2" />
    </svg>
  );
}
