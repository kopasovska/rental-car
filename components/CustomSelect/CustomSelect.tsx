import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import css from "./CustomSelect.module.css";

interface CustomSelectProps {
  options: string[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function CustomSelect({
  options,
  placeholder = "Select an option",
  onChange,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>(placeholder);

  const handleSelect = (opt: string) => {
    setSelected(opt);
    setOpen(false);
    onChange?.(opt);
  };

  return (
    <div className={css.selectWrapper} onClick={() => setOpen(!open)}>
      <div className={`${css.selected} text-primary`}>
        {selected} {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {open && (
        <ul className={`${css.options} text-primary text-gray`}>
          {options.map((opt) => (
            <li key={opt} onClick={() => handleSelect(opt)}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
