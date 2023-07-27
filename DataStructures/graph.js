/**
 * Implement a graph data structure. It will be an undirected graph to begin with.
 */

"use strict";

class Graph {
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
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      // Add the connection from vertex 1 to vertex 2.
      if (!this.adjacencyList[vertex1].includes(vertex2))
        this.adjacencyList[vertex1].push(vertex2);

      // Add the connection from vertex 2 to vertex 1.
      if (!this.adjacencyList[vertex2].includes(vertex1))
        this.adjacencyList[vertex2].push(vertex1);

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
}

const g = new Graph();

// let vertexList = [
//   "Caracas",
//   "Bocono",
//   "Pto La Cruz",
//   "Merida",
//   "Cumana",
//   "Valencia",
// ];

// vertexList.forEach((vertex) => {
//   g.addVertex(vertex);
// });

// g.addEdge("Caracas", "Pto La Cruz");
// g.addEdge("Caracas", "Merida");
// g.addEdge("Caracas", "Valencia");
// g.addEdge("Pto La Cruz", "Cumana");

const vertexList = ["A", "B", "C", "D", "E", "F"];

vertexList.forEach((vertex) => {
  g.addVertex(vertex);
});

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
