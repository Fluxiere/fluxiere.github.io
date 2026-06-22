import styles from './TrustStrip.module.scss';

export const TrustStrip = () => {
  const technologies = [
    'Python', 'LangChain', 'OpenAI / Claude APIs',
    'Node.js', 'PostgreSQL', 'AWS', 'n8n', 'Zapier'
  ];

  return (
    <section className={styles.trust}>
      <div className="wrap">
        <div className={styles.trustContent}>
          <span className={styles.label}>Built with</span>
          <div className={styles.tags}>
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};