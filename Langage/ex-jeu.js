const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);
    jouer();

    // pour arreter la partie
    // rl.close(); à la place de jouer
  });
}
jouer();

// pile d'appel
// ^
// |                  question          question
// |question          jouer             jouer
// |jouer             =>                =>
// +--------------------------------------------> temps
