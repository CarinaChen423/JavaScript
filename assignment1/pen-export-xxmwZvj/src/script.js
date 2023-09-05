function gradeCalculator(score) {
  let grade;

  if (score >= 90 && score <= 100) {
    grade = 'A';
  } else if (score >= 80 && score < 90) {
    grade = 'B';
  } else if (score >= 70 && score < 80) {
    grade = 'C';
  } else if (score >= 60 && score < 70) {
    grade = 'D';
  } else if (score >= 0 && score < 60) {
    grade = 'F';
  } else {
    grade = 'Invalid Score';
  }

  return grade;
}

// Test the function with different scores
console.log("Score: 95, Grade: " + gradeCalculator(95));
console.log("Score: 85, Grade: " + gradeCalculator(85));
console.log("Score: 75, Grade: " + gradeCalculator(75));
console.log("Score: 65, Grade: " + gradeCalculator(65));
console.log("Score: 55, Grade: " + gradeCalculator(55));
console.log("Score: -10, Grade: " + gradeCalculator(-10));


