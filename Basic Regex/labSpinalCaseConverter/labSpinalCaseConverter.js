const spacesUnderlines = /[\s|_]/g;
const capitals = /(?<=[a-z])([A-Z])/g;

function spinalCase (str) {
  let spinalCased = str;
  spinalCased = spinalCased
    .replaceAll(spacesUnderlines, "-")
    .replaceAll(capitals, `-$1`)
    .toLowerCase()
  return spinalCased;
}

console.log(spinalCase("This Is Spinal Tap"))
console.log(spinalCase("thisIsSpinalTap"))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))