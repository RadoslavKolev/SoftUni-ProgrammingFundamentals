function theLift(input) {
  const WAGON = 4;
  let people = Number(input[0]);
  let lift = input[input.length - 1];
  const liftArr = lift.split(' '); // ['0', '0', '0', '0', '0']
  const fullArr = [];
  let message = '';

  for (let i = 0; i < liftArr.length; i++) {
    let currentLift = Number(liftArr[i]);
    while (currentLift < WAGON) {
      if (people < 1) {
        break;
      }
      people--;
      currentLift++;
    }
    fullArr.push(currentLift);
  }

  let lastSpace = fullArr[fullArr.length - 1];

  if (people === 0 && lastSpace === 4) {
    console.log(fullArr.join(' '));
  } else if (people !== 0) {
    message = `There isn't enough space! ${people} people in a queue!`;
    console.log(message);
    console.log(fullArr.join(' '));
  } else if (people === 0) {
    message = `The lift has empty spots!`;
    console.log(message);
    console.log(fullArr.join(' '));
  }
}

theLift([
  "15",
  "0 0 0 0 0"
]);
// theLift([
//   "12",
//   "0 0 0"
// ]);