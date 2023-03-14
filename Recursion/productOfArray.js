/**
 * Write a function called productOfArray which takes in an
 * array of numbers and returns the product of them all.
 */

function productOfArray(array) {
  if (array.length === 0) return 1;

  let temp = array[array.length - 1];
  array.pop();

  return temp * productOfArray(array);
}

console.log(productOfArray([1, 2, 2, 2, 3])); // 48
console.log(productOfArray([1, 2, 2, 2, 3, 10])); // 48
console.log(productOfArray([2, , 3, 6, 2, 10])); // 48
