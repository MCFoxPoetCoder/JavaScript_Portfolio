const email = "apple.pie@example.com";
const asterisk = "*";

function maskEmail (email) {
  const atSignSpot = email.indexOf("@");
  const emailMiddle = email.slice(1, atSignSpot - 1);
  const midReplace = asterisk.repeat((atSignSpot - 1) - 1);
  return email.slice(0,1) + midReplace + email.slice(atSignSpot - 1);
}

console.log(maskEmail(email));

//using replace instead

const email = "apple.pie@example.com";
const asterisk = "*";

function maskEmail (email) {
  const atSignSpot = email.indexOf("@");
  const emailMiddle = email.slice(1, atSignSpot - 1);
  const midReplace = asterisk.repeat((atSignSpot - 1) - 1);
  return email.replace(emailMiddle, midReplace);
}

console.log(maskEmail(email));