import styles from './Hero.module.scss';
import { StatsGrid } from "../StatsGrid/StatsGrid.tsx";
import { FlowPanel } from '../FlowPanel/FlowPanel.tsx';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        <span className={styles.eyebrow}>
          <span className={styles.ping}></span>
          Fluxière · AI Automation &amp; Custom Software
        </span>
        
        <h1 className={styles.title}>
          Automate the busywork.<br />
          Keep the judgment <em>human</em>.
        </h1>
        
        <p className={styles.sub}>
          We build AI automation and custom software for small and mid-sized businesses — 
          replacing manual, repetitive work with systems that run themselves, so your team 
          can focus on decisions that need a person.
        </p>
        
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>Book Free Consultation →</a>
          <a href="#services" className={styles.btnSecondary}>See What We Build</a>
        </div>
        
        {/* Performance Statistics Grid */}
        <StatsGrid />

        {/* Live Pipeline Flow Panel Visualization */}
        <FlowPanel />
      </div>
    </section>
  );
};