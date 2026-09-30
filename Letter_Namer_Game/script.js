const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const letterDisplay = document.getElementById("letter");
const docBody = document.querySelector("body");
const gameOptions = document.querySelectorAll("#game-options input[type='checkbox']")

const sets = [
  {
    value: "uppercase-letters",
    setArr: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    setRegex: "[A-Z]"
  },
  {
    value: "lowercase-letters",
    setArr: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split(""),
    setRegex: "[a-z]"
  },
  {
    value: "numbers",
    setArr:  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    setRegex: "\\d"
  },
]

const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const alphabetLower = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");
const numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
const alphaQueue = [];
const practiceHistory = [];
const practiceSet = [];
practiceSet.push(...sets[0].setArr)

function pickRandomLetterIndex () {
  return Math.floor(Math.random() * practiceSet.length);
}

function changeLetterColor () {
  if ("AGMSY17".includes(letterDisplay.innerText.toUpperCase())) {
    letterDisplay.style.color = "red";
  } else if ("BHNTZ28".includes(letterDisplay.innerText.toUpperCase())) {
    letterDisplay.style.color = "orange";
  } else if ("CIOU39".includes(letterDisplay.innerText.toUpperCase())) {
    letterDisplay.style.color = "gold";
  } else if ("DJPV40".includes(letterDisplay.innerText.toUpperCase())) {
    letterDisplay.style.color = "green";
  } else if ("EKQW5".includes(letterDisplay.innerText.toUpperCase())) {
    letterDisplay.style.color = "blue";
  } else if ("FLRX6".includes(letterDisplay.innerText.toUpperCase())) {
    letterDisplay.style.color = "violet";
  }
}

function displayCurrentLetter () {
  if (practiceHistory.length === 0) return;
  const currentLetter = practiceHistory[practiceHistory.length - 1];
  letterDisplay.innerText = currentLetter;
  changeLetterColor ();
}

function newLetter () {
  const randLetterIndex = pickRandomLetterIndex ();
  const randLetter = practiceSet[randLetterIndex];
  
  practiceSet.splice(randLetterIndex, 1);
  
  if (practiceHistory.length > 0) {
    alphaQueue.push(practiceHistory.shift());
  }
  practiceHistory.push(randLetter);
  displayCurrentLetter();
  if (alphaQueue.length >= (practiceSet.length + alphaQueue.length + practiceHistory.length)/2) {
    practiceSet.push(alphaQueue[0]);
    alphaQueue.shift();
  }
}

function prevLetter () {
  if (alphaQueue.length === 0) return;
  const lastLetter = alphaQueue.pop();
  practiceHistory.push(lastLetter);
  displayCurrentLetter();
  console.log("practiceHistory", practiceHistory);
  console.log("alphaQueue", alphaQueue);
  console.log("practiceSet", practiceSet);
}

function nextLetter () {
  if (practiceHistory.length > 1) {
    const nextLet = practiceHistory.pop();
    alphaQueue.push(nextLet);
    displayCurrentLetter();
  } else {
    newLetter();
  }
  console.log("practiceHistory", practiceHistory);
  console.log("alphaQueue", alphaQueue);
  console.log("practiceSet", practiceSet);
}

/* Old addPracticeSet function:
if (value === "uppercase-letters") {
    practiceSet.push(...alphabetUpper);
  } else if (value === "lowercase-letters") {
    practiceSet.push(...alphabetLower);
  } else {
    practiceSet.push(...numbersArr);
  }
*/

function addPracticeSet (value) {
  const setObj = sets.find(set => set.value === value);
  practiceSet.push(...setObj.setArr);
}

function removePracticeSet (value) {
  const setObj = sets.find(set => set.value === value);
  const regex = new RegExp(setObj.setRegex);
  practiceSet.splice(0, practiceSet.length, ...practiceSet.filter(item => !regex.test(item)));
  alphaQueue.splice(0, alphaQueue.length, ...alphaQueue.filter(item => !regex.test(item)));
  practiceHistory.splice(0, practiceHistory.length, ...practiceHistory.filter(item => !regex.test(item)));
}

gameOptions.forEach((input) =>
  input.addEventListener("change", (event) => {
    if (event.target.checked) {
      addPracticeSet(input.value)
    } else {
      removePracticeSet(input.value); 
    }
  })
 );

nextBtn.addEventListener("click", () => nextLetter());
prevBtn.addEventListener("click", () => prevLetter());

docBody.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    nextLetter();
  }
})
docBody.addEventListener("keyup", (e) => {
  if (e.code === "ArrowRight") {
    e.preventDefault();
    nextLetter();
  }
})

docBody.addEventListener("keyup", (e) => {
  if (e.code === "ArrowLeft") {
    e.preventDefault();
    prevLetter();
  }
})
docBody.addEventListener("keyup", (e) => {
  if (e.code === "Backspace") {
    e.preventDefault();
    prevLetter();
  }
})