function bombNumbers(sequence, bombNumber) {
  let numberToBomb = bombNumber[0];
  let power = bombNumber[1];

  while (sequence.includes(numberToBomb)) {
    let bombIndex = sequence.indexOf(numberToBomb);
    let startIndex = bombIndex - power;
    let elementsToRemove = power * 2 + 1;

    if (startIndex < 0) {
      elementsToRemove += startIndex;
      startIndex = 0;
    }

    sequence.splice(startIndex, elementsToRemove);
  }

  // let sum = sequence.reduce((total, num) => total + num);
  let sum = 0;

  for (const num of sequence) {
    sum += num;
  }

  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);

/*
if (sequence.includes(numberToBomb)) {
    let bombIndex = sequence.indexOf(numberToBomb); // 3
    let indexToStart = bombIndex - power; // 1
    if (indexToStart < 0) {
      indexToStart = 0; // first Index
    }

    let indexToEnd = bombIndex + power; // 5
    if (indexToEnd >= sequence.length) {
      indexToEnd = sequence.length - 1; // last Index
    }

    for (let i = 0; i <= sequence.length; i++) {
      if (i >= indexToStart && i <= indexToEnd) {
        continue;
      } else {
        result.push(sequence[i]);
      }
    }
  }

  console.log(result.join(' '));
*/