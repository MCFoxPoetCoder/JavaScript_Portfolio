function insertionSort (array) {
  const sorted = array
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (array[i] < array[j]) {
        console.log(array[i], array[j])
        array.splice(j, 0, array[i]);
        console.log("1st splice:",array)
        array.splice(i + 1, 1);        
        console.log("2nd splice:",array);
        i--;
        continue;
      } else if (array[i] > array[j]) {
        break;
      }
    }
  }
  return sorted;
}


const numbers = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
console.log(numbers);
insertionSort (numbers)
console.log(numbers)