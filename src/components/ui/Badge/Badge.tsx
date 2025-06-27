import styles from './style.module.css';

interface BadgeProps {
  count: number;
}

const Badge = ({ count }: BadgeProps) => {
  return <div className={styles.badge}>{count}</div>;
};

export default Badge;
