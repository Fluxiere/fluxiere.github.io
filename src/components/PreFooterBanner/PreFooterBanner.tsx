import React from 'react';
import styles from './PreFooterBanner.module.scss';

export const PreFooterBanner: React.FC = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
        {/* Left Side: Headline & Copy */}
        <div className={styles.textContent}>
          <h2 className={styles.bannerTitle}>Ready to Transform Your Business with AI?</h2>
          <p className={styles.bannerDescription}>
            Discover how intelligent automation can reduce costs, improve productivity, 
            and unlock new growth opportunities.
          </p>
        </div>

        {/* Right Side: Button Actions */}
        <div className={styles.bannerActions}>
          <a href="#contact" className={styles.btnWhite}>
            Schedule a Consultation <span className={styles.arrow}>→</span>
          </a>
          <a href="#expert" className={styles.btnGold}>
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
};