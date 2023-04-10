/**
 * Given a list of numbers, returns the largest number of digits for any
 * of the numbers on that list. This function will be used in the radix
 * sort algorithm implementation. This function uses the previous helper
 * method, digitCount.
 */

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

// [395, -2, 10, 1944, 9876543]

let testA = [395, -2, 10, 1944, 9876543];

mostDigits(testA);
