//Not in use yet, but will be used for the process section in the future
import styles from './Process.module.scss';
import { stepsData, processCopy } from './ProcessConstants';

export const Process = () => {
  return (
    <section className={styles.process} id="process">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-eyebrow">{processCopy.eyebrow}</span>
          <h2>{processCopy.heading}</h2>
          <p>{processCopy.description}</p>
        </div>
        
        <div className={styles.steps}>
          {stepsData.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.idx}>{step.idx}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};