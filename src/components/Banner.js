// mise en place de la bannière
import React from 'react';
import styles from '../style/Banner.module.css';

// mise en place d'une bannière pour les diff pages
export default function Banner() {
  return (
    // mise en place condition selon la page où se situe l'utilisateur
    <div>
      {window.location.href === 'http://localhost:3000/APropos' ? (
        <div className={styles.banner2}></div> // bannière 2 pour page à propos
      ) : (
        <div className={styles.banner}>
          <h1>Chez vous, partout et ailleurs</h1>
        </div> // bannière pour page d'accueil
      )}
    </div>
  );
}
