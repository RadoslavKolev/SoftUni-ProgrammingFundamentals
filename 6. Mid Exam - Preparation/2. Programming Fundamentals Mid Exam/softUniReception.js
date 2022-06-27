function softUniReception(input) {
  let firstEmployeeEfficiency = Number(input[0]);
  let secondEmployeeEfficiency = Number(input[1]);
  let thirdEmployeeEfficiency = Number(input[2]);
  let students = Number(input[3]);

  let answeredStudentsPerHour = firstEmployeeEfficiency + secondEmployeeEfficiency + thirdEmployeeEfficiency;
  let hours = 0;

  while (students > 0) {
    if (hours % 4 === 0) {
      hours++;
      continue;
    }

    students -= answeredStudentsPerHour;

    if (students <= 0) {
      break;
    }
    hours++;
  }

  console.log(`Time needed: ${hours}h.`);
}

softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);
softUniReception(['3', '2', '5', '40']);