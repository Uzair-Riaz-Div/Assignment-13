function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}

let number = 12345;
console.log("Reverse of " + number + " is: " + reverseNumber(number));
