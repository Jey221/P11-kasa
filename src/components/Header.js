//mise en place d'un header
import React from 'react';
import Navbar from './Navbar';
import styles from '../style/Header.module.css';
import logo from '../assets/LOGO.png';

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logoKasa" />
      <Navbar />
    </div>
  );
}
