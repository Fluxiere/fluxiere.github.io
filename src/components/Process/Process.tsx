//Not in use yet, but will be used for the process section in the future
import { type ProcessStep } from './types';
import styles from './Process.module.scss';

export const Process = () => {
  const stepsData: ProcessStep[] = [
    {
      idx: '01 / Audit',
      title: 'Map the workflow',
      desc: 'We shadow the process as it runs today and find exactly where time and accuracy are leaking out.'
    },
    {
      idx: '02 / Design',
      title: 'Design the system',
      desc: 'A scoped plan with the exact automation logic, tools, and checkpoints — agreed before we write code.'
    },
    {
      idx: '03 / Build',
      title: 'Build & integrate',
      desc: 'We build against your real data and systems, with working demos at every milestone, not just at the end.'
    },
    {
      idx: '04 / Run',
      title: 'Launch & support',
      desc: "We monitor, tune, and extend the system as your business changes — automation isn't a one-time install."
    }
  ];

  return (
    <section className={styles.process} id="process">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-eyebrow">How We Work</span>
          <h2>Four stages, one accountable build</h2>
          <p>Every engagement follows the same sequence — so you always know what's happening and when you'll see it working.</p>
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