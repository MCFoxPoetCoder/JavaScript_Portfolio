//version 1
function diffArray (arr1, arr2) {
  const symmetricalArr = [];

  const joinedArr1 = arr1.join()
  console.log(joinedArr1)
  const joinedArr2 = arr2.join()
  console.log(joinedArr2)

  arr1.map(
      (el) => {
        const sim = joinedArr2.includes(el);
        if (!sim) symmetricalArr.push(el);
      }
    );
  arr2.map(
      (el) => {
        const sim = joinedArr1.includes(el);
        if (!sim) symmetricalArr.push(el);
      }
    );

  return symmetricalArr
}

let testVar = diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]);
console.log(testVar);