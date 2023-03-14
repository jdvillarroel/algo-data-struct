/**
 * Write a recursive function called reverse which accepts
 * a string and returns a new string in reverse.
 */

// ********* Non Recursive Method ************* //

// function reverse(str) {
//   let result = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }

//   return result;
// }

// ********* Recursive Method ************* //

function reverse(str) {
  if (str.length === 0) return "";

  /**
   * On every recursive call we concatenate the last element of the string
   * and make a recursive call passing a new string with the last element
   * removed until the string passed to the function is empty.
   */
  return str[str.length - 1].concat(reverse(str.substring(0, str.length - 1)));
}

reverse("try me!");
