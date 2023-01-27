import React from 'react';
import { useParams } from 'react-router-dom';

export default function Logement() {
  const { idLogement } = useParams();
  return (
    <div>
      <h1>Fiche de Logement</h1>
      <h2>Logement {idLogement}</h2>
    </div>
  );
}
