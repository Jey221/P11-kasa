// recupération des données
import Datas from '../data/data.json';
// non utilisé pour le moment a supprimer si pas d'utilisation
export default function data() {
  Datas.map((data) => {
    console.log(data);
    return data;
  });
}
