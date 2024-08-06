import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/projects" legacyBehavior>
              <a>Projects</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/testimonials" legacyBehavior>
              <a>Testimonials</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
