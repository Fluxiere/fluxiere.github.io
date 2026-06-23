import React, { useState } from 'react';
import styles from './ApproachComponent.module.scss';
import { approachSectionText, stepsData } from './ApproachComponentConstants';

export const ApproachComponent: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className={styles.processSection} id="process">
      <div className="wrap">
        
        {/* SECTION HEAD */}
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>{approachSectionText.eyebrow}</span>
          <h2>{approachSectionText.title}</h2>
          <p>{approachSectionText.description}</p>
        </div>

        {/* COMPACT MATRIX BLOCK */}
        <div className={styles.matrixContainer}>
          
          {/* LEFT SELECTOR ROW */}
          <div className={styles.selectorColumn}>
            {stepsData.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  className={`${styles.tabTrigger} ${isActive ? styles.activeTab : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <span className={styles.stepIndicator}>{step.shortNum}</span>
                  <span className={styles.stepTitleMeta}>{step.idx.split(' / ')[1]}</span>
                  <span className={styles.activeLinePointer} />
                </button>
              );
            })}
          </div>

          {/* RIGHT PANELS SCREEN */}
          <div className={styles.detailDisplayBox}>
            <div className={styles.contentCardAnimation}>
              <div className={styles.cardHeader}>
                <span className={styles.phaseBadge}>{stepsData[activeStep].idx}</span>
              </div>
              
              <h3>{stepsData[activeStep].title}</h3>
              <p className={styles.descriptionText}>{stepsData[activeStep].desc}</p>
              
              <div className={styles.divider} />
              
              <h4>{approachSectionText.benchmarkHeading}</h4>
              <ul className={styles.deliverableList}>
                {stepsData[activeStep].deliverables.map((item, index) => (
                  <li key={index} className={styles.deliverableItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};