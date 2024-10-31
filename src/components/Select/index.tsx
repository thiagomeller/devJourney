import { ChangeEventHandler } from "react";

interface SelectProps {
  id: string;
  name: string;
  label?: string;
  options: string[];
  optionsLabel?: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

export default function Select({
  label,
  options,
  optionsLabel = `Selecione`,
  id,
  name,
  onChange,
}: SelectProps) {
  return (
    <div>
      {label && <label className="block">{label}</label>}
      <select
        className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-select p-4 max-h-14"
        name={name}
        id={id}
        onChange={onChange}
      >
        {optionsLabel && <option>{optionsLabel}</option>}
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
