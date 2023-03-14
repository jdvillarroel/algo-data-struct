/* 
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

function sameFrequency(_int1, _int2) {
  if (_int1 === _int2) return true;

  // Create an object to hold the values (hashMap).
  let int1ToString = _int1.toString();
  let int2ToString = _int2.toString();

  const lookup = {};

  // Count every digit in the number.
  for (let letter of int1ToString) {
    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  // Compare second number with the lookup table.
  for (let letter of int2ToString) {
    if (lookup[letter]) {
      lookup[letter] = lookup[letter] - 1;
    } else {
      return false;
    }
  }

  return int1ToString.length === int2ToString.length;
}
