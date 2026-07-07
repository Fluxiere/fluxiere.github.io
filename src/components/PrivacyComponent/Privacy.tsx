// src/components/Privacy/Privacy.tsx
import React, { useEffect } from 'react';
import styles from './Privacy.module.scss';
import { privacyHeading, privacySections } from './PrivacyConstants';

export const Privacy = () => {
  // Ensure the reader starts at the top of the viewport upon mounting
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.privacyPage}>
      <section className="sec">
        <div className="wrap">
          
          {/* Header Typography Group */}
          <div className={styles.header}>
            <span className="sec-eyebrow">{privacyHeading.eyebrow}</span>
            <h1 className={styles.headline}>{privacyHeading.title}</h1>
            <p className={styles.meta}>{privacyHeading.lastUpdated}</p>
          </div>

          <hr className={styles.divider} />

          {/* Legal Text Column */}
          <div className={styles.contentBody}>
            {privacySections.map((section, index) => (
              <div key={index} className={styles.legalSection}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};