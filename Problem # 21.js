function findLCM(a, b) {
  return (a * b) / findGCD(a, b);
}

let num1 = 12,
  num2 = 18;
console.log("LCM of " + num1 + " and " + num2 + " is: " + findLCM(num1, num2));
