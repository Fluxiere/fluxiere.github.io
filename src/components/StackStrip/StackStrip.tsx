import styles from './StackStrip.module.scss';
import { stackStripCopy } from './StackStripConstants.tsx';

export const StackStrip = () => {
  const repeatedIndustries = [...stackStripCopy.industries, ...stackStripCopy.industries, ...stackStripCopy.industries];

  // We repeat the array items to fill up the track width for a seamless infinite animation loop
  return (
    <div className={styles.stackStrip}>
      <div className={styles.stackTrack}>

        {repeatedIndustries.map((item, index) => (

          <span key={index} className={styles.trackItem}>
            {item}
            {index < repeatedIndustries.length - 1 && <span className={styles.dot}>·</span>}
          </span>
          
        ))}
      </div>
    </div>
  );
};