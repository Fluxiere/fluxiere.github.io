import styles from './Testimonials.module.scss';
import { testimonialsCopy } from './TestimonialsConstants.tsx';

export const Testimonials = () => {
  return (
    <section className="sec" id="testimonials">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-eyebrow">{testimonialsCopy.heading}</span>
          <h2>{testimonialsCopy.title}</h2>
          <p>{testimonialsCopy.description}</p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonialsCopy.reviews.map((item, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.quote}>{item.quote}</p>
              <div className={styles.meta}>
                <div>
                  <div className={styles.author}>{item.author}</div>
                  <div className={styles.role}>{item.role}, {item.company}</div>
                </div>

                {/* We conditionally render the metric if it exists in the data, allowing for flexible testimonial entries */}
                {item.metric && <span className={styles.metric}>{item.metric}</span>}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};