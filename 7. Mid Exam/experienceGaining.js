function experienceGaining(input) {
  let targetExperience = Number(input.shift());
  let battles = Number(input.shift());
  let totalExperience = 0;
  let currentBattle = 1;

  for (let i = 0; i < battles; i++) {
    let currentExperience = Number(input[i]);
    if (currentBattle % 3 === 0) {
      currentExperience = currentExperience + (currentExperience * 15 / 100);
    }
    if (currentBattle % 5 === 0) {
      currentExperience = currentExperience - (currentExperience * 10 / 100);
    }
    if (currentBattle % 15 === 0) {
      currentExperience = currentExperience + (currentExperience * 5 / 100);
    }
    totalExperience += currentExperience;
    if (totalExperience >= targetExperience) {
      console.log(`Player successfully collected his needed experience for ${currentBattle} battles.`);
      return;
    }
    currentBattle++;
  }

  let neededExperience = targetExperience - totalExperience;
  console.log(`Player was not able to collect the needed experience, ${neededExperience.toFixed(2)} more needed.`);
}

experienceGaining([
  500,
  5,
  50,
  100,
  200,
  100,
  20
]);

experienceGaining([
  400,
  5,
  50,
  100,
  200,
  100,
  20
]);

experienceGaining([
  500,
  5,
  50,
  100,
  200,
  100,
  30
]);
  