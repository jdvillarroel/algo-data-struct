/**
 * Write a function called isSubsequence which takes in two strings and checks
 * whether the characters in the first string form a subsequence of the characters
 * in the second string. In other words, the function should check whether the
 * characters in the first string appear somewhere in the second string, without
 * their order changing.

Examples:

    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
 */

/**
 * I will use a pointer for each of the arrays to compare wheter the elements
 * are equal. An auxiliary variable will track if the comparison is true or not.
 * If the characters compared are not equal, increment pointer 2 and pointer 1
 * remains on 0.
 * If the comparison is true, increment both pointers.
 * Repeat until one of the pointers reach the end of the respective string.
 * @param {*} str1
 * @param {*} str2
 * @returns
 */
function isSubsequence(str1, str2) {
  if (str1.length === 0 || str2.length === 0 || str1.length > str2.length)
    return false;

  // Declare pointers.
  let ptr1 = 0;
  let ptr2 = 0;
  let result = [];

  while (ptr1 < str1.length && ptr2 < str2.length) {
    if (str1[ptr1] === str2[ptr2]) {
      ptr2++;
      ptr1++;
      result.push(str1[ptr1]);
    } else {
      ptr2++;
    }
  }

  return result.length === str1.length;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
