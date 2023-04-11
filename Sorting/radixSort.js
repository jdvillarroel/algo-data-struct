/**
 * Implementation of the radix sort algorithm.
 */

// *************** Helper methods ************** //
function getDigit(num, pos) {
  let div = Math.pow(10, pos);
  let tempNum = Math.floor(Math.abs(num) / div);

  return tempNum % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  if (num === null) return -1;

  let tempNum = num;
  let digits = 0;

  while (tempNum % 10 !== 0) {
    digits++;
    tempNum = Math.floor(Math.abs(tempNum) / 10);
  }

  return digits;
}

function mostDigits(array) {
  let maxDigits = 0;

  array.forEach((num) => {
    let digits = digitCount(num);
    maxDigits = Math.max(maxDigits, digits);
  });

  return maxDigits;
}

// *************** Helper methods ************** //

function radixSort(array) {
  let maxDigits = 0;

  // Get the maximum number of digits of the numbers in the array.
  maxDigits = mostDigits(array);

  // Loop maxDigit times over the array to place the number in the corresponding bucket.
  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({ length: 10 }, (x) => []);

    // Place numbers in buckets.
    array.forEach((num) => {
      let digit = getDigit(num, i);
      buckets[digit].push(num);
    });

    // Put numbers back in array.
    array = buckets.flat();
  }

  return array;
}
