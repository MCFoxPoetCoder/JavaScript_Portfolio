function isPalindrome (word) {
  const wordBackwards = word.split("").reverse().join("")
  if (word.toLowerCase() === wordBackwards.toLowerCase()) {
    return true
    } else {
    return false
    }
}

function findPalindromeBreaks (words) {
  const palindromeBreaks = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      palindromeBreaks.push(i);
    }
  }
  
  return palindromeBreaks;
}

function findRepeatedPhrases (words, phraseLength) {
  const repeatedPhrases = [];
  if (phraseLength >= words.length) {
    return repeatedPhrases;
  } else {
    for (let i = 0; i < words.length; i++) {
      const phrase = words.slice(i, i + phraseLength);
      let hasMatch = false;
      console.log("-".repeat(25))
      console.log("Phrase: " + phrase);
      const firstInstance = i;
      console.log("firstInstance: " + firstInstance);
      const beforeSlice = words.slice(0, i + 1);
      console.log("beforeSlice: " + beforeSlice);
      const afterSlice = words.slice(i + 1);
      console.log("afterSlice: " + afterSlice);
      for (let j = 0; j < afterSlice.length; j++) {
        const nextSlice = afterSlice.slice(j, j + phraseLength);
        if (nextSlice.length < phraseLength) {
          continue;
          }
        console.log("nextSlice: " + nextSlice);
        console.log(nextSlice.join() === phrase.join())
        if (nextSlice.join() === phrase.join()) {
          hasMatch = true;
          console.log("hasMatch: " + hasMatch);
          console.log("Match Index: " + (j + beforeSlice.length))
          if (!repeatedPhrases.includes(j + beforeSlice.length))
          {repeatedPhrases.push(j + beforeSlice.length);}
        }
      }
      if (hasMatch) {
        if (!repeatedPhrases.includes(firstInstance)){repeatedPhrases.unshift(firstInstance);}
      }
    }
  }
  return repeatedPhrases;
}

function analyzeTexts (texts, phraseLength) {
  const analysis = [];
  for (let i = 0; i < texts.length; i++) {
    const textObject = {}
    textObject.palindromeBreaks = findPalindromeBreaks(texts[i]);
    textObject.repeatedPhrases = findRepeatedPhrases(texts[i], phraseLength);
    analysis.push(textObject);
  }
  return analysis;
}