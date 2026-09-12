const consonants = /^[b-df-hj-np-tv-z]+/gi
const vowels = /[aeiou]/gi

function translatePigLatin (str) {
  let translated = ""
  
  if (!vowels.test(str)) {
    translated = str + "ay";
    return translated;
  } else if (!consonants.test(str)) {
    translated = str + "way";
    return translated;
  } else {
    const startCons = str.match(consonants)[0];
    const remainder = str.replace(consonants, "");
    translated = remainder + startCons + "ay"
  }
  
  return translated
}