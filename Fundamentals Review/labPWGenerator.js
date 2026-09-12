function generatePassword (pwLength) {
  let pw = ``;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const numOfChar = characters.length;

  for (let i = 0; i < pwLength; i++) {
    let randChar = characters[Math.floor(Math.random() * numOfChar)];
    pw += randChar
  }

  return pw;
}

let password  = generatePassword(5);
console.log("Generated password: " + password);