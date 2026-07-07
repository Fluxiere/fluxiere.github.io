// src/components/Terms/Terms.tsx
import React, { useEffect } from 'react';
import styles from './Terms.module.scss'; // Reuses your editorial spacing variables
import { termsHeading, termsSections } from './TermsConstants';

export const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.termsPage}>
      <section className="sec">
        <div className="wrap">
          
          {/* Header Typography Group */}
          <div className={styles.header}>
            <span className="sec-eyebrow">{termsHeading.eyebrow}</span>
            <h1 className={styles.headline}>{termsHeading.title}</h1>
            <p className={styles.meta}>{termsHeading.lastUpdated}</p>
          </div>

          <hr className={styles.divider} />

          {/* Legal Text Column */}
          <div className={styles.contentBody}>
            {termsSections.map((section, index) => (
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