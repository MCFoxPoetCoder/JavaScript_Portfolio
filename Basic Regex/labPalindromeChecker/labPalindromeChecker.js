const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDisplay = document.getElementById("result");

const alphanumeric = /[a-zA-Z0-9]/;

function cleanupText (text) {
  return text
    .toLowerCase()
    .split("")
    .filter(character => alphanumeric.test(character))
    .join("")
}

function checkPalindrome (text) {
  const reversed = text
    .split('')
    .reverse()
    .join('');
  return text === reversed
}

checkBtn.addEventListener("click", () => {
  if (textInput.value === "") {
    alert("Please input a value");
  } else {
    const cleaned = cleanupText(textInput.value)
    const isPalindrome = checkPalindrome(cleaned)
    if (isPalindrome)
    {resultDisplay.innerHTML = `<strong>${textInput.value}</strong> is a palindrome.`;
    resultDisplay.style.color = "blue";} else {
      resultDisplay.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome.`;
    resultDisplay.style.color = "blue";
    }
  }
})