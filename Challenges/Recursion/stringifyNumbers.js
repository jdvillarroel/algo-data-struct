/**
 * Write a function called stringifyNumbers which takes in
 * an object and finds all of the values which are numbers
 * and converts them to strings. Recursion would be a great
 * way to solve this!
 *
 * It should return the same object with all number values
 * as strings.
 */

function stringifyNumbers(obj) {
  const _obj = {};

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      _obj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      _obj[key] = stringifyNumbers(obj[key]);
    } else {
      _obj[key] = obj[key];
    }
  }

  return _obj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

stringifyNumbers(obj);

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
