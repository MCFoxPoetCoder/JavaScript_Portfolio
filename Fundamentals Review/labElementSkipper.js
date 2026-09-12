function dropElements (arr, func) {
  const copiedArr = [];
  let success = false;
  let successIndex = 0;
	for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      copiedArr.push(arr[i]);
      success = true;
      successIndex = i;
      break;
    }
  }
  if (success) {
    for (let i = successIndex + 1; i < arr.length; i++) {
    copiedArr.push(arr[i]);
    }
  }

  return copiedArr;
}

let testVar = dropElements([1, 2, 3, 4], function(n) {return n > 5;});
console.log(testVar);