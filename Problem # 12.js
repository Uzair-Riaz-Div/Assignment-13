function printEvenOrOdd(start, end, type) {
  let numbers = [];
  for (let i = start; i <= end; i++) {
    if ((type === "even" && i % 2 === 0) || (type === "odd" && i % 2 !== 0)) {
      numbers.push(i);
    }
  }
  return numbers;
}

let start = 1,
  end = 20;
console.log(
  type +
    " numbers between " +
    start +
    " and " +
    end +
    ": " +
    printEvenOrOdd(start, end, "even")
);
console.log(
  type +
    " numbers between " +
    start +
    " and " +
    end +
    ": " +
    printEvenOrOdd(start, end, "odd")
);
