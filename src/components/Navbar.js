// mise en place de la navigation
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  return (
    <div className="navigation">
      <nav className="navHeader">
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : 'desactive'}
        >
          Accueil
        </Link>
        <Link
          to="/About"
          className={location.pathname === '/About' ? 'active' : 'desactive'}
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
}
