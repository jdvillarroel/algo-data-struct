/**
 * Implement a stack.
 *
 * It should have two functions. One to add elements to the stack, and one
 * to remove elements from the stack.
 *
 * Follow the principle of last-in-first-out (LIFO).
 *
 * Use a linked list to implement the stack.
 */

class Node {
  constructor(_val) {
    this.val = _val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * To add and remove elements I'll do it do at the beginning of
   * the linked list so we have constant time complexity for adding
   * and removing elements.
   */

  // *************** ADD ELEMENT TO THE STACK ***************** //

  /**
   * Adds a new element to the beginning of the stack.
   *
   * @param {any} _val Value to be stored in the stack element.
   * @returns The size of the stack.
   */
  add(_val) {
    // Create the new node.
    const newNode = new Node(_val);

    // Check if stack is empty.
    if (this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      // New node points to the current first element in the stack.
      newNode.next = this.first;

      // Update the first element to the stack to be the new node.
      this.first = newNode;
    }

    // Update the size of the stack.
    this.size++;

    return this.size;
  }

  // *************** ADD ELEMENT TO THE STACK ***************** //

  // ************* REMOVEW ELEMENT TO THE STACK *************** //

  /**
   *
   * @returns The value stored in the removed node. If list is empty returns false.
   */
  remove() {
    // If stack is empty return false.
    if (this.size === 0) return false;

    // The first node will always be the one to be removed.
    const removedNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      // The second node becomes the new first node.
      this.first = removedNode.next;

      // Delete the link between the removed node and the list.
      removedNode.next = null;
    }

    // Update the size of the stack.
    this.size--;

    return removedNode.value;
  }

  // ************* REMOVEW ELEMENT TO THE STACK *************** //
}
