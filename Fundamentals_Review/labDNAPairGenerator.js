function pairElement (dnaStrand) {
  const pairedElements = [];
  for (let char of dnaStrand) {
    const dnaPair = [];
    dnaPair.push(char)
    if (char === "A") {
      dnaPair.push("T");
    } else if (char === "T") {
      dnaPair.push("A")
    } else if (char === "C") {
      dnaPair.push("G")
    } else if (char === "G") {
      dnaPair.push("C")
    }
    pairedElements.push(dnaPair);
  }
  return pairedElements;
}

let testVar = pairElement("ATCG");
console.log(testVar);
