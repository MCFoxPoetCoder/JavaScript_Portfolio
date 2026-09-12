function findLongestWordLength (sentence) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let trimmedSent = sentence.trim().toLowerCase();
  if (trimmedSent === "") {
    return "Invalid entry";
  }
  let lettersPresent = false
  for (let i = 0; i < sentence.length; i++) {
    if (letters.includes(sentence[i])) {
      lettersPresent = true;
    }
  }
  if (!lettersPresent) {
    return "Invalid entry";
  }
  const wordArray = trimmedSent.split(" ");
  let longestWord = "";
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > longestWord.length) {
      longestWord = wordArray[i];
    }
  }
  return longestWord.length
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))