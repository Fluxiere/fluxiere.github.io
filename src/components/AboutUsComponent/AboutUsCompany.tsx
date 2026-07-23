import React from 'react';
import { aboutHeading, historyTimeline, teamCopy, teamRoster, historyTrail } from './AboutUsConstants';
import styles from './AboutUsCompany.module.scss';

export const AboutUsCompany: React.FC = () => {
  return (
    <section className={styles.aboutSection} id="about-company">
      <div className="wrap">
        
        {/* SECTION HEADER */}
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>{aboutHeading.eyebrow}</span>
          <h2>{aboutHeading.title}</h2>
          <p className={styles.subtitle}>{aboutHeading.subtitle}</p>
        </div>

        {/* CONTENT SPLIT GRID */}
        <div className={styles.aboutMatrix}>
          
          {/* MISSION & HISTORY TRAIL */}
          <div className={styles.historyColumn}>
            <h3>{historyTrail.title}</h3>
            <div className={styles.timelineTrail}>
              {historyTimeline.map((item, index) => (
                <div key={index} className={styles.milestoneBlock}>
                  <div className={styles.markerRow}>
                    <span className={styles.yearBadge}>{item.year}</span>
                    <span className={styles.connectingLine} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* THE TEAM GRID*/}
          <div className={styles.teamColumn}>
            <h3>{teamCopy.title}</h3>
            <div className={styles.teamGrid}>
              {teamRoster.map((member, index) => (
                <div key={index} className={styles.memberCard}>
                  <div className={styles.imageContainer}>
                    <img 
                      src={member.imgSrc} 
                      alt={member.name} 
                      className={styles.avatarPhoto}
                      loading="lazy"
                    />
                    {/* Text content sits inside the gradient vector box */}
                    <div className={styles.gradientOverlay}>
                      <div className={styles.nameMeta}>
                        <h4>{member.name}</h4>
                        <span>{member.role}</span>
                      </div>
                      <p className={styles.memberBio}>{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};