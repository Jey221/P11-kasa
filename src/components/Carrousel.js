// mise en place du Footer
import React, { useState } from 'react';
import Datas from '../data/data.json';
import styles from '../style/Carrousel.module.css';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// fonction pour le carrousel
const Slideshow = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className={styles.containerSlide}>
      {Datas.filter(
        // filtre sur l'id en fonction de l'url
        (data) =>
          data.id ===
          window.location.href.split('http://localhost:3000/Logement/').join('')
      ).map((data) => {
        const length = data.pictures.length;
        // récupération des données filtrés
        function prevButton() {
          //fonction pour le bouton précedent
          setCurrent(current === 0 ? length - 1 : current - 1);
        }
        function nextButton() {
          //fonction pour le bouton suivant
          setCurrent(current === length - 1 ? 0 : current + 1);
        }
        return (
          // mise en place du jsx pour le carrousel
          <div className={styles.eachSlide} key={data.id}>
            <nav className={styles.arrowLeft} onClick={prevButton} id="arrow1">
              <FontAwesomeIcon icon={faChevronLeft} />
            </nav>
            <div className={styles.medias}>
              <img src={data.pictures[current]} alt={data.title} />
            </div>
            <div className={styles.index}>
              <p>
                {current + 1}/{data.pictures.length}
              </p>
            </div>
            <nav className={styles.arrowRight} onClick={nextButton} id="arrow2">
              <FontAwesomeIcon icon={faChevronRight} />
            </nav>
          </div>
        );
      })}
    </div>
  );
};

export default Slideshow;

/* 
if (length <= 1) {
  console.log(document.getElementById( 'arrow2'));
  console.log(document.getElementById('arrow1'));
  console.log('yes');
  document
    .getElementById('arrow2')
    .setAttribute('style', 'display:none');
  document
    .getElementById('arrow1')
    .setAttribute('style', 'display:none');
}
 */
