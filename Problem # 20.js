function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

let num1 = 12,
  num2 = 18;
console.log("GCD of " + num1 + " and " + num2 + " is: " + findGCD(num1, num2));
