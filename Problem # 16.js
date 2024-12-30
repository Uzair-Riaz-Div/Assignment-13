function isPalindrome(num) {
  let originalNum = num;
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return originalNum === reversed;
}

let number = 12321;
console.log(number + " is palindrome: " + isPalindrome(number));
