/**
 * Implement the merge sort algorithm given an unsorted array.
 */

/**
 *
 * @param {Array} a1  Sorted array number 1 to merge.
 * @param {Array} a2  Sorted array number 2 to merge.
 * @returns Sorted array resulted by mergin a1 and a2.
 */
function merge(a1, a2) {
  let mergedArray = [];
  let ptr1 = 0;
  let ptr2 = 0;

  /**
   * We'll break from the first loop once one we have gone entirely over
   * one of the arrays. But we still need to push into the merged array
   * the rest of the values of the other array. So, we check which array
   * is left and push the elements left.
   */

  while (ptr1 < a1.length && ptr2 < a2.length) {
    if (a1[ptr1] <= a2[ptr2]) {
      mergedArray.push(a1[ptr1]);
      ptr1++;
    } else {
      mergedArray.push(a2[ptr2]);
      ptr2++;
    }
  }

  /**
   * If array 1 is done, we push array 2 elements and vice-versa.
   */
  if (ptr1 === a1.length) {
    while (ptr2 < a2.length) {
      mergedArray.push(a2[ptr2]);
      ptr2++;
    }
  } else {
    while (ptr1 < a1.length) {
      mergedArray.push(a1[ptr1]);
      ptr1++;
    }
  }

  return mergedArray;
}

/**
 * Merge sort uses recursion to divide the array by half on each iteration.
 * When the array length equals to 1 it returns (base case).
 *
 * @param {Array} array   Unsorted array to be sorted by the algorithm.
 */
function mergeSort(array) {
  // Base case.
  if (array.length <= 1) return array;

  // Create middle point to divede the array.
  let middle = Math.floor(array.length / 2);

  // Create the left array.
  let leftArray = mergeSort(array.slice(0, middle));

  // Create the right array.
  let rightArray = mergeSort(array.slice(middle));

  /**
   * Once both halves are gotten, we merge the two arrays. Since they are sorted
   * (since we are starting from an array of length 1, so they are sorted.)
   */
  return merge(leftArray, rightArray);
}

const testA = [5, -2, 0, 21];

mergeSort(testA);
