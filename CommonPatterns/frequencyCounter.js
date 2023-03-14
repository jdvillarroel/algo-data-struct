/**
 * This pattern uses objects or sets to collect values/frequncies of values.
 *
 * This can often avoid the need for nested loops or O(n^2) operations
 * with arrays/strings.
 */
// Example:

/**
 * Write a function called "same", which accepts two arrays. The function should return true
 * if every value in the array has its corresponding value squeared in the second array. The
 * frequency of values must be the same.
 */

// My solution:
// Every element in the array should have its corresponding squared in the second array.
// It doesn't matter if the number is repeated, it should appear as many times as needed
// in the secon array.
/**
 * Examples:
 *
 * array = [1,2,3], squared = [1,4,9] -> true
 * array = [2,4,6], squared = [4, 16] -> false
 * array = [2,3,3], squared = [9,4,9] -> true
 * array = [1,2,1], squared = [1,4,4] -> false
 *
 * array = !Array -> false
 * array = [] -> false
 */
function mySame(_array, _squared) {
  // Loop through the array and for each element and compare on second array.
  // If the square of the element is in second array, remove both from the arrays.
  // If equare is not in second array return false.
  let arrayLength = _array.length;
  let sqauredIndex;
  let squaredValue;

  if (arrayLength === 0 || arrayLength !== _squared.length) return false;

  for (let i = arrayLength - 1; i >= 0; i--) {
    squaredValue = Math.pow(_array[i], 2);

    if (_squared.includes(squaredValue)) {
      // remove element found from the array.
      _array.pop();

      // remove squared value from second array.
      sqauredIndex = _squared.indexOf(squaredValue);
      _squared.splice(sqauredIndex, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(mySame([1, 2, 3, 4], [4, 1, 16, 9]));
console.log(mySame([2, 4, 6], [4, 16]));
console.log(mySame([2, 3, 3], [9, 4, 9]));
console.log(mySame([1, 2, 1], [1, 4, 4]));
console.log(mySame([], [1, 4, 4]));
console.log(mySame([1, 2, 1, 3, 4], [1, 4, 4, 9]));

// A more efficient approach.

function same(_array, _squared) {
  if (_array.length !== _squared.length) return false;

  // Build objects to keep track of elements and their frequency.
  let freqCounterOfArray = {};
  let freqCounterOfSquared = {};

  // Iterate over array and add each element as key of object. If the element exists increments count,
  // else initialize it and add one.
  for (let el of _array) {
    freqCounterOfArray[el] = (freqCounterOfArray[el] || 0) + 1;
  }

  for (let el of _squared) {
    freqCounterOfSquared[el] = (freqCounterOfSquared[el] || 0) + 1;
  }

  // Loop over second array comparing if the keys(squared) of first array exists.
  for (let key in freqCounterOfArray) {
    let keySquare = Math.pow(key, 2);

    if (!(keySquare in freqCounterOfSquared)) return false;

    // If previuos check passes, verify the frequency is the same.
    if (freqCounterOfArray[key] !== freqCounterOfSquared[keySquare])
      return false;
  }

  return true;
}

console.log("**********************************");

console.log(same([1, 2, 3, 4], [4, 1, 16, 9]));
console.log(same([2, 4, 6], [4, 16]));
console.log(same([2, 3, 3], [9, 4, 9]));
console.log(same([1, 2, 1], [1, 4, 4]));
console.log(same([], [1, 4, 4]));
console.log(same([1, 2, 1, 3, 4], [1, 4, 4, 9]));
