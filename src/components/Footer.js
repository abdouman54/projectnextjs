import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Abderrahmane Allal. Tous droits réservés.</p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/abdouman54" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/abderrahmane-allal/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
