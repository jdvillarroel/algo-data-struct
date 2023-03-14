/**
 * Write a recursive function called capitalizeFirst. Given an array
 * of strings, capitalize the first letter of each string in the array.
 */

///////////////////// No Recursive Solution ////////////////////////////

// function capitalizeFirst(array) {
//   if (array.length === 0) return [];

//   let capArray = [];

//   for (let str of array) {
//     capArray.push(str.charAt(0).toUpperCase().concat(str.substring(1)));
//   }

//   return capArray;
// }

//////////////////////// Recursive Solution ////////////////////////////

function capitalizeFirst(array) {
  if (array.length === 0) return [];
  if (array.length === 1)
    return [array[0].charAt(0).toUpperCase().concat(array[0].substring(1))];

  let result = capitalizeFirst(array.slice(0, -1));
  result.push(
    array[array.length - 1]
      .charAt(0)
      .toUpperCase()
      .concat(array[array.length - 1].substring(1))
  );
  return result;
}

capitalizeFirst(["car", "taco", "banana"]);
