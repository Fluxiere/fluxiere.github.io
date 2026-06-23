import { useState } from 'react';
import styles from './ServiceDetailList.module.scss';
import { ServiceDetailList } from './ServicePageConstants';

export const DetailedServices = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className={styles.detailedSection} id="how-we-work">
      <div className={styles.container}>
        
        {/* Left Sticky Panel: Perfect for quick skim navigation */}
        <div className={styles.stickyLeft}>
          <span className={styles.eyebrow}>Our Deep Engagement Model</span>
          <h2 className={styles.mainTitle}>How we take you from manual chaos to automated scale.</h2>
          
          <nav className={styles.stepNav}>
            {ServiceDetailList.map((item, idx) => (
              <button
                key={idx}
                className={`${styles.navBtn} ${activeStep === idx ? styles.active : ''}`}
                onClick={() => {
                  setActiveStep(idx);
                  document.getElementById(`step-${idx}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <span className={styles.navNum}>{item.phase}</span>
                <span className={styles.navText}>{item.badge}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Right Scrollable Panel: Detailed breakdown */}
        <div className={styles.scrollRight}>
          {ServiceDetailList.map((item, idx) => (
            <div 
              key={idx} 
              id={`step-${idx}`} 
              className={styles.stepCard}
              onMouseEnter={() => setActiveStep(idx)}
            >
              <div className={styles.cardHeader}>
                <span className={styles.phaseBadge}>{item.phase} // {item.badge}</span>
                <h3>{item.title}</h3>
              </div>
              
              <p className={styles.description}>{item.description}</p>
              
              <div className={styles.deliverablesBox}>
                <h4>Key Project Deliverables:</h4>
                <ul>
                  {item.deliverables.map((delivery, dIdx) => (
                    <li key={dIdx}>
                      <span className={styles.checkIcon}>✓</span> {delivery}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};