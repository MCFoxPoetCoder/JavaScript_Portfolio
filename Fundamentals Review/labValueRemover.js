function destroyer (arr, ...values) {
  const toDestroy = [];
  for (const value of values) {
    toDestroy.push(value);
  }

  return arr.filter(el => !toDestroy.includes(el))
}

let testVar = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(testVar);