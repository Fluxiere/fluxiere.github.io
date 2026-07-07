import React from 'react';
import { aboutHeading, historyTimeline, teamRoster } from './AboutUsConstants';
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
            <h3>How We Started</h3>
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

          {/* THE TEAM GRID (ONE PICTURE AT A TIME) */}
          <div className={styles.teamColumn}>
            <h3>The Core Unit</h3>
            <div className={styles.teamGrid}>
              {teamRoster.map((member, index) => (
                <div key={index} className={styles.memberCard}>
                  <div className={styles.avatarRow}>
                    <div className={styles.imageFrame}>
                      <img 
                        src={member.imgSrc} 
                        alt={member.name} 
                        className={styles.avatarPhoto}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.nameMeta}>
                      <h4>{member.name}</h4>
                      <span>{member.role}</span>
                    </div>
                  </div>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};