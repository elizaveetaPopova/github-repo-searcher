import { Link } from 'react-router-dom';

import styles from './styles.module.css';

interface LinkButtonProps {
  repoId?: number;
  url?: string;
  label?: string;
  size?: 'small' | 'medium';
}

const LinkButton = ({
  repoId,
  url,
  size = 'medium',
  label = 'Подробнее',
}: LinkButtonProps) => {
  const classNames = `${styles.link} ${styles[size]}`;
  if (url) {
    return (
      <a
        className={classNames}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.text}>{label}</span>
      </a>
    );
  }

  if (repoId !== undefined) {
    return (
      <Link className={classNames} to={`/repository/${repoId}`}>
        <span className={styles.text}>{label}</span>
      </Link>
    );
  }

  return null;
};

export default LinkButton;
