import heart from '@assets/images/heart_off.png';
import heartOn from '@assets/images/heart_on.png';

import styles from './styles.module.css';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}

const FavoriteButton = ({ isFavorite, onClick }: FavoriteButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src={isFavorite ? heartOn : heart} />
    </button>
  );
};

export default FavoriteButton;
