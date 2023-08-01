/**
 * Write a recursive function to calculate the nth element of the
 * Fibonacci's series.
 */

"use strict";

function fibonacci(nth) {
  const fib = {};

  function helper(_nth) {
    // Base case of the recursive call.
    if (_nth <= 2) return 1;

    if (!fib[_nth - 1]) fib[_nth - 1] = helper(_nth - 1);
    if (!fib[_nth - 2]) fib[_nth - 2] = helper(_nth - 2);

    return fib[_nth - 1] + fib[_nth - 2];
  }

  helper(nth);
}
