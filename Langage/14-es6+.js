// REST
// Conversion syntaxique
// liste de valeur (ex: 3, 4) -> tableau (ex: [3, 4])
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4)); // 10

// SPREAD
// Conversion syntaxique
// tableau (ex: [3, 4]) -> liste de valeur (ex: 3, 4)

function multiply(a, b) {
  return a * b;
}

const nbs = [3, 4];
console.log(multiply(...nbs));

const shallowCloneNbs = [...nbs];

// changements immuables
const newNbs = [...nbs, 5]

// destructurer
// const trois = nbs[0];
// const quatre = nbs[1];
//    [3    , 4     ]
const [trois, quatre = 4, ...others] = newNbs;

// const tmp = 'Romain Bohdanowicz'.split(' ');
// const firstName = tmp[0];
// const lastName = tmp[1];

const [firstName, lastName = ''] = 'Romain Bohdanowicz'.split(' ');


// const state = {
//   'user1': {

//   }
// }

// const newState = {
//   ...state,
//   ['user' + id]: {

//   }
// }


// destructuring object

const coords = {x: 1, y: 2};

//    { x: 1     , y: 2      }
const { x: valueX, y: valueY } = coords;

const { x , y = 0, ...others2 } = coords;


// class
class Coords2d {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static getType() {
    return 'Coords2d';
  }
  getValues() {
    return {
      x: this.x,
      y: this.y,
    };
  }
}

class Coords3d extends Coords2d {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
  getValues() {
    return {
      ...super.getValues(), // {x: 1, y: 2} -> x: 1, y: 2
      z: this.z,
    }
  }
}

Coords2d.getType()
const coords2d = new Coords2d(1, 2);
coords2d.getValues();
