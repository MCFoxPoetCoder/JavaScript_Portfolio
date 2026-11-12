function quicksort (array) {
  if (array.length <= 1 || array.every((val, index, array) => array[0] === val)) {
    return array;
  }

  const pivot = [];
  pivot.push(array[0])
  array.splice(0, 1)
  const lower = [];
  const higher = [];

  array.forEach(num =>
  {
    if (num < pivot[0]) {
      lower.push(num)
    } else if (num > pivot[0]) {
      higher.push(num)
    } else if (num === pivot[0]) {
      pivot.push(num)
    }
  })

  const lowerSorted = quicksort(lower) || [];
  const higherSorted = quicksort(higher) || [];
  const sorted = [];
  lowerSorted.forEach(num => sorted.push(num));
  pivot.forEach(num => sorted.push(num));
  higherSorted.forEach(num => sorted.push(num));
  return sorted
}

console.log(quicksort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))