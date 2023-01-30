// mise en place des cards
import React from 'react';
import styles from '../style/Card.module.css';
import { Link } from 'react-router-dom';
import Datas from '../data/data.json';

export default function Card() {
  return (
    <div className={styles.gallery}>
      {Datas.map((data) => {
        return (
          <div className={styles.logement} key={data.id}>
            <Link to="/Logement/c67ab8a7">
              <div className={styles.card}>
                <p>{data.title}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

/**
 *       <div>
        <Link to="/Logement/b9123946">Card 2</Link>
      </div>
      <div>
        <Link to="/Logement/46d188c5">Card 3</Link>
      </div>
      <div>
        <Link to="/Logement/7af00cd6">Card 4</Link>
      </div>
      <div>
        <Link to="/Logement/0979876d">Card 5</Link>
      </div>
      <div>
        <Link to="/Logement/f72a452f">Card 6</Link>
      </div>
      <div>
        <Link to="/Logement/b4c67936">Card 7</Link>
      </div>
      <div>
        <Link to="/Logement/bc6f7112">Card 8</Link>
      </div>
      <div>
        <Link to="/Logement/cb2f9222">Card 9</Link>
      </div>
      <div>
        <Link to="/Logement/d60ca600">Card 10</Link>
      </div>
    </div>

 */
