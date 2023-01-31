// mise en place de la navigation
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navHeader}>
      <Link to="/" className={styles.links}>
        Accueil
      </Link>
      <Link to="/APropos" className={styles.links}>
        A Propos
      </Link>
    </nav> // liens pour navigation sur l'appli
  );
}
