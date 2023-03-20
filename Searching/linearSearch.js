/**
 * Create a function that implements a linear search given an array and a
 * target value. Return -1 if the value id not found in the array.
 */

function linearSearch(array, value) {
  if (array.length === 0 || !Array.isArray(array)) return -1;

  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) return index;
  }

  return -1;
}
