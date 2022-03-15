// let fonction;

// function externe() {
//   function interne() {

//   }
//   fonction = interne;
// }

// externe();
// fonction();


function externe(msg) {
  return function interne() {
    console.log(msg);
  }
}

const maFonction = externe('Bonjour');
maFonction(); // Bonjour

const monAutreFonction = externe('Hello');
monAutreFonction(); // Hello
monAutreFonction(); // Hello
monAutreFonction(); // Hello

maFonction(); // Bonjour
// pile d'appel
// ^
// |
// |
// |externe - interne
// +----------------------------------------> temps
