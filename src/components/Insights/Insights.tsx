import { type ArticleItem } from './types';
import styles from './Insights.module.scss';

export const Insights = () => {
  const articles: ArticleItem[] = [
    {
      tag: "Automation Strategy",
      title: "How to audit your business workflows for AI opportunities before writing any code",
      readTime: "6 min read",
      link: "#"
    },
    {
      tag: "Case Studies",
      title: "Replacing manual CRM entry cycles: A deep-dive into cross-platform system syncing",
      readTime: "8 min read",
      link: "#"
    },
    {
      tag: "Engineering Notes",
      title: "Why local LLM setups fail for complex logic pipelines, and when to use hybrid routing setups",
      readTime: "11 min read",
      link: "#"
    }
  ];

  return (
    <section className="sec" id="insights Component">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-eyebrow">Our Notebook</span>
          <h2>Practical ideas on automation and software execution</h2>
          <p>No high-level fluff or tech buzzwords. Just transparent breakdowns of how we build and maintain working loops for our clients.</p>
        </div>

        <div className={styles.insightsGrid}>
          {articles.map((art, index) => (
            <a key={index} href={art.link} className={styles.artCard}>
              <div className={styles.topMeta}>
                <span className={styles.tag}>{art.tag}</span>
                <span className={styles.readTime}>{art.readTime}</span>
              </div>
              <h3>{art.title}</h3>
              <div className={styles.actionRow}>
                <span>Read article</span>
                <span className={styles.arrow}>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};