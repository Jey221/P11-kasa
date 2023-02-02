// mise  en place de la page logement// WIP
import React from 'react';
import styles from '../style/Infos.module.css';
import Datas from '../data/data.json';

export default function Tags() {
  return (
    <div className={styles.tagZone}>
      {Datas.filter(
        (data) =>
          data.id ===
          window.location.href.split('http://localhost:3000/Logement/').join('')
      ).map((data) => {
        return data.tags.map((tag) => {
          return (
            <div className={styles.tag}>
              <p>{tag}</p>
            </div>
          );
        });
      })}
    </div>
  );
}
