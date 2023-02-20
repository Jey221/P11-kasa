// mise en place de la Page About
import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import aboutData from '../data/aboutData.json';
import '../style/CollapseAbout.css';

//création de la page About et récupération des composants Banner et Collapse
export default function About() {
  return (
    <div>
      <main className="mainAbout">
        <div className="banner">
          <Banner />
        </div>
        <section className="about">
          {aboutData.map(({ name, content }, index) => (
            <div key={`${name}-${index}`}>
              <Collapse title={name} content={content} type={'paragraph'} />
            </div>
          ))}
        </section>
      </main>{' '}
    </div>
  );
}
