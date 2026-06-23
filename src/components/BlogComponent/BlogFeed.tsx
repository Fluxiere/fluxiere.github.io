import React, { useState } from 'react';
import { blogPageHeading, sampleBlogs, type BlogPost } from './BlogConstants';
import styles from './BlogFeed.module.scss';

export const BlogFeed: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Return to full article feed index
  const handleBackToFeed = () => {
    setActivePost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={styles.blogSection} id="blog-engine">
      <div className="wrap">
        
        {/* DYNAMIC HEADER */}
        {!activePost ? (
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>{blogPageHeading.eyebrow}</span>
            <h2>{blogPageHeading.title}</h2>
            <p>{blogPageHeading.subtitle}</p>
          </div>
        ) : (
          <button className={styles.backButton} onClick={handleBackToFeed}>
            ← Back to insights log
          </button>
        )}

        {/* CONDITIONALLY RENDER: LIST VIEW vs INDIVIDUAL POST VIEW */}
        {!activePost ? (
          <div className={styles.blogGridMatrix}>
            {sampleBlogs.map((post) => (
              <article 
                key={post.slug} 
                className={styles.postCard}
                onClick={() => {
                  setActivePost(post);
                  window.scrollTo({ top: 0 });
                }}
              >
                <div className={styles.cardImageWrapper}>
                  <img 
                    src={post.featuredImage} 
                    alt={post.title} 
                    className={styles.cardPhoto}
                    loading="lazy"
                  />
                  <span className={styles.categoryBadge}>{post.category}</span>
                </div>
                
                <div className={styles.cardMetaBlock}>
                  <div className={styles.timeMetrics}>
                    <span>{post.date}</span>
                    <span className={styles.dotSeparator} />
                    <span>{post.readingTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className={styles.readLink}>Read log entry ↗</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* DEEP BLOG POST VIEW WITH INTEGRATED MEDIA INTERFACES */
          <article className={styles.singlePostView}>
            <header className={styles.postHeader}>
              <span className={styles.activeCategory}>{activePost.category}</span>
              <h1>{activePost.title}</h1>
              <div className={styles.authorTimeMeta}>
                <span>Published {activePost.date}</span>
                <span className={styles.dotSeparator} />
                <span>{activePost.readingTime}</span>
              </div>
            </header>

            <div className={styles.mainHeroImageFrame}>
              <img 
                src={activePost.featuredImage} 
                alt={activePost.title} 
                className={styles.largeHeroPhoto} 
              />
            </div>

            <div className={styles.articleBodyContent}>
              {activePost.contentBlocks.map((block, idx) => {
                if (block.type === 'subheading') {
                  return <h3 key={idx} className={styles.bodySubhead}>{block.value}</h3>;
                }
                return <p key={idx} className={styles.bodyParagraph}>{block.value}</p>;
              })}
            </div>
          </article>
        )}

      </div>
    </section>
  );
};