// On renvoie un nombre aléatoire entre 0 (inclus) et 1 (exclus)
function getRandom() {
  return Math.random();
}

// On renvoie un nombre aléatoire entre une valeur min (incluse)
// et une valeur max (exclue)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (exclue).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (incluse).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const readline = require('readline');

const entierAlea = getRandomInt(0, 100);
const essais = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà saisi : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {
    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log(answer + " n'est pas un nombre");
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}
jouer();

// pile d'appel
// ^
// |                  question          question
// |question          jouer             jouer
// |jouer             =>                =>
// +--------------------------------------------> temps
