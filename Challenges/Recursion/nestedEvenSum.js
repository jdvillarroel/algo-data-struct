/**
 * Write a recursive function called nestedEvenSum. Return
 * the sum of all even numbers in an object which may contain nested objects.
 */

function isEven(number) {
  return number % 2 === 0;
}

function nestedEvenSum(obj, sum = 0) {
  /**
   * We need to iterate over all elements in the object and verify
   * if the are objects themselves. If so, we continue iterating over
   * their properties until we found a number. If the number is even
   * we add it to the total sum.
   */

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum = nestedEvenSum(obj[key], sum);
    } else if (typeof obj[key] === "number" && isEven(obj[key])) {
      sum += obj[key];
    } else {
      continue;
    }
  }

  return sum;
}

const obj1 = {
  a: 2,
  b: {
    ba: 1,
    bb: 6,
  },
  c: {
    ca: {
      cac: 3,
      cab: 19,
      cac: 22,
    },
  },
  d: "hello",
  e: {
    ea: "world",
    eb: 10,
  },
};

nestedEvenSum(obj1);
