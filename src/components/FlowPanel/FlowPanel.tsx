import styles from './FlowPanel.module.scss';

export const FlowPanel = () => {
  return (
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
  );
};