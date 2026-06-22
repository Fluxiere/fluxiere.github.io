import styles from './StackStrip.module.scss';

export const StackStrip = () => {
  const industries = [
    'SME Retail', 'Logistics & Distribution', 'Healthcare Clinics', 
    'Professional Services', 'Manufacturing', 'Education', 'Real Estate'
  ];

  // We repeat the array items to fill up the track width for a seamless infinite animation loop
  const repeatedIndustries = [...industries, ...industries, ...industries];

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