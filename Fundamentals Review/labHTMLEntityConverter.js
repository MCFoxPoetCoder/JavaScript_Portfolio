function convertHTML (str) {
  let converted = "";
  const specials = `&<>"'`
  for (let i = 0; i < str.length; i++) {
    console.log(str[i])
    console.log(specials.includes(str[i]))
    if (specials.includes(str[i])) {
      if (str[i] === "&") {
        converted += `&amp;`;
      } else if (str[i] === "<") {
        converted += `&lt;`;
      } else if (str[i] === ">") {
        converted += `&gt;`;
      } else if (str[i] === `"`) {
        converted += `&quot;`;
      } else if (str[i] === `'`) {
        converted += `&apos;`;
      }
    } else {
      converted += str[i];
    }
  }
  return converted;
}

let testVar = convertHTML("Dolce & Gabbana");
console.log(testVar);