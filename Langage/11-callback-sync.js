const prenoms = ['Romain', 'Jean', 'Eric'];
const prenoms4LettresMaj = [];

for (const prenom of prenoms) {
  if (prenom.length === 4) {
    const prenom4Lettres = prenom;
    const prenom4LettresMaj = prenom4Lettres.toUpperCase();
    prenoms4LettresMaj.push(prenom4LettresMaj);
  }
}

for (const prenom of prenoms4LettresMaj) {
  console.log(prenom);
}

// Depuis ES5 (2009)
const prenoms4LettresMaj2 = prenoms
  .filter((prenom) => prenom.length === 4)
  .map((prenom4Lettres) => prenom4Lettres.toUpperCase());

prenoms4LettresMaj2.forEach((prenom) => console.log(prenom));

console.log('FIN');
// pile d'appel
// ^
// |
// |=> - => - =>   => - =>
// |filter       - map
// +----------------------------------------> temps
