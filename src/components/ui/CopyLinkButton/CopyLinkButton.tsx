import link from '../../../assets/images/link.png';

import styles from './styles.module.css';

const CopyLinkButton = () => {
  return (
    <button className={styles.button}>
      <img src={link} />
    </button>
  );
};

export default CopyLinkButton;
