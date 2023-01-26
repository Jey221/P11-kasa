import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/Navbar.module.css';

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className={styles.links}>
        Accueil
      </Link>
      <Link to="/APropos" className={styles.links}>
        À Propos
      </Link>
    </nav>
  );
}
