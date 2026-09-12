const textInput = document.getElementById("text-input");

const charCount = document.getElementById("char-count");

function captureValue (input) {
  if (textInput.value.length >= 50) {
    textInput.value = textInput.value.slice(0, 50);
  }
  charCount.innerText = `Character Count: ${input.value.length}/50`
  if (textInput.value.length >= 50) {
    charCount.style.color = "red"
  } else {
    charCount.style.color = "black"
  }
}

textInput.addEventListener("input", () => {
  captureValue(textInput);
}); 