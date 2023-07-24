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
  }
}
