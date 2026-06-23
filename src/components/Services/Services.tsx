import styles from './Services.module.scss';
import { servicesData, servicesHeading, servicesDescription, EXPLORE_SERVICE_CTA } from './ServicesConstants.tsx';

export const Services = () => {
  return (
    <section className="sec" id="services Component">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-eyebrow">{servicesHeading.eyebrow}</span>
          <h2>{servicesHeading.title}</h2>
          <p>{servicesDescription}</p>
        </div>
      </div>
      
      <div className="wrap" style={{ padding: 0 }}>
        <div className={styles.servicesGrid}>

          {servicesData.map((svc) => (
            <div key={svc.num} className={styles.svc}>

              {svc.tag && <span className={styles.tag}>{svc.tag}</span>}

              <span className={styles.num}>{svc.num}</span>

              <h3>{svc.title}</h3>

              <p className={styles.desc}>{svc.desc}</p>

              <ul>
                {svc.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <a href="#contact" className={styles.go}>
                {EXPLORE_SERVICE_CTA} <span className={styles.arrow}>→</span>
              </a>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};