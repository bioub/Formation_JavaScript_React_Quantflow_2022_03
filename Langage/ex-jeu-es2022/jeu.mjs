import { createInterface } from 'readline';
import { getRandomInt } from './random.mjs';

export class Jeu {
  // properties
  essais = [];
  #rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  constructor(options = {}) {
    const { min = 0, max = 100 } = options;
    this.entierAlea = getRandomInt(min, max);
  }

  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà saisi : ${this.essais.join(' - ')}`);
    }

    this.#rl.question('Quel est le nombre ? ', (answer) => {
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log(`${answer} n'est pas un nombre`);
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
        this.#rl.close();
      }
    });
  }
}
