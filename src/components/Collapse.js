// mise en place des Collapses //WIP
import React from 'react';
import styles from '../style/Collapse.module.css';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// mise en place d'une fonction pour l'ouverture du collapse "fiabilité"
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

// mise en place d'une fonction pour l'ouverture du collapse "respect"
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

// mise en place d'une fonction pour l'ouverture du collapse "service"
function openCloseCollapse3() {
  const textService = document.getElementById('textService');
  const iconOpen = document.getElementById('iconOpen3');
  const iconClose = document.getElementById('iconClose3');
  // eslint-disable-next-line no-lone-blocks
  if (window.getComputedStyle(textService).display === 'none') {
    // ouverture
    textService.style.setProperty('display', 'block');
    iconClose.style.setProperty('display', 'none');
    iconOpen.style.setProperty('display', 'block');
  } else {
    // fermeture
    textService.style.setProperty('display', 'none');
    iconClose.style.setProperty('display', 'block');
    iconOpen.style.setProperty('display', 'none');
  }
}
// mise en place d'une fonction pour l'ouverture du collapse "responsabilité"
function openCloseCollapse4() {
  const textResponsability = document.getElementById('textResponsability');
  const iconOpen = document.getElementById('iconOpen4');
  const iconClose = document.getElementById('iconClose4');
  // eslint-disable-next-line no-lone-blocks
  if (window.getComputedStyle(textResponsability).display === 'none') {
    // ouverture
    textResponsability.style.setProperty('display', 'block');
    iconClose.style.setProperty('display', 'none');
    iconOpen.style.setProperty('display', 'block');
  } else {
    // fermeture
    textResponsability.style.setProperty('display', 'none');
    iconClose.style.setProperty('display', 'block');
    iconOpen.style.setProperty('display', 'none');
  }
}

export default function Collapse() {
  return (
    <div className={styles.collapseList}>
      <div className={styles.collapse}>
        <div className={styles.collapseClose} onClick={openCloseCollapse1}>
          <h2>Fiabilité</h2>
          <span className={styles.icons}>
            <FontAwesomeIcon
              icon={faChevronDown}
              id="iconClose"
              className={styles.iconDownFiability}
            />
            <FontAwesomeIcon
              icon={faChevronUp}
              id="iconOpen"
              className={styles.iconUpFiability}
            />
          </span>
        </div>
        <div className={styles.collapseOpen} id="textFiability">
          <div>
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.collapse}>
        <div className={styles.collapseClose} onClick={openCloseCollapse2}>
          <h2>Respect</h2>
          <span className={styles.icons}>
            <FontAwesomeIcon
              icon={faChevronDown}
              id="iconClose2"
              className={styles.iconDownRespect}
            />
            <FontAwesomeIcon
              icon={faChevronUp}
              id="iconOpen2"
              className={styles.iconUpRespect}
            />
          </span>
        </div>
        <div className={styles.collapseOpen} id="textRespect">
          <div>
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.collapse}>
        <div className={styles.collapseClose} onClick={openCloseCollapse3}>
          <h2>Service</h2>
          <span className={styles.icons}>
            <FontAwesomeIcon
              icon={faChevronDown}
              id="iconClose3"
              className={styles.iconDownRespect}
            />
            <FontAwesomeIcon
              icon={faChevronUp}
              id="iconOpen3"
              className={styles.iconUpRespect}
            />
          </span>
        </div>
        <div className={styles.collapseOpen} id="textService">
          <div>
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.collapse}>
        <div className={styles.collapseClose} onClick={openCloseCollapse4}>
          <h2>Responsabilité</h2>
          <span className={styles.icons}>
            <FontAwesomeIcon
              icon={faChevronDown}
              id="iconClose4"
              className={styles.iconDownRespect}
            />
            <FontAwesomeIcon
              icon={faChevronUp}
              id="iconOpen4"
              className={styles.iconUpRespect}
            />
          </span>
        </div>
        <div className={styles.collapseOpen} id="textResponsability">
          <div>
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
