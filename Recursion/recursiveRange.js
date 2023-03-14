/**
 * Write a function called recursiveRange which accepts a number
 * and adds up all the numbers from 0 to the number passed to
 * the function
 */

function recursiveRange(number) {
  if (number === 0) return 0;

  return number + recursiveRange(number - 1);
}

console.log(recursiveRange(10));
console.log(recursiveRange(2));
console.log(recursiveRange(1));
console.log(recursiveRange(0));
console.log(recursiveRange(5));
