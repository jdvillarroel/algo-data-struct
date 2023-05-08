/**
 * Implement a binary search tree.
 */

class Node {
  constructor(_value) {
    this.value = _value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // **************** INSERT NODE TO THE BINARY SEARCH TREE *************** //

  insert(_value) {
    // Create the new node to insert.
    const newNode = new Node(_value);

    if (!this.root) {
      this.root = newNode;
      return true;
    }

    function helper(node) {
      if (newNode.value <= node.value) {
        // Insert left.
        if (node.left !== null) {
          helper(node.left);
        } else {
          node.left = newNode;
        }
      } else {
        // Insert right.
        if (node.right !== null) {
          helper(node.right);
        } else {
          node.right = newNode;
        }
      }
    }

    helper(this.root);

    return true;
  }

  // **************** INSERT NODE TO THE BINARY SEARCH TREE *************** //
}

const l = [4, 7, 0, 1, 5];

const bst = new BinarySearchTree();

l.forEach((value) => {
  bst.insert(value);
});
