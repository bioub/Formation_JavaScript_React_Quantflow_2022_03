const fs = require('fs');

// Sync : pas performant car thread bloqué sur le readFileSync
// simple à écrire et à relire
const buffer = fs.readFileSync('.prettierrc');
console.log(buffer.toString('utf-8'));

// Async : performant car pendant la lecture le thread est libéré
// plus difficile à écrire et à lire
// l'ordre d'exécution n'est pas l'ordre des lignes
fs.readFile('.prettierrc', (_, buffer) => {
  console.log(buffer.toString('utf-8'));
});
console.log('FIN');
