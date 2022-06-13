function pointsValidation(input) {
  let x1 = input[0];
  let y1 = input[1];
  let x2 = input[2];
  let y2 = input[3];

  function firstPoint() {
    let checkOne = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    return checkOne;
  }

  function secondPoint() {
    let checkTwo = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    return checkTwo;
  }

  function thirdPoint() {
    let checkThree = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
    return checkThree;
  }

  let checkFirstPoint = firstPoint(input);
  let checkSecondPoint = secondPoint(input);
  let checkThirdPoint = thirdPoint(input);

  if (checkFirstPoint === Math.trunc(checkFirstPoint)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  if (checkSecondPoint === Math.trunc(checkSecondPoint)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  if (checkThirdPoint === Math.trunc(checkThirdPoint)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);