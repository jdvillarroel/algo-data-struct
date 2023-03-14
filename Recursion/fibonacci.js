/**
 * Write a recursive function called fib which accepts a number and
 * returns the nth number in the Fibonacci sequence. Recall that
 * the Fibonacci sequence is the sequence of whole numbers
 * 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every
 * number thereafter is equal to the sum of the previous two numbers.
 */
function fib(nth) {
  if (nth === 0) return null;
  if (nth === 1 || nth === 2) return 1;

  return fib(nth - 1) + fib(nth - 2);
}

fib(6);
