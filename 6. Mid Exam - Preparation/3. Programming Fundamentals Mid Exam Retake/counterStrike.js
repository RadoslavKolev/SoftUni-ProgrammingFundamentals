function counterStrike(input) {
  let energy = Number(input.shift());
  let wonBattles = 0;
  let i = 0;
  let flag = true;

  while (input[i] !== 'End of battle') {
    if (energy < 0) {
      break;
    }

    let distance = Number(input[i]);

    if (energy < distance) {
      console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
      flag = false;
      break;
    }

    wonBattles++;
    energy -= distance;

    if (wonBattles % 3 === 0) {
      energy += wonBattles;
    }

    i++;
  }

  if (flag) {
    console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
  }
}

counterStrike(["100",
  "10",
  "10",
  "10",
  "1",
  "2",
  "3",
  "73",
  "10"
]);

counterStrike(["200",
  "54",
  "14",
  "28",
  "13",
  "End of battle"
]);