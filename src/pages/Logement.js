// mise  en place de la page logement// WIP
import React from 'react';
import Slideshow from '../components/Carrousel';
import CollapseLoc from '../components/CollapseLoc';
import Informations from '../components/Infos';

export default function Logement() {
  return (
    <div>
      <Slideshow />
      <Informations />
      <CollapseLoc />
    </div>
  );
}
