function diffArray (arr1, arr2) {
  const symmetricalArr = [];

  const joinedArr1 = arr1.join()
  console.log(joinedArr1)
  const joinedArr2 = arr2.join()
  console.log(joinedArr2)

  const filteredArr1 = arr1.filter(
    (el) => !arr2.includes(el)
  )
  filteredArr1.map(el => symmetricalArr.push(el))

  const filteredArr2 = arr2.filter(
      (el) => !arr1.includes(el)
    );
  filteredArr2.map(el => symmetricalArr.push(el))
  return symmetricalArr
}

let testVar = diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]);
console.log(testVar);