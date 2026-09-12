function fearNotLetter (str) {
  const fullABC = "abcdefghijklmnopqrstuvwxyz";
  const start = fullABC.indexOf(str[0])
  let missing;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === fullABC[i + start]) {
      continue;
    } else {
      missing = fullABC[i + start];
      return missing;
    }
  }
  return missing
}