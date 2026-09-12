const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn")
const testResult = document.getElementById("result")

const caseInsensitiveFlag  = document.getElementById("i")
const globalFlag  = document.getElementById("g")

caseInsensitiveFlag.addEventListener("change", () => {
  console.log(`case insensitive flag is now ${event.target.checked}`);
  console.log(getFlags());
})
globalFlag.addEventListener("change", () => {
  console.log(`global flag is now ${event.target.checked}`);
  console.log(getFlags());
})

function getFlags () {
  let flags = "";
  if (caseInsensitiveFlag.checked === true) {
    flags += "i";
  }
  if (globalFlag.checked === true) {
    flags += "g";
  }
  return flags;
}

testButton.addEventListener("click", () => {
  
  const regex = new RegExp(`(${regexPattern.value})`, getFlags())

  const str = stringToTest.innerText;

  console.log(str.match(regex))
  if (str.match(regex) === null) {
      testResult.innerText = "no match";
      return;
    }
  if (globalFlag.checked) {
    stringToTest.innerHTML = str.replaceAll(regex, '<span class="highlight">$1</span>');
    testResult.innerText = str.match(regex).reduce(
      (accumulator, currentValue) => accumulator + ", " + currentValue
    );
  } else {
    stringToTest.innerHTML = str.replace(regex, `<span class="highlight">$1</span>`);
    testResult.innerText = str.match(regex)[0];
  }
  
})