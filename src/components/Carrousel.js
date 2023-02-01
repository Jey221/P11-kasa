// mise en place du Footer
import React from 'react';
import Datas from '../data/data.json';
import styles from '../style/Carrousel.module.css';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function nextButton() {
  console.log('next');
}

const Slideshow = () => {
  return (
    <div className={styles.containerSlide}>
      {Datas.filter(
        (data) =>
          data.id ===
          window.location.href.split('http://localhost:3000/Logement/').join('')
      ).map((data) => {
        function prevButton() {
          console.log('prev');
          console.log(data.pictures[0]);
        }
        return (
          <div className="eachSlide">
            <button className="arrowLeft" onClick={prevButton}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="medias">
              <img src={data.pictures[0]} alt="" />
            </div>
            <button className="arrowRight" onClick={nextButton}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
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
