const startsCapitalRegex = /^[A-Z]/

function myReplace (str, word, rep) {
  const wordRegex = new RegExp(`${word}`, "gi");
  let replaced = "";
  if (startsCapitalRegex.test(str.match(wordRegex)[0])) {
    const replacement = rep.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
    replaced = str.replace(wordRegex, replacement)
  } else {
    replaced = str.replace(wordRegex, rep.toLowerCase());
  }
  return replaced;
}

let testVar = myReplace("His name is Tom", "Tom", "john");
console.log(testVar);