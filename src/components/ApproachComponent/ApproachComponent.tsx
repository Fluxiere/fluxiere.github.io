import React, { useState } from 'react';
import styles from './ApproachComponent.module.scss';

export interface ProcessStep {
  idx: string;
  shortNum: string;
  title: string;
  desc: string;
  deliverables: string[];
}

export const Approach: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepsData: ProcessStep[] = [
    {
      idx: '01 / Audit',
      shortNum: '01',
      title: 'Map the workflow',
      desc: 'We shadow your operations as they run today to locate exactly where time, manual errors, and accuracy are leaking out of your pipeline.',
      deliverables: ['Data friction mapping', 'Operational velocity baseline', 'Automation opportunity log']
    },
    {
      idx: '02 / Design',
      shortNum: '02',
      title: 'Design the system',
      desc: 'A scoped structural plan defining the exact logic, database schemas, third-party APIs, and human-in-the-loop checkpoints before any code is deployed.',
      deliverables: ['Pipeline logic blueprints', 'Data schema configurations', 'Milestone delivery timeline']
    },
    {
      idx: '03 / Build',
      shortNum: '03',
      title: 'Build & integrate',
      desc: 'We engineer against your real-world data sandboxes, staging modular features with operational demos at every single milestone build.',
      deliverables: ['Custom environment builds', 'API integrations', 'Fidelity telemetry validation']
    },
    {
      idx: '04 / Run',
      shortNum: '04',
      title: 'Launch & support',
      desc: "Your automated systems launch seamlessly with zero active production downtime. We continuously tune prompts, monitor errors, and optimize code logs.",
      deliverables: ['Production sync execution', 'Continuous prompt calibrations', 'Infrastructure log support']
    }
  ];

  return (
    <section className={styles.processSection} id="process">
      <div className="wrap">
        
        {/* SECTION HEAD */}
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>How We Work</span>
          <h2>Four stages, one accountable build</h2>
          <p>Every engagement follows a structured framework so you always track delivery benchmarks cleanly.</p>
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
              
              <h4>Phase Benchmarks & Objectives</h4>
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