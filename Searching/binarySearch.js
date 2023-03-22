/**
 * Create a function that implements binary search. The function will
 * accept a sorted array and a value. If the value is not found
 * return -1.
 */

function binarySearch(array, value) {
  if (array.length === 0) return -1;

  // Ctreate variables to hold pointers.
  let left = 0;
  let right = array.length - 1;

  // Iterate over the array as long as left is less than right.
  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left;

    if (array[mid] > value) {
      right = mid - 1;
    } else if (array[mid] < value) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

const test = [2, 4, 5, 6, 8, 9, 12, 24, 27, 35];

binarySearch(test, 27);
