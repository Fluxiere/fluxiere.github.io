import { type ResultStat } from './types';
import styles from './Results.module.scss';

export const Results = () => {
  const statsData: ResultStat[] = [
    { value: '120+', label: 'Automations shipped' },
    { value: '₹2.4Cr', label: 'Operational cost saved for clients' },
    { value: '68%', label: 'Avg. reduction in manual task time' },
    { value: '14', label: 'Industries served' }
  ];

  return (
    <section className={styles.results} id="work">
      <div className="wrap">
        <div className={styles.top}>
          <h2>Time and cost saved, measured in hours back to your team — not promises.</h2>
          <a href="#contact" className={styles.caseStudiesLink}>
            View case studies →
          </a>
        </div>
        
        <div className={styles.resultsGrid}>
          {statsData.map((stat, index) => (
            <div key={index} className={styles.statBox}>
              <div className={styles.rNum}>{stat.value}</div>
              <div className={styles.rLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};