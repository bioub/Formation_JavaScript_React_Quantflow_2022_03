import { hello } from './hello.mjs';

const prenoms = ['Romain', 'Jean', 'Eric'];

for (const prenom of prenoms) {
  console.log(hello(prenom));
}
