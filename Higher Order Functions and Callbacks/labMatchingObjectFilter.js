function whatIsInAName (arr, source) {
  const filtered = [];
  const filter = (el) => {
    let match = true;
    for (const prop in source) {
      if (el[prop] === undefined || el[prop] !== source[prop]) {
        match = false;
      }
    }
    return match;
  }
  
  arr.map(
    (el) => {
      if (filter(el)) {
        filtered.push(el)
      }
    }
  )
  return filtered;
}

let testVar = whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
console.log(testVar);