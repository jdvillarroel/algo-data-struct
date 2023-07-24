/**
 * Implement a hash table data structure from scratch. JS already has hash table
 * data structure bilt in in the language, but as a practice, I'll buld one.
 */
"use strict";

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // Hash function.
  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  /**
   * Save the key value pair into the internal array.
   * @param {String} key
   * @param {any} value
   * @returns
   */
  set(key, value) {
    // First I need to hash the key to obtain an index to store in the array.
    let hashIdx = this._hash(key);

    // If the key already exist in the hash table, I won;t add it again.
    if (this.get(key)) return;

    /**
     * Verify is there is something already saved at that index. If so, push the new value.
     * If not, create a new array that contains the key and the value and push it to the
     * keyMap array.
     */
    if (this.keyMap[hashIdx] === undefined) {
      this.keyMap[hashIdx] = new Array([key, value]);
    } else {
      this.keyMap[hashIdx].push([key, value]);
    }
  }

  /**
   * Retrieves the value corresponding to the key entered.
   * @param {String} key
   * @returns Undefined if the key is not in the hash table. The value if the key
   * is found in the table.
   */
  get(key) {
    // Hash the key to retrieve the index where the value is stored in the hash table.
    const hashIdx = this._hash(key);

    /**
     * I need to search in the keyMap array if the position at the hashed index is empty
     * or not. If it's empty just return undefined. If there is something, it must be an array
     * with all the key-value pairs added previously. I need to loop over that nested array
     * to fetch the value requested. If the key is not stored just return undefined.
     */
    if (this.keyMap[hashIdx] === undefined) return undefined;

    let value;

    this.keyMap[hashIdx].forEach((element) => {
      if (element[0] === key) value = element[1];
    });

    return value;
  }

  /**
   * Loops over the hash table (array) and add all the keys into an
   * array. Since all the keys are unique there is no need to check for
   * duplicates.
   * @returns An array containing all the keys in the hash table.
   */
  keys() {
    if (this.keyMap.length === 0) return [];

    let keys = [];

    this.keyMap.forEach((tablePosition) => {
      tablePosition.forEach((pair) => {
        if (pair) keys.push(pair[0]);
      });
    });

    return keys;
  }

  /**
   * Loops over each sub-array of each element of the main array. The initial
   * values array is converted to a set to remove duplicate values. Then, is
   * converted back to an array to be returned as the result.
   * @returns An array containing unique values of all the key-value pairs
   * contained in the hash table.
   */
  values() {
    if (this.keyMap.length === 0) return [];

    let values = [];

    this.keyMap.forEach((tablePosition) => {
      tablePosition.forEach((pair) => {
        if (pair) values.push(pair[1]);
      });
    });

    const valuesSet = Set(values);

    return [...valuesSet];
  }
}

// EXAMPLE
const list = [
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["nine", 9],
  ["ten", 10],
  ["eigth", 8],
];

const ht = new HashTable(10);

list.forEach((element) => {
  ht.set(element[0], element[1]);
});
