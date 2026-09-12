function getIndexToIns (arr, num) {
  arr.sort((a, b) => a - b);
  const index = arr.findIndex(i => i >= num);
  if (index >= 0) {
    return index;
  } else {
    return arr.length;
  }
}

console.log(getIndexToIns ([3, 10, 5], 11))