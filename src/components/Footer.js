// mise en place du Footer
import React from 'react';
import styles from '../style/Footer.module.css';
import logo from '../assets/LOGO2.png';

//création du pied de page
export default function Footer() {
  return (
    <div className={styles.footer}>
      <img src={logo} alt="logoKasa" />
      <p>© 2020 Kasa, All rights reserved</p>
    </div>
  );
}
