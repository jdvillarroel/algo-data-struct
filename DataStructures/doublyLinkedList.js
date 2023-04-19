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

  // ******************* Push element from list **************** //

  // ******************* Pop element from list **************** //

  pop() {
    if (this.length === 0) return undefined;

    // Create a temp node to return the node we'll remove.
    let retNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.tail.prev;

      // Break the link between the tail and previous node.
      prev.next = null;
      retNode.prev = null;

      // Update the previous node to become the tail.
      this.tail = prev;
    }
    this.length--;

    return retNode;
  }

  // ******************* Pop element from list **************** //

  // ******************* Shift element from list **************** //

  shift() {
    if (this.length === 0) return undefined;

    let retNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.next;
      retNode.next = null;
      newHead.prev = null;
      this.head = newHead;
    }

    this.length--;

    retNode.next = null;

    return retNode;
  }

  // ******************* Shift element from list **************** //

  // ******************* Unshift element from list **************** //

  unshift(_value) {
    // Create the new node.
    let newNode = new Node(_value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // New node points to current head.
      newNode.next = this.head;

      // Current head points back to new node.
      this.head.prev = newNode;

      // Set new node as head.
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  // ******************* Unshift element from list **************** //

  // ******************* Get element from list **************** //

  get(_idx) {
    if (_idx < 0 || _idx > this.length - 1) return null;

    let node = null;
    let counter = null;
    let middle = Math.floor(this.length / 2);

    // If index is less than the middle index search from head to middle.
    // if not, search from tail to middle.
    if (_idx < middle) {
      counter = 0;
      node = this.head;

      while (counter != _idx) {
        node = node.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      node = this.tail;

      while (counter != _idx) {
        node = node.prev;
        counter--;
      }
    }

    // // Reset previous and next properties, so I don't return a reference to the entire list.
    // node.prev = null;
    // node.next = null;

    return node;
  }

  // ******************* Get element from list **************** //
}

let list = new dLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
