/**
 * Implement a singly linked list.
 */

// Implement the node class.
class Node {
  constructor(_value) {
    this.value = _value;
    this.next = null;
  }
}

// Implement linkedlist class.
class sLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add element at the end of the list.
  push(_value) {
    // Create new node to add.
    let newNode = new Node(_value);

    // If list is empty, set head and tail to the new node.
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;

      this.length++;

      return;
    }

    if (this.length === 1) {
      this.head.next = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}
