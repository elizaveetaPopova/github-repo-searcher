import styles from './styles.module.css';

interface RepoInfoItemProps {
  icon: string;
  value: number | string;
  label: string;
  alt?: string;
}

const RepoInfoItem = ({ icon, value, label, alt }: RepoInfoItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.iconContainer}>
        <img src={icon} alt={alt} className={styles.icon} />
      </div>
      <div className={styles.info}>
        <span className={styles.value}>{value}</span>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
};

export default RepoInfoItem;
