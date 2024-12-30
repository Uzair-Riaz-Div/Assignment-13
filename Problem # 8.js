function findArmstrongNumbersInRange(start, end) {
  let armstrongNumbers = [];
  for (let i = start; i <= end; i++) {
    if (isArmstrong(i)) {
      armstrongNumbers.push(i);
    }
  }
  return armstrongNumbers;
}

function isArmstrong(num) {
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, String(num).length);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}

let start = 1,
  end = 1000;
console.log(
  "Armstrong numbers between " +
    start +
    " and " +
    end +
    ": " +
    findArmstrongNumbersInRange(start, end)
);
