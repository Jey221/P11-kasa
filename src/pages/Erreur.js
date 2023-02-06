// mise en place de la page d'erreur 404
import React, { useEffect, useState } from 'react';
import styles from '../style/Erreur.module.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Erreur() {
  return (
    <div className={styles.errorPage}>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

/* function DataPage({ id }) {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`../data/data.json`)
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          navigate('/error');
        } else {
          setData(data);
        }
      });
  }, [id, navigate]);
  if (!data) {
    return console.log('yeah');
  }
  return (
    <div>
      <h1>DataPage</h1>
    </div>
  );
}
function App() {
  const [id, setId] = useState('1');

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <DataPage id={id} />
    </div>
  );
}
 */
