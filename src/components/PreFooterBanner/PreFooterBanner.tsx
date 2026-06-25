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
            Discover how AI automation, intelligent workflows, and custom software can streamline operations, reduce costs, and help your business grow without adding complexity.
          </p>
        </div>

        {/* Right Side: Button Actions */}
        <div className={styles.bannerActions}>
          <a href="#contact" className={styles.btnWhite}>
            Book a Free Consultation <span className={styles.arrow}>→</span>
          </a>
          <a href="#expert" className={styles.btnGold}>
            Explore our solutions
          </a>
        </div>
      </div>
    </section>
  );
};