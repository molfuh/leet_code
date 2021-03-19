class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((currVer) => {
      currVer !== v2;
    })

    this.adjacencyList[v2] = this.adjacencyList[v2].filter((currVer) => {
      currVer !== v1;
    })
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((currVer) => {
      this.removeEdge(vertex, currVer);
    })
    delete this.adjacencyList[vertex];
  }

  DFSSearch (start) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    (function recurseDFS (vertex) {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((elem) => {
        if (!visited[elem]) return recurseDFS(elem);
      })
    })(start);
    return result;
  }
}



(() => {
  let myGraph = new Graph();
  myGraph.addVertex('A');
  myGraph.addVertex('B');
  myGraph.addVertex('C');
  myGraph.addVertex('D');
  myGraph.addVertex('E');
  myGraph.addVertex('F');

  myGraph.addEdge('A', 'B');
  myGraph.addEdge('A', 'C');
  myGraph.addEdge('B', 'D');
  myGraph.addEdge('C', 'E');
  myGraph.addEdge('D', 'E');
  myGraph.addEdge('D', 'F');
  myGraph.addEdge('E', 'F');

  console.log(myGraph.DFSSearch('A'));
})()