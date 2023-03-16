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

///////////////////// RECURSIVE SOLUTION ////////////////

// function capitalizeWords(array) {
//   if (array.length === 0) return [];

//   /**
//    * For every element of the array we check if the element is a
//    * string. If so, we make a recursive call until the length of
//    * the array is 1 then we capitalize it and concatenate the rest
//    * of the characters of the array.
//    */

//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }

//   let result = capitalizeWords(array.slice(0, -1));

//   /**
//    * At this point, we went back one level into the stack, so the
//    * array is one element longer. Then, we take the last element
//    * and push it into the results array.
//    */
//   result.push(array[array.length - 1].toUpperCase());

//   /**
//    * Return the current array back one level into the stack until
//    * we return from all the recursive calls.
//    */
//   return result;
// }

///////////////////// RECURSIVE SOLUTION ////////////////

/////////// ALTERNATIVE RECURSIVE SOLUTION /////////////

/**
 * For this recursive solution I used the helper function patern.
 * The helper function is a recursive function were I take the first
 * element of the array and capitalized then push it into the results
 * array(which I'll return as solution). The recursive call is made
 * passing the array with the first element removed. Even though it
 * works, it's probably less efficient since I remove elements
 * in front of the array instead of the last element.
 * @param {*} array
 * @returns
 */
function capitalizeWords(array) {
  if (array.length === 0) return array;

  let result = [];

  function helper(_array) {
    if (_array.length === 0) return;

    result.push(_array[0].toUpperCase());

    helper(_array.slice(1));
  }

  helper(array);

  return result;
}

/////////// ALTERNATIVE RECURSIVE SOLUTION /////////////

let words = ["i", "am", "learning", "recursion"];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
