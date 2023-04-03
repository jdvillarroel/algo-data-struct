/**
 * Implement isertion sort algorithm given an array of
 * unsorted elements.
 */

function insertionSort(array) {
  function swap(_array, _idx1, _idx2) {
    [_array[_idx1], _array[_idx2]] = [_array[_idx2], _array[_idx1]];
  }
  /**
   * Insertion sort works sorting a portion of the array at time. We select
   * one element and inserted in its correct spot (at that point in time).
   * To do so, we select the first element as the soretd portion and iterate
   * over the array starting from the next element until we reach the last
   * minus one.
   *
   * A second loop is done to compare the current element to all the previous
   * sorted elements. We insert the current element into its correct position.
   */

  // for (let idx1 = 1; idx1 < array.length; idx1++) {
  //   let currentValue = array[idx1];

  //   for (let idx2 = idx1 - 1; idx2 >= 0; idx2--) {
  //     if (currentValue < array[idx2]) {
  //       swap(array, array.indexOf(currentValue), idx2);
  //     } else {
  //       break;
  //     }
  //   }
  // }

  /**
   * This is an improvement over the first solution since we are not using
   * an extra variable to keep track of the current value we are comparing
   * and there is no need to search for the index of the current value when
   * swapping variables.
   */
  for (let idx1 = 1; idx1 < array.length; idx1++) {
    for (let idx2 = idx1; idx2 > 0; idx2--) {
      if (array[idx2] < array[idx2 - 1]) {
        swap(array, idx2, idx2 - 1);
      } else {
        break;
      }
    }
  }
  return array;
}

// [3, -2, 0, 12, 22, 4, 11] -> idx1 = 1
// [-2, 3, 0, 12, 22, 4, 11] -> idx1 = 2
// [-2, 0, 3, 12, 22, 4, 11]
// [-2, 0, 3, 12, 22, 4, 11] -> idx1 = 3
// [-2, 0, 3, 12, 22, 4, 11] -> idx1 = 4
// [-2, 0, 3, 12, 22, 4, 11] -> idx1 = 5
// [-2, 0, 3, 12, 4, 22, 11]
// [-2, 0, 3, 4, 12, 22, 11]
// [-2, 0, 3, 4, 12, 22, 11] -> idx1 = 6
// [-2, 0, 3, 4, 12, 11, 22]
// [-2, 0, 3, 4, 11, 12, 22]

const testA = [3, -2, 0, 12, 22, 4, 11];

insertionSort(testA);
