function findPerfectNumbersInRange(start, end) {
  let perfectNumbers = [];
  for (let i = start; i <= end; i++) {
    if (isPerfect(i)) {
      perfectNumbers.push(i);
    }
  }
  return perfectNumbers;
}

function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num && num !== 0;
}

let start = 1,
  end = 1000;
console.log(
  "Perfect numbers between " +
    start +
    " and " +
    end +
    ": " +
    findPerfectNumbersInRange(start, end)
);
