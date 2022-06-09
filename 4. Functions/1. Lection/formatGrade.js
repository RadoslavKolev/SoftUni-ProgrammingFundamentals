function formatGrade(grade) {
  let description = "";
  let formattedGrade = grade.toFixed(2);

  if (grade < 3.0) {
    description = "Fail";
    formattedGrade = 2;
  } else if (grade < 3.5) {
    description = "Poor";
  } else if (grade < 4.5) {
    description = "Good";
  } else if (grade < 5.5) {
    description = "Very good";
  } else {
    description = "Excellent";
  }

  console.log(`${description} (${formattedGrade})`);
}

formatGrade(2.90);
