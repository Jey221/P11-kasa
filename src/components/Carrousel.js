// mise en place du carrousel
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
  //Hook current pour index des pictures
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.containerSlide}>
      {Datas.filter(
        // filtre sur l'id en fonction de l'url
        (data) =>
          data.id ===
          window.location.href.split('http://localhost:3000/Logement/').join('')
        // map sur les datas filtrés
      ).map((data) => {
        const length = data.pictures.length;
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
            {
              <nav
                className={styles.arrowLeft}
                onClick={prevButton}
                style={{ visibility: length <= 1 ? 'hidden' : '' }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </nav>
            }
            <div className={styles.medias}>
              <img src={data.pictures[current]} alt={data.title} />
            </div>
            <div className={styles.index}>
              <p style={{ visibility: length <= 1 ? 'hidden' : '' }}>
                {current + 1}/{data.pictures.length}
              </p>
            </div>
            {
              <nav
                className={styles.arrowRight}
                onClick={nextButton}
                style={{ visibility: length <= 1 ? 'hidden' : '' }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </nav>
            }
          </div>
        );
      })}
    </div>
  );
};

export default Slideshow;
