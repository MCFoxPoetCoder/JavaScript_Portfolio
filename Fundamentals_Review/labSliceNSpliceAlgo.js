function frankenSplice (arr1, arr2, index) {
  const frankenArr = [];
  for (let i = 0; i < arr2.length; i++) {
    frankenArr.push(arr2[i]);
  }
  for (let i = arr1.length -1 ; i >= 0; i--) {
    frankenArr.splice(index, 0, arr1[i])
  }
  return frankenArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));