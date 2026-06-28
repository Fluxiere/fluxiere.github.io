import styles from './Testimonials.module.scss';
import { testimonialsCopy } from './TestimonialsConstants.tsx';
import { useTestimonialsCarousel } from './Helper/UseTestimonialsCarousel'; 

export const Testimonials = () => {
  const reviews = testimonialsCopy.reviews;
  const totalItems = reviews.length;

  // Pull out all the clean, pre-calculated values
  const {
    currentIndex,
    maxIndex,
    nextSlide,
    prevSlide,
    handleUserInteraction,
    setCurrentIndex,
  } = useTestimonialsCarousel(totalItems);

  return (
    <section className="sec" id="testimonials">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-eyebrow">{testimonialsCopy.heading}</span>
          <h2>{testimonialsCopy.title}</h2>
          <p>{testimonialsCopy.description}</p>
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.carouselViewport}>
            <div 
              className={styles.carouselTrack}
              style={{ '--current-index': currentIndex } as React.CSSProperties}
            >
              {reviews.map((item, index) => (
                <div key={index} className={styles.cardWrapper}>
                  <div className={styles.card}>
                    <p className={styles.quote}>{item.quote}</p>
                    <div className={styles.meta}>
                      <div>
                        <div className={styles.author}>{item.author}</div>
                        <div className={styles.role}>{item.role}, {item.company}</div>
                      </div>
                      {item.metric && <span className={styles.metric}>{item.metric}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls hide automatically if there's only 1 item */}
          {totalItems > 1 && (
            <div className={styles.controls}>
              <button onClick={() => handleUserInteraction(prevSlide)} className={styles.navButton}>←</button>
              <div className={styles.dots}>
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
                    onClick={() => handleUserInteraction(() => setCurrentIndex(index))}
                  />
                ))}
              </div>
              <button onClick={() => handleUserInteraction(nextSlide)} className={styles.navButton}>→</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};