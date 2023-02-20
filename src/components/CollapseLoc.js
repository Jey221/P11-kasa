// mise en place des Collapses sur la page Logement
import React from 'react';
import styles from '../style/CollapseLoc.module.css';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Datas from '../data/data.json';
import { useLocation } from 'react-router-dom';

// mise en place d'une fonction pour l'ouverture/fermeture du collapse "fiabilité"
function openCloseCollapse1() {
  const textFiability = document.getElementById('textFiability');
  const iconOpen = document.getElementById('iconOpen');
  const iconClose = document.getElementById('iconClose');
  // eslint-disable-next-line no-lone-blocks
  if (window.getComputedStyle(textFiability).display === 'none') {
    // ouverture
    textFiability.style.setProperty('display', 'block');
    iconClose.style.setProperty('display', 'none');
    iconOpen.style.setProperty('display', 'block');
  } else {
    // fermeture
    textFiability.style.setProperty('display', 'none');
    iconClose.style.setProperty('display', 'block');
    iconOpen.style.setProperty('display', 'none');
  }
}

// mise en place d'une fonction pour l'ouverture/fermeture du collapse "respect"
function openCloseCollapse2() {
  const textRespect = document.getElementById('textRespect');
  const iconOpen = document.getElementById('iconOpen2');
  const iconClose = document.getElementById('iconClose2');
  // eslint-disable-next-line no-lone-blocks
  if (window.getComputedStyle(textRespect).display === 'none') {
    // ouverture
    textRespect.style.setProperty('display', 'block');
    iconClose.style.setProperty('display', 'none');
    iconOpen.style.setProperty('display', 'block');
  } else {
    // fermeture
    textRespect.style.setProperty('display', 'none');
    iconClose.style.setProperty('display', 'block');
    iconOpen.style.setProperty('display', 'none');
  }
}

// mise en place d'une fonction pour l'ouverture/fermeture du collapse "Description"
function openCloseCollapse3() {
  const textDescription = document.getElementById('textDescription');
  const iconOpen = document.getElementById('iconOpen3');
  const iconClose = document.getElementById('iconClose3');
  // eslint-disable-next-line no-lone-blocks
  if (window.getComputedStyle(textDescription).display === 'none') {
    // ouverture
    textDescription.style.setProperty('display', 'block');
    iconClose.style.setProperty('display', 'none');
    iconOpen.style.setProperty('display', 'block');
  } else {
    // fermeture
    textDescription.style.setProperty('display', 'none');
    iconClose.style.setProperty('display', 'block');
    iconOpen.style.setProperty('display', 'none');
  }
}
// mise en place d'une fonction pour l'ouverture/fermeture du collapse "Equipements"
function openCloseCollapse4() {
  const textEquipements = document.getElementById('textEquipements');
  const iconOpen = document.getElementById('iconOpen4');
  const iconClose = document.getElementById('iconClose4');
  // eslint-disable-next-line no-lone-blocks
  if (window.getComputedStyle(textEquipements).display === 'none') {
    // ouverture
    textEquipements.style.setProperty('display', 'block');
    iconClose.style.setProperty('display', 'none');
    iconOpen.style.setProperty('display', 'block');
  } else {
    // fermeture
    textEquipements.style.setProperty('display', 'none');
    iconClose.style.setProperty('display', 'block');
    iconOpen.style.setProperty('display', 'none');
  }
}

// création des collapse pour la page logement
export default function CollapseLoc() {
  const url = useLocation();
  console.log(url);
  console.log(Datas.id);
  console.log(url.pathname === `/Logement/${Datas.id}`);
  if (url.pathname === '/Logement') {
    return (
      <div>
        {Datas.filter(
          // filtre sur l'id en fonction de l'url
          (data) =>
            data.id ===
            window.location.href
              .split('http://localhost:3000/Logement/')
              .join('')
          // map sur les datas filtrés
        ).map((data) => {
          return (
            <div className={styles.collapseList} key={data.id}>
              <div className={styles.collapseLoc}>
                <div className={styles.collapseUp}>
                  <div
                    className={styles.collapseClose}
                    onClick={openCloseCollapse3}
                  >
                    <h2>Description</h2>
                    <span className={styles.icons}>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        id="iconClose3"
                        className={styles.iconDown}
                      />
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        id="iconOpen3"
                        className={styles.iconUp}
                      />
                    </span>
                  </div>
                  <div className={styles.collapseOpen} id="textDescription">
                    <div>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.collapseUp}>
                  <div
                    className={styles.collapseClose}
                    onClick={openCloseCollapse4}
                  >
                    <h2>Équipements</h2>
                    <span className={styles.icons}>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        id="iconClose4"
                        className={styles.iconDown}
                      />
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        id="iconOpen4"
                        className={styles.iconUp}
                      />
                    </span>
                  </div>
                  <div className={styles.collapseOpen} id="textEquipements">
                    <ul>
                      {data.equipments.map((equipment) => {
                        // map sur les équipements pour un listing
                        return <li key={equipment}>{equipment}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.collapseLocBis}>
                <div className={styles.collapse}>
                  <div
                    className={styles.collapseClose}
                    onClick={openCloseCollapse1}
                  >
                    <h2>Fiabilité</h2>
                    <span className={styles.icons}>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        id="iconClose"
                        className={styles.iconDown}
                      />
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        id="iconOpen"
                        className={styles.iconUp}
                      />
                    </span>
                  </div>
                  <div className={styles.collapseOpenDown} id="textFiability">
                    <div>
                      <p>
                        Les annonces postées sur Kasa garantissent une fiabilité
                        totale. Les photos sont conformes aux logements, et
                        toutes les informations sont régulièrement vérifiées par
                        nos équipes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.collapse}>
                  <div
                    className={styles.collapseClose}
                    onClick={openCloseCollapse2}
                  >
                    <h2>Respect</h2>
                    <span className={styles.icons}>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        id="iconClose2"
                        className={styles.iconDown}
                      />
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        id="iconOpen2"
                        className={styles.iconUp}
                      />
                    </span>
                  </div>
                  <div className={styles.collapseOpenDown} id="textRespect">
                    <div>
                      <p>
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    console.log('no');
  }
}
