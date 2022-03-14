// function setTimeout(cb, delay) {
//   const debut = Date.now();
//   while (debut + delay > Date.now());
//   cb();
// }

for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// A - .1s. 0 .1s. 1 .1s. 2
// B - .1s. 0 1 2
// C - .1s. 2 2 2
// D - .1s. 3 3 3

// pile d'appel
// ^
// |
// |
// |for { st - st - st }                => => =>
// 0---------------------3--------------1000-----> temps

// file d'attente (0ms) :
// file d'attente (3ms) :
// file d'attente (1000ms) : => => =>
// file d'attente (1001ms) : => =>
// file d'attente (1002ms) : =>
// file d'attente (1003ms) :


setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 500);
setTimeout(() => console.log('D'), 1000);

console.log('E');


// pile d'appel
// ^
// |
// |
// |st - st - st - st - lg ..⟳.. =>      => =>      =>
// 0-----1---------------3-------9-------500--------1000-> temps
// Sortie               E

// File d'attente (1ms): =>
// File d'attente (9ms):
// File d'attente (500ms): => =>
// File d'attente (501ms): =>
// File d'attente (502ms):
// File d'attente (1000ms): =>
// File d'attente (1001ms): =>

// Jake Archibald In the loop
