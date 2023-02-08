// mise en place de la page d'accueil
import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';

// création de la page Home et récupération des composants Banner et Card
export default function Home() {
  return (
    <div>
      <Banner />
      <Card />
    </div>
  );
}
