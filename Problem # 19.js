function fibonacci(n) {
  let fibSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }
  return fibSequence[n - 1];
}

let n = 10;
console.log("Fibonacci term at position " + n + " is: " + fibonacci(n));
