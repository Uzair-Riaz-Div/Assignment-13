function findSumOfEvenOrOdd(start, end, type) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if ((type === "even" && i % 2 === 0) || (type === "odd" && i % 2 !== 0)) {
      sum += i;
    }
  }
  return sum;
}

let start = 1,
  end = 20;
console.log(
  "Sum of even numbers between " +
    start +
    " and " +
    end +
    ": " +
    findSumOfEvenOrOdd(start, end, "even")
);
console.log(
  "Sum of odd numbers between " +
    start +
    " and " +
    end +
    ": " +
    findSumOfEvenOrOdd(start, end, "odd")
);
