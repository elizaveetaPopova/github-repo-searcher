import { useState } from 'react';

import arrow from '../../../assets/images/down.png';
import styles from './styles.module.css';
import { observer } from 'mobx-react-lite';
import type { SortOption } from '../../../types/Repos/ReposTypes';

interface DropdownProps {
  options: SortOption[];
  onChange: (value: SortOption) => void;
  sortBy: string;
}

const Dropdown = observer(({ options, onChange, sortBy }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: SortOption) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.button} onClick={handleDropdownToggle}>
        <span className={styles.text}>{sortBy}</span>
        <img src={arrow} alt="arrow" />
      </button>
      <ul className={`${styles.options} ${isOpen ? styles.open : ''}`}>
        {options.map((option) => (
          <li
            key={option.value}
            className={styles.option}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
});
export default Dropdown;
