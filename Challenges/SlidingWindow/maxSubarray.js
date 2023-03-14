/**
 * Given an array of integers and a number, write a function called
 * maxSubarraySum, which finds the maximum sum of a subarray with
 * the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the
original array. In the first example below, [100, 200, 300] is a
subarray of the original array, but [100, 300] is not.

    maxSubarraySum([100,200,300,400], 2) // 700
    maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
    maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
    maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
    maxSubarraySum([2,3], 3) // null

Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
 */
function maxSubarraySum(array, num) {
  if (array.length < num || num === 0 || array.length === 0) return null;

  // Variables
  let maxSum = -Infinity;
  let tempSum = 0;

  // Find the sum of the first num elements to create the initial window.
  // Treat it as the maxSum to start.
  for (let i = 0; i < num; i++) {
    tempSum += array[i];
  }
  maxSum = Math.max(tempSum, maxSum);

  // Slide the window one element at a time adding the next element and
  // subtracting the first element of the window. Then compare to find the maxSum.
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum + array[i] - array[i - num];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
