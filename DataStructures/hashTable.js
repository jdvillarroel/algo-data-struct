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
}
