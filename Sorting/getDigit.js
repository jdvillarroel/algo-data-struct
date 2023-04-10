/**
 * Implement helper function to get any digit of a number. This will be used to
 * implement the radix sort algortihm.
 */

function getDigit(num, pos) {
  let div = Math.pow(10, pos);
  let tempNum = Math.floor(Math.abs(num) / div);

  return tempNum % 10;
}

getDigit(12345, 3);
