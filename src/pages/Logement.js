// mise  en place de la page logement// WIP
import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Carrousel';

export default function Logement() {
  const { idLogement } = useParams();
  return (
    <div>
      <h1>Fiche de Logement</h1>
      <h2>Logement {idLogement}</h2>
      <Slideshow />
    </div>
  );
}
