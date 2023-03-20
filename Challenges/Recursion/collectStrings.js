/**
 * Write a function called collectStrings which accepts an object
 * and returns an array of all the values in the object that have
 * a typeof string
 */

function collectStrings(obj) {
  /**
   * Iterate over all the propeerties of the object and verify which
   * are strings. If so, add them to an array and return it.
   *
   * I'll use the helper function method. Create an empty array that
   * will eventually contain the strings found inside the object.
   */

  const strings = [];

  function helper(_obj) {
    for (let key in _obj) {
      if (typeof _obj[key] === "string") {
        strings.push(_obj[key]);
      } else if (typeof _obj[key] === "object" && !Array.isArray(_obj[key])) {
        helper(_obj[key]);
      }
    }
  }

  helper(obj);

  return strings;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obj); // ["foo", "bar", "baz"])
