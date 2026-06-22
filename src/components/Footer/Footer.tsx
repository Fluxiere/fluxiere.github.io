import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <a href="#" className={styles.logo}>
              <span className={styles.dot}></span>
              Fluxière
            </a>
            <p className={styles.blurb}>
              AI automation and custom software for small and mid-sized businesses — 
              built to remove manual work, not add another tool to manage.
            </p>
          </div>

          {/* Services Links */}
          <div className={styles.linkCol}>
            <h5>Services</h5>
            <ul>
              <li><a href="#services">AI Process Automation</a></li>
              <li><a href="#services">AI Chatbots &amp; Assistants</a></li>
              <li><a href="#services">Custom Software (ERP/CRM)</a></li>
              <li><a href="#services">Data &amp; Analytics</a></li>
              <li><a href="#services">Systems Integration</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className={styles.linkCol}>
            <h5>Company</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#work">Results</a></li>
              <li><a href="#insights">Insights</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className={styles.newsCol}>
            <h5>Stay in the loop</h5>
            <p className={styles.blurb}>Occasional notes on AI automation. No spam.</p>
            <div className={styles.field}>
              <input type="email" placeholder="Email address" aria-label="Email address for newsletter" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footBottom}>
          <span>© 2026 Fluxière. All rights reserved.</span>
          <span className={styles.legal}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
};