/**
 * Implement helper function for radix sort algorithm. This function counts
 * the number of digits that any given number contains.
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
