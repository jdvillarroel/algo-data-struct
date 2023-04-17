/**
 * Implement the doubly linked list data structure.
 */

class Node {
  constructor(_value) {
    this.value = _value;
    this.prev = null;
    this.next = null;
  }
}

class dLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // ******************* Push element to list **************** //

  push(_value) {
    // Create node to add to list.
    let newNode = new Node(_value);

    // If list is empty head and tail are the same node.
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } else {
      // Current tail points to new node.
      this.tail.next = newNode;

      // New node (now last node) points to previous node ( old tail).
      newNode.prev = this.tail;

      // New node becomes the tail.
      this.tail = newNode;
      this.length++;
    }

    return this;
  }

  // ******************* Push element to list **************** //
}

let dList = new dLinkedList();

dList.push(1);
dList.push(2);
dList.push(3);
dList.push(4);
