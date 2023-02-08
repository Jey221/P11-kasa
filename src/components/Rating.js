// mise  en place du composant Rating
import React from 'react';
import styles from '../style/Infos.module.css';
import Datas from '../data/data.json';
import { star } from './Stars';

//création de la zone d'évaluation dans le composant Infos
export default function Ratings() {
  return (
    <div className={styles.ratingZone}>
      {Datas.filter(
        //filtre des datas en fonction de l'url
        (data) =>
          data.id ===
          window.location.href.split('http://localhost:3000/Logement/').join('')
        //map sur les datas filtrés
      ).map((data) => {
        const rating = parseInt(data.rating);
        // création des étoiles en fonction de l'évaluation
        return <div key={data.id}>{star[rating]}</div>;
      })}
    </div>
  );
}
