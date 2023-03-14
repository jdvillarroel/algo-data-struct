/**
 * Write a recursive function called someRecursive which accepts an
 * array and a callback. The function returns true if a single
 * value in the array returns true when passed to the callback.
 * Otherwise it returns false.
 */
function someRecursive(array, callback) {
  let result = false;

  // If passed an empty array just return false
  if (array.length === 0) return result;

  /**
   * This function implements the recursiveness of the main function.
   * We'll pass the last element of the array to the callback and test
   * if is true or not. If true, we set our global variable result to
   * true and end any subsequent recursive call by returning. Note: The
   * Array.prototype.pop() modifies the original array and returs the
   * removed element. On every recursive call we're passing a shorter array
   * until is empty.
   * @param {*} _arr
   * @param {*} callback
   * @returns
   */
  function helper(_arr, callback) {
    if (_arr.length === 0) return;

    if (callback(_arr.pop())) {
      result = true;
      return;
    }

    helper(_arr, callback);
  }

  helper(array, callback);

  return result;
}

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
