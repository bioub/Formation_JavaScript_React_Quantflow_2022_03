// function sum(a, b) {
//   let result = a + b;

//   for (let i=2; i<arguments.length; i++) {
//     result += arguments[i];
//   }

//   return result;
// }

// console.log(sum(1, 2, 3, 4)); // 10

function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4)); // 10
