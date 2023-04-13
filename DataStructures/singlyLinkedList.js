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

  // Remove the first element pf the list.
  shift() {
    if (this.length === 0) return undefined;

    if (this.length === 1) {
      let ret = this.head.value;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return ret;
    }

    let tempNode = this.head;

    this.head = this.head.next;
    tempNode.next = null;
    this.length--;

    return tempNode.value;
  }

  // Add element at the beginning of the list.
  unshift(_value) {
    if (this.length === 0) {
      return this.push(_value);
    }

    let newNode = new Node(_value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  // Get nth element of the list.
  get(_idx) {
    // If list is empty or index is out of bounds return null.
    if (_idx < 0 || _idx > this.length - 1) return null;

    let counter = 0;
    let tempNode = this.head;

    while (counter < _idx) {
      tempNode = tempNode.next;
      counter++;
    }

    return tempNode;
  }

  /**
   * Set a new value at a specific location in the list. The function will
   * search for the value. If it's not found return false. If found update
   * the value and return true.
   * @param {Number} _value   Value to update node.
   * @param {Number} _idx     Position of the node to update.
   */
  set(_idx, _value) {
    let node = this.get(_idx);

    if (node) {
      node.value = _value;
      return true;
    }

    return false;
  }

  // Insert an element at a specific position/location.
  insert(_idx, _value) {
    if (_idx === 0) return !!this.unshift(_value);

    if (_idx === this.length) return !!this.push(_value);

    let prevNode = this.get(_idx - 1);

    /**
     * If the get does not return a valid node, it means index is out of bounds.
     * So, we return false.
     */
    if (!prevNode) return false;

    let newNode = new Node(_value);

    // Make previous node to point to the new node and the new node
    // points to the node pointed previously by the previous node.
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;

    return true;
  }

  // Remove an element at a specific position.
  remove(_idx) {
    if (_idx < 0 || _idx > this.length - 1) return false;
    if (_idx === 0) return !!this.shift();
    if (_idx === this.length - 1) return !!this.pop();

    let prevNode = this.get(_idx - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;

    return removed;
  }
}

let list = new sLinkedList();

list.push("This");
list.push("is");
list.push("the");
list.push("data");
