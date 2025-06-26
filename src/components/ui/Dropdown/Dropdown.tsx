import { useState } from 'react';

import arrow from '../../../assets/images/down.png';
import styles from './styles.module.css';

interface DropdownProps {
  values: string[];
}

const Dropdown = ({ values }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortedBy, setSortedBy] = useState(values[0]);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.button} onClick={handleDropdownToggle}>
        <span className={styles.text}>{sortedBy}</span>
        <img src={arrow} />
      </button>
      <ul className={`${styles.options} ${isOpen ? styles.open : ''}`}>
        {values.map((value) => (
          <li
            key={value}
            className={styles.option}
            onClick={() => {
              setSortedBy(value);
              setIsOpen(false);
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
