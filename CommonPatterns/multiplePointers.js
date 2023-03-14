/**
 * This problem can be solve using multiple pointers. I will declare one pointer and
 * for the other one I will use the control variable of the for loop as a pointer.
 */

function countUniqueValues(_array) {
  if (_array.length === 0) return 0;

  // Create a variable to count the unique values in array.
  // If array is not empty we can assure that we have at least one unique value.
  let counter = 1;

  // Pointer to the init of the array.
  let p1 = 0;

  /**
   * If the values pointed by the two pointers are not equal, we can say we have an
   * unique value. So, we increment counter and set the lower pointer to the high
   * pointer (loop control  variable). The loop control variable (i) will increment
   * automatically, so there is no need for us top do it.
   *
   * After the array traverse finish, we return the counter variable.
   */
  for (let i = 1; i < _array.length; i++) {
    if (_array[p1] !== _array[i]) {
      counter++;
      p1 = i;
    }
  }

  return counter;
}

const a1 = [1, 2, 2, 2, 4, 5, 7, 7, 8, 9, 9, 9];
const a2 = [1, 1, 1, 1, 1, 1, 1, 1, 2];
const a3 = [];
const a4 = [-4, -1, -1, 0, 1];

console.log(countUniqueValues(a1));
console.log(countUniqueValues(a2));
console.log(countUniqueValues(a3));
console.log(countUniqueValues(a4));
