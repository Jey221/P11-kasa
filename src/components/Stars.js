import vector from '../assets/Vector.svg';
import vector2 from '../assets/Vector2.svg';
import styles from '../style/Infos.module.css';

// mise en place des etoiles pour la notation
const starLevel = (
  <span className={styles.stars}>
    <img src={vector2} alt="étoile vide" />
    <img src={vector2} alt="étoile vide" />
    <img src={vector2} alt="étoile vide" />
    <img src={vector2} alt="étoile vide" />
    <img src={vector2} alt="étoile vide" />
  </span>
);
const starLevel1 = (
  <span className={styles.stars}>
    <img src={vector} alt="étoile pleine" />
    <img src={vector2} alt="étoile vide" />
    <img src={vector2} alt="étoile vide" />
    <img src={vector2} alt="étoile vide" />
    <img src={vector2} alt="étoile vide" />
  </span>
);
const starLevel2 = (
  <span className={styles.stars}>
    <img src={vector} alt="étoile pleine" />
    <img src={vector} alt="étoile pleine" />
    <img src={vector2} alt="étoile vide" />
    <img src={vector2} alt="étoile vide" />
    <img src={vector2} alt="étoile vide" />
  </span>
);
const starLevel3 = (
  <span className={styles.stars}>
    <img src={vector} alt="étoile pleine" />
    <img src={vector} alt="étoile pleine" />
    <img src={vector} alt="étoile pleine" />
    <img src={vector2} alt="étoile vide" />
    <img src={vector2} alt="étoile vide" />
  </span>
);
const starLevel4 = (
  <span className={styles.stars}>
    <img src={vector} alt="étoile pleine" />
    <img src={vector} alt="étoile pleine" />
    <img src={vector} alt="étoile pleine" />
    <img src={vector} alt="étoile pleine" />
    <img src={vector2} alt="étoile vide" />
  </span>
);
const starLevel5 = (
  <span className={styles.stars}>
    <img src={vector} alt="étoile pleine" />
    <img src={vector} alt="étoile pleine" />
    <img src={vector} alt="étoile pleine" />
    <img src={vector} alt="étoile pleine" />
    <img src={vector} alt="étoile pleine" />
  </span>
);

const rat = [
  starLevel,
  starLevel1,
  starLevel2,
  starLevel3,
  starLevel4,
  starLevel5,
];
console.log(rat);
export { rat };
