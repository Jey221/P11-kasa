// mise en place du composant Tags
import React from 'react';
import styles from '../style/Infos.module.css';
import Datas from '../data/data.json';

//création des tags dans le composant Infos
export default function Tags() {
  return (
    <div className={styles.tagZone}>
      {Datas.filter(
        // filtre sur les datas en fonction de l'url
        (data) =>
          data.id ===
          window.location.href.split('http://localhost:3000/Logement/').join('')
        // map sur les datas filtrées
      ).map((data) => {
        return data.tags.map((tag) => {
          return (
            <div className={styles.tag} key={tag}>
              <p>{tag}</p>
            </div>
          );
        });
      })}
    </div>
  );
}
