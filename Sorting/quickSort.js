/**
 * Implementation of the quickSort algorithm.
 */

function swap(_array, idx1, idx2) {
  if (idx1 === idx2) return array;

  [_array[idx1], _array[idx2]] = [_array[idx2], _array[idx1]];
}

function pivot(_array, _start, _end) {
  let pivotIdx = _start;
  let pivotValue = _array[pivotIdx];

  function swap(a, idx1, idx2) {
    if (idx1 === idx2) return a;
    [a[idx1], a[idx2]] = [a[idx2], a[idx1]];
  }

  for (let i = _start + 1; i <= _end; i++) {
    if (_array[i] < pivotValue) {
      pivotIdx++;
      swap(_array, i, pivotIdx);
    }
  }
  swap(_array, _start, pivotIdx);
  console.log(_array);

  return pivotIdx;
}

function quickSort(array, left = 0, right = array.length - 1) {
  // Base case for recursive calls.
  if (left < right) {
    let pivotIndex = pivot(array, left, right);

    // Resolve left side of pivot.
    quickSort(array, left, pivotIndex - 1);

    // Resolve right side of the pivot.
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
}
//  p  s
// [4, 1, 9, 2, 15, 3]

const testA = [4, 1, 9, 2, 15, 3];

quickSort(testA);
