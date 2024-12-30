function findStrongNumbersInRange(start, end) {
  let strongNumbers = [];
  for (let i = start; i <= end; i++) {
    if (isStrong(i)) {
      strongNumbers.push(i);
    }
  }
  return strongNumbers;
}

function isStrong(num) {
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    sum += factorial(digit);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}

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

let start = 1,
  end = 1000;
console.log(
  "Strong numbers between " +
    start +
    " and " +
    end +
    ": " +
    findStrongNumbersInRange(start, end)
);
