function theLift(input) {
  const WAGON = 4;
  const lift = input.pop().split(' ');
  let people = Number(input[0]);
  let message = '';

  for (let i = 0; i < lift.length; i++) {
    let currentLift = Number(lift[i]);
    while (currentLift < WAGON) {
      if (people < 1) {
        break;
      }
      people--;
      currentLift++;
    }
    lift[i] = currentLift;

    if (people < 1) {
      break;
    }
  }

  if (people !== 0) {
    message = `There isn't enough space! ${people} people in a queue!`;
  } else if (people === 0) {
    message = `The lift has empty spots!`;
  }

  if (message) {
    console.log(message);
  }
  console.log(lift.join(' '));
}

theLift([
  "15",
  "0 0 0 0 0"
]);

theLift([
  "20",
  "0 2 0"
]);