import { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import styles from '../style/CollapseLoc.module.css';

function Collapse({ title, content, type }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
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
