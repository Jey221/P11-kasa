// mise  en place de la page logement// WIP
import React from 'react';
import Slideshow from '../components/Carrousel';
import CollapseLoc from '../components/CollapseLoc';
import Informations from '../components/Infos';
import Datas from '../data/data.json';
import Erreur from './Erreur';

console.log(
  'fonction',
  Datas.some((data) => {
    if (
      data.id ===
      window.location.href.split('http://localhost:3000/Logement/').join('')
    ) {
      return (
        <div>
          <Slideshow />
          <Informations />
          <CollapseLoc />
        </div>
      );
    }
    return <Erreur />;
  })
);
console.log(Datas);

export default function Logement() {
  return (
    <div>
      <Slideshow />
      <Informations />
      <CollapseLoc />
    </div>
  );
}
