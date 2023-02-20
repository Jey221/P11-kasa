// mise  en place de la page logement
import React from 'react';
import Slideshow from '../components/Carrousel';
import Collapse from '../components/Collapse';
import Informations from '../components/Infos';
import Datas from '../data/data.json';
import Erreur from './Erreur';
import aboutData from '../data/aboutData.json';
import '../style/CollapseLogement.css';

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
    <div className="main">
      <Slideshow />
      <Informations />
      {Datas.filter(
        // filtre sur l'id en fonction de l'url
        (data) =>
          data.id ===
          window.location.href.split('http://localhost:3000/Logement/').join('')
        // map sur les datas filtrés
      ).map((data) => {
        return (
          <div className="collapseUp">
            <Collapse
              title={'Description'}
              content={data.description}
              type={'paragraph'}
            />
            <Collapse
              title={'Équipements'}
              content={data.equipments}
              type={'list'}
            />
          </div>
        );
      })}
      <div className="collapseDown">
        {[aboutData[0], aboutData[1]].map((data) => {
          return (
            <Collapse
              title={data.name}
              content={data.content}
              type={'paragraph'}
            />
          );
        })}
      </div>
    </div>
  );
}

/* 
{aboutData.map(({ name, content }, index) => (
  <div key={`${name}-${index}`}>
    <Collapse title={name} content={content} type={'paragraph'} />
  </div>
))}
 */
