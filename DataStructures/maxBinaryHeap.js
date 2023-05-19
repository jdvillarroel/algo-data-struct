/**
 * Implement the maximum binary heap data structure.
 */

class maxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(_value) {
    // Add the new inserted value at the end of the list of values.
    this.values.push(_value);

    /**
     * Now I have to find the new inserted value parent and compare
     * them to determine the max value. If new value is greater, I swap
     * the values. This process is repeated until I find the correct
     * position.
     */
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (idx > 0 && this.values[idx] > this.values[parentIdx]) {
      // Swap the values in the array (heap)
      [this.values[idx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[idx],
      ];

      // Update the new idx
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }

    return this.values;
  }
}

const list = [41, 39, 33, 18, 27, 12, 55];

const maxBHeap = new maxBinaryHeap();
