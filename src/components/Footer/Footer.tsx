import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { initSiteShooter } from '../ProceduralAnimations/SiteShooter/SiteShooter';
import {
  footerBrand,
  footerCompanyLinks,
  footerLegalLinks,
  footerServices,
  footerSupportEmail,
  footerCopyright,
} from './FooterConstants';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link to={footerBrand.link} className={styles.logo}>
              <span className={styles.dot}></span>
              {footerBrand.label}
            </Link>
            <p className={styles.blurb}>{footerBrand.description}</p>
          </div>

          {/* Services Links */}
          <div className={styles.linkCol}>
            <h5>Services</h5>
            <ul>
              {footerServices.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className={styles.linkCol}>
            <h5>Company</h5>
            <ul>
              {footerCompanyLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className={styles.newsCol}>
            <h5>Stay in the loop</h5>
            <p className={styles.blurb}>Occasional notes on AI automation. No spam.</p>
            <div className={styles.field}>
              <a href={`mailto:${footerSupportEmail}`}>{footerSupportEmail}</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footBottom}>
          <span>{footerCopyright}</span>
          <span className={styles.legal}>
            {footerLegalLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </span>
            <a 
              href="#shooter" 
              onClick={(e) => {
                e.preventDefault();
                initSiteShooter();
              }}
            >
              🕹️ Protect the Site
            </a>
        </div>
      </div>
    </footer>
  );
};