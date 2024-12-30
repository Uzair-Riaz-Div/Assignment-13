function findMaxMin(a, b) {
  let max = a > b ? a : b;
  let min = a < b ? a : b;
  return { max, min };
}

let num1 = 10,
  num2 = 5;
let result = findMaxMin(num1, num2);
console.log("Maximum: " + result.max);
console.log("Minimum: " + result.min);
