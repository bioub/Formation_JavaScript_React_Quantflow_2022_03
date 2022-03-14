const exportsFromHello = require('./hello');

const prenoms = ['Romain', 'Jean', 'Eric'];

for (const prenom of prenoms) {
  console.log(exportsFromHello.hello(prenom));
}
