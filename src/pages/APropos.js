// mise en place de la Page à propos
import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

export default function APropos() {
  return (
    <div>
      <Banner />
      <h1>À Propos</h1>
      <Collapse />
    </div>
  );
}
