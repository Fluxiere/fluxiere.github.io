import styles from './StatsGrid.module.scss';
import { StatsGridCopy } from './StateGridConstants.tsx';

export const StatsGrid = () => {
  return (
    <div className={styles.statsGrid}>
      {StatsGridCopy.map((item) => (
        <div key={item.label} className={styles.statCard}>
          <div className={styles.statNum}>{item.value}</div>
          <div className={styles.statLabel}>{item.label}</div>
        </div>
      ))}
    </div>
  );
};