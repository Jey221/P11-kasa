// recupération des données
import Datas from '../data/data.json';

export default function data() {
  Datas.map((data) => {
    console.log(data);
    return data;
  });
}
