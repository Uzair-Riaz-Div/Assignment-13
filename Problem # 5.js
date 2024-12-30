function checkPrime(num) {
  if (num <= 1) {
    return num + " is not a prime number.";
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return num + " is not a prime number.";
    }
  }
  return num + " is a prime number.";
}

function checkArmstrong(num) {
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, 3);
    temp = Math.floor(temp / 10);
  }
  if (sum === num) {
    return num + " is an Armstrong number.";
  } else {
    return num + " is not an Armstrong number.";
  }
}

function checkPerfect(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  if (sum === num && num !== 0) {
    return num + " is a perfect number.";
  } else {
    return num + " is not a perfect number.";
  }
}

let number = 153;
console.log(checkPrime(number));
console.log(checkArmstrong(number));
console.log(checkPerfect(number));
