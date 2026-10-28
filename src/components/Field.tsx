interface Props {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  autoComplete?: string;
}

// Text field whose label sits inside it and floats up once the field is focused or filled.
export default function Field({ id, label, type = 'text', required, multiline, autoComplete }: Props) {
  return (
    <div className={`field${multiline ? ' field--area' : ''}`}>
      {multiline ? (
        <textarea id={id} placeholder=" " required={required} rows={4} />
      ) : (
        <input id={id} type={type} placeholder=" " required={required} autoComplete={autoComplete} />
      )}
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
