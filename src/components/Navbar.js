// mise en place de la navigation
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/animation.css';

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
          to="/APropos"
          className={location.pathname === '/APropos' ? 'active' : 'desactive'}
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
}

/*   if (window.location.href === 'http://localhost:3000/') {
  const styleActive = {styles.linkAct}
    const btnAccueil = document.getElementById('btnAccueil');
    console.log(btnAccueil);
    console.log('yes');
  }
  if (window.location.href === 'http://localhost:3000/APropos') {
    const btnAPropos = document.getElementById('btnAPropos');
    console.log(btnAPropos);
    console.log('no');
  }
 */
