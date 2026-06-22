import { type TestimonialItem } from './types';
import styles from './Testimonials.module.scss';

export const Testimonials = () => {
  const reviews: TestimonialItem[] = [
    {
      quote: "“Fluxière didn't just write code; they completely re-engineered how we process client intakes. We went from spending hours manually routing files every morning to a pipeline that runs in minutes with zero errors.”",
      author: "Rohan Mehta",
      role: "Operations Director",
      company: "Vanguard Logistics",
      metric: "140 hours saved/mo"
    },
    {
      quote: "“The custom ERP dashboard they built seamlessly tied our legacy inventory database into our payment systems. Our field teams now have real-time sync, which completely cut down on manual cross-checking headaches.”",
      author: "Elena Rostova",
      role: "Managing Partner",
      company: "Apex Distribution",
      metric: "3.5x faster syncing"
    }
  ];

  return (
    <section className="sec" id="testimonials">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-eyebrow">Client Feedback</span>
          <h2>Built for teams who measure success in hours reclaimed</h2>
          <p>Read how operational leaders are using our custom software and automation setups to scale output without increasing head count.</p>
        </div>

        <div className={styles.testimonialsGrid}>
          {reviews.map((item, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.quote}>{item.quote}</p>
              <div className={styles.meta}>
                <div>
                  <div className={styles.author}>{item.author}</div>
                  <div className={styles.role}>{item.role}, {item.company}</div>
                </div>
                {item.metric && <span className={styles.metric}>{item.metric}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};