import React, { useState } from 'react';
import { blogPageHeading, sampleBlogs, type BlogPost } from './BlogConstants';
import styles from './BlogFeed.module.scss';

// BlogFeed renders a list of blog cards and switches to a single post detail page when a card is clicked.
export const BlogFeed: React.FC = () => {
  // activePost is null while the blog list is shown; it stores the selected post when viewing details.
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Clear the selected post and return to the feed list view.
  const handleBackToFeed = () => {
    setActivePost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={styles.blogSection} id="blog-engine">
      <div className="wrap">
        
        {/* Header shows a section title on the feed page; when a post is active, it shows a back button instead. */}
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

        {/* Main render branch: blog cards grid when no post is selected, or full post view when one is active. */}
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
          /* Detailed view for the currently selected blog post. */
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
                // Render content blocks dynamically: use heading style for subheadings, paragraph style for body text.
                if (block.type === 'subheading') {
                  return (
                    <h3 key={idx} className={styles.bodySubhead}>
                      {block.value}
                    </h3>
                  );
                }
                return (
                  <p key={idx} className={styles.bodyParagraph}>
                    {block.value}
                  </p>
                );
              })}
            </div>
          </article>
        )}

      </div>
    </section>
  );
};