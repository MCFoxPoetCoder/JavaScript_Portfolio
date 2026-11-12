function dfs (graph, root) {
  const stack = [root];
  console.log(stack)
  const visited = {};
  visited[root] = root
  console.log(visited)
  
  const results = [];
  
  while (stack.length !== 0) {
    let current = stack.pop()
    console.log("current",current)
    let nodeLinks = graph[current]
    console.log(nodeLinks)
    for (let i = nodeLinks.length - 1; i >= 0; i--) {
      if (nodeLinks[i] === 1 && !visited[i]) {
        stack.push(i);
        visited[i] = i
      } else if (nodeLinks[i] === 1 && visited[i] && !results.includes(i)) {
        results.push(i);
      }
    }
    if (!results.includes(current)) {
      results.push(current)
    }
    console.log("stack",stack)
  }
  
  return results
}

console.log("test1: ")
console.log(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 1),"\n")
console.log("test2: ")
console.log(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 3),"\n")
console.log("test3: ")
console.log(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 3))