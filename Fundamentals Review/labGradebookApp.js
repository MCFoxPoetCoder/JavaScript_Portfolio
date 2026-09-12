function getAverage (scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  let average = total/scores.length;
  return average
}

function getGrade (score) {
  let letterGrade;
  if (score === 100) {
    letterGrade = "A+";
  } else if (score < 100 && score >= 90) {
    letterGrade = "A";
  } else if (score < 90 && score >= 80) {
    letterGrade = "B";
  } else if (score < 80 && score >= 70) {
    letterGrade = "C";
  } else if (score < 70 && score >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return letterGrade;
}

function hasPassingGrade (score) {
  if (getGrade(score) === "F") {
    return false;
  } else {
    return true;
  }
}

function studentMsg (scores, score) {
  const classAve = getAverage(scores);
  const studentGrade = getGrade(score);
  if (hasPassingGrade(score)) {
    return `Class average: ${classAve}. Your grade: ${studentGrade}. You passed the course.`
  } else {
    return `Class average: ${classAve}. Your grade: ${studentGrade}. You failed the course.`
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))