import "../step-1/index";
import "../step-2/index";

function studentMsg(totalScores: number[], studentScore: number) {
  const grade = getGrade(studentScore);
  const message = grade === "F" ? "failed" : "passed";

  return (
    "Class average: " +
    getAverage(totalScores) +
    ". Your grade: " +
    grade +
    ". You " +
    message +
    " the course."
  );
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
