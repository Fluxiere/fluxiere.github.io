import styles from './Hero.module.scss';

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
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNum}>120+</div>
            <div className={styles.statLabel}>Automations deployed</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNum}>40hrs</div>
            <div className={styles.statLabel}>Avg. hours saved / month</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNum}>97%</div>
            <div className={styles.statLabel}>Client retention</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNum}>2 wks</div>
            <div className={styles.statLabel}>Avg. time to first build</div>
          </div>
        </div>

        {/* Live Pipeline Flow Panel Visualization */}
        <div className={styles.flowPanel}>
          <div className={styles.flowBar}>
            <span className={styles.led}></span>
            <span className={styles.led}></span>
            <span className={styles.led}></span>
            <span>fluxiere · automation-pipeline · live</span>
          </div>
          
          <div className={styles.flowStage}>
            <div className={styles.flowRow}>
              <div className={styles.flowNode}>
                <div className={styles.ic}>IN</div>
                <div className={styles.lbl}>Manual Inputs</div>
                <div className={styles.subLbl}>Emails, forms, sheets</div>
              </div>
              
              <div className={styles.flowLine}>
                <div className={styles.dot}></div>
              </div>
              
              <div className={`${styles.flowNode} ${styles.active}`}>
                <div className={styles.ic}>AI</div>
                <div className={styles.lbl}>Fluxière Engine</div>
                <div className={styles.subLbl}>Routing · extraction · logic</div>
              </div>
              
              <div className={`${styles.flowLine} ${styles.delay}`}>
                <div className={styles.dot}></div>
              </div>
              
              <div className={`${styles.flowNode} ${styles.gold}`}>
                <div className={styles.ic}>↻</div>
                <div className={styles.lbl}>Your Systems</div>
                <div className={styles.subLbl}>CRM · ERP · DB</div>
              </div>
              
              <div className={`${styles.flowLine} ${styles.delay2}`}>
                <div className={styles.dot}></div>
              </div>
              
              <div className={styles.flowNode}>
                <div className={styles.ic}>OUT</div>
                <div className={styles.lbl}>Outcomes</div>
                <div className={styles.subLbl}>Reports, alerts, actions</div>
              </div>
            </div>
            
            <div className={styles.flowFoot}>
              <span>throughput: <b>1,840 tasks/day</b></span>
              <span>error rate: <b>0.2%</b></span>
              <span>status: <b>build passed ✓</b></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};