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
   * the array is 1 then we capitalize it and concatenate the rest
   * of the characters of the array.
   */

  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }

  let result = capitalizeWords(array.slice(0, -1));

  /**
   * At this point, we went back one level into the stack, so the
   * array is one element longer. Then, we take the last element
   * and push it into the results array.
   */
  result.push(array[array.length - 1].toUpperCase());

  /**
   * Return the current array back one level into the stack until
   * we return from all the recursive calls.
   */
  return result;
}

let words = ["i", "am", "learning", "recursion"];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
