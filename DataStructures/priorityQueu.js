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
}
