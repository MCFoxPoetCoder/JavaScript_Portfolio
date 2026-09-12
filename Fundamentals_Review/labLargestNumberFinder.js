function largestOfAll (arr) {
  const largestArr = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNum;
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) {
        largestNum = arr[i][j];
      } 
      console.log(largestNum);
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
        console.log(largestNum);
      }
      console.log("-".repeat(25));
    }
    largestArr.push(largestNum);
  }
  return largestArr;
}

console.log(largestOfAll ([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))