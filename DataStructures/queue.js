/**
 * Implement a queue data structure.
 *
 * It should have two functions. One to add elements to the queue, and one
 * to remove elements from the queue.
 *
 * Follow the principle of first-in-first-out (FIFO).
 *
 * Use a linked list to implement the queue.
 */

class Node {
  constructor(_val) {
    this.val = _val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * To add elements I will do it at the end of the linked list.
   * To remove, I will do it from the beginning, so the first element that
   * was inserted gets removed first.
   */

  // *************** ADD ELEMENT TO THE QUEUE ***************** //

  enqueue(_val) {
    // Create the element to add.
    const newNode = new Node(_val);

    // Check if the list is empty.
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // Last element of the list point to the new element.
      this.last.next = newNode;

      // Update the last element to be the new node.
      this.last = newNode;
    }

    return ++this.size;
  }

  // *************** ADD ELEMENT TO THE QUEUE ***************** //

  // ************* REMOVE ELEMENT FROM THE QUEUE ************** //

  dequeue() {
    if (this.size === 0) return undefined;

    // I will remove always the first element of the list, which was the first
    // element added.
    const removedNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      // The node next to the first has to become the new first.
      this.first = removedNode.next;

      removedNode.next = null;
    }

    // Update the size of the queue.
    this.size--;

    return removedNode.val;
  }

  // ************* REMOVE ELEMENT FROM THE QUEUE ************** //
}
