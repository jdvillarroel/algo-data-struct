/**
 * Implements the pivot helper function for the quick sort algorithm.
 */

function pivot(_array, start, end) {
  let pivotIdx = start;
  let pivotValue = _array[pivotIdx];

  function swap(a, idx1, idx2) {
    if (idx1 === idx2) return a;
    [a[idx1], a[idx2]] = [a[idx2], a[idx1]];
  }

  for (let i = start + 1; i <= end; i++) {
    if (_array[i] < pivotValue) {
      pivotIdx++;
      swap(_array, i, pivotIdx);
    }
  }
  swap(_array, start, pivotIdx);
  console.log(_array);

  return pivotIdx;
}

const testA = [3, 0, 1, 11, -2, 31, 20];

pivot(testA, 0, testA.length - 1);
