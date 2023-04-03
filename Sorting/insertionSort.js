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

  for (let idx1 = 1; idx1 < array.length - 1; idx1++) {
    for (let idx2 = idx1; idx2 >= 0; idx2--) {}
  }
  return;
}

// [3, -2, 0, 12, 22, 4, 11]

const testA = [3, -2, 0, 12, 22, 4, 11];

insertionSort();
