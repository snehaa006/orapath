import { useState, type CSSProperties, type FormEvent, type ReactNode } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

// The forms have no backend: native validation runs, then the Wix-style
// confirmation is shown.
export default function SubmitForm({ className = '', style, children }: Props) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form className={`${className}${sent ? ' sent' : ''}`} style={style} onSubmit={handleSubmit}>
      {children}
      <p className="form-done" role="status">
        {sent && (
          <>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="m7.5 12.5 3 3 6-6.5" />
            </svg>
            Thanks for submitting!
          </>
        )}
      </p>
    </form>
  );
}
