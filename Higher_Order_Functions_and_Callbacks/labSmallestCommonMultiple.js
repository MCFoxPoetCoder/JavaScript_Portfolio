function smallestCommons (arr) {
const arrSorted = arr.sort((a, b) => a - b);
const arrRange = [];
for (let i = arrSorted[0]; i <= arrSorted[1]; i++) {
  arrRange.push(i)
}

let smallestCommon = 0;

let found = false;
while (!found) {
  smallestCommon++
  const hasCommonMultiple = arrRange.every((num) => smallestCommon % num === 0);
  if (hasCommonMultiple) {
    found = true;
  }
}
return smallestCommon;
}

let testVar = smallestCommons([1, 13]);
console.log(testVar);