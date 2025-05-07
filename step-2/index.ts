function getGrade(score: number) {
  if (score >= 100) {
    return "A++";
  }
  if (score <= 99 && score >= 90) {
    return "A";
  }
  if (score <= 89 && score >= 80) {
    return "B";
  }
  if (score <= 79 && score >= 70) {
    return "C";
  }
  if (score <= 69 && score >= 60) {
    return "D";
  }
  return "F";
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
