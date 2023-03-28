/**
 * Implement the bubble sort algorithm.
 */
/**
 * Since in every iteration of the bubble sort algorithm the biggest(or smallest)
 * element is placed in its correct position, it is not necesary to include it in
 * the next iteration. The outer loop help to do this by reducing by one in every
 * iteration.
 *
 * The inner loop compares the current element with the next element. If the current
 * is greater (or smaller) the elements are swapped and we point to the next
 * element. This is done until the end of the array minus one since we look ahead
 * one element of the current, so there is no point in selecting the last element
 * of the array.
 *
 * After looping through the entire array, we return it (its sorted at the end).
 */

function bubbleSort(array, isAscending = true) {
  if (array.length === 0) return [];

  function swap(array, idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  }

  for (let i = array.length - 1; i > 0; i--) {
    /**
     * To avoid making unnecesary scans over the array. We'll use an variable that tracks
     * if we have done any swaps. If we haven't done any swaps in a complete scan, it means
     * thata portion of the array is already sorted.
     */
    let didSwap = false;

    for (let j = 0; j < i; j++) {
      if (isAscending) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
          didSwap = true;
        }
      } else {
        if (array[j] < array[j + 1]) {
          swap(array, j, j + 1);
          didSwap = true;
        }
      }
    }

    if (!didSwap) break;
  }

  return array;
}

const testA = [23, 4, 5, 1, 12, 17, 22, 33, 38, -4, 0];

bubbleSort(testA, true);
