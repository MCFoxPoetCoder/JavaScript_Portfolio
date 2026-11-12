const arrayContainer = document.getElementById("array-container");
const startingArrayDiv = document.getElementById("starting-array");
const btnContainer = document.getElementById("btn-container");
const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");

function generateElement () {
  return Math.ceil(Math.random() * 100)
}

function generateArray () {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement())
  }
  return arr;
}

function generateContainer () {
  return document.createElement('div')
}

function fillArrContainer (htmlEl, arr) {
  arr.forEach(int => htmlEl.innerHTML += `<span>${int}</span>`)
}

function isOrdered (int1, int2) {
  return typeof int2 === "number" ? int1 <= int2 : true
}

function swapElements (arr, index) {
  if (!isOrdered(arr[index],arr[index + 1])) {
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]
  }
}

function highlightCurrentEls (htmlEl, index) {
  htmlEl.childNodes[index].style.border = "dashed red 2px";
  if (htmlEl.childNodes[index + 1]) {htmlEl.childNodes[index + 1].style.border = "dashed red 2px"}
}

let arrayToSort = [] 

generateBtn.addEventListener("click", () => {
  while (arrayContainer.children.length > 1) {
    arrayContainer.removeChild(arrayContainer.lastChild)
  }
  startingArrayDiv.innerText = "";
  arrayToSort = generateArray()
  fillArrContainer(startingArrayDiv,arrayToSort);
  sortBtn.hidden = false
})

function bubbleSort (arr) {
  let swapped = true;
  let currentContainer = startingArrayDiv;
  let iteration = 0;
  console.log(arr)
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      console.log(arr)
      highlightCurrentEls(currentContainer, i)
      if (!isOrdered(arr[i],arr[i+1])) {
        swapElements(arr,i);
        swapped = true;
      }
      let newContainer = generateContainer();
      iteration++
      arrayContainer.appendChild(newContainer);

      newContainer = arrayContainer.children[iteration];
      if (newContainer) {
        console.log("element exists")
      } else {
        console.log("element does not exist")
      }
      newContainer.id = `iteration-${iteration}`
      currentContainer = document.getElementById(`iteration-${iteration}`);

      fillArrContainer(newContainer,arrayToSort)
    }
    console.log("finished while loop, 'swapped' is ",swapped)
  }
  currentContainer.style.border = "4px solid darkgreen";
}

sortBtn.addEventListener("click", () => {
  bubbleSort(arrayToSort)
  sortBtn.hidden = true
})