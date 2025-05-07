import "../step-2/index";

function hasPassingGrade(score: number) {
  return getGrade(score) !== "F";
}

console.log(hasPassingGrade(96));
console.log(hasPassingGrade(82));
console.log(hasPassingGrade(56));
