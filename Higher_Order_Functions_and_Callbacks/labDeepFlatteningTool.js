function steamrollArray (nestedArr) {
  const flattenedArr = [];
  function nestDig (doubleNested) {
    for (let i = 0; i < doubleNested.length; i++) {
      if (Array.isArray(doubleNested[i]) && doubleNested[i].length === 0) {
        continue;
      } else if (Array.isArray(doubleNested[i])) {
        nestDig(doubleNested[i]);
      } else {
        flattenedArr.push(doubleNested[i]);
      }
    }
  }
  nestDig (nestedArr)
  return flattenedArr;
}

let testVar = steamrollArray([[1], [], [2, [3]]]);
console.log(testVar);