import React from 'react';
import Navbar from './Navbar';
import styles from '../style/Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={'../assets/LOGO.png'} alt="logoKasa" />
      <Navbar />
    </div>
  );
}
