// mise en place des cards
import React from 'react';
import styles from '../style/Card.module.css';
import { Link } from 'react-router-dom';
/* import { getDataFromJSON, getData } from './data';

console.log(getData);
console.log(getDataFromJSON);
async function getInfos() {
  const data = await getData();
  const infos = await data;

  return infos;
}
console.log(getInfos);
*/

export default function Card(data, infos) {
  return (
    <div className={styles.card}>
      <div>
        <Link to="/Logement/c67ab8a7">Card 1</Link>
      </div>
      <div>
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
  );
}
