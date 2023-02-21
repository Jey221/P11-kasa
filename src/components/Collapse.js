import { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import styles from '../style/CollapseLoc.module.css';

function Collapse({ title, content, type }) {
  // mise en place d'un Hook d'état pour l'ouverture et la fermeture des col
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    // collapse ouvert
    <article className="Collapse">
      <div className="CollapseHeader" onClick={() => setIsOpen(false)}>
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          id="iconOpen3"
          className="iconCollapse"
        />
      </div>
      <div className="CollapseContent">
        {type === 'paragraph' ? (
          // condition sur le contenu du collapse soit paragraphe soit liste non ordonnée
          <p>{content}</p>
        ) : (
          <ul>
            {content.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  ) : (
    // collapse fermer
    <article className="Collapse">
      <div className="CollapseHeader" onClick={() => setIsOpen(true)}>
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={faChevronDown}
          id="iconClose3"
          className="iconCollapse"
        />
      </div>
    </article>
  );
}

export default Collapse;
