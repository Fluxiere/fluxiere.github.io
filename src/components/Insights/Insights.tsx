import React from 'react';
import { useParams } from 'react-router-dom'; // Hook for pulling route parameters safely
import { sampleBlogs } from '../BlogComponent/BlogConstants';
import styles from './Insights.module.scss';
import {
  SECTION_ID,
  EYEBROW,
  TITLE,
  DESCRIPTION,
  READ_ARTICLE,
  BULLET_DIVIDER,
} from './InsightsConstants';

// Insights renders either a grid of insight cards or the full article for a matching route slug.
export const Insights: React.FC = () => {
  // Grab the :slug value directly from React Router.
  // This value will determine whether the page shows the grid or a single article.
  const { slug } = useParams<{ slug?: string }>();

  // Find an article whose slug matches the current route parameter.
  // If none is found, the component renders the insights grid instead.
  const activeArticle = sampleBlogs.find(blog => blog.slug === slug);

  return (
    <section className="sec" id={SECTION_ID}>
      <div className="wrap">
        
        {/* If no valid slug is present or it does not match a blog, show the insights card grid. */}
        {!activeArticle ? (
          <>
            <div className="sec-head">
              <span className="sec-eyebrow">{EYEBROW}</span>
              <h2>{TITLE}</h2>
              <p>{DESCRIPTION}</p>
            </div>

            <div className={styles.insightsGrid}>
              {sampleBlogs.map((art) => (
                <a 
                  key={art.slug} 
                  href={`/insights/${art.slug}`} // Route to the matching article URL.
                  //These 2 lines ensure that the link opens in a new tab and prevents security vulnerabilities.
                  // target="_blank" 
                  // rel="noopener noreferrer"

                  className={styles.artCard}
                >
                  <div className={styles.topMeta}>
                    <span className={styles.tag}>{art.category}</span>
                    <span className={styles.readTime}>{art.readingTime}</span>
                  </div>
                  <h3>{art.title}</h3>
                  <p className={styles.excerptText}>{art.excerpt}</p>
                  <div className={styles.actionRow}>
                    <span>{READ_ARTICLE}</span>
                    <span className={styles.arrow}>→</span>
                  </div>
                </a>
              ))}
            </div>
          </>
        ) : (
          /* A matching article slug was found: render the selected article page. */
          <article className={styles.reusableBlogCanvas}>
            <header className={styles.blogHeader}>
              <span className={styles.blogBadge}>{activeArticle.category}</span>
              <h1>{activeArticle.title}</h1>
              <div className={styles.blogMetaTrail}>
                <span>{activeArticle.date}</span>
                <span className={styles.bulletDivider}>{BULLET_DIVIDER}</span>
                <span>{activeArticle.readingTime}</span>
              </div>
            </header>

            {activeArticle.featuredImage && (
              <div className={styles.blogImageWrapper}>
                <img 
                  src={activeArticle.featuredImage} 
                  alt={activeArticle.title} 
                  className={styles.blogPhoto}
                />
              </div>
            )}

            <div className={styles.blogArticleBody}>
              {activeArticle.contentBlocks.map((block, idx) => {
                // Render each content block in the selected article.
                // Use a subheading element for headings, a code block for code, or a paragraph for body text.
                if (block.type === 'subheading') {
                  return (
                    <h3 key={idx} className={styles.bodySubhead}>
                      {block.value}
                    </h3>
                  );
                }
                if (block.type === 'code') {
                  return (
                    <pre key={idx} className={styles.bodyCodeBlock}>
                      <code>{block.value}</code>
                    </pre>
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