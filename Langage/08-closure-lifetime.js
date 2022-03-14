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
maFonction();

const monAutreFonction = externe('Hello');
monAutreFonction();
monAutreFonction();
monAutreFonction();

maFonction();
// pile d'appel
// ^
// |
// |
// |externe - interne
// +----------------------------------------> temps
