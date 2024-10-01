interface SelectProps {
  label?: string;
  options: string[];
  optionsLabel?: string;
}

export default function Select({ label, options, optionsLabel }: SelectProps) {
  return (
    <>
      {label && <label className="block">{label}</label>}
      <select
        className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-select p-4 max-h-14"
        name="job"
      >
        {optionsLabel && <option>{optionsLabel}</option>}
        {options.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </>
  );
}
