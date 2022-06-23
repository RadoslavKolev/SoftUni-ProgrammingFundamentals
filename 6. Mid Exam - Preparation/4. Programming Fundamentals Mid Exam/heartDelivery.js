function heartDelivery(input) {
  let neighborhood = input.shift().split('@').map(Number);
  let step = 0;

  let i = 0;
  while (input[i] !== 'Love!') {
    let currentAction = input[i].split(' ');
    let currentJump = Number(currentAction[1]);

    step += currentJump;

    if (step >= neighborhood.length) {
      step = 0;
    }

    if (neighborhood[step] <= 0) {
      console.log(`Place ${step} already had Valentine's day.`);
      i++;
      continue;
    }

    neighborhood[step] -= 2;

    if (neighborhood[step] <= 0) {
      console.log(`Place ${step} has Valentine's day.`);
    }
    i++;
  }

  console.log(`Cupid's last position was ${step}.`);
  let sadHouses = neighborhood.filter(el => el > 0);

  if (sadHouses.length === 0) {
    console.log(`Mission was successful.`);
  } else {
    console.log(`Cupid has failed ${sadHouses.length} places.`);
  }
}

heartDelivery([
  "10@10@10@2",
  "Jump 1",
  "Jump 2",
  "Love!"
]);

heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!"
]);