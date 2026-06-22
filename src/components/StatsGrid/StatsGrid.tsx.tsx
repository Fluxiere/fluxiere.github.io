import styles from './StatsGrid.module.scss';

export const StatsGrid = () => {
  return (
    <div className={styles.statsGrid}>
      <div className={styles.statCard}>
        <div className={styles.statNum}>120+</div>
        <div className={styles.statLabel}>Automations deployed</div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statNum}>40hrs</div>
        <div className={styles.statLabel}>Avg. hours saved / month</div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statNum}>97%</div>
        <div className={styles.statLabel}>Client retention</div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statNum}>2 wks</div>
        <div className={styles.statLabel}>Avg. time to first build</div>
      </div>
    </div>
  );
};