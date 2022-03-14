// function sum(a, b, c) {
//   if (c === undefined) {
//     c = 0;
//   }
//   return a + b + c;
// }

// console.log(sum(1, 2));

// function sum(a, b, c) {
//   c = c || 10;
//   return a + b + c;
// }

// console.log(sum(1, 2, 0));

// function sum(a, b, c) {
//   c = c ?? 10; // Nullish coalescing operator
//   return a + b + c;
// }

// console.log(sum(1, 2, 0));

function sum(a, b, c = 0) {
  return a + b + c;
}

console.log(sum(1, 2, 0));
