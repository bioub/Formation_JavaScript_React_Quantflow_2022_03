const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline');

function Jeu(options = {}) {
  // options.min ??= 0;
  // const min = (options && options.min) ?? 0;
  // const max = options?.max ?? 100;
  const { min = 0, max = 100 } = options;
  this.entierAlea = Random.getRandomInt(min, max);
  this.essais = [];

  this.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}


Jeu.prototype.jouer = function () {
  if (this.essais.length) {
    console.log('Vous avez déjà saisi : ' + this.essais.join(' - '));
  }

  this.rl.question('Quel est le nombre ? ', (answer) => {
    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log(answer + " n'est pas un nombre");
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      this.jouer();
    } else if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      this.jouer();
    } else {
      console.log('Gagné');
      this.rl.close();
    }
  });
}


const game = new Jeu();
game.jouer();

// pile d'appel
// ^
// |                  question          question
// |question          jouer             jouer
// |jouer             =>                =>
// +--------------------------------------------> temps
