function uniteUnique (...args) {
  const unique = [];
  for (const arg of args) {
    for (let i = 0; i < arg.length; i++) {
      if (unique.includes(arg[i])) {
        continue;
      } else {
        unique.push(arg[i]);
      }
    }
  }
  return unique;
}

let testVar = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(testVar);