// mise  en place de la page logement// WIP
import React from 'react';
import Slideshow from '../components/Carrousel';
import CollapseLoc from '../components/CollapseLoc';
import Informations from '../components/Infos';
import Datas from '../data/data.json';
import Erreur from './Erreur';

export default function Logement() {
  const isfound = Datas.some((data) => {
    if (
      window.location.href.split('http://localhost:3000/Logement/').join('') ===
      data.id
    ) {
      return true;
    }
    return false;
  });
  if (isfound === false) {
    return (
      <div>
        <Erreur />
      </div>
    );
  }
  return (
    <div>
      <Slideshow />
      <Informations />
      <CollapseLoc />
    </div>
  );
}
