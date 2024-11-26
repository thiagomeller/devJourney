import React, { useState } from "react";
import clsx from "clsx";

interface ComboboxProps {
  id: string;
  name: string;
  label?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const Combobox: React.FC<ComboboxProps> = ({
  id,
  name,
  label,
  options,
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
    onChange(newValue); 
  };

  const handleSelect = (selected: string) => {
    setInputValue(selected);
    onChange(selected);
    setIsOpen(false); 
  };

  return (
    <div className="relative">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => setIsOpen(true)} 
        onBlur={() => setTimeout(() => setIsOpen(false), 200)} 
        className={clsx(
          "block w-full px-4 py-2 text-sm border rounded-md shadow-sm",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          "dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600",
          "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200",
          "focus:ring-blue-500 focus:border-blue-500"
        )}
        placeholder="Digite ou selecione..."
      />
      {isOpen && filteredOptions.length > 0 && (
        <ul
          className={clsx(
            "absolute z-10 bg-white border rounded-md shadow-md w-full max-h-48 overflow-auto mt-1",
            "dark:bg-gray-700 dark:border-gray-600"
          )}
        >
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className={clsx(
                "px-4 py-2 cursor-pointer text-sm hover:bg-gray-100",
                "dark:hover:bg-gray-600 dark:text-gray-300"
              )}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};