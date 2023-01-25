import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <img src={'../assets/LOGO.png'} alt="logoKasa" />
      <Link to="/">Accueil</Link>
      <Link to="/APropos">À Propos</Link>
    </nav>
  );
}
