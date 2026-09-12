function bouncer (arr) {
  const bouncedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      console.log(arr[i] + " is truthy.");
      bouncedArr.push(arr[i]);
    } else if (!arr[i]) {
      console.log(arr[i] + " is falsy.");
    }
  }
  return bouncedArr
}