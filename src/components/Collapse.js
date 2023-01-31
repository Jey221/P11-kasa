// mise en place des Collapses //WIP
import React from 'react';
import styles from '../style/Collapse.module.css';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function openCloseCollapse() {
  const iconOpen = document.getElementById('iconOpen');
  const iconClose = document.getElementById('iconClose');
  const textFiability = document.getElementById('textFiability');
  console.log(iconClose);
  // eslint-disable-next-line no-lone-blocks
  if (window.getComputedStyle(textFiability).display === 'none') {
    textFiability.style.setProperty('display', 'block');
    iconClose.style.setProperty('display', 'none');
    iconOpen.style.setProperty('display', 'block');
  } else {
    textFiability.style.setProperty('display', 'none');
    iconClose.style.setProperty('display', 'block');
    iconOpen.style.setProperty('display', 'none');
  }
}

export default function Collapse() {
  return (
    <div className={styles.collapseList}>
      <div className={styles.collapse}>
        <div className={styles.collapseClose} onClick={openCloseCollapse}>
          <span>Fiabilité</span>
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
      <h3>Respect</h3>
      <h3>Service</h3>
      <h3>Responsabilité</h3>
    </div>
  );
}

/* {
  window.getComputedStyle(textFiability).display === 'none'
    ? textFiability.style.setProperty('display', 'block') &&
      iconClose.style.setProperty('display', 'none') &&
      iconOpen.style.setProperty('display', 'block')
    : textFiability.style.setProperty('display', 'none') &&
      iconClose.style.setProperty('display', 'block') &&
      iconOpen.style.setProperty('display', 'none');
}
 */
