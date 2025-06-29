import arrowLeft from '@assets/images/Arrow left.png';

import styles from './styles.module.css';

interface BackButtonProps {
  onClick: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src={arrowLeft} alt="arrow" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
