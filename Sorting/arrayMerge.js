/**
 * Implements the function to merge to arrays. This will be used when
 * omplementing the merge sort algorithm.
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

const array1 = [2, 3, 6, 7];
const array2 = [0, 5, 9, 12, 17, 21];

merge(array1, array2);
