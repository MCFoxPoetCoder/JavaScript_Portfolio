function mutation (array) {
  const [el1, el2] = array;
  const smEl1 = el1.toLowerCase();
  const smEl2 = el2.toLowerCase();
  let matchCount = 0;

  for (let i = 0; i < smEl2.length; i++) {
    if (smEl1.includes(smEl2[i])) {
      matchCount++;
    }
  }
  return matchCount === smEl2.length;
}


console.log(mutation(["Mary", "Army"]))