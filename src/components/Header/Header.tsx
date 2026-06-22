import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from './Header.module.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.siteHeader}>
      <div className={styles.navContainer}>
        <Link to="/home" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
          <span className={styles.dot}></span>
          Fluxière
        </Link>
        
        <nav className={`${styles.links} ${isMenuOpen ? styles.mobileOpen : ''}`}>
          <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>Approach</Link>
          <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Insights</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>

        <div className={styles.actions}>
          <Link to="/contact" className={styles.navCta}>Book a Consultation</Link>
          <button className={styles.navToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? 'CLOSE' : '// MENU'}
          </button>
        </div>
      </div>
    </header>
  );
};