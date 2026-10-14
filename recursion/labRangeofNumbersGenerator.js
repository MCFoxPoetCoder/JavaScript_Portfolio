function rangeOfNumbers (startNum, endNum) {
  let rangeArray = []
  if (startNum === endNum) {
    rangeArray.push(startNum);
    return rangeArray;
  } else if (startNum < endNum) {
    rangeArray = rangeOfNumbers(startNum + 1, endNum);
    rangeArray.unshift(startNum); 
    return rangeArray;
  } else {
    rangeArray = rangeOfNumbers(startNum - 1, endNum);
    rangeArray.unshift(startNum); 
    return rangeArray;
  }
}

console.log(rangeOfNumbers(9, 3))