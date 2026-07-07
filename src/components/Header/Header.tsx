import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from './Header.module.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.siteHeader}>
      <div className={styles.navContainer}>
        <Link to="/home" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
          <img src="/Logo/Fluxiere-NoBg.png" alt="Fluxière logo" className={styles.logoImage} />
          Fluxière
        </Link>
        
        <nav className={`${styles.links} ${isMenuOpen ? styles.mobileOpen : ''}`}>
          <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About-Us</Link>
          {/* <Link to="/approach" onClick={() => setIsMenuOpen(false)}>Approach</Link> */}
          <Link to="/insights" onClick={() => setIsMenuOpen(false)}>Insights</Link>
          {/* <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link> */}
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>

        <div className={styles.actions}>
          <Link to="/contact" className={styles.navCta}>Book a Consultation</Link>
          <button className={styles.navToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>
    </header>
  );
};