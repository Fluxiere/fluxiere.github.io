import { useState } from 'react';
import styles from './Header.module.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className={styles.siteHeader}>
      <div className={styles.navContainer}>
        <a href="#" className={styles.logo}>
          <span className={styles.dot}></span>
          Fluxière
        </a>
        
        {/* Toggle navigation visibility based on mobile menu state */}
        <nav className={`${styles.links} ${isMenuOpen ? styles.mobileOpen : ''}`}>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#process" onClick={() => setIsMenuOpen(false)}>Approach</a>
          <a href="#work" onClick={() => setIsMenuOpen(false)}>Results</a>
          <a href="#insights" onClick={() => setIsMenuOpen(false)}>Insights</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>

        <div className={styles.actions}>
          <a href="#contact" className={styles.navCta}>Book a Consultation</a>
          <button 
            className={styles.navToggle} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? 'CLOSE' : '// MENU'}
          </button>
        </div>
      </div>
    </header>
  );
};