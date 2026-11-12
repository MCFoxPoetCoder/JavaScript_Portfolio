function permuteString (str) {
  let prefix = ""
  const results = []
  if (str.length === 0) {
    results.push(prefix);
    return results
  } else {
    str.split("").forEach((letter, index) => {
      const currStr = str.split("")
      currStr.splice(index, 1)
      const subPerm = permuteString(currStr.join(""))
      
      subPerm.forEach(perm => {
        prefix = letter + perm
        if (!results.find(el => el === prefix)) {
          results.push(prefix)
          }
      })
    })
  }
  return results;
}

console.log(permuteString("walk"))