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
];

const ht = new HashTable(10);

list.forEach((element) => {
  ht.set(element[0], element[1]);
});
