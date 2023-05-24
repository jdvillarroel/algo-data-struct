/**
 * Implement the maximum binary heap data structure.
 */

class maxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /**
   *
   * @param {any} _value  Value to be stored in the heap.
   * @returns List/array of values in the heap including the new added value.
   */
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

  removeMax() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();

    // Swap first and last elements.
    const max = this.values[0];
    this.values[0] = this.values[this.values.length - 1];

    // Save the element to bubble down.
    let element = this.values[0];

    // Remove element from the list.
    this.values.pop();

    // Variables to hold the nodes info.
    let idx = 0;
    let length = this.values.length;
    let leftIdx, rightIdx, left, right;
    let swap = idx;

    do {
      // Calculate the indexes for children.
      leftIdx = 2 * idx + 1;
      rightIdx = 2 * idx + 2;
      left = this.values[leftIdx];
      right = this.values[rightIdx];

      // Check if left child is greater and store its index to swap later.
      if (leftIdx < length) {
        if (left > element) {
          swap = leftIdx;
        }
      }

      // Check if right child is greater and store its index to swap later.
      if (rightIdx < length) {
        if (right > element && right > left) {
          swap = rightIdx;
        }
      }

      // Swap and update variables.
      if (swap !== 0) {
        this.values[idx] = this.values[swap];
        this.values[swap] = element;

        idx = swap;
        swap = 0;
      }
    } while (leftIdx < length && rightIdx < length);
  }
}

const list = [41, 39, 33, 18, 27, 12, 55];

const maxBHeap = new maxBinaryHeap();

list.forEach((value) => {
  maxBHeap.insert(value);
});
