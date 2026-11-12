function bubbleSort (array) {
  const sorted = []
  for (let i = 0; i < array.length; i++) {
    if (sorted.length === 0) {
      sorted.push(array[i]);
      console.log(sorted)
      continue;
    }
    console.log(array[i]);
    console.log(sorted); 
    for (let j = 0; j < sorted.length; j++) {
      if (array[i] <= sorted[j]) {
        sorted.splice(j, 0, array[i]);
        break;
      } else if (array[i] > sorted[j] && j === sorted.length - 1) {
        sorted.push(array[i]);
        break;
      }
    }
  }
  return sorted;
}

const numbers = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
console.log(numbers);
console.log(bubbleSort (numbers))