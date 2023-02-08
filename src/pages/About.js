// mise en place de la Page About
import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

//création de la page About et récupération des composants Banner et Collapse
export default function About() {
  return (
    <div>
      <Banner />
      <Collapse />
    </div>
  );
}
