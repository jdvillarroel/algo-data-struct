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
      if (newNode.value === node.value) return false;

      if (newNode.value < node.value) {
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

  // **************** SEARCH VALUE IN BINARY SEARCH TREE *************** //

  contains(_value) {
    if (this.root === null) return false;

    let retVal = false;

    function helper(_node) {
      // If node is null, the value is not in the BST.
      if (_node === null) return null;

      if (_value === _node.value) {
        retVal = true;
        return;
      } else if (_value < _node.value) {
        // search to the left.
        helper(_node.left);
      } else {
        // Search to the right.
        helper(_node.right);
      }
    }

    helper(this.root);

    return retVal;
  }

  // **************** SEARCH VALUE IN BINARY SEARCH TREE *************** //

  // **************** BREATH-FIRST-SEARCH BINARY SEARCH TREE *************** //

  /**
   * It uses an array as a queue data structure. Performance is not a concern, I am
   * testing functionality. A better implementation requires a proper queue data
   * structure.
   *
   * @returns A list (array) of the node's value found at each level of the BST.
   */
  bfs() {
    if (!this.root) return [];

    // Create queue. I'll use an array as queue, not worried about performance now.
    const qNodes = [];
    const visitedNodes = [];

    // Add root to start traversing the tree.
    qNodes.push(this.root);

    // Iterate while there is something in the queue.
    while (qNodes.length !== 0) {
      if (qNodes[0].left) {
        qNodes.push(qNode[0].left);
      }

      if (qNodes[0].right) {
        qNodes.push(qNodes[0].right);
      }

      // Remove node from queue and add it to the visited nodes.
      visitedNodes.push(qNodes.shift().value);
    }

    return visitedNodes;
  }

  // **************** BREATH-FIRST-SEARCH BINARY SEARCH TREE *************** //
}

const l = [4, 7, 0, 1, 5];

const bst = new BinarySearchTree();

l.forEach((value) => {
  bst.insert(value);
});
