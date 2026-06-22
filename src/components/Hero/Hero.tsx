import styles from './Hero.module.scss';
import { StatsGrid } from "../StatsGrid/StatsGrid.tsx";
import { FlowPanel } from '../FlowPanel/FlowPanel.tsx';
import { NeuralNetwork } from '../ProceduralAnimations/NeuralNetwork/NeuralNetwork.tsx';
import { HeroCopy } from './HeroConstants.tsx';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        {/* Isolated Interactive Top Section */}
        <div className={styles.heroContent}>
          {/* Animated Canvas running only behind the typography and buttons */}
          <NeuralNetwork nodeCount={60} maxDistance={130} interactive={true} />

          <span className={styles.eyebrow}>
            <span className={styles.ping}></span>
            {HeroCopy.eyebrow}
          </span>
          
          <h1 className={styles.title}>
            {HeroCopy.titleLine1}<br />
            {HeroCopy.titleLine2Prefix}<em>{HeroCopy.titleEmphasis}</em>
          </h1>
          
          <p className={styles.sub}>
            {HeroCopy.description}
          </p>
          
          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>Book Free Consultation →</a>
            <a href="#services" className={styles.btnSecondary}>See What We Build</a>
          </div>
        </div>
        
        {/* Explicitly layered structural sections below the canvas */}
        <div className={styles.showcaseZone}>
          {/* Performance Statistics Grid */}
          <StatsGrid />

          {/* Live Pipeline Flow Panel Visualization */}
          <FlowPanel />
        </div>
      </div>
    </section>
  );
};