function sumOfArrayElements(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}

let array = [1, 2, 3, 4, 5];
console.log("Sum of array elements: " + sumOfArrayElements(array));
