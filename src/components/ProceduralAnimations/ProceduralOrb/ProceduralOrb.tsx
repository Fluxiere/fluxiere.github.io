import styles from './ProceduralOrb.module.scss';

export const ProceduralOrb = () => {
  return (
    <div className={styles.orbScene}>
      <div className={styles.orbWrapper}>
        {/* Central glowing AI core */}
        <div className={styles.orbCore}>
          <div className={styles.orbCoreLabel}>
            <div className={styles.orbCoreAi}>AI</div>
            <div className={styles.orbCoreSub}>System Core</div>
          </div>
        </div>
        
        {/* Procedural orbital rings with glowing tracker nodes */}
        <div className={`${styles.orbRing} styles.orbRing1`}>
          <div className={styles.ringDot} />
        </div>
        <div className={`${styles.orbRing} styles.orbRing2`}>
          <div className={styles.ringDot} />
        </div>
      </div>
    </div>
  );
};