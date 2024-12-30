function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

let number = 5;
console.log("Factorial of " + number + " is: " + factorial(number));
