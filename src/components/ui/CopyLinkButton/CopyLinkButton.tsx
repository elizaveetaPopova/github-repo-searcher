import link from '../../../assets/images/link.png';

import styles from './styles.module.css';

interface CopyLinkButtonProps {
  onClick: () => void;
}

const CopyLinkButton = ({ onClick }: CopyLinkButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src={link} />
    </button>
  );
};

export default CopyLinkButton;
