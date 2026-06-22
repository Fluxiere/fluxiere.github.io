import styles from './CallToAction.module.scss';

export const CallToAction = () => {
  const auditPoints = ['30-minute audit call', 'Written savings estimate', 'No card required'];

  return (
    <section className={styles.biz}>
      <div className="wrap">
        <div className={styles.bizCard}>
          <div className={styles.left}>
            <span className="sec-eyebrow">Fluxière for Operations Teams</span>
            <h2>Run a free automation audit on your business, before you commit to anything</h2>
            <p>
              We'll review one real workflow — fees, invoicing, onboarding, support — and show you 
              exactly what automating it would save. No build commitment required.
            </p>
            <div className={styles.bizList}>
              {auditPoints.map((point, index) => (
                <span key={index}>{point}</span>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <a href="#contact" className="btn-primary">Start free audit →</a>
            <a href="#services" className={styles.alt}>or browse our services</a>
          </div>
        </div>
      </div>
    </section>
  );
};