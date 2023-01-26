import React from 'react';
import styles from '../style/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <img src={'../assets/LOGO.png'} alt="logoKasa" />
      <p>©2020 Kasa, All rights reserved</p>
    </div>
  );
}
