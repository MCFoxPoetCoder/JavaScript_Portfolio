const questions = [
  {
    category: "Math",
    question: "What is the square root of 81?",
    choices: ["7", "9", "10"],
    answer: "9"
  },
  {
    category: "English",
    question: "Who wrote Farenheit 451?",
    choices: ["Jules Verne", "Ray Bradbury", "Isaac Asimov"],
    answer: "Ray Bradbury"
  },
  {
    category: "Science",
    question: "What does GUT stand for?",
    choices: ["Grand Unifying Theory", "General Artificial Toughness", "Good Understanding Thoughtlessly"],
    answer: "Grand Unifying Theory"
  },
  {
    category: "Math",
    question: "What is 2 ^ 3?",
    choices: ["5", "6", "8"],
    answer: "8"
  },
  {
    category: "English",
    question: "'My love is like a red, red rose' is an example of what figurative technique?",
    choices: ["metaphor", "simile", "personification"],
    answer: "simile"
  },
];

function randomChoice(length) {
  return Math.floor(Math.random() * length)
}

function getRandomQuestion (qPool) {
  let choice = randomChoice(5);
  return qPool[choice];
}

function getRandomComputerChoice (qChoices) {
  let choice = randomChoice(3);
  return qChoices[choice];
}

function getResults (qObject, compChoice) {
  if (compChoice === qObject.answer) {
    return "The computer's choice is correct!"
  } else {return `The computer's choice is wrong. The correct answer is: ${qObject.answer}`}
}

let randomQ = getRandomQuestion(questions);
let compChoice = getRandomComputerChoice (randomQ.choices);

console.log(randomQ.question);
console.log(compChoice);
console.log(getResults (randomQ, compChoice));