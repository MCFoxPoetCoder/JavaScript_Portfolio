function selectionSort (array) {
  if (array.length === 0) {
    return;
  }
  const sorted = [];
  let lowest = array[0];
  let indexOfLowest = 0;
  for (let i = 1; i < array.length; i++) {
    console.log("Is ", array[i], " < ", lowest,"?", array[i] < lowest)
    if (array[i] < lowest) {
      lowest = array[i];
      indexOfLowest = i;
    }
  }
  array.splice(indexOfLowest, 1)
  sorted[0] = lowest
  console.log("sorted: ",sorted)
  console.log("array: ",array)
  const sortedRemainder = selectionSort(array) || []
  if (sortedRemainder.length > 0) {
    sortedRemainder.forEach(num => {
    sorted.push(num)
  })
  } 
  
  return sorted
}

const numbers = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
console.log("Final sorted: ",selectionSort(numbers))