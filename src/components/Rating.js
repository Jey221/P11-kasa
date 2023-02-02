// mise  en place du composant Rating// WIP
import React from 'react';
import styles from '../style/Infos.module.css';
import Datas from '../data/data.json';
import { rat } from './Stars';

export default function Ratings() {
  return (
    <div className={styles.ratingZone}>
      {Datas.filter(
        (data) =>
          data.id ===
          window.location.href.split('http://localhost:3000/Logement/').join('')
      ).map((data) => {
        const rating = parseInt(data.rating);
        return (
          <div>
            <span>{rat[rating]}</span>
          </div>
        );
      })}
    </div>
  );
}

/* for (let i = 1; i < rating; i++) {
  console.log(i);
  return (
    <div className="lol">
      <span>{i}</span>
    </div>
  );
}

  <FontAwesomeIcon icon={faStar} className={styles.starGray}/><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />,
  <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />,
  <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />,
  <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />,
  <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />,
  <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />,

 */
