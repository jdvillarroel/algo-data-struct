/**
 * Implement selection sort algorithm given an unsorted array of values.
 */

function selectionSort(array) {
  if (array.length === 0) return [];

  function swap(_array, idx1, idx2) {
    [_array[idx1], _array[idx2]] = [_array[idx2], _array[idx1]];
  }

  /**
   * Loop over the entire array and for each element in the array, create
   * another loop that will find the minimum value in the array. After
   * locating the minimum, I'll swap the current element with the minimum
   * value located.
   */
  for (let ptr = 0; ptr <= array.length - 2; ptr++) {
    let unsortedIdx = ptr;
    let currentMinIdx = ptr;

    for (let i = ptr + 1; i <= array.length - 1; i++) {
      if (array[i] < array[currentMinIdx]) currentMinIdx = i;
    }

    // Compare minimumfound with current element to determine if a swap is
    // required.
    if (currentMinIdx !== ptr && array[currentMinIdx] < array[ptr])
      swap(array, currentMinIdx, ptr);
  }
  return array;
}

// [2, 7, 1, 12, 5, 9]
// [1, 7, 2, 12, 5, 9]
// [1, 2, 7, 12, 5, 9]
// [1, 2, 5, 12, 7, 9]
// [1, 2, 5, 7, 12, 9]
// [1, 2, 5, 7, 9, 12]

const testA = [2, 7, 1, 12, 5, 9];

selectionSort(testA);
