function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return num + " is even.";
  } else {
    return num + " is odd.";
  }
}

let number = 7;
console.log(checkEvenOdd(number));
