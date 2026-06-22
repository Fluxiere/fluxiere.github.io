import React from 'react';
import styles from './FlowPanel.module.scss';
import { flowPanelCopy, flowSteps } from './FlowPanelConstants.tsx';

export const FlowPanel = () => {
  return (
    <div className={styles.flowPanel}>
      {/* Top Header Bar */}
      <div className={styles.flowBar}>
        <span className={styles.led}></span>
        <span className={styles.led}></span>
        <span className={styles.led}></span>
        <span>{flowPanelCopy.statusLine}</span>
      </div>
      
      <div className={styles.flowStage}>
        <div className={styles.flowRow}>
          {flowSteps.map((step, index) => {
            // Determine dynamic modifier style variant classes safely via index maps
            const nodeClassName = `${styles.flowNode} ${step.variantClass ? styles[step.variantClass] : ''}`.trim();
            const lineClassName = `${styles.flowLine} ${step.delayClass ? styles[step.delayClass] : ''}`.trim();

            return (
              <React.Fragment key={step.id}>
                {/* Node Box */}
                <div className={nodeClassName}>
                  <div className={styles.ic}>{step.icon}</div>
                  <div className={styles.lbl}>{step.label}</div>
                  <div className={styles.subLbl}>{step.subLabel}</div>
                </div>
                
                {/* Connector Line (Only render if there is another step following this one) */}
                {index < flowSteps.length - 1 && (
                  <div className={lineClassName}>
                    <div className={styles.dot}></div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};