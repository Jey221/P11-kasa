// mise en place des cards
import React from 'react';
import styles from '../style/Card.module.css';
import { Link } from 'react-router-dom';
import Datas from '../data/data.json';

export default function Card() {
  return (
    // mise en place des cards alimentés par le json via la méthode .map
    <div className={styles.gallery}>
      {Datas.map((data) => {
        return (
          <div className={styles.logement} key={data.id}>
            <Link to={`/Logement/${data.id}`}>
              <div className={styles.card}>
                <h2>{data.title}</h2>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
