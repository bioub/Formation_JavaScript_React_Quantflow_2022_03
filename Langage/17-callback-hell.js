const fs = require('fs');

// Sync : pas performant car thread bloqué sur le readFileSync
// simple à écrire et à relire
try {
  const buffer = fs.readFileSync('.prettierrc');
  fs.writeFileSync('.prettierrc.copy', buffer);
  console.log('COPY DONE');
} catch (err) {
  console.log(err);
}

// Async : performant car pendant la lecture le thread est libéré
// plus difficile à écrire et à lire
// l'ordre d'exécution n'est pas l'ordre des lignes
// Callback Hell - Pyramid of Doom
fs.readFile('.prettierrc', (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('.prettierrc.copy', buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('COPY DONE');
      }
    })
  }
});
console.log('FIN');
