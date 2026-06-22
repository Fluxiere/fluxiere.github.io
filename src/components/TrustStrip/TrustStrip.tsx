import styles from './TrustStrip.module.scss';
import { trustStripCopy } from './TrustStripConstants.tsx';

export const TrustStrip = () => {
  return (
    <section className={styles.trust} id="TrustStrip">
      <div className="wrap">
        <div className={styles.trustContent}>
          <span className={styles.label}>{trustStripCopy.heading}</span>
          <div className={styles.tags}>
            {trustStripCopy.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};