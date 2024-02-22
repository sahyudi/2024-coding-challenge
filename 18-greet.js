// 2024 coding challenge WPU
// 8/366
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

function greet(name, owner) {
  return name == owner ? "Hello boss" : "Hello guest";
}

console.log(greet("Greeg", "Daniel"));
