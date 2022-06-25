function bonusScoringSystem(input) {
  let students = Number(input.shift());
  let lectures = Number(input.shift());
  let additionalBonus = Number(input.shift());
  let maxBonus = 0;
  let maxAttendance = 0;

  for (let i = 0; i < students; i++) {
    let attendance = Number(input[i]);
    let totalBonus = Math.ceil(attendance / lectures * (5 + additionalBonus));

    if (totalBonus > maxBonus) {
      maxBonus = totalBonus;
      maxAttendance = attendance;
    }
  }

  console.log(`Max Bonus: ${maxBonus}.`);
  console.log(`The student has attended ${maxAttendance} lectures.`);
}

bonusScoringSystem([
  '5', '25', '30',
  '12', '19', '24',
  '16', '20'
]);
bonusScoringSystem([
  '10', '30', '14', '8',
  '23', '27', '28', '15',
  '17', '25', '26', '5',
  '18'
]);