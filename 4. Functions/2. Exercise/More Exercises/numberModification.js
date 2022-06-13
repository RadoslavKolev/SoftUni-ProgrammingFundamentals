function numberModification(number) {
  let modifiedNumber = String(number);
  let len = modifiedNumber.length;

  for (let i = 0; i < len; i++) {
    let average = 0;
    let counter = 0;

    for (const num of modifiedNumber) {
      average += Number(num);
      counter++;
    }

    average /= counter;

    if (average >= 5) {
      break;
    } else {
      modifiedNumber += '9';
    }
  }
  console.log(modifiedNumber);
}

numberModification(101);
numberModification(5835);