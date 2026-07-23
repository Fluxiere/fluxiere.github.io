import React from 'react';
import styles from './CareersComponent.module.scss';
import {
  agencyPillars,
  careersHeading,
  careerBoardCopy,
  internshipNotice,
  openPositions
} from './CareersComponentConstants';
import { ApplicationForm } from './ApplicationForm';

export const CareersComponent: React.FC = () => {
  return (
    <section className="sec" id="careers">
      <div className="wrap">
        {/* Header Section */}
        <header className={styles.header}>
          <span className="sec-eyebrow">{careersHeading.eyebrow}</span>
          <h1 className={styles.headline}>{careersHeading.title}</h1>
          <p className={styles.subtext}>{careersHeading.description}</p>
        </header>

        {/* Culture Pillars Grid */}
        <div className={styles.pillarsGrid}>
          {agencyPillars.map((pillar, i) => (
            <div key={i} className={styles.pillarCard}>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        {/* Job Board / Internship Block */}
        <div className={styles.jobBoard}>
          <h2 className={styles.boardTitle}>{careerBoardCopy.sectionTitle}</h2>

          {openPositions.length > 0 ? (
            <div className={styles.listings}>
              {openPositions.map(job => (
                <div key={job.id} className={styles.jobCard}>
                  <div className={styles.meta}>
                    <span className={styles.tag}>{job.team}</span>
                    <span className={styles.tag}>{job.location}</span>
                  </div>
                  <h3>{job.title}</h3>
                  <p>{job.summary}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.internBox}>
              <div className={styles.internNoticeMeta}>
                <span className={styles.tag}>{careerBoardCopy.statusTags[0]}</span>
                <span className={styles.tag}>{careerBoardCopy.statusTags[1]}</span>
              </div>
              <h3>{internshipNotice.title}</h3>
              <p>{internshipNotice.summary}</p>
            </div>
          )}
        </div>

        {/* Application Form - Always visible */}
        <ApplicationForm />
      </div>
    </section>
  );
};