// mise en place de la zone infos
import React from 'react';
import styles from '../style/Infos.module.css';
import Datas from '../data/data.json';
import Tags from './Tags.js';
import Ratings from './Rating.js';

export default function Informations() {
  return (
    <div className={styles.informations}>
      {Datas.filter(
        // filtre sur l'id en fonction de l'url
        (data) =>
          data.id ===
          window.location.href.split('http://localhost:3000/Logement/').join('')
      ).map((data) => {
        return (
          <div className={styles.infosZone} key={data.id}>
            <div className={styles.blocLeft}>
              <div className={styles.titleZone}>
                <h1>{data.title}</h1>
              </div>
              <div className={styles.locationZone}>
                <h2>{data.location}</h2>
              </div>
              <div className="tags">
                <Tags />
              </div>
            </div>
            <div className={styles.blocRight}>
              <div className={styles.hostZone}>
                <div className={styles.name}>
                  <h2>{data.host.name}</h2>
                </div>
                <div className={styles.image}>
                  <img src={data.host.picture} alt={data.host.name} />
                </div>
              </div>
              <div className="rating">
                <Ratings />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
