/**
 * Implement helper function to get any digit of a number. This will be used to
 * implement the radix sort algortihm.
 */

function getDigit(num, pos) {
  let tempNum = num;

  for (let i = 1; i < pos; i++) {
    tempNum = Math.floor(tempNum / 10);
  }

  return tempNum % 10;
}

getDigit(12345, 3);
