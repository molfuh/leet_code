class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    // should add key to adjacency list with name of vertex set to value of empty array
    // add vertex before edge - no connections yet
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    // connect the two vertices
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    // delete connection between two vertices
    // this.adjacencyList[v1].forEach((elem, i) => {
    //   if (elem === v2) this.adjacencyList[v1].splice(i, 1);
    // })

    // this.adjacencyList[v2].forEach((elem, i) => {
    //   if (elem === v1) this.adjacencyList[v2].splice(i, 1);
    // })

    this.adjacencyList[v1] = this.adjacencyList[v1].filter((currVer) => {
      currVer !== v2;
    })

    this.adjacencyList[v2] = this.adjacencyList[v2].filter((currVer) => {
      currVer !== v1;
    })
  }
  removeVertex(vertex) {
    //remove all edges and all vertices
    this.adjacencyList[vertex].forEach((currVer) => {
      this.removeEdge(vertex, currVer);
    })
    delete this.adjacencyList[vertex];
  }
}

(() => {
  let myGraph = new Graph();
  myGraph.addVertex('Tokyo');
  myGraph.addVertex('Tokyo');
  myGraph.addVertex('San Francisco');
  // console.log(myGraph.adjacencyList);
  myGraph.addEdge('Tokyo', 'San Francisco')
  // console.log(myGraph)
  // myGraph.removeEdge('Tokyo', 'San Francisco')
  myGraph.removeVertex('Tokyo');
  myGraph.removeVertex('San Francisco');
  console.log(myGraph)
})();
