"use strict";
// ******************************************************************************* //
// **********                    PRIORITY QUEUE                         ********** //
// ******************************************************************************* //

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

  /**
   *
   * @param {Object} _item Object tht contains a value and a priority.
   * @returns A list of objects in the queue.
   */
  enqueue(_item) {
    // Create a new item(node) based on the parameters passed in.
    const item = new Item(_item.value, _item.priority);

    // Insert item in the queue based on the priority. Initially I'll add to the end.
    this.queue.push(item);

    /**
     * Now I have to find the new inserted item parent and compare their priority
     * to determine the max priority. If new item's priority is greater, I swap
     * the values. This process is repeated until I find the correct
     * position. (Grater priority means lower magnitud)
     */

    // Set variables to track the index of the added item and its parent.
    let idx = this.queue.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (
      idx > 0 &&
      this.queue[idx].priority < this.queue[parentIdx].priority
    ) {
      // Swap the values since the priority is higher.
      [this.queue[idx], this.queue[parentIdx]] = [
        this.queue[parentIdx],
        this.queue[idx],
      ];

      // Update indexes.
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }

    return this.queue;
  }

  dequeue() {
    // Check if the queue is empty or just one element.
    if (this.queue.length === 0) return undefined;
    if (this.queue.length === 1) return this.queue.pop();

    let lastIdx = this.queue.length - 1;

    /**
     * Swap the first (highest priority) and last elements in the list. Then remove
     * the last element which will be the highest priority element in the queue. We do this
     * since is more efficient to remove from the end of the array. Then the first element
     * in the queue needs to be bubble down to its correct position.
     */
    [this.queue[0], this.queue[lastIdx]] = [this.queue[lastIdx], this.queue[0]];

    // Remove highest priority element from queue.
    const removed = this.queue.pop();
    let lenght = this.queue.length;

    if (lenght === 1) return removed;

    // Save the element to bubble down and other usefull variables.
    const element = this.queue[0];
    let idx = 0;
    let leftIdx = 2 * idx + 1;
    let rightIdx = 2 * idx + 2;
    let left = this.queue[leftIdx];
    let right = this.queue[rightIdx];
    let idxToSwap = 0;
    let swap = false;

    do {
      /**
       * Now I need to check if the element has lower priority (higher magnitud) than the children
       * and which of the children have the higher priority to swap them.
       */
      if (left.priority < element.priority) {
        idxToSwap = leftIdx;
        swap = true;
      }

      if (rightIdx < lenght) {
        if (
          right.priority < element.priority &&
          right.priority < left.priority
        ) {
          idxToSwap = rightIdx;
          swap = true;
        }
      }

      // Swap the items.
      if (swap) {
        this.queue[idx] = this.queue[idxToSwap];
        this.queue[idxToSwap] = element;

        // Update variables.
        idx = idxToSwap;
        swap = false;
        leftIdx = 2 * idx + 1;
        rightIdx = 2 * idx + 2;
        left = this.queue[leftIdx];
        right = this.queue[rightIdx];
      } else {
        break;
      }
    } while (leftIdx < lenght && rightIdx < lenght);

    return removed;
  }
}
// ******************************************************************************* //
// **********                    PRIORITY QUEUE - END                   ********** //
// ******************************************************************************* //

// ******************************************************************************* //
// **********                   WEIGHTED GRAPH - START                  ********** //
// ******************************************************************************* //
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Add vertex to the graph. Vertex does not contain any edge yet.
   * @param {any} vertex
   * @returns true if the vertex was added. If the vertex already exists it won't add it
   * and returns false.
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }

    return false;
  }

  /**
   * Add a relationship between two vertex. Both vertex must be valid to add a relationship between them.
   *
   * @param {any} vertex1
   * @param {any} vertex2
   * @returns false if one or both of the vertex do not exist. If an edge already exists, it won't be added again.
   * Returns true if the edge was added successfully.
   */
  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      // Add the connection from vertex 1 to vertex 2.
      if (
        !this.adjacencyList[vertex1].some((vertex) => vertex.node === vertex2)
      )
        this.adjacencyList[vertex1].push({ node: vertex2, weight });

      // Add the connection from vertex 2 to vertex 1.
      if (
        !this.adjacencyList[vertex2].some((vertex) => vertex.node === vertex1)
      )
        this.adjacencyList[vertex2].push({ node: vertex1, weight });

      return true;
    }

    return false;
  }

  /**
   * Remove the relationship between two vertex.
   * @param {any} vertex1 Vertex or node to remove edge from.
   * @param {any} vertex2 Vertex or node to remove edge from.
   * @returns true if both vertex were valid and they were removed, false otherwise.
   */
  removeEdge(vertex1, vertex2) {
    // Verify that both vertex exist before attempting to remove.
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      // Remove edge from vertex1.
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );

      // Remove edge from vertex2.
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );

      return true;
    }

    return false;
  }

  /**
   * Removes a vertex and any reference to that vertex in the list of edges in any other
   * vertex.
   * @param {any} vertex Vertex to be removed.
   * @returns True if the vertex is valid and if it was removed successfully, false otherwise.
   */
  removeVertex(vertex) {
    // Verify the vertex is being requested to remove exists in the graph.
    if (this.adjacencyList[vertex]) {
      /**
       * Since we need to delete any reference to the vertex we are removing, we'll need
       * to iterate over all the edges for that vertex and remove the edge that connects
       * to the vertex we are removing.
       */
      this.adjacencyList[vertex].forEach((edge) => {
        this.removeEdge(vertex, edge);
      });

      // Remove the vertex from the graph.
      delete this.adjacencyList[vertex];

      return true;
    }

    return false;
  }

  /**
   * This function implements depth first traversal of the graph recursively.
   * @param {String} vertex It can be called with any of the vertex in the graph
   * as the first vertex to visit.
   * @returns A lsit of all the vertex visited in the graph which should match
   * all vertex in the graph.
   */
  rDFT(vertex) {
    /**
     * Create a copy of the adjacency list since we would not be able to call it inside
     * the recursive function. Inside the recursive function the "this" does not refer
     * to the class itself anymore.
     */
    let adjacencyList = this.adjacencyList;

    // Create an array to store all visited vertex.
    const visited = {};

    // Results array to return.
    const results = [];

    // Define the recursive helper function that will traverse the graph.
    function rHelper(_vertex) {
      // Base case of the recursive function.
      if (!_vertex) return null;

      // Add the current vertex to the visited vertex map and to the results array.
      results.push(_vertex);
      visited[_vertex] = true;

      // Visit the vertex linked to the current vertex.
      adjacencyList[_vertex].forEach((v) => {
        // Verify that the node has not been visited before.
        if (!visited[v]) {
          rHelper(v);
        }
      });
    }
    rHelper(vertex);

    return results;
  }

  /**
   * This is the iterative version of the depth first traversal of the graph. To keep track of the
   * vertex we need to visit, we use a stack data structure (LIFO).
   * @param {any} vertex
   * @returns A list of all vertex in the order they were visited.
   */
  DFT(vertex) {
    // Create the list of visited vertex to return and the map for the nodes that were visited.
    let results = [];
    const visited = {};

    let currentVertex;

    /**
     * Create a stack data structure to keep track of the vertex we need to visit. We'll use an
     * array for simplicity. We'll push to the array and pop from the array. We need to visit the
     * vertex in the reverse order they were added (LIFO)
     */
    const stack = [];

    /**
     * Add the first vertex to the stack. Then every edge that vertex has will be added to the stack.
     * After, we'll remove vertex from the stack and repeat that process until the stack is empty.
     * If the vertex was already visited it will not be considered.
     */
    stack.push(vertex);

    while (stack.length > 0) {
      // Get the vertex from the stack.
      currentVertex = stack.pop();

      // Check if the vertex was visited previously. If not, we'll process the vertex.
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        results.push(currentVertex);

        // Add all the edges of the current vertex to the stack.
        this.adjacencyList[currentVertex].forEach((v) => {
          stack.push(v);
        });
      }
    }

    return results;
  }

  /**
   * Implementation of the breadth first traversal of the graph. The logic is pretty much the same
   * as the DFT but insted, we use a queue to keep track of the vertex we need to visit (FIFO).
   * @param {any} vertex
   * @returns A list of the vertex in the order they were visited.
   */
  BFT(vertex) {
    // Create the list of visited vertex to return and the map for the nodes that were visited.
    let results = [];
    const visited = {};

    let currentVertex;

    /**
     * Create a queue data structure to keep track of the vertex we need to visit. We'll use an
     * array for simplicity. We'll push to the array and shift from the array. We need to visit
     * the vertex in the order they were added (FIFO).
     */
    const queue = [];

    /**
     * Add the first vertex to the queue. Then every edge that vertex has will be added to the queue.
     * After, we'll remove vertex from the queue and repeat that process until the queue is empty.
     * If the vertex was already visited it will not be considered.
     */
    queue.push(vertex);

    while (queue.length > 0) {
      // Get the vertex from the queue.
      currentVertex = queue.shift();

      // Check if the vertex was visited previously. If not, we'll process the vertex.
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        results.push(currentVertex);

        // Add all the edges of the current vertex to the queue.
        this.adjacencyList[currentVertex].forEach((v) => {
          if (!visited[v]) queue.push(v);
        });
      }
    }

    return results;
  }

  shortestPath(start, end) {
    /**
     * Create the distances object to keep track of the shortest distance from the starting
     * node/vertex to every vertex in the graph.
     */
    const distances = {};

    // Keep track of visited vertices.
    const visited = {};

    /**
     * Add every vertex in the graph to the distances object. Every distance will be
     * initialized as infinity except for the starting vertex.
     */
    const vertices = Object.keys(this.adjacencyList);
    vertices.forEach((vertex) => {
      if (vertex === start) distances[vertex] = 0;
      else distances[vertex] = Infinity;
    });

    /**
     * Create a priority queue. Initialize the priority queue with the vlues in the
     * distances objects.
     */
    const pQ = new PriorityQueue();

    // vertices.forEach((vertex) => {
    //   pQ.enqueue({ value: vertex, priority: distances[vertex] });
    // });
    pQ.enqueue({ value: start, priority: 0 });

    /**
     * Create an object to track the previous shortest vertex taken to get to a
     * particular vertex.
     */
    const previous = {};

    vertices.forEach((vertex) => {
      previous[vertex] = null;
    });

    // Keep track of the current vertex.
    let smallest;

    // Hold the current distance to vertex.
    let currentDistanceToVertex;

    /**
     * We'll start looping as long as there is something in the proprity queue.
     */
    while (pQ.queue.length) {
      smallest = pQ.dequeue();

      if (!visited[smallest.value]) {
        visited[smallest.value] = true;

        // If the current vertex is equal to the end, we are done. TO DO later!!!!!!!!!!!!
        if (smallest.value === end) {
          // Build path to return
          let shortestPath = [];
          let node = smallest.value;
          while (node) {
            shortestPath.push(node);
            node = previous[node];
          }

          return shortestPath.reverse();
        }

        /**
         * Loop over each edge in the adjacency list for the current vertex. If the weight
         * is lower than what is stored in the distances object, we update the distance
         * in the distances object.
         */
        for (let vertex of this.adjacencyList[smallest.value]) {
          // If the vertex was visited before, we ignore it.
          if (!visited[vertex.node]) {
            // Calculate the distance to that vertex.
            currentDistanceToVertex = vertex.weight + smallest.priority;

            /**
             * If the calculated distance is smaller than the current known distance to that vertex,
             * we update the distances structure with the new value.
             */
            if (currentDistanceToVertex < distances[vertex.node]) {
              distances[vertex.node] = currentDistanceToVertex;

              // Update the previous node with the new vertex that has shortest distance.
              previous[vertex.node] = smallest.value;

              // Add the vertex to the priority queue.
              pQ.enqueue({
                value: vertex.node,
                priority: currentDistanceToVertex,
              });
            }
          }
        }
      }
    }
    // Just for testing.
    console.log(visited);
    console.log(distances);
    console.log(previous);
  }
}
// ******************************************************************************* //
// **********                    WEIGHTED GRAPH - END                   ********** //
// ******************************************************************************* //

const wg = new WeightedGraph();

// Add vertex to graph.
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

// Add edges.
wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);
