function adjacencyListToMatrix (list) {
  const nodesArr = Object.keys(list)
  const matrix = new Array(nodesArr.length);
  for (let i = 0; i < nodesArr.length; i++) {
    matrix[i] = new Array(nodesArr.length).fill(0);
  }
  for (let node in list) {
    for (let i = 0; i < nodesArr.length; i++) {
      if (list[node].includes(i)) {
        matrix[Number(node)][i] = 1
      }
    }
    console.log(matrix[node])
  }
  return matrix
}

console.log(adjacencyListToMatrix({0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [1, 2]}))