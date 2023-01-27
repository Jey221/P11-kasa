// recupération des données
export async function getData() {
  const response = await fetch('data/data.json');
  const data = await response.json();
  return data;
}

export function getDataFromJSON() {
  return fetch('data/data.json')
    .then((response) => response.json())
    .then((data) => {
      // traitement des données ici
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
