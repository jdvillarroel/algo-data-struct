/**
 * Given an array, find the largest sum of a determined number of digits.
 *
 */

function maxSubarraySum(_array, _digits) {
  // Edge cases.
  if (_array.length < _digits || _digits <= 0 || _array.length === 0)
    return null;

  let maxSum = 0;
  let tempSum = 0;

  // Add the first n digits in the array to get the inital window.
  for (let i = 0; i < _digits; i++) {
    maxSum += _array[i];
  }

  /**
   * Starting at the element afer the last index of the initial window,
   * I need to add that element to the sum and subtract the first
   * element of the window.
   */
  // Save supoused maxSum in tempSum to keep record of the initial window.
  tempSum = maxSum;
  let auxIndex = _digits;

  for (let j = 0; j < _array.length - _digits; j++) {
    tempSum = tempSum + _array[auxIndex] - _array[j];

    // Update the max sum.
    maxSum = Math.max(maxSum, tempSum);
    auxIndex++;
  }

  return maxSum;
}

const a1 = [1, 2, 5, 2, 8, 1, 5]; // 2->10 , 4->17
const a2 = [4, 2, 1, 6]; // 1->6
const a3 = [4, 2, 1, 6, 2]; // 4->13
const a4 = []; // null

console.log(maxSubarraySum(a1, 2));
console.log(maxSubarraySum(a1, 4));
console.log(maxSubarraySum(a2, 1));
console.log(maxSubarraySum(a3, 4));
console.log(maxSubarraySum(a4, 4));
