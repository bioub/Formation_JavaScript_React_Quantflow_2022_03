// Objets prédéfinis par le langage
console.log(typeof Math); // object
console.log(typeof JSON); // object

// Objets prédéfinis par Node.js
console.log(typeof process); // object

// Objets prédéfinis par le browser
console.log(typeof document); // object
console.log(typeof window); // object
console.log(typeof navigator); // object

// Objets prédéfinis par le browser
console.log(typeof console); // object

// Les objets JS sont extensibles
// c'est des dictionnaires dans lesquels
// on peut ajouter, modifier ou supprimer des couples
// clé/valeur

console.log(Math.sum); // undefined

// ajouter
Math.sum = function(a, b) {
  return a + b;
};
console.log(Math.sum(1, 2));

// modifier
Math.sum = function(a, b) {
  return Number(a) + Number(b);
};
console.log(Math.sum(1, '2'));

// supprimer
delete Math.sum;

// Mauvaise pratique dans un code classique
// Pratique dans un test
function pileOuFace() {
  return Math.random() > 0.5 ? 'pile' : 'face';
}

const random = Math.random;
Math.random = () => 0.7;
console.log(pileOuFace());
Math.random = random;


// Créer ses propres objets
// 2 systèmes possibles
// object literal : {}
// constructor : new XMLHttpRequest();

// object literal
// pour des objets mono-instance
// ou multi-instance sans méthode
globalThis.MyMath = {
  sum: function(a, b) {
    return Number(a) + Number(b);
  }
};

const coords1 = {
  x: 1,
  y: 2,
  // getValues: function() {
  //   return {
  //     x: this.x,
  //     y: this.y,
  //   }
  // }
};

const coords2 = {
  x: 1,
  y: 2,
  // getValues: function() {
  //   return {
  //     x: this.x,
  //     y: this.y,
  //   }
  // }
};

// console.log(coords1.x);
// console.log(coords1['x']);
// const key = 'x';
// console.log(coords1[key.toLowerCase()]);

// const coords3 = {
//   ['z'.toUpperCase()]: 3,
// }
// coords['z'.toUpperCase()] =

// console.log(coords1.getValues === coords2.getValues); // false (donc 2 fonctions en mémoire)

// constructor (fonction constructeur)
// multi-instance avec méthode
function Coords(x, y) {
  this.x = x;
  this.y = y;
}

Coords.prototype.getValues = function() {
  return {
    x: this.x,
    y: this.y,
  }
}

Coords.prototype.getValues = function() {
  return {
    x: this.x,
    y: this.y,
  }
}

// Object.defineProperty(Coords.prototype, 'getValues', {
//   value: function() {
//     return {
//       x: this.x,
//       y: this.y,
//     }
//   }
// });


const coordsA = new Coords(1, 2);
const coordsB = new Coords(3, 4);
// delete coordsA.x;
console.log(coordsA.getValues());
console.log(coordsA.getValues === coordsB.getValues); // true (donc 1 fonction en mémoire)


console.log(coordsA instanceof Coords); // true
console.log(coordsA instanceof Object); // true

console.log('coordsA.x !== undefined', coordsA.x !== undefined); // true
console.log('coordsA.getValues !== undefined', coordsA.getValues !== undefined); // true

console.log("'x' in coordsA", 'x' in coordsA); // true
console.log("'getValues' in coordsA", 'getValues' in coordsA); // true

console.log("coordsA.hasOwnProperty('x')", coordsA.hasOwnProperty('x')); // true
console.log("coordsA.hasOwnProperty('getValues')", coordsA.hasOwnProperty('getValues')); // false

// for (const key in coordsA) {
//   if (Object.hasOwnProperty.call(coordsA, key)) {
//     const value = coordsA[key];
//     console.log(key, value);
//   }
// }

// Boucle moderne sur les clés/valeurs d'un objet
for (const [key, value] of Object.entries(Coords.prototype)) {
  console.log(key, value);
}
