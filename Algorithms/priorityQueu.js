/**
 * Implementation of a priority queue data structure.
 */

class Item {
  constructor(_value, _priority) {
    this.value = _value;
    this.priority = _priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  /**
   *
   * @param {object} _item Object tht contains a value and a priority.
   * @returns A list of objects in the queue.
   */
  enqueue(_item) {
    // Create a new item(node) based on the parameters passed in.
    const item = new Item(_item.value, _item.priority);

    // Insert item in the queue based on the priority. Initially I'll add to the end.
    this.queue.push(item);

    /**
     * Now I have to find the new inserted item parent and compare their priority
     * to determine the max priority. If new item's priority is greater, I swap
     * the values. This process is repeated until I find the correct
     * position. (Grater priority means lower magnitud)
     */

    // Set variables to track the index of the added item and its parent.
    let idx = this.queue.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (
      idx > 0 &&
      this.queue[idx].priority < this.queue[parentIdx].priority
    ) {
      // Swap the values since the priority is higher.
      [this.queue[idx], this.queue[parentIdx]] = [
        this.queue[parentIdx],
        this.queue[idx],
      ];

      // Update indexes.
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }

    return this.queue;
  }

  dequeue() {
    // Check if the queue is empty or just one element.
    if (this.queue.length === 0) return undefined;
    if (this.queue.length === 1) return this.queue.pop();

    let lastIdx = this.queue.length - 1;

    /**
     * Swap the first (highest priority) and last elements in the list. Then remove
     * the last element which will be the highest priority element in the queue. We do this
     * since is more efficient to remove from the end of the array. Then the first element
     * in the queue needs to be bubble down to its correct position.
     */
    [this.queue[0], this.queue[lastIdx]] = [this.queue[lastIdx], this.queue[0]];

    // Remove highest priority element from queue.
    const removed = this.queue.pop();
    let lenght = this.queue.length;

    if (lenght === 1) return removed;

    // Save the element to bubble down and other usefull variables.
    const element = this.queue[0];
    let idx = 0;
    let leftIdx = 2 * idx + 1;
    let rightIdx = 2 * idx + 2;
    let left = this.queue[leftIdx];
    let right = this.queue[rightIdx];
    let idxToSwap = 0;
    let swap = false;

    do {
      /**
       * Now I need to check if the element has lower priority (higher magnitud) than the children
       * and which of the children have the higher priority to swap them.
       */
      if (left.priority < element.priority) {
        idxToSwap = leftIdx;
        swap = true;
      }

      if (rightIdx < lenght) {
        if (
          right.priority < element.priority &&
          right.priority < left.priority
        ) {
          idxToSwap = rightIdx;
          swap = true;
        }
      }

      // Swap the items.
      if (swap) {
        this.queue[idx] = this.queue[idxToSwap];
        this.queue[idxToSwap] = element;

        // Update variables.
        idx = idxToSwap;
        swap = false;
        leftIdx = 2 * idx + 1;
        rightIdx = 2 * idx + 2;
        left = this.queue[leftIdx];
        right = this.queue[rightIdx];
      } else {
        break;
      }
    } while (leftIdx < lenght && rightIdx < lenght);

    return removed;
  }
}

module.export(PriorityQueue);
