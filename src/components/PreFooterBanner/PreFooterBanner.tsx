import React from 'react';
import styles from './PreFooterBanner.module.scss';
import {
  bannerDescription,
  bannerTitle,
  exploreSolutionsLabel,
  expertAnchor,
  freeConsultationLabel,
  contactAnchor,
} from './PreFooterBannerConstants';

export const PreFooterBanner: React.FC = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
        {/* Left Side: Headline & Copy */}
        <div className={styles.textContent}>
          <h2 className={styles.bannerTitle}>{bannerTitle}</h2>
          <p className={styles.bannerDescription}>{bannerDescription}</p>
        </div>

        {/* Right Side: Button Actions */}
        <div className={styles.bannerActions}>
          <a href={contactAnchor} className={styles.btnWhite}>
            {freeConsultationLabel} <span className={styles.arrow}>→</span>
          </a>
          <a href={expertAnchor} className={styles.btnGold}>
            {exploreSolutionsLabel}
          </a>
        </div>
      </div>
    </section>
  );
};