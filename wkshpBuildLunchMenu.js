const lunches = [];

function addLunchToEnd (arr, lunchItem) {
  arr.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return arr
}

function addLunchToStart (arr, lunchItem) {
  arr.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return arr
}

function removeLastLunch (arr) {
  const lastItem = arr[arr.length - 1];
  if (arr.length > 0) {arr.pop();
  console.log(`${lastItem} removed from the end of the lunch menu.`);} else {console.log("No lunches to remove.");}
  return arr
}

function removeFirstLunch (arr) {
  const firstItem = arr[0];
  if (arr.length > 0) {arr.shift();
  console.log(`${firstItem} removed from the start of the lunch menu.`);} else {console.log("No lunches to remove.");}
  return arr
}

function getRandomLunch (arr) {
  const arrayLength = arr.length;
  const randNum = Math.floor(Math.random() * arrayLength);
  const randLunch = arr[randNum];
  if (arrayLength > 0) {console.log(`Randomly selected lunch: ${randLunch}`)} else {console.log("No lunches available.")}
}

function showLunchMenu (arr) {
  if (arr.length > 0) {console.log(`Menu items: ${arr.join(", ")}`)} else {console.log("The menu is empty.")}
}

addLunchToEnd(lunches, "Apple");
addLunchToEnd(lunches, "Banana");
addLunchToEnd(lunches, "Carrot");
addLunchToEnd(lunches, "Date");
addLunchToEnd(lunches, "Eggplant");
getRandomLunch(lunches);
getRandomLunch(lunches);
showLunchMenu(lunches);
console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));