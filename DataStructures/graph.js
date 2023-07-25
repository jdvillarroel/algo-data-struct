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
