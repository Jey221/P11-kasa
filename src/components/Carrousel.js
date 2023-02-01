// mise en place du Footer
import React, { useState } from 'react';
import Datas from '../data/data.json';
import styles from '../style/Carrousel.module.css';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Slideshow = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className={styles.containerSlide}>
      {Datas.filter(
        (data) =>
          data.id ===
          window.location.href.split('http://localhost:3000/Logement/').join('')
      ).map((data) => {
        function prevButton() {
          const length = data.pictures.length;
          setCurrent(current === 0 ? length - 1 : current - 1);
          console.log('prev');
        }
        function nextButton() {
          const length = data.pictures.length;
          setCurrent(current === length - 1 ? 0 : current + 1);
          console.log('next');
        }
        console.log(current);
        return (
          <div className={styles.eachSlide}>
            <nav className={styles.arrowLeft} onClick={prevButton}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </nav>
            <div className={styles.medias}>
              <img src={data.pictures[current]} alt={data.title} />
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

/* `/Logement/${data.id}` 

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
console.log(data.pictures);
          data.id === window.location.href.split('http://localhost:3000/Logement/').join('')
            ? console.log('no')
            : return;
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        {Datas.map((data) => {
          if (
            data.id ===
            window.location.href
              .split('http://localhost:3000/Logement/')
              .join('')
          ) {
            return (
              <div className="eachSlide">
                <div>
                  <img src={Image} alt="" />;
                </div>
              </div>
            );
          }
          return null;
        })}



*/
