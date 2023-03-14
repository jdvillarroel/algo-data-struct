/**
 * Write a recursive function called flatten which accepts
 * an array of arrays and returns a new array with all
 * values flattened
 */
function flatten(array) {
  let flatArray = [];

  if (array.length === 0) return flatArray;

  /**
   * Since every element of the array could be an array we verify
   * if the element is an array. If so, we make a recursive call
   * concatenating to the current flatArray the result of the recursive
   * call. The recursive call continues until the element is not an array
   * anymore (literal value) then is pushed into the flatArray.
   */
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray = flatArray.concat(flatten(array[i]));
    } else {
      flatArray.push(array[i]);
    }
  }

  return flatArray;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
