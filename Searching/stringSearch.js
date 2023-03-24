/**
 * Write a function that accepts two strings. The function will search
 * how many times the second string appears in the first string.
 */

function stringSearch(str1, str2) {
  // Edge cases.
  if (str1.length < str2.length) return 0;

  // Variables.
  let matchCounter = 0;
  let ptr1 = 0;
  let ptr2 = 0;
  let isMAtch = true;

  /**
   * I loop overs the first string comparing the first element of both strings.
   * I don't loop the first string over the entire length but the difference
   * between both strings.
   * If they are equal I move to the next element on both, if not I move forward
   * only on the first string. I assume I have a match until I prove I don't have.
   * So for every loop over the second string I start with the isMAtch variable
   * as true.
   */
  while (ptr1 <= str1.length - str2.length) {
    isMatch = true;

    while (ptr2 <= str2.length - 1) {
      if (str1[ptr1] === str2[ptr2]) {
        ptr1++;
        ptr2++;
      } else {
        isMatch = false;
        ptr1++;
        break;
      }
    }
    if (isMatch) {
      matchCounter++;
      ptr2 = 0;
      ptr1++;
    }
  }

  return matchCounter;
}

// "Hello jdvillarroel" length -> 18
//                 "ll" length -> 2

const str1 = "Hello jdvillarroel";
const str2 = "ll";

stringSearch(str1, str2);
