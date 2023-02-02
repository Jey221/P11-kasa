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
        // récupération des données filtrés
        function prevButton() {
          //fonction pour le bouton précedent
          const length = data.pictures.length;
          setCurrent(current === 0 ? length - 1 : current - 1);
          console.log('prev');
        }
        function nextButton() {
          //fonction pour le bouton suivant
          const length = data.pictures.length;
          setCurrent(current === length - 1 ? 0 : current + 1);
          console.log('next');
        }
        return (
          // mise en place du jsx pour le carrousel
          <div className={styles.eachSlide}>
            <nav className={styles.arrowLeft} onClick={prevButton}>
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
            <nav className={styles.arrowRight} onClick={nextButton}>
              <FontAwesomeIcon icon={faChevronRight} />
            </nav>
          </div>
        );
      })}
    </div>
  );
};

export default Slideshow;
