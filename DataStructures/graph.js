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
}

const g = new Graph();

let vertexList = [
  "Caracas",
  "Bocono",
  "Pto La Cruz",
  "Merida",
  "Cumana",
  "Valencia",
];

vertexList.forEach((vertex) => {
  g.addVertex(vertex);
});

g.addEdge("Caracas", "Pto La Cruz");
g.addEdge("Caracas", "Merida");
g.addEdge("Caracas", "Valencia");
g.addEdge("Pto La Cruz", "Cumana");
