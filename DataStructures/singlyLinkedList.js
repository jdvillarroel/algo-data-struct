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

    /**
     * If list is empty, set head and tail to the new node. Otherwise,
     * make the tail to point to the new node, then make the new node
     * the new tail. Increment the length and return the new list.
     */
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // Remove the last element of the list.
  pop() {
    if (this.length === 0) return undefined;

    /**
     * If there's only one element set head and tail to null
     * and return the value of the head.
     */
    if (this.length === 1) {
      let temp = this.head.value;

      this.head = null;
      this.tail = null;
      this.length = 0;

      return temp;
    }

    /**
     * Traverse the list keeping record of the previous node. When we get to the end,
     * the next node of the previous is set to null (deleting the tail), and we make
     * it the new tail.
     */
    let current = this.head;
    let next = current.next;

    while (next.next) {
      current = current.next;
      next = next.next;
    }

    current.next = null;
    this.tail = current;
    this.length--;

    return next.value;
  }
}

let list = new sLinkedList();

list.push(0);
list.push(1);
list.push(2);
list.push(3);
