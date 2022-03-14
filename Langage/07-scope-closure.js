globalThis.maVarGlobal = 'global';
const maVarModule = 'module'; // si <script type="module"

function externe() {
  const maVarClosure = 'closure';

  function interne() {
    const maVarLocal = 'local';
    if (true) {
      const maVarBlock = 'block'; // seulement si let ou const
      // const maVarLocal = 'masque celle du dessus';
      console.log(maVarBlock);
      console.log(maVarLocal);
      console.log(maVarClosure);
      console.log(maVarModule);
      console.log(maVarGlobal);
    }
  }
  interne();
}
externe();


// pile d'appel
// ^
// |
// |interne
// |externe
// +----------------------------------------> temps
