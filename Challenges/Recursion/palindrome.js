/**
 * Write a recursive function called isPalindrome which
 * returns true if the string passed to it is a palindrome
 * (reads the same forward and backward). Otherwise it
 * returns false.
 */
function isPalindrome(str) {
  let rev = "";

  function reverse(_str) {
    if (_str.length === 0) return "";

    /**
     * On every recursive call we concatenate the last element of the string
     * and make a recursive call passing a new string with the last element
     * removed until the string passed to the function is empty.
     */
    return _str[_str.length - 1].concat(
      reverse(_str.substring(0, _str.length - 1))
    );
  }

  // Reverse the original string by calling the recursive function.
  rev = reverse(str);

  return str === rev;
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
