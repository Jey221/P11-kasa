// mise  en place de la page logement
import React from 'react';
import Slideshow from '../components/Carrousel';
import CollapseLoc from '../components/CollapseLoc';
import Informations from '../components/Infos';
import Datas from '../data/data.json';
import Erreur from './Erreur';

// création de la page Logement et récupération de différents composants
export default function Logement() {
  //vérification de l'id dans l'url pour voir si il existe dans le back-end
  const isfound = Datas.some((data) => {
    if (
      window.location.href.split('http://localhost:3000/Logement/').join('') ===
      data.id
    ) {
      return true;
    }
    return false;
  });
  // renvoi vers page logement si id existant ou renvoi vers page erreur
  if (isfound === false) {
    return (
      <div>
        <Erreur />
      </div>
    );
  }
  // création de la page Logement et récupération des composants Slideshow, Informations et CollapseLoc
  return (
    <div>
      <Slideshow />
      <Informations />
      <CollapseLoc />
    </div>
  );
}
