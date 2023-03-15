/**
 * Write a recursive function called capitalizeWords. Given
 * an array of words, return a new array containing each word
 * capitalized.
 */

///////////////////// Non recursive way /////////////////

// function capitalizeWords(array) {
//   if (array.length === 0) return array;

//   const capArray = [];

//   for (let str of array) {
//     capArray.push(str.toUpperCase());
//   }

//   return capArray;
// }

/////////////////////////////////////////////////////////

function capitalizeWords(array) {
  if (array.length === 0) return [];

  /**
   * For every element of the array we check if the element is a
   * string. If so, we make a recursive call until the length of
   * the string is 1 then we capitalize it and concatenate the rest
   * of the characters of the string.
   */

  if (array.length() === 1) {
    return array[array.length - 1].toUpperCase();
  } else {
  }
}

let words = ["i", "am", "learning", "recursion"];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
