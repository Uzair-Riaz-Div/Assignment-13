function findMinMaxArrayElements(arr) {
  let min = arr[0];
  let max = arr[0];
  arr.forEach((element) => {
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  });
  return { min, max };
}

let array = [3, 1, 5, 2, 4];
let result = findMinMaxArrayElements(array);
console.log("Minimum element: " + result.min);
console.log("Maximum element: " + result.max);
