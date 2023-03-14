/**
 * Write a function called findLongestSubstring, which accepts a string
 * and returns the length of the longest substring with all distinct
 * characters.

    findLongestSubstring('') // 0
    findLongestSubstring('rithmschool') // 7
    findLongestSubstring('thisisawesome') // 6
    findLongestSubstring('thecatinthehat') // 7
    findLongestSubstring('bbbbbb') // 1
    findLongestSubstring('longestsubstring') // 8
    findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
 */

function findLongestSubstring(str) {
  if (str.length === 0) return 0;

  let subStringCounter = new Map();
  let longest = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const currentChar = str.charAt(i);

    if (
      subStringCounter.has(currentChar) &&
      subStringCounter.get(currentChar) >= start
    ) {
      // Update start of the substring.
      start = subStringCounter.get(currentChar) + 1;
    }
    // Add char to hashmap tp leep track of found characters.
    subStringCounter.set(currentChar, i);

    // Get the max str length.
    longest = Math.max(longest, i - start + 1);
  }

  return longest;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
