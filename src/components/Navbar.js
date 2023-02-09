// mise en place de la navigation
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

//création des liens de navigation dans le header
export default function Navbar() {
  //Hook pour localiser sur quelle page est l'utilisateur
  const location = useLocation();
  return (
    <div className="navigation">
      <nav className="navHeader">
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : 'desactive'}
        >
          ACCUEIL
        </Link>
        <Link
          to="/About"
          className={location.pathname === '/About' ? 'active' : 'desactive'}
        >
          A PROPOS
        </Link>
      </nav>
    </div>
  );
}
