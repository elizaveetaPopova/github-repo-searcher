import { Link } from 'react-router-dom';

import styles from './styles.module.css';

interface DetailsButtonProps {
  repoId: number;
}

const DetailsButton = ({ repoId }: DetailsButtonProps) => {
  return (
    <Link className={styles.link} to={`/repository/${repoId}`}>
      <span className={styles.text}>Подробнее</span>
    </Link>
  );
};

export default DetailsButton;
