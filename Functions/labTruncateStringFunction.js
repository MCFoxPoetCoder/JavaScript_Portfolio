function truncateString (string, stringLength) {
  const cutString = string.slice(stringLength);
  const tail = "...";
  if (string.length > stringLength) {return string.replace(cutString, tail);} else {
    return string;
  }
};

let string = "A-tisket a-tasket A green and yellow basket";
let stringLength = "A-tisket a-tasket A green and yellow basket".length;
const result = truncateString (string, stringLength);

console.log(result);